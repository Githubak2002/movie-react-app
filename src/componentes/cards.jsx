import React from 'react'

 const Cards = (props) => {
  return (
    <div className='h-auto w-[110.5px] xs:h-auto xs:w-[240px] xxs:w-[140px] xss:h-auto xss:mx[10px] flex flex-col justify-center items-center sm:mx-[0px] sm:mt-[16px] mt-[10px] mx-[16px] sm:pb-[14px] pb-[6px]'>
        
        <div className=' h-[150.4px] w-[100.5px] xs:h-[300px] xs:w-[200px] xs:p-[5.4px] p-[3px] gradient-card-bg cursor-pointer'>
            <img src={props.source} alt="movie-thubmbnail" />
        </div>

        <h5 className='text-slate-400 xs:mt-4 mt-2 text-[13.2px]'>  <i className="px-[3px] ri-calendar-line"></i> {props.tarikh} </h5>

        <h1 className='xxs:pl-[12px] xs:pl-[20px] ml:[2px] font-poppins font-thin hover:text-red-500 text-[15px] pt-[2px]  cursor-pointer'> {props.name} </h1>

    </div>
  )
}

export default Cards;