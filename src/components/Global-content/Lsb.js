/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export default function Lsb() {
  return (
        <div className="left-sidebar">
            <div className="sidebar-header d-flex align-items-center justify-content-between">
                <img src="./assets/images/favicon-1.png" alt="Logo"/>
                <span className="designation">Front End Developer</span>
            </div>
            <img className="me" src="./assets/images/me.png" alt="Me"/>
            <h2 className="email">rendysetiady8@gmail.com</h2>
            <h2 className="address">Jakarta, Indonesia</h2>
            <p className="copyright">&copy; 2024 Rendy. All Rights Reserved</p>
            <ul className="social-profile d-flex align-items-center flex-wrap justify-content-center">
                <li>
                    <a target='_blank' href="https://www.linkedin.com/in/rendysetiadi/" rel="noreferrer" ><i className="lab la-linkedin"></i></a>
                </li>
                <li>
                    <a target='_blank' href="https://www.instagram.com/rendysetiadi_/" rel="noreferrer"><i className="lab la-instagram"></i></a>
                </li>
                <li>
                    <a target='_blank' href="https://github.com/rendystdy" rel="noreferrer"><i className="lab la-github"></i></a>
                </li>
            </ul>
            <a href="#" className="theme-btn">
                <i className="las la-envelope"></i> Hire Me!
            </a>
        </div>
  )
}   
