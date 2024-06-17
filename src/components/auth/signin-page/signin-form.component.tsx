import { useEffect } from "react";

import * as yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import * as Styles from "../styles";
import { ISignInInputs } from "../../../types/auth.types";
import { useToastError } from "../../../hooks/useToastError";
import { useTranslations } from "../../../hooks/useTranslations";
import { useLoginUserMutation } from "../../../store/api/auth/auth.api";

const SignInForm = () => {
  const { t, isKeyOf } = useTranslations();
  const navigate = useNavigate();
  const [loginUser, { isSuccess, error }] = useLoginUserMutation();
  const { toastError, errorShownRef } = useToastError();

  useEffect(() => {
    if (isSuccess) {
      toast.success(t["signin_page.toast.success"]);
      navigate("/");
    }
  }, [navigate, isSuccess, t]);

  useEffect(() => {
    if (error && !errorShownRef.current) {
      toastError(error);
      errorShownRef.current = true;
    }
  }, [error, toastError, errorShownRef]);

  const schema = yup.object({
    email: yup
      .string()
      .email("signin_page.errors.isEmail")
      .required("signin_page.errors.required"),
    password: yup.string().required("signin_page.errors.required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignInInputs>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<ISignInInputs> = (data) => {
    errorShownRef.current = false;
    loginUser(data);
  };

  return (
    <Styles.AuthFormWrapper>
      <Styles.Title>{t["signin_page.text.one"]}</Styles.Title>
      <Styles.Description>{t["signin_page.text.two"]}</Styles.Description>
      <Styles.AuthForm onSubmit={handleSubmit(onSubmit)}>
        <Styles.Input
          {...register("email")}
          placeholder={t["signin_page.text.enter-email"]}
        />
        {errors.email?.message && isKeyOf(errors.email?.message) && (
          <Styles.ErrorText>{t[errors.email?.message]}</Styles.ErrorText>
        )}
        <Styles.Input
          type="password"
          {...register("password")}
          placeholder={t["signin_page.text.enter-password"]}
        />
        {errors.password?.message && isKeyOf(errors.password?.message) && (
          <Styles.ErrorText>{t[errors.password?.message]}</Styles.ErrorText>
        )}
        <Styles.Button type="submit" value={t["signin_page.text.sign-in"]} />
      </Styles.AuthForm>
      <Styles.RedirectLink to={`/registration`}>
        {t["signin_page.text.create-new-account"]}
      </Styles.RedirectLink>
    </Styles.AuthFormWrapper>
  );
};

export default SignInForm;
