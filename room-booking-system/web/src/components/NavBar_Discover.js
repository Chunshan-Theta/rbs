import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
function NavBar_Discover({ search }) {
  function search_by_keyword(){
    var element = document.getElementById("keyword");
    search(element.value)
  }

  return (
    
    <div className="header header__nav header--flex">
      <h1 className="header__heading header__heading--main">Discover</h1>
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
          <li className="nav__item"><Button
              onClick={() => window.location.href = "/p/5fdd8fb5cc45df001b911c1a"}
              className=""
              style={{"vertical-align": "text-bottom"}}
              text={`關於我們`}
            /></li>
          <li className="nav__item"><textarea type="textarea" id="keyword"></textarea></li>
          <li className="nav__item"><Button
              onClick={() => search_by_keyword()}
              className=""
              style={{"vertical-align": "text-bottom"}}
              text={`查詢`}
            /></li>
          
        </ul>
      </nav>
    </div>

  )
}

export default NavBar_Discover