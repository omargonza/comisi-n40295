import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const Cart = () => {

    const {cart,removeItem,clear,totalPrice} = useContext (CartContext)

    return (
        <div className="flextable">
            <div className="flextable-row flextable-header">
                <p className="flextable-row--cell"> ID </p>
                <p className="flextable-row--cell-lg"> Product </p>
                <p className="flextable-row--cell-sm"> Price</p>
                <p className="flextable-row--cell-sm"> Quantity</p>
            </div>
            {cart.map( (item) => {
                return (
                    <div key={item.id} className="flextable-row">
                            <p className="flextable-row--cell"> {item.id} </p>
                            <p className="flextable-row--cell-lg"> {item.title} </p>
                            <p className="flextable-row--cell-sm">${item.price}</p>
                            <p className="flextable-row--cell-sm">{item.count? item.quantity:0}</p>
                            <button onClick={() => {removeItem(item)}} className="invisible-button">X</button>                
                    </div>
                )
            })}

            {
                <div className="h-centered-div"> 
                    <p className="loud-text">Total: ${totalPrice(cart)},00</p>
                </div>
            }

            {
                cart.length === 0
                ? <div className="h-centered-div"> 
                    <p className="loud-text">Hey! This is your cart. Ready to fill this list?</p>
                    </div>
                : <div className="h-centered-div">
                    <Link to='/checkout'>
                        <button className="striking-button"> Purchase Items </button>
                    </Link>
                    <button onClick={clear} className="invisible-button">Clear Cart</button>                
                </div>
            }
            <div className="h-centered-div">
                <div className="v-centered-div">
                    <p className="quiet-text">Still hungry for apples?</p>
                </div>
                <Link to='/'>
                    <button className="colored--button"> Find more products </button>
                </Link>
            </div>
        </div>
    )
}

export default Cart