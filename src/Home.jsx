import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
    let [state, setstate] = useState()

    return (
        <div style={{ fontFamily: 'cursive' }} className='home-container'>

            <div >
               <Link to={'/reg'}> <p className='font-bold text-white  bg-orange-500 rounded-2xl absolute p-3 hover:bg-red-800'> REGISTER STUDENT DETAILS</p></Link>
                <br />

                <button className='btn btn-primary w-25' onClick={() => {

                    if (!state) {
                        setstate(true)

                    }
                    if (state) {
                        setstate(false)
                    }
                }}></button>
                <h1 className='text-center font-bolder text-4xl text-yellow-300 ms-12 mt-5'>WELCOME!</h1>

               
            </div>
        </div>
    )
}

export default Home