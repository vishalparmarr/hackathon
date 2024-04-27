import ErrorMessage from "@components/error-message/error";
import React, { useState } from "react";
import { useSelector } from "react-redux";
// internal

const BillingDetails = ({ register, errors }) => {


  const {user} = useSelector(state => state.auth);
  // checkout form list
  function CheckoutFormList({
    col,
    label,
    type = "text",
    placeholder,
    isRequired = true,
    name,
    register,
    error,
    defaultValue,
  }) {
    return (
      <div className={`col-md-${col}`}>
        <div className="checkout-form-list">
          {label && (
            <label>
              {label} {isRequired && <span className="required">*</span>}
            </label>
          )}
          <input
            {...register(`${name}`, {
              required: `${label} is required!`,
            })}
            type={type}
            placeholder={placeholder}
            defaultValue={defaultValue ? defaultValue : ""}
          />
          {error && <ErrorMessage message={error} />}
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="row">
        <CheckoutFormList
          name="firstName"
          col="12"
          label="First Name"
          placeholder="First Name"
          register={register}
          error={errors?.firstName?.message}
          defaultValue={user?.name}
        />
        <CheckoutFormList
          name="lastName"
          col="12"
          label="Last Name"
          placeholder="Last Name"
          register={register}
          error={errors?.lastName?.message}
        />
        <CheckoutFormList
          name="address"
          col="12"
          label="Address"
          placeholder="Street address"
          register={register}
          error={errors?.address?.message}
        />
        <CheckoutFormList
          col="12"
          label="Town / City"
          placeholder="Town / City"
          name="city"
          register={register}
          error={errors?.city?.message}
        />
        <CheckoutFormList
          col="6"
          label="State / County"
          placeholder="State / County"
          name="country"
          register={register}
          error={errors?.country?.message}
        />
        <CheckoutFormList
          col="6"
          label="Postcode / Zip"
          placeholder="Postcode / Zip"
          name="zipCode"
          register={register}
          error={errors?.zipCode?.message}
        />
        <CheckoutFormList
          col="6"
          type="email"
          label="Email Address"
          placeholder="Your Email"
          name="email"
          register={register}
          error={errors?.email?.message}
          defaultValue={user?.email}
        />
        <CheckoutFormList
          name="contact"
          col="6"
          label="Phone"
          placeholder="Phone number"
          register={register}
          error={errors?.contact?.message}
        />

        <div className="order-notes">
          <div className="checkout-form-list">
            <label>Order Notes</label>
            <textarea
              id="checkout-mess"
              cols="30"
              rows="10"
              placeholder="Notes about your order, e.g. special notes for delivery."
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
};

export default BillingDetails;
