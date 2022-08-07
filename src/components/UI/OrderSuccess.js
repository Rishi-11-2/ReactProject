import Modal from "./Modal"
import OrderSuccess from "../../assets/icons/order_success.svg"
const OrderSuccessModal = ({ onClose, orderId }) => {
    return (
        <Modal onClose={onClose}>
            <div className="order-container">
                <div className="order-container--success">
                    <img src={OrderSuccess} alt="success" className="img-fluid" />
                    <div className="message">
                        <h1>Order Sucessfully Placed</h1>
                        <span>Order ID #{orderId}</span>
                    </div>
                </div>
            </div>
        </Modal>
    )//(Math.random().toString(32).slice(2))
}
export default OrderSuccessModal