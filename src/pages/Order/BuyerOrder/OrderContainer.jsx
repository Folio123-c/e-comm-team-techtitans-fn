import "../../../styles/order.scss";
import OrderCard from "../../../components/Card/OrderCard";
function OrderContainer() {
  return (
    <div className="order-container">
      <menu>
        <li>All</li>
      </menu>
      <OrderCard
        sellerName="John Jack"
        productName="MacBook"
        status="Pending"
        price="1000"
        quantity="1"
      />
      <OrderCard
        sellerName="John Jack"
        productName="MacBook"
        status="Pending"
        price="1000"
        quantity="1"
      />
    </div>
  );
}

export default OrderContainer;
