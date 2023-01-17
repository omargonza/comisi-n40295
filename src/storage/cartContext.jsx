import { createContext, useState } from "react";


const cartContext = createContext({ cart: [] });


const Provider = cartContext.Provider;



function CartContextProvider(props){
 
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

 

    const removeItem = (id) => { 
        let updatedCart = cart.filter( it => it.id !== id)
        setCart(updatedCart);
    };
   

    let clear = () => { setCart([]) };

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