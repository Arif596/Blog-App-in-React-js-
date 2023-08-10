import React from 'react'
import './Sidebar.css'
import About from '../header/about.jpg'
export default function Sidebar() {
    return (
        <div className='side'>
            <div className="sidebarItem">
                <span className='title'>About me</span>
                <br />
                <img className="imagess" src={About} alt="" />
                <p style={{ fontSize: '20px', fontWeight: 'normal' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, exercitationem?</p>
            </div>
            <div className="sidebarItem">
                <span className='title2'>Category</span>
                <ul className="sidebarList">
                    <li className="sidebarlistItem">Food</li>
                    <li className="sidebarlistItem">Sports</li>
                    <li className="sidebarlistItem">Fashion</li>
                    <li className="sidebarlistItem">Music</li>
                    <li className="sidebarlistItem">Cinema</li>
                    <li className="sidebarlistItem">Tech</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className='title2'>Follow Us</span>
                <div className="sidebarsocial">
                <i className="topIcon fa-brands fa-square-facebook"></i>
                <i className="topIcon fa-brands fa-square-twitter"></i>
                <i className="topIcon fa-brands fa-square-instagram"></i>
                </div>
                </div>
        </div>
    )
}
