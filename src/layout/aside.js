import React from 'react';

export default function Aside(){
    return <div>
        <aside className="aside is-placed-left is-expanded">
        <div className="aside-tools">
            <div>
            ไอเหยิน <b className="font-black">KA!@M</b>
            </div>
        </div>
        <div className="menu is-menu-main">
            <p className="menu-label">ทั่วไป</p>
            <ul className="menu-list">
            <li className="--set-active-index-html">
                <a href="index.html">
                <span className="icon"><i className="mdi mdi-desktop-mac"></i></span>
                <span className="menu-item-label">หน้าหลัก</span>
                </a>
            </li>
            </ul>
            <p className="menu-label">ระบบขาย</p>
            <ul className="menu-list"> 
            <li>
                <a href="login.html">
                <span className="icon"><i className="mdi mdi-lock"></i></span>
                <span className="menu-item-label">ใบเสนอราคา</span>
                </a>
            </li> 
            </ul>
            <p className="menu-label">ระบบซื้อ</p>
            <ul className="menu-list">
            <li>
                <a href="https://justboil.me" onclick="alert('Coming soon'); return false" target="_blank" className="has-icon">
                <span className="icon"><i className="mdi mdi-credit-card-outline"></i></span>
                <span className="menu-item-label">ข้อมูลการสั่งซื้อ</span>
                </a>
            </li> 
            </ul>
        </div>
        </aside>
    </div>;
}