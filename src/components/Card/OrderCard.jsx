import PropTypes from "prop-types";
import "../../styles/order.scss";

function OrderCard({ sellerName, productName, status, price, quantity }) {
  return (
    <div className="card-container">
      <div className="card-header">
        <div className="seller-name">
          <p>Seller: {sellerName}</p>
        </div>
        <div className="order-date">
          <p>Estimated delivery: May 14, 2023</p>
        </div>
        <div className="order-status">
          <p>
            Order Status: <span>{status}</span>
          </p>
        </div>
      </div>
      <div className="card-body">
        <img
          src="https://images.unsplash.com/photo-1526657782461-9fe13402a841?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=692&q=80"
          alt=""
        />
        <div className="card-body-content">
          <h3>{productName}</h3>
          <p>Price: {price}</p>
          <p>Quantity: {quantity}</p>
        </div>
      </div>
    </div>
  );
}

OrderCard.propTypes = {
  sellerName: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
};
export default OrderCard;
