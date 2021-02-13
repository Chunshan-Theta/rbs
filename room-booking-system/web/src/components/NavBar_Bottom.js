import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
function NavBar_Bottom() {
  return (
    
    <div className="header header__nav header--flex">
      <h1 className="header__heading header__heading--main"></h1>
      <nav className="nav">
        <ul className="nav__list">

        
          <li className="nav__item"><Button
              onClick={() => window.location.href = "/discover"}
              className=""
              style={{"vertical-align": "text-bottom"}}
              text={`探索`}
            /></li>
          <li className="nav__item"><Button
              onClick={() => window.location.href = "/discover/likes"}
              className=""
              style={{"vertical-align": "text-bottom"}}
              text={`喜歡的旅程`}
            /></li>
          <li className="nav__item"><Button
              onClick={() => window.location.href = "/j/home"}
              className=""
              style={{"vertical-align": "text-bottom"}}
              text={`自己的旅程`}
            /></li>
        </ul>
      </nav>
    </div>

  )
}

export default NavBar_Bottom