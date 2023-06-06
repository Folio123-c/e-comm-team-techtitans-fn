import React, { useState } from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import "../../Home/Home.scss";
import "../../../components/Content/content.scss";
import OrderContent from "../../../components/Content/OrderContent.jsx";
import OrderDetailCard from "../../../components/Card/OrderDetailCard";
import "./orderdetail.scss";
import AddressCard from "../../../components/Card/AddressCard";
import HorizontalStepper from "../../../components/stepper";

const OrderDetails = () => {
  return (
    <main>
      <Header />

      <OrderContent>
        <div className="order-header">
          <div>
            <h4>OrderID : 343R2R22R2R2</h4>
          </div>
          <div>
            <h4>
              <i className="bx bx-calendar-event"></i> Estimated Delivery: May
              14, 2023
            </h4>
          </div>
          <div>
            <button> Customer Service</button>
          </div>
        </div>
        <div className="order-date">
          <h6>Order_Date: Feb 16,2023</h6>
        </div>
        <HorizontalStepper />
        <OrderDetailCard
          productName="Macbook Air"
          price="$400"
          quantity="3"
          total="$12000"
        />
        <OrderDetailCard
          productName="Macbook Air"
          price="$400"
          quantity="3"
          total="$12000"
        />
        <OrderDetailCard
          productName="Macbook Air"
          price="$400"
          quantity="3"
          total="$12000"
        />
        <div className="order-footer">
          <AddressCard
            title="Payment"
            method="MoMo ***56"
            icon="bx bxl-mastercard"
            buttonText="Invoice"
            buttonIcon="bx bx-file"
          />
          <AddressCard
            title="Delivery"
            icon="bx bxs-map"
            address="Address"
            addressOne="847 San Jose Bridge Apt, 174"
            addressTwo="San Jose, CA 95112"
            addressThree="United States"
          />
        </div>
      </OrderContent>

      <Footer />

      {/* {showStepperModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <VerticalStepper currentStep="2" />
          </div>
        </div>
      )} */}
    </main>
  );
};

export default OrderDetails;
