import React from 'react'
import Navbar from '../Navbar/Navbar'


export default function Layout({ children }) {
    return (
        <React.Fragment>
            <div className='container-fulid mx-autohv-100'>
                <Navbar />
             
                {children}
            </div>
        </React.Fragment>
    )
}
