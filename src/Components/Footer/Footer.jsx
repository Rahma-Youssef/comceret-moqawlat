import React from 'react'
import './Footer.css'
import concLogo from '../../assets/images/conLogo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        < >
            <div className='footer-container'>
                <div className="container">
                    <div className="row align-items-center px-5 py-3 text-light  g-2 ">

                        <div className="col-md-4">
                            <h3>للتواصل</h3>
                            <div className='me-5 pt-2 '>
                                <div className='d-flex justify-contnet-between gap-2 mb-4 lh-1'>
                                    <i className='fa-solid fa-phone text-warning' ></i>
                                    <div className=''>
                                        <h6 className='text-capitalize '>Eng. ahmed mounir</h6>
                                        <a href="https://wa.me/971582598387" target='_blank' className="">+971582598387</a>
                                    </div>
                                </div>
                                <div className='d-flex justify-contnet-between gap-2  mb-3 lh-1'>
                                    <i className='fa-solid fa-phone  text-warning' ></i>
                                    <div>
                                        <h6 className='text-capitalize'>Eng. ashraf zain</h6>
                                        <a href="https://wa.me/971589803373" target='_blank' className="">+971589803373</a>
                                    </div>
                                </div>
                                <div className='d-flex justify-contnet-between gap-2  mb-3 lh-1'>
                                    <i className="fa-solid fa-at text-warning"></i>
                                    <div>
                    
                                        <a href="mailto:Concretecon10@gmail.com" target='_blank' className="text-white">Concretecon10@gmail.com</a>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="col-md-4 mb-4">
                            <h3>العنوان</h3>
                            <div className='d-flex gap-2 justifiy-content-center mt-3' >
                                <i className='fa-solid fa-location-dot  text-warning'></i>
                                <p className='text-end '>الفجيره<br />
                                    شارع حمد بن عبد الله
                                    منطقه تون سنتر<br />
                                    بنايه الفيوا سابقا
                                    الدور الخامس<br />
                                    مكتب رقم 502</p>
                            </div>
                        </div>

                        <div className="col-md-4  ">
                           <Link to="/Home" > <img src={concLogo} className=' w-100' alt="" /></Link>
                        </div>



                    </div>

                </div>
            </div >

        </>
    )
}

export default Footer