import React from 'react'
import { Button } from 'react-bootstrap'

const Productpage = ({data}) => {
  // console.log(data);
  return (
    <>
    <h1>Order Pizza's and Burger's</h1>
    <div>
    {
      data.map((fooddata,index)=>{
        return (
          <div key={index}>
            <h1>{fooddata.subItemsData.name}</h1>
            <div>
              {fooddata.subItemsData.subItems.map((fooditems,index)=>{
                return (
                  <div key={index}>
                    <h1>{fooditems.name}</h1>
                    <img src={fooditems.image} alt={fooditems.name} width={150} height={150 } />
                    <h3>{fooditems.description}</h3>
                    <h4>Price : Rs {fooditems.price}.00</h4>
                    <Button variant='danger'>Add to Cart</Button>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })
    }
    </div>
    </>
  )
}

export default Productpage