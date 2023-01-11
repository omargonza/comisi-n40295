import { createContext, useState } from "react";

//1. inicializamos nuestro Context
const cartContext = createContext({ cart: [] });

//2. Extraemos el componente Provider
const Provider = cartContext.Provider;


//4. creamos nuesro propio Provider
function CartContextProvider(props){
    //3. Creamos un estado
    const [cart, setCart] = useState([]);
  
    let saludo = "hola desde context"

    function addToCart(item,count){
        let indexItemInCart = cart.findIndex( itemInContext => itemInContext.id === item.id )   
        let isItemInCart = indexItemInCart !== -1;
        const newCart = [...cart];

        if (isItemInCart){
            newCart[indexItemInCart].count += count
            setCart(newCart)
        }
        else {
        
            newCart.push( {...item, count: count})        
            setCart(newCart);
        }
    }

    
    let totalItemsInCart = 0;
    cart.forEach( item => totalItemsInCart += item.count);
    
    function totalItemsInCartfn(){
        let totalItemsInCart = 0;
        cart.forEach( item => totalItemsInCart += item.count);
        return totalItemsInCart;
    }

    // function removeItem(id) -> filter 

    const removeItem = (id) => { 
        let updatedCart = cart.filter( it => it.id !== id)
        setCart(updatedCart);
    };
    // function emptyCart() -> []

    let clear = () => { setCart([]) };

    // totalPriceInCart() -> $$
    let totalPrice = () => cart.reduce((ac,it) => ac + it.count*it.price,0)
    console.log (cart)
    

    return(
        <Provider value={ {
            cart, 
            saludo,
            addToCart,
            totalItemsInCart,
            totalItemsInCartfn,
            removeItem,
            clear,
            totalPrice
            }}>
             {props.children}
        </Provider>
    )
}

export { cartContext, CartContextProvider };