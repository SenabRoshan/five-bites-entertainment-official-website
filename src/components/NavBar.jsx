import React from 'react'
import logo from "../assets/LogoBlack.png"
import '../index.css'
import { MdMenu } from "react-icons/md";
import RespNavBar from './RespNavBar'; // Adjust the path based on your file structure

const NavigationMenu = [
    {
        id: 1,
        title: "Home",
        link: "/"
    },
    {
        id: 2,
        title: "Profile",
        link: "#"
    },
    {
        id: 3,
        title: "Portfolio",
        link: "#"
    },
    {
        id: 4,
        title: "Services",
        link: "#"
    },
    {
        id: 5,
        title: "Testimonials",
        link: "#"
    },
];

function NavBar() {
    const [open, setOpen] = React.useState(false);
    return (
        <>
            <nav>
                <div className="container flex justify-between items-center py-4 md:pt-4">
                    <div className='text-2xl flex items-center gap-4 font-bold uppercase'>
                        <img 
                            src={logo} 
                            alt="" 
                            className="w-16 h-16 rounded-full shadow-md transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                        <div>
                            <p className="text-2xl ">
                            <span className="text-primary">Five</span>
                            <span className="text-secondary px-1">Bites</span>
                            </p>
                            <p className="text-secondary text-sm">Entertainment</p>
                        </div>
                
                    </div>
                    {/* Navigation */}
                    <div className='hidden md:block '>
                        <ul className='flex items-center gap-6 text-gray-600'>
                            {NavigationMenu.map((menu) => (
                                <li key={menu.id} className='text-3rem'>
                                    <a href={menu.link} className='inline-block py-1 px-3 font-semibold tracking-widest hover:text-primary relative group' >
                                        {menu.title}
                                        <div className='absolute bottom-0 left-0 w-full h-0.5 bg-primary/80 scale-x-0 group-hover:scale-x-100 transition-transform'></div>
                                    </a>
                                </li>
                            ))}
                            <button className='flex gap-3 font-semibold bg-black text-white hover:text-primary rounded-full py-2 px-5 transition-transform duration-300 ease-in-out hover:scale-110'>
                                <p className='text-2rem'>Connect</p>
                            </button>
                        </ul>
                    </div>

                    <div className='md:hidden' onClick={() => setOpen(!open)}>
                        <MdMenu className="text-4xl"/>                  
                    </div>
                </div>
            </nav>

            <RespNavBar open = {open} setOpen={setOpen}/>
        </>
  )
}

export default NavBar