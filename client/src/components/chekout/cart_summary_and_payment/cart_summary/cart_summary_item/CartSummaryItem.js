import "./cart_summary_item.css"

const CartSummaryItem = ({item}) => {
  return (
   <tr className="summary-item">
    <td>{item.name}</td>
    <td>${item.price}</td>
    <td>{item.quantity}</td>
   </tr>
  )
}

export default CartSummaryItem