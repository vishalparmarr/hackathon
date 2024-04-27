import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import * as Yup from "yup";
// internal
import { EmailTwo, Location, MobileTwo, UserTwo } from "@svg/index";
import { useUpdateProfileMutation } from "src/redux/features/auth/authApi";
import { notifyError, notifySuccess } from "@utils/toast";
import ErrorMessage from "@components/error-message/error";

// yup  schema
const schema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  phone: Yup.string().required().min(11).label("Phone"),
  address: Yup.string().required().label("Address"),
  bio: Yup.string().required().min(20).label("Bio"),
});

const UpdateUser = () => {
  const [bioText, setBioText] = useState("Hi there, this is my bio...");
  const { user } = useSelector((state) => state.auth);

  const [updateProfile, {}] = useUpdateProfileMutation();
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
    updateProfile({
      id:user?._id,
      name:data.name,
      email:data.email,
      phone:data.phone,
      address:data.address,
      bio:data.bio,
    }).then((result) => {
      console.log(result);
      if(result?.error){
        notifyError(result?.error?.data?.message);
      }
      else {
        notifySuccess(result?.data?.message);
      }
    })
    reset();
  };

  return (
    <div className="profile__info">
      <h3 className="profile__info-title">Personal Details</h3>
      <div className="profile__info-content">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-xxl-6 col-md-6">
              <div className="profile__input-box">
                <div className="profile__input">
                  <input
                    {...register("name", { required: `Name is required!` })}
                    type="text"
                    placeholder="Enter your username"
                    defaultValue={user?.name}
                  />
                  <span>
                    <UserTwo />
                  </span>
                  <ErrorMessage message={errors.name?.message} />
                </div>
              </div>
            </div>

            <div className="col-xxl-6 col-md-6">
              <div className="profile__input-box">
                <div className="profile__input">
                  <input
                    {...register("email", { required: `Email is required!` })}
                    type="email"
                    placeholder="Enter your email"
                    defaultValue={user?.email}
                  />
                  <span>
                    <EmailTwo />
                  </span>
                  <ErrorMessage message={errors.email?.message} />
                </div>
              </div>
            </div>

            <div className="col-xxl-12">
              <div className="profile__input-box">
                <div className="profile__input">
                  <input
                    {...register("phone", { required: true })}
                    type="text"
                    placeholder="Enter your number"
                    defaultValue="0123 456 7889"
                  />
                  <span>
                    <MobileTwo />
                  </span>
                  <ErrorMessage message={errors.phone?.message} />
                </div>
              </div>
            </div>

            <div className="col-xxl-12">
              <div className="profile__input-box">
                <div className="profile__input">
                  <input
                    {...register("address", { required: true })}
                    type="text"
                    placeholder="Enter your address"
                    defaultValue="3304 Randall Drive"
                  />
                  <span>
                    <Location />
                  </span>
                  <ErrorMessage message={errors.address?.message} />
                </div>
              </div>
            </div>

            <div className="col-xxl-12">
              <div className="profile__input-box">
                <div className="profile__input">
                  <textarea
                    {...register("bio", { required: true })}
                    placeholder="Enter your bio"
                    value={bioText}
                    onChange={(e) => setBioText(e.target.value)}
                  >
                    Hi there, this is my bio...
                  </textarea>
                  <ErrorMessage message={errors.bio?.message} />
                </div>
              </div>
            </div>
            <div className="col-xxl-12">
              <div className="profile__btn">
                <button type="submit" className="tp-btn">
                  Update Profile
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
