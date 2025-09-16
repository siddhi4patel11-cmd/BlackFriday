import React from 'react'
import pic from '../../public/img/pic.png'
import pic3 from '../../public/img/pic3.jpg'
import pic4 from '../../public/img/pic4.jpg'
import { MdOutlineLocalShipping } from "react-icons/md";
import Products from '../assets/assets'
import { Link } from 'react-router-dom'
import { CiStar } from "react-icons/ci";
import { FaLock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";


const Home = () => {
  return (
    <div className='bg-black'>
      <div className='h-screen bg-[url(https://img.freepik.com/free-photo/abstract-luxury-plain-blur-grey-black-gradient-used-as-background-studio-wall-display-your-p_1258-112144.jpg)] bg-cover bg-center w-full'>
        <div className="text-white min-h-screen font-sans">
        <section className="flex flex-col justify-center items-center text-center px-6 py-20 bg-cover bg-center">
          <p className="text-red-400 italic text-xl mb-4 mt-20">
            Hurry, Black Friday Is Almost Here!
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            TIME LEFT UNTIL OUR{" "}
            <span className="text-red-500">BIGGEST SALE</span>
            <br /> OF THE YEAR BEGINS
          </h1>
          <button className="mt-8 px-6 py-3 bg-red-500 hover:bg-red-600 transition text-white font-bold rounded">
            SET REMINDER
          </button>
        </section>
      </div>
      </div>


      <div className='grid grid-cols-2 px-22 p-10  h-screen bg-[url(img/bg-1.jpg)]  bg-cover bg-center w-full'>
        <div className=' border-white gap-3 mt-50'>
          <div class="col-span-3 col-start-2 ">
            <p className="text-red-400 italic  text-xl mb-4">
            Up To 50% Off
          </p>
          <p className='text-white text-5xl '>
            GRAB YOUR FAVORITES BEFORE THEY'RE GONE
          </p>
          <p className='text-white text-2xl mt-3'>
            You can trust us to bring you the latest technology at unbeatable prices. Don’t miss this limited-time opportunity to upgrade your audio game. Grab your perfect pair now!
          </p>
          <button className="mt-8 px-6 py-3 bg-red-500 hover:bg-red-600 transition text-white font-bold rounded">
            Shop now
          </button>
          </div>
          
        </div>
        
        <div className='grid grid-cols-6 gap-3 mt-10'>
          <div class="col-span-4 col-start-2 ...">
            <img src={pic} alt="" width={500} />
          </div>
        </div>
      </div>



      <div className='grid grid-cols-2 mx-auto p-22 bg-black relative'>
        <div className='mt-70'>
          <p className='text-red-400 font-semibold italic text-3xl'>
              Black Friday Exclusive
          </p>
          <p className='text-white text-6xl mt-3'>
            SAVE BIG: UP TO 75% OFF ON HEADPHONES
          </p>
          <p className='text-white text-1 xl mt-4'>
            You can trust us to bring you the latest technology at unbeatable prices. Don’t miss this limited-time opportunity to upgrade your audio game. Grab your perfect pair now!
          </p>
          <button className="mt-8 px-6 py-3 bg-red-500 hover:bg-red-600 transition text-white font-bold rounded">
            Shop now
          </button>
        </div>
        <div className='p-10'>
          <img src={pic3} alt="" width={600} />
        </div>

          <div className='absolute left-[45%] top-[150px] w-[200px]'>
            <img src={pic4}alt=""/>
          </div>
      </div>

      <div className='bg-black flex flex-col justify-center items-center text-center '>
        <p className="text-red-400 italic font-semibold text-3xl  mt-20">
            Unbelievable Discounts Await You  
        </p>
        <p className='text-white text-5xl font-extrabold mt-2'>
            BLACK FRIDAY MADNESS IS HERE!
        </p>
        <hr className='color-white mt-30' />
      </div>

      <div class="@container bg-black">
        <div class="flex flex-col @md:flex-row mb-20">
        <div className='h-screen bg-[url(https://balck-web-ia74.vercel.app/static/media/bg-07.c9d70499e431bf0b229b.jpg)] bg-cover bg-center w-full'>
        <div className="text-white min-h-screen font-sans">
        <section className="flex flex-col justify-center items-center text-center px-6 py-20 bg-cover bg-center">
          <p className="text-red-400 italic text-xl mb-4 mt-20">
            Limited-Time Offer
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            SAVE BIG: UP TO{" "}
            <span className="text-red-500">60% OFF</span>
            <br />ON ALL HEADPHONES
          </h1>
          
          <button className="mt-8 px-6 py-3 bg-red-500 hover:bg-red-600 transition text-white font-bold rounded">
            SHOP NOW         
          </button>
        </section>
      </div>
      </div>
        </div>
      </div>

    <div className=' bg-black grid grid-cols-3 mx-auto p-10'>
      <div className='p-10'>
        <p className="text-red-400 italic font-semibold text-3xl  ">
            Why Choose BlackFridayShop?       
       </p>
        <p className='text-white text-5xl font-extrabold mt-2'>
           THE JOY OF SHOPPING AT ITS BEST        
        </p>
      </div>

      <div className='p-10'>
        <p className='text-white text-2xl mt-3'>
            <MdOutlineLocalShipping />
              FREE SHIPPING
          </p>
          <p className='text-white text-1 xl mt-4'>
            Delight in seamless free shipping, enhancing your shopping experience. Navigate our diverse collection, where cost savings meet product joy
          </p>

      <div>
        <p className='text-white text-2xl mt-7'>
            <FaLocationDot />
            ORDER TRACKING
          </p>
          <p className='text-white text-1 xl mt-4'>
            Track your order effortlessly with our streamlined system. Stay informed and in control as your purchase makes its way to your doorstep
          </p>
      </div>
      </div>

       <div className='p-10'>
        <p className='text-white text-2xl mt-3'>
          <FaLock />
              SECURE PAYMENTS
          </p>
          <p className='text-white text-1 xl mt-4'>
            You can trust us to bring you the latest technology at unbeatable prices. Don’t miss this limited-time opportunity to upgrade your audio game. Grab your perfect pair now!
          </p>

      <div>
        <p className='text-white text-2xl mt-3'>
            EASY RETURNS
          </p>
          <p className='text-white text-1 xl mt-4'>
            You can trust us to bring you the latest technology at unbeatable prices. Don’t miss this limited-time opportunity to upgrade your audio game. Grab your perfect pair now!
          </p>
      </div>
      </div>
      
    </div>


    <div className='h-screen bg-[url(https://balck-web-ia74.vercel.app/static/media/bg-01-b.b1caab1f6aefc374d54e.jpg)] bg-cover bg-center w-full'>
        <div className="text-white min-h-screen font-sans">
        <section className="flex flex-col justify-center items-center text-center px-6 py-20 bg-cover bg-center">
          <p className="text-red-400 italic text-2xl mb-4 mt-20">
            Black Friday Sale
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            TIME LEFT UNTIL OUR{" "}
            <span className="text-red-500">BIGGEST SALE</span>
            <br /> OF THE YEAR BEGINS
          </h1>
          <p className='text-white text-2xl  p-10'>
            Don’t miss this exclusive opportunity to embark on a journey of unbeatable savings and cutting-edge technology. It’s time to secure the best deals and upgrade your experience, so seize the moment and start shopping now!
          </p>
          <button className="mt-4 px-6 py-3 bg-red-500 hover:bg-red-600 transition text-white font-bold rounded">
            SHOP DEALS
          </button>
        </section>
      </div>
      </div>

      <div className=' grid grid-cols-4 gap-3 mt-5 bg-black'>
        {Products.slice(0,4).map((iteam)=>{

          return(

            <div className='border bg-black '>
              
              <Link className='text-white ' to={`/productid/${iteam.id}/${iteam.category}`}>
              <p><img src={iteam.image} className='w-[500px] h-[400px]' alt=""/></p>
              <p className='text-white'>{iteam.title}</p>
              <p className='text-white'>{iteam.offer}</p>
              <p className='text-white'>{iteam.price}</p>
              <p className='flex text-red-700'><CiStar /><CiStar /><CiStar /><CiStar /><CiStar /></p>
              <p className='text-white'>{iteam.category}</p>
              
              </Link>

            </div>
          )
        })}
      </div>



























    </div>
  )
}

export default Home
