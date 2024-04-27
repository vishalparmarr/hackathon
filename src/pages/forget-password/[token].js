import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
// internal
import ErrorMessage from "@components/error-message/error";
import { notifyError, notifySuccess, ToastContainer } from "@utils/toast";
import Shapes from "@components/login-register/shapes";
import Lock from "@svg/lock";
import EyeCut from "@svg/eye-cut";
import { useConfirmForgotPasswordMutation } from "src/redux/features/auth/authApi";

// schema
const schema = Yup.object().shape({
  password: Yup.string().required().min(6).label("Password"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

const ForgotPassword = ({ params }) => {
  const token = params.token;
  const [showPass, setShowPass] = useState(false);
  const [showConPass, setShowConPass] = useState(false);
  const [confirmForgotPassword, {}] = useConfirmForgotPasswordMutation();
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
    console.log(data);
    confirmForgotPassword({
      password: data.password,
      token,
    }).then((result) => {
      console.log(result?.data?.message);
      console.log(result?.error?.data?.error);
      if(result?.error){
        notifyError(result?.error?.data?.error)
      }
      else {
        notifySuccess(result?.data?.message);
      }
    });
    reset();
  };

  return (
    <>
    <ToastContainer/>
    <section
      className="login__area d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <div className="container">
        <div className="login__inner p-relative z-index-1">
          <Shapes />
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8 col-md-10">
              <div className="login__wrapper">
                <div className="login__top mb-30 text-center">
                  <h3 className="login__title">Forget Password</h3>
                  <p>Reset Your Password</p>
                </div>
                <div className="login__form">
                  {/* form start */}
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="login__input-wrapper">
                      <div className="login__input-item">
                        <div className="login__input-item-inner p-relative">
                          <div className="login__input">
                            <input
                              {...register("password")}
                              name="password"
                              type={showPass ? "text" : "password"}
                              placeholder="Password"
                              id="password"
                            />
                            <span>
                              <Lock />
                            </span>
                          </div>
                          <span
                            className="login-input-eye"
                            onClick={() => setShowPass(!showPass)}
                          >
                            {showPass ? (
                              <i className="fa-regular fa-eye"></i>
                            ) : (
                              <EyeCut />
                            )}
                          </span>
                          {/* error msg start */}
                          <ErrorMessage message={errors.password?.message} />
                          {/* error msg end */}
                        </div>
                      </div>

                      <div className="login__input-item">
                        <div className="login__input-item-inner p-relative">
                          <div className="login__input">
                            <input
                              {...register("confirmPassword")}
                              name="confirmPassword"
                              type={showConPass ? "text" : "password"}
                              placeholder="Confirm Password"
                              id="confirmPassword"
                            />
                            <span>
                              <Lock />
                            </span>
                          </div>
                          <span
                            className="login-input-eye"
                            onClick={() => setShowConPass(!showConPass)}
                          >
                            {showConPass ? (
                              <i className="fa-regular fa-eye"></i>
                            ) : (
                              <EyeCut />
                            )}
                          </span>
                        </div>
                        <ErrorMessage
                          message={errors.confirmPassword?.message}
                        />
                      </div>
                    </div>

                    <div className="login__btn">
                      <button type="submit" className="tp-btn w-100">
                        Confirm password
                      </button>
                    </div>
                  </form>
                  {/* form end */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export const getServerSideProps = async ({ params }) => {
  return {
    props: { params },
  };
};

export default ForgotPassword;
