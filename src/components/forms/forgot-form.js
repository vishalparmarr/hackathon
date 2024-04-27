import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
// internal
import Email from "@svg/email";
import { useResetPasswordMutation } from "src/redux/features/auth/authApi";
import ErrorMessage from "@components/error-message/error";
import { notifyError, notifySuccess } from "@utils/toast";

const schema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
});

const ForgotForm = () => {
  const [resetPassword, {}] = useResetPasswordMutation();
  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  // onSubmit
  const onSubmit = (data) => {
    resetPassword({
      verifyEmail: data.email,
    }).then((result) => {
      console.log(result);
      if(result?.error){
        notifyError(result?.error?.data?.message)
      }
      else {
        notifySuccess(result.data?.message);
      }
    });
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="login__input-wrapper">
        <div className="login__input-item">
          <div className="login__input">
            <input {...register("email")} type="email" placeholder="Email" />
            <span>
              <Email />
            </span>
          </div>
          <ErrorMessage message={errors.email?.message} />
        </div>
      </div>
      <div className="login__btn">
        <button type="submit" className="tp-btn w-100">
          Send Request
        </button>
      </div>
    </form>
  );
};

export default ForgotForm;
