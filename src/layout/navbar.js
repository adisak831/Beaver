import React from "react";
import {Link} from "react-router-dom";
import SVGlogout from "../assets/svg/svglogout";
import SVGAvatar from "../assets/svg/svgavatar";
import SVGUser from "../assets/svg/svguser"; 
import {Menu,Transition} from "@headlessui/react"

export default function Navbar() {
  return <div>
      <nav id="navbar-main" className="navbar is-fixed-top">
      <div className="navbar-brand">
        <a className="navbar-item mobile-aside-button">
          <span className="icon"><i className="mdi mdi-forwardburger mdi-24px"></i></span>
        </a> 
      </div>
      <div className="navbar-brand is-right">
        <a className="navbar-item --jb-navbar-menu-toggle" data-target="navbar-menu">
          <span className="icon"><i className="mdi mdi-dots-vertical mdi-24px"></i></span>
        </a>
      </div>

      <div className="navbar-menu" id="navbar-menu">
        <div className="navbar-end"> 

          {/* <div className="navbar-item dropdown has-divider has-user-avatar">
            <a className="navbar-link">
              <div className="user-avatar">
                <img src="https://avatars.dicebear.com/v2/initials/john-doe.svg" alt="John Doe" className="rounded-full"/>
              </div>
              <div className="is-user-name"><span>John Doe</span></div>
              <span className="icon"><i className="mdi mdi-chevron-down"></i></span>
            </a>
            <div className="navbar-dropdown">
              <a href="profile.html" className="navbar-item --set-active-profile-html">
                <span className="icon"><i className="mdi mdi-account"></i></span>
                <span>My Profile</span>
              </a>
              <a className="navbar-item">
                <span className="icon"><i className="mdi mdi-settings"></i></span>
                <span>Settings</span>
              </a>
              <a className="navbar-item">
                <span className="icon"><i className="mdi mdi-email"></i></span>
                <span>Messages</span>
              </a>
              <hr className="navbar-divider"/>
              <a className="navbar-item">
                <span className="icon"><i className="mdi mdi-logout"></i></span>
                <span>Log Out</span>
              </a>
            </div>
          </div> 
          */} 
          {/* <a title="Log out" className="navbar-item desktop-icon-only">
            <span className="icon"><SVGlogout/></span>
            <span>ออกจากระบบ</span>
          </a> */}
          <Menu as="div" className="mt-3 mr-5">
            <Menu.Button className="flex gap-2 px-2 font-bold rounded-md hover:text-blue-800 hover:bg-blue-100">
              <SVGAvatar/>Administrator
            </Menu.Button>
            <Menu.Items className="absolute right-0 z-20 w-56 mt-3 mr-2 bg-white border border-gray-500 border-opacity-25 rounded-md shadow-2xl dark:bg-gray-800"> 
              <Link
                    to="#"
                    className="flex justify-start gap-2 px-2 py-2 pl-4 font-normal leading-7 rounded-sm hover:text-blue-800 hover:bg-blue-100 hover:text-black"
                  >
                  <SVGUser/>
                  <b>แก้ไขข้อมูลผู้ใช้งาน</b>
                </Link> 
                <Link
                    to="#"
                    className="flex justify-start gap-2 px-2 py-2 pl-4 font-normal leading-7 rounded-sm hover:text-blue-800 hover:bg-blue-100 hover:text-black"
                  > 
                  <SVGlogout/>
                  <b>ออกจากระบบ</b>
              </Link> 
            </Menu.Items> 
          </Menu>

        </div>
      </div>
    </nav>
  </div>;
}
