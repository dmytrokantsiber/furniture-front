import { useEffect } from "react";

import * as yup from "yup";
import { toast } from "react-toastify";
import { SubmitHandler, useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import * as Styles from "./styles";
import Button from "../../common/button/button.component";
import { useAppSelector } from "../../../hooks/redux-hooks";
import { useToastError } from "../../../hooks/useToastError";
import { IUserProfileInfo } from "../../../types/auth.types";
import { useTranslations } from "../../../hooks/useTranslations";
import {
  useLogoutUserMutation,
  useUpdateUserInfoMutation,
} from "../../../store/api/auth/auth.api";

const UserInfo = () => {
  const { user } = useAppSelector((state) => state.authReducer);
  const { t, isKeyOf } = useTranslations();
  const { errorShownRef } = useToastError();

  const [updateUserInfo, { isSuccess: isUpdateSuccess, error: isUpdateError }] =
    useUpdateUserInfoMutation();

  const [logoutUser, { isError: isLogoutError, isSuccess: isLogoutSuccess }] =
    useLogoutUserMutation();

  useEffect(() => {
    if (!errorShownRef.current && isUpdateError) {
      toast.error(t["profile_page.updateUserInfo.error"], {
        position: "bottom-right",
      });
      errorShownRef.current = true;
    }
    if (!errorShownRef.current && isUpdateSuccess) {
      toast.success(t["profile_page.updateUserInfo.success"]);
      errorShownRef.current = true;
    }
  }, [isUpdateSuccess, isUpdateError, t, errorShownRef]);

  useEffect(() => {
    if (!errorShownRef.current && isLogoutSuccess) {
      toast.success(t["logout.success"]);
      errorShownRef.current = true;
    }
    if (!errorShownRef.current && isLogoutError) {
      toast.error(t["logout.error"], {
        position: "bottom-right",
      });
      errorShownRef.current = true;
    }
  }, [isLogoutSuccess, isLogoutError, t, errorShownRef]);

  const schema = yup.object({
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
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserProfileInfo>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IUserProfileInfo> = (data) => {
    errorShownRef.current = false;
    updateUserInfo(data);
  };

  const handleLogout = () => {
    errorShownRef.current = false;
    logoutUser({ user });
  };

  if (!user) {
    return null;
  }

  return (
    <Styles.UserInfoWrapper>
      <Styles.UserInfoForm onSubmit={handleSubmit(onSubmit)}>
        <Styles.InputWrapper>
          <Styles.Title>{t["profile_page.form.name"]}</Styles.Title>
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
          <Styles.Title>{t["profile_page.form.surname"]}</Styles.Title>
          <Styles.Input
            {...register("surname")}
            placeholder={t["cart_page.form.placeholder.surname"]}
            defaultValue={user?.surname || ""}
          />
          {errors.surname?.message && isKeyOf(errors.surname?.message) && (
            <Styles.ErrorText>{t[errors.surname.message]}</Styles.ErrorText>
          )}
        </Styles.InputWrapper>

        <Styles.SubmitButton
          type="submit"
          value={t["profile_page.form.submit"]}
        />
      </Styles.UserInfoForm>
      <Styles.Logout>
        <Button
          type="logout"
          styles={{ width: 180, height: 50 }}
          handleClick={handleLogout}
        />
      </Styles.Logout>
    </Styles.UserInfoWrapper>
  );
};

export default UserInfo;
