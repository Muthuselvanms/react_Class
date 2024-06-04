import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Homepage = ({data}) => {
  // console.log(data);
  return (
    <>
    <h1>Homepage</h1>
    <Link to='/products'>Click here for product page</Link>
    {
      data.map((fooddata,index)=>{
        return (
          <div key={index}>
            <h1>{fooddata.name}</h1>
            <img src={fooddata.image} alt={fooddata.name} width={150} height={150 } />
          </div>
        )
      })
    }
    </>
  )
}

export default Homepage