import React, { useEffect } from 'react'
import btnBack from '../../assets/images/left-arrow.png'
import StyleOurwork from'./Ourwork.module.css'
import { Link } from 'react-router-dom'
import Carousel from '../Carousel/Carousel'

const Ourwork = () => {

      useEffect(() => {
        document.title = "أعمالنا - Concrete "
      }, [])
    return (
        <>
            <div className={`container py-5`}>

                 <Link to='/home' className={`${StyleOurwork.link}`} ><button className={`border-0 bg-transparent  `}><img src={btnBack} className={`${StyleOurwork.backBtn}`} alt="back-btn" /></button></Link>
                <h1 className={`fw-bolder text-center display-2  mb-5 position-relative ${StyleOurwork.heading}`}>أعمالنا</h1>

                <Carousel></Carousel>

             
            </div></>
    )
}

export default Ourwork