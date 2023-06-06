import { useState } from "react";
import "./editModal.scss";
import { useDispatch } from "react-redux";
import updateOrderStatus from "../../Redux/Features/Order/updateOrderStatus.slice";
import { getAllSellerOrder } from "../../Redux/Features/Order/sellerOrder.slice";
import { message } from "antd";

const EditModal = ({ orderId, closeModal }) => {
  const dispatch = useDispatch();

  const [updatedStatus, setUpdatedStatus] = useState('');

  const handleStatusChange = (e) => {
    setUpdatedStatus(e.target.value);
  };

  console.log("orderId", orderId);
  console.log("updatedStatus", updatedStatus);
  const handleSave = async (e) => {
    e.preventDefault();
    try {
      await dispatch(
        updateOrderStatus({
          status: updatedStatus,
          id: orderId,
        })
      );
      await dispatch(getAllSellerOrder()); // Fetch all users again
      message.success("Order updated successfully");
    } catch (error) {
      // Handle error
      message.error("Failed to update order status");
    }

    closeModal();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Order Status</h2>
        <div className="form-group">
          <label>Order Status</label>
          <select value={updatedStatus} onChange={handleStatusChange}>
            <option value="shipped">shipped</option>
            <option value="delivered">delivered</option>
            <option value="cancelled">cancelled</option>
            <option value="refunded">refunded</option>
            <option value="onhold">onhold</option>
            <option value="returned">returned</option>
          </select>
        </div>
        <div className="buttons">
          <button className="save-btn" onClick={handleSave}>
            Save
          </button>
          <button className="cancel-btn" onClick={closeModal}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
