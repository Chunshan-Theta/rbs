import React from 'react'
import { Link } from 'react-router-dom'

function NavBar({
  signOut,
  loadMyBookings,
  user
}) {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item"><Link to="/bookings" className="nav__link">主頁</Link></li>
        <li className="nav__item"><Link to="/mybookings" className="nav__link">我的預定</Link></li>
        <li className="nav__item"><Link to="/createroom" className="nav__link">建立新空間</Link></li>
        <li className="nav__item"><a onClick={signOut} className="nav__link">登出</a></li>
      </ul>
    </nav>
  )
}

export default NavBar