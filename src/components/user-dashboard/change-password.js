import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import * as Yup from "yup";
// internal
import { useChangePasswordMutation } from "src/redux/features/auth/authApi";
import ErrorMessage from "@components/error-message/error";
import { notifyError, notifySuccess } from "@utils/toast";

const schema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
  newPassword: Yup.string().required().min(6).label("New Password"),
  confirmPassword: Yup.string()
     .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
});

const ChangePassword = () => {
  const { user } = useSelector((state) => state.auth);
  const [changePassword, {}] = useChangePasswordMutation();
  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  // on submit
  const onSubmit = (data) => {
    changePassword({
      email: user?.email,
      password: data.password,
      newPassword: data.newPassword,
    }).then((result) => {
      console.log(result)
      if (result?.error) {
        notifyError(result?.error?.data?.message)
      }
      else {
        notifySuccess(result?.data?.message)
      }
    });
    reset();
  };
  return (
    <div className="profile__password">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-xxl-12">
            <div className="profile__input-box">
              <h4>Email Address</h4>
              <div className="profile__input">
                <input
                  {...register("email", { required: `Email is required!` })}
                  type="email"
                  defaultValue={user?.email}
                  placeholder="Enter Email Address"
                />
                <ErrorMessage message={errors.email?.message} />
              </div>
            </div>
          </div>
          <div className="col-xxl-12">
            <div className="profile__input-box">
              <h4>Current Password</h4>
              <div className="profile__input">
                <input
                  {...register("password", {
                    required: `Password is required!`,
                  })}
                  type="text"
                  placeholder="Enter current password"
                />
                <ErrorMessage message={errors.password?.message} />
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-md-6">
            <div className="profile__input-box">
              <h4>New Password</h4>
              <div className="profile__input">
                <input
                  {...register("newPassword", {
                    required: `New Password is required!`,
                  })}
                  type="text"
                  placeholder="Enter new password"
                />
                <ErrorMessage message={errors.password?.newPassword} />
              </div>
            </div>
          </div>
          {/* confirm password */}
          <div className="col-xxl-6 col-md-6">
            <div className="profile__input-box">
              <h4>Confirm Password</h4>
              <div className="profile__input">
                <input
                  {...register("confirmPassword")}
                  type="text"
                  placeholder="Confirm Password"
                />
                <ErrorMessage message={errors.confirmPassword?.message} />
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-md-6">
            <div className="profile__btn">
              <button type="submit" className="tp-btn-3">
                Update
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
