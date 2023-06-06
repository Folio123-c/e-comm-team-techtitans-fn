import PropTypes from "prop-types";
import "./orderDetail.scss";

function OrderDetailCard({ productName, price, quantity, total }) {
  return (
    <div className="card-container-detail">
      <div className="img-detail">
        <img
          src="https://images.unsplash.com/photo-1571059750558-3d869522f707?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
          alt=""
        />
      </div>
      <div className="content-body">
        <div className="detail-one">
          <p>{productName}</p>
          <p>Price: {price}</p>
        </div>
        <div className="detail-two">
          <p>Total: {total}</p>
          <p>Qty: {quantity}</p>
        </div>
      </div>
    </div>
  );
}

OrderDetailCard.propTypes = {
  productName: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired,
};

export default OrderDetailCard;
