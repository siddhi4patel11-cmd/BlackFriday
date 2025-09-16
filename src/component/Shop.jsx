import React from 'react'
import Products from '../assets/assets'
import { Link } from 'react-router-dom'
import { CiStar } from "react-icons/ci";

const Shop = () => {
  return (
    <>
       <div className=' grid grid-cols-4 gap-3 mt-5 bg-black'>
        {Products.map ((iteam)=>{

          return(

            <div className='border  bg-black '>
              
              <Link className='text-white ' to={`/productid/${iteam.id}/${iteam.category}`}>
              <p><img src={iteam.image} className='w-[500px] h-[400px]' alt=""/></p>
              <p className='text-white'>{iteam.title}</p>
              <p className='text-white'>{iteam.offer}</p>
              <p className='text-white'>{iteam.price}</p>
              <p className='flex text-red-800'><CiStar /><CiStar /><CiStar /><CiStar /><CiStar /></p>
              <p className='text-white'>{iteam.category}</p>
              
              </Link>

            </div>
          )
        })}
      </div>
    </>
  )
}

export default Shop
