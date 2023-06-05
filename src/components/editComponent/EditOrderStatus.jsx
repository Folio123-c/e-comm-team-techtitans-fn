import { useState } from "react";
import "./editModal.scss";
import { useDispatch } from "react-redux";
import { addRoles } from "../../Redux/Features/User/viewUser/setRole.slice";
import { getAllUsers } from "../../Redux/Features/User/viewUser/view.slice";
import { message } from "antd";

const EditModal = ({ status, id, closeModal }) => {
  const dispatch = useDispatch();

  const [updatedStatus, setUpdatedStatus] = useState(status);

  const handleStatusChange = (e) => {
    setUpdatedStatus(e.target.value);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      message.success("Order Status updated successfully");
    } catch (error) {
      // Handle error
      message.error("Failed to update user");
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
