import React from 'react'

function GetDate() {
    let d = new Date ();
    let year = d.getFullYear();
    return (
      <div>
        <h2 className='pt-2'>Copyright  <i className="ri-copyright-line"></i>{year}. Created by <b className='font-bold text-xl'>Anurag Lohar</b>.</h2>
      </div>
    );
  }


const Footer = () => {
  return (
    <div className=' flex justify-center items-center md:px-0 px-[20px] text-[15px] py-[18px] flex-col'>

        <hr className='my-2 w-[85%] m-auto'/>

        <GetDate />

        <h6 className='pt-[4px] safade'>Frontend Movies website using REACT JS & Tailwind Css.</h6>

        <h6 className='pt-[4px] safade'>Understanding the fundamental of React with Js.</h6>

    </div>
  )
}
export default Footer;
