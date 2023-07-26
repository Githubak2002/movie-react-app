
const Nav = () => (
    <nav className="p-[6px] nav-bg sm:mx-6 flex justify-between items-center">

        <h1 className="sm:text-6xl text text-[21px] ">R <b className="text-xl">logo</b></h1>

        <div className=" hidden sm:flex items-center justify-between text-xl font-semibold">
            <h2 className=" nav-link ">Home</h2>
            <h2 h2 className="nav-link">4k movies</h2>
            <h2 h2 className=" nav-link">Web Series</h2>
        </div>

        <div className="sm:w-auto w-[120px]"> 
        <input className="md:mr-4 m-[4px] md:py-2 md:pl-4 p-[4px] bg-transparent border md:w-auto w-[50%]" type="text" placeholder="Search"/>
        <i className="sm:pr-2 pr-0 text-xl cursor-pointer ri-search-2-line"></i>
        </div>
        
    </nav>
) 
export default Nav;