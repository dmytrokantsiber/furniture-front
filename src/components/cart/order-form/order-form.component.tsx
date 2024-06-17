import { memo, useEffect, useState } from "react";

import * as yup from "yup";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import * as Styles from "./styles";
import Button from "../../common/button/button.component";
import { useAppSelector } from "../../../hooks/redux-hooks";
import { useToastError } from "../../../hooks/useToastError";
import { IOrderFormInputs } from "../../../types/cart.types";
import { useTranslations } from "../../../hooks/useTranslations";
import { useAddOrderMutation } from "../../../store/api/orders/orders.api";
import { DEFAULT_DELIVERY_METHOD, phoneRegExp } from "../../../utils/constants";

const OrderForm = () => {
  const { t, isKeyOf } = useTranslations();
  const { errorShownRef } = useToastError();
  const { isAuth, user } = useAppSelector((state) => state.authReducer);
  const { items, totalItemsAmount, totalPrice } = useAppSelector(
    (state) => state.cartReducer
  );
  const [deliveryMethod, setDeliveryMethod] = useState<string>(
    DEFAULT_DELIVERY_METHOD
  );

  const [addOrder, { isSuccess, isError }] = useAddOrderMutation();

  useEffect(() => {
    if (isError && !errorShownRef.current) {
      toast.error(t["cart_page.form.error"], {
        position: "bottom-right",
      });
      errorShownRef.current = true;
    }
    if (isSuccess && !errorShownRef.current) {
      toast.success(t["cart_page.form.success"], {
        position: "bottom-right",
      });
      errorShownRef.current = true;
    }
  }, [isError, errorShownRef, t, isSuccess]);

  const schema = yup.object({
    name: yup.string().required("signin_page.errors.required"),

    surname: yup.string().required("signin_page.errors.required"),
    phone: yup
      .string()
      .matches(phoneRegExp, "errors.valid_phone")
      .required("signin_page.errors.required"),
    email: yup
      .string()
      .email("signin_page.errors.isEmail")
      .required("signin_page.errors.required"),
    deliveryMethod: yup.string().required("signin_page.errors.required"),
    deliveryAddressStreet: yup.string().required("signin_page.errors.required"),
    deliveryAddressHouse: yup.string().required("signin_page.errors.required"),
    deliveryAddressEntrance: yup.string().nullable(),
    deliveryAddressAppartments: yup.string().nullable(),
    paymentMethod: yup.string().required("signin_page.errors.required"),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IOrderFormInputs>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<IOrderFormInputs> = (data) => {
    errorShownRef.current = false;
    if (!isAuth) {
      toast.success("Замовлення успішно прийнято");
    }
    if (isAuth) {
      addOrder({
        user: user.id,
        clientInfo: data,
        items,
        totalPrice,
        totalItemsAmount,
        status: 1,
      });
    }
  };

  const handleChange = (e: any) => {
    setDeliveryMethod(e.target.value);
    if (e.target.value === "pickup") {
      setValue("deliveryAddressStreet", "DUMMY_STREET");
      setValue("deliveryAddressHouse", "DUMMY_HOUSE");
      setValue("deliveryAddressEntrance", "");
      setValue("deliveryAddressAppartments", "");
    }
    if (e.target.value === "address") {
      setValue("deliveryAddressStreet", "");
      setValue("deliveryAddressHouse", "");
    }
  };

  return (
    <Styles.OrderFormWrapper>
      <Styles.OrderForm onSubmit={handleSubmit(onSubmit)}>
        <Styles.OrderFormItem>
          <Styles.Title>{t["cart_page.form.customer"]}</Styles.Title>
          <Styles.Fields>
            <Styles.InputWrapper>
              <Styles.Input
                {...register("name")}
                placeholder={t["cart_page.form.placeholder.name"]}
                defaultValue={user?.name || ""}
              />
              {errors.name?.message && isKeyOf(errors.name?.message) && (
                <Styles.ErrorText>{t[errors.name.message]}</Styles.ErrorText>
              )}
            </Styles.InputWrapper>
            <Styles.InputWrapper>
              <Styles.Input
                {...register("surname")}
                placeholder={t["cart_page.form.placeholder.surname"]}
                defaultValue={user?.surname || ""}
              />
              {errors.surname?.message && isKeyOf(errors.surname?.message) && (
                <Styles.ErrorText>{t[errors.surname.message]}</Styles.ErrorText>
              )}
            </Styles.InputWrapper>
            <Styles.InputWrapper>
              <Styles.PhoneInput
                mask="+380 99-999-99-99"
                maskChar=" "
                defaultValue={user?.phone || ""}
                {...register("phone")}
                placeholder={t["cart_page.form.placeholder.phone"]}
              />
              {errors.phone?.message && isKeyOf(errors.phone?.message) && (
                <Styles.ErrorText>{t[errors.phone.message]}</Styles.ErrorText>
              )}
            </Styles.InputWrapper>
            <Styles.InputWrapper>
              <Styles.Input
                {...register("email")}
                placeholder={t["cart_page.form.placeholder.email"]}
                defaultValue={user?.email || ""}
              />
              {errors.email?.message && isKeyOf(errors.email?.message) && (
                <Styles.ErrorText>{t[errors.email.message]}</Styles.ErrorText>
              )}
            </Styles.InputWrapper>
          </Styles.Fields>
        </Styles.OrderFormItem>
        <Styles.Delivery>
          <Styles.OrderFormItem>
            <Styles.Title>{t["cart_page.form.deliveryMethod"]}</Styles.Title>
            <Styles.RadioButton>
              <input
                type="radio"
                id="address"
                value="address"
                {...register("deliveryMethod")}
                defaultChecked={true}
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="address">
                {t["cart_page.form.select.deliveryMethod.address"]}
              </label>
            </Styles.RadioButton>
            <Styles.RadioButton>
              <input
                type="radio"
                id="pickup"
                value="pickup"
                {...register("deliveryMethod")}
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="pickup">
                {t["cart_page.form.select.deliveryMethod.pickup"]}
              </label>
            </Styles.RadioButton>
          </Styles.OrderFormItem>
          {deliveryMethod === "address" ? (
            <Styles.OrderFormItem>
              <Styles.Title>{t["cart_page.form.deliveryAddress"]}</Styles.Title>
              <Styles.Fields>
                <Styles.InputWrapper>
                  <Styles.Input
                    {...register("deliveryAddressStreet")}
                    placeholder={
                      t["cart_page.form.placeholder.deliveryAddressStreet"]
                    }
                  />
                  {errors.deliveryAddressStreet?.message &&
                    isKeyOf(errors.deliveryAddressStreet?.message) && (
                      <Styles.ErrorText>
                        {t[errors.deliveryAddressStreet.message]}
                      </Styles.ErrorText>
                    )}
                </Styles.InputWrapper>
                <Styles.InputWrapper>
                  <Styles.Input
                    {...register("deliveryAddressHouse")}
                    placeholder={
                      t["cart_page.form.placeholder.deliveryAddressHouse"]
                    }
                  />
                  {errors.deliveryAddressHouse?.message &&
                    isKeyOf(errors.deliveryAddressHouse?.message) && (
                      <Styles.ErrorText>
                        {t[errors.deliveryAddressHouse.message]}
                      </Styles.ErrorText>
                    )}
                </Styles.InputWrapper>
                <Styles.InputWrapper>
                  <Styles.Input
                    {...register("deliveryAddressEntrance")}
                    placeholder={
                      t["cart_page.form.placeholder.deliveryAddressEntrance"]
                    }
                  />
                  {errors.deliveryAddressEntrance?.message &&
                    isKeyOf(errors.deliveryAddressEntrance?.message) && (
                      <Styles.ErrorText>
                        {t[errors.deliveryAddressEntrance.message]}
                      </Styles.ErrorText>
                    )}
                </Styles.InputWrapper>
                <Styles.InputWrapper>
                  <Styles.Input
                    {...register("deliveryAddressAppartments")}
                    placeholder={
                      t["cart_page.form.placeholder.deliveryAddressAppartments"]
                    }
                  />
                  {errors.deliveryAddressAppartments?.message &&
                    isKeyOf(errors.deliveryAddressAppartments?.message) && (
                      <Styles.ErrorText>
                        {t[errors.deliveryAddressAppartments.message]}
                      </Styles.ErrorText>
                    )}
                </Styles.InputWrapper>
              </Styles.Fields>
            </Styles.OrderFormItem>
          ) : null}
        </Styles.Delivery>
        <Styles.OrderFormItem>
          <Styles.Title>{t["cart_page.form.payment"]}</Styles.Title>
          <Styles.RadioButton>
            <input
              type="radio"
              id="cash"
              value="cash"
              {...register("paymentMethod")}
              defaultChecked={true}
            />
            <label htmlFor="cash">
              {t["cart_page.form.select.paymentMethod.cash"]}
            </label>
          </Styles.RadioButton>
          <Styles.RadioButton>
            <input
              type="radio"
              id="online"
              value="online"
              {...register("paymentMethod")}
            />
            <label htmlFor="online">
              {t["cart_page.form.select.paymentMethod.online"]}
            </label>
          </Styles.RadioButton>
        </Styles.OrderFormItem>
        <Styles.Buttons>
          <Link to={"/"}>
            <Button type="backToMain" styles={{ width: 280, height: 50 }} />
          </Link>
          <Styles.SubmitButton
            type="submit"
            value={t["cart_page.form.submit"]}
          />
        </Styles.Buttons>
      </Styles.OrderForm>
    </Styles.OrderFormWrapper>
  );
};

export default memo(OrderForm);
