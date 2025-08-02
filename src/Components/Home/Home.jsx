import React from 'react'
import concreteimg from '../../assets/images/concrete Logo.jpg'
import StyleHome from './Home.module.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className={`${StyleHome.bgHome} `} >
        <div className={`d-flex flex-column  text-center align-items-center  py-5 `}>
          <h1 className={`text-white  fw-bolder ${StyleHome.heading}`}>Concrete Moqawlat</h1>

          <img src={concreteimg} alt="company logo" loading="lazy" className={` rounded-circle w-100 ${StyleHome.image} shadow-sm`} />

          <ul className={`d-flex justifiy-content-center gap-4 py-4 ${StyleHome.Socialicons}`}>
            <li><a href="https://www.youtube.com/@concrete.moqawlat" target={`_blank`}><i className={`fa-brands fa-youtube fs-6`}></i> </a></li>
            <li><a href="https://www.instagram.com/concrete.moqawlat" target={`_blank`}><i className={`fa-brands fa-instagram fs-6`}></i> </a></li>
            <li><a href="https://tiktok.com/@concrete.moqawlat" target={`_blank`}><i className={`fa-brands fa-tiktok fs-6`}></i> </a></li>
            <li><a href="mailto:Concretecon10@gmail.com" target={`_blank`}><i className={`fa-solid fa-envelope fs-6`}></i> </a></li>
          </ul>


          <Link to='/Aboutus'> <button className={`${StyleHome['button-85']} mt-2 mb-4 px-5 fw-bolder text-dark`} role="button">نبذة عنا</button>
          </Link>
          <Link to='/ourwork'> <button className={`${StyleHome['button-85']} mt-2 mb-4 px-5 fw-bolder text-dark`} role="button"> أعمالنا</button>
          </Link>
        </div>

        <div className={`container d-flex justify-content-center py-4`}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3612.3844074089866!2d56.32045857537945!3d25.122691577758925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDA3JzIxLjciTiA1NsKwMTknMjIuOSJF!5e0!3m2!1sen!2seg!4v1754143344402!5m2!1sen!2seg" className={`border-0 rounded-3 w-75 `} allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

      </div>

    </>
  )
}

export default Home


