import { useNavigate } from "react-router-dom";
import { useState } from "react";
import EditStatus from "../editComponent/EditOrderStatus";

export const COLUMNS = [
  {
    Header: "No.",
    accessor: "id",
    Cell: ({ row }) => row.index + 1,
  },
  {
    Header: "Customer",
    accessor: "customer",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Product",
    accessor: "product",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Status",
    accessor: "status",
    Cell: ({ value }) => {
      let statusColor = "";

      switch (value) {
        case "shipped":
          statusColor = "#7A89E9"; // Blue
          break;
        case "delivered":
          statusColor = "#28a745"; // Green
          break;
        case "cancelled":
          statusColor = "#FF0000"; // Red
          break;
        case "refunded":
          statusColor = "#FFA500"; // Orange
          break;
        case "onhold":
          statusColor = "#FFC0CB"; // Pink
          break;
        default:
          statusColor = "#000000"; // Black (or fallback color)
      }

      return (
        <div
          style={{
            color: statusColor,
            fontWeight: "600",
            padding: "5px",
            textTransform: "capitalize",
          }}
        >
          {value}
        </div>
      );
    },
  },
  {
    Header: "Action",
    Cell: ({ row }) => {
      const [showModal, setShowModal] = useState(false);
      const { status, id } = row.original;
      const navigate = useNavigate();
      const openModal = (id) => {
        setShowModal(true);
      };
      const closeModal = () => {
        setShowModal(false);
        navigate(`/listorders`);
      };

      return (
        <div className="action">
          <i className="bx bxs-edit" onClick={() => openModal(id)}></i>
          {showModal && (
            <EditStatus id={id} status={status} closeModal={closeModal} />
          )}
        </div>
      );
    },
  },
];
