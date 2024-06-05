import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Cartpage = ({cart,removeCart,clearCart,calcTotal}) => {
  return (
    <>
    <div>
      {cart.length > 0
       ? 
      <>
      <Button onClick={clearCart} variant='danger' >Clear Cart</Button>
      <h3>You have Ordered</h3>
      {cart.map((cartItem,index)=>{
        return (
          <div key={index}>
            <h2>{cartItem.name}</h2>
            <img src={cartItem.image} alt={cartItem.name} height={150} width={150} />
            <h4>Price : Rs {cartItem.price}.00</h4>
            <Button onClick={()=>removeCart(index)} variant='danger'>Remove from Cart</Button>
          </div>
        )
      })}
      <h3>Your Cart Price : {calcTotal()}</h3>
      </>
        : 
      <>
      <h3>Your Cart is Empty</h3>
      <Link to='/products'>Click here to order</Link>
      </>}
    </div>
    </>
  )
}

export default Cartpage