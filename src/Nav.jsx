import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='min-h-screen absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <div style={{ fontFamily: 'cursive' }} className="container mx-auto">
                <div className="flex justify-center gap-2 lg:gap-14 ">
                    <Link to={'/'}>
                        <button className='  font-bold text-white px-5 py-4 lg:px-10 lg:py-3 bg-orange-500 rounded-md hover:bg-red-800 mt-5'>
                            Home
                        </button>
                    </Link>

                    <Link to={'/studentlist'}>
                        <button className='text-white font-bold px-5 py-4 lg:px-10 lg:py-3 bg-orange-500 rounded-md hover:bg-red-800 mt-5'>
                           list
                        </button>
                    </Link>
                    <Link to={'reg'}>
                        <button className='text-white font-bold px-5 py-4  lg:px-10 lg:py-3  lg:px-10 lg:py-3 bg-orange-500 rounded-md hover:bg-red-800 mt-5'>
                            Register
                        </button>
                    </Link>
                </div>
               
              
            </div>
        </div>
    );
};

export default Nav;
