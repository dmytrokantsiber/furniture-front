import { useEffect } from "react";

import * as yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import * as Styles from "../styles";
import { phoneRegExp } from "../../../utils/constants";
import { ISignUpInputs } from "../../../types/auth.types";
import { useToastError } from "../../../hooks/useToastError";
import { useTranslations } from "../../../hooks/useTranslations";
import { useRegisterUserMutation } from "../../../store/api/auth/auth.api";

const schema = yup.object({
  email: yup
    .string()
    .email("signup_page.errors.isEmail")
    .required("signup_page.errors.required"),
  name: yup
    .string()
    .required("signup_page.errors.required")
    .min(1, "signup_page.errors.minName")
    .max(32, "signup_page.errors.maxName"),

  surname: yup
    .string()
    .required("signup_page.errors.required")
    .min(1, "signup_page.errors.minName")
    .max(32, "signup_page.errors.maxName"),
  password: yup
    .string()
    .required("signup_page.errors.required")
    .min(8, "signup_page.errors.minPassword")
    .max(32, "signup_page.errors.minPassword"),
  confirmPassword: yup
    .string()
    .required("signup_page.errors.required")
    .oneOf([yup.ref("password")], "signup_page.errors.passwordsMatch"),
  phone: yup
    .string()
    .matches(phoneRegExp, "errors.valid_phone")
    .required("signin_page.errors.required"),
});

const SignUpForm = () => {
  const navigate = useNavigate();
  const { t, isKeyOf } = useTranslations();
  const [registerUser, { isSuccess, error }] = useRegisterUserMutation();

  const { toastError, errorShownRef } = useToastError();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUpInputs>({ resolver: yupResolver(schema) });

  useEffect(() => {
    if (isSuccess) {
      toast.success(t["signup_page.toast.success"]);
      navigate("/login");
    }
  }, [t, isSuccess, navigate]);

  useEffect(() => {
    if (error && !errorShownRef.current) {
      toastError(error);
      errorShownRef.current = true;
    }
  }, [error, toastError, errorShownRef]);

  const onSubmit: SubmitHandler<ISignUpInputs> = (data) => {
    errorShownRef.current = false;
    registerUser(data);
  };

  return (
    <Styles.AuthFormWrapper>
      <Styles.Title>{t["signup_page.text.one"]}</Styles.Title>
      <Styles.Description>{t["signup_page.text.two"]}</Styles.Description>
      <Styles.AuthForm onSubmit={handleSubmit(onSubmit)}>
        <Styles.Input
          placeholder={t["signup_page.text.enter-email"]}
          {...register("email")}
        />
        {errors.email?.message && isKeyOf(errors.email?.message) && (
          <Styles.ErrorText>{t[errors.email?.message]}</Styles.ErrorText>
        )}
        <Styles.Input
          placeholder={t["signup_page.text.enter-name"]}
          {...register("name")}
        />
        {errors.name?.message && isKeyOf(errors.name?.message) && (
          <Styles.ErrorText>{t[errors.name?.message]}</Styles.ErrorText>
        )}
        <Styles.Input
          placeholder={t["signup_page.text.enter-surname"]}
          {...register("surname")}
        />
        {errors.surname?.message && isKeyOf(errors.surname?.message) && (
          <Styles.ErrorText>{t[errors.surname?.message]}</Styles.ErrorText>
        )}
        <Styles.Input
          type="password"
          placeholder={t["signup_page.text.enter-password"]}
          {...register("password")}
        />
        {errors.password?.message && isKeyOf(errors.password?.message) && (
          <Styles.ErrorText>{t[errors.password?.message]}</Styles.ErrorText>
        )}
        <Styles.Input
          type="password"
          placeholder={t["signup_page.text.confirm-password"]}
          {...register("confirmPassword")}
        />
        {errors.confirmPassword?.message &&
          isKeyOf(errors.confirmPassword?.message) && (
            <Styles.ErrorText>
              {t[errors.confirmPassword?.message]}
            </Styles.ErrorText>
          )}
        <Styles.PhoneInput
          mask="+380 99-999-99-99"
          maskChar=" "
          placeholder={t["signup_page.text.phone"]}
          {...register("phone")}
        />
        {errors.phone?.message && isKeyOf(errors.phone?.message) && (
          <Styles.ErrorText>{t[errors.phone?.message]}</Styles.ErrorText>
        )}
        <Styles.Button type="submit" value={t["signup_page.text.sign-up"]} />
      </Styles.AuthForm>
      <Styles.RedirectLink to={`/login`}>
        {t["signup_page.text.alredy-have-account"]}
      </Styles.RedirectLink>
    </Styles.AuthFormWrapper>
  );
};

export default SignUpForm;
