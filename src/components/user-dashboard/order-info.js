import React from "react";
import {Box, Delivery, Processing, Truck} from "@svg/index";
import { useSelector } from "react-redux";

function SingleOrderInfo({ icon, info, title }) {
  return (
    <div className="col-md-3 col-sm-6">
      <div className="profile__main-info-item">
        <div className="profile__main-info-icon">
          <span className="total-order">
            <span className="profile-icon-count profile-download">{info}</span>
            {icon}
          </span>
        </div>
        <h4 className="profile__main-info-title">{title}</h4>
      </div>
    </div>
  );
}

const OrderInfo = ({ orderData }) => {
  const {user} = useSelector(state => state.auth);
  return (
    <div className="profile__main">
      <div className="profile__main-top pb-80">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="profile__main-inner d-flex flex-wrap align-items-center">
              <div className="profile__main-content">
                <h4 className="profile__main-title text-capitalize">Welcome {user?.name}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="profile__main-info">
        <div className="row gx-3">
          <SingleOrderInfo
            info={orderData?.totalDoc}
            icon={<Box/>}
            title="Total Order"
          />
          <SingleOrderInfo
            info={orderData?.pending}
            icon={<Processing/>}
            title="Pending Order"
          />
          <SingleOrderInfo
            info={orderData?.processing}
            icon={<Truck/>}
            title="Processing Order"
          />
          <SingleOrderInfo
            info={orderData?.delivered}
            icon={<Delivery/>}
            title="Complete Order"
          />
        </div>
      </div>
    </div>
  );
};

export default OrderInfo;
