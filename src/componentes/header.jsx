import React from 'react'

const Header = () => {
    return (
        <section>

            <h1 className=' text-center text md:text-[120px] text-[40px] font-bold' >Ract Movies</h1>

            <div className='flex flex-wrap justify-center items-center'>
                <h3 className=' cursor-pointer header-box'>Bollywood Content</h3>
                <h3 className=' cursor-pointer header-box'>Hollywood Content</h3>
                <h3 className=' cursor-pointer header-box'>How to download</h3>
                <h3 className=' cursor-pointer header-box'> <b className=' font-bold text-[17px]'> 4K </b> Content</h3>

                <div></div>

            </div>

            <div className=" flex justify-center">
            <h2 className='text-[16px] gradient-header mx-2 mt-[8px] p-2 rounded-[4px] max-w-[1020px]'>Simply <b >Comment on Post</b> if you found any Broken Link we will fix it for you within next 24 Hours with Guaranteed and Great Support.</h2>
            </div>

        </section>
    )
}

export default Header;

