import React from 'react'
import ReactModal from 'react-modal'


const PicPage = (props) => {

  return (
    <section id="menu" class="container bkc-gray">
        <header class="major-lf">
            <h1>關於 多一個空間</h1>
            <p>好吃，好玩，好開心</p>
        </header>

        <div class="row">

            <section class="w33">
                <ul>
                    <li>
                        <div class="image_box center"><img src="https://static.accupass.com/eventintro/2010181959479011781510.jpg" alt=""/></div>
                    </li>
                    <li>
                        <p>三兩好友，最佳戰友</p>
                    </li>
                </ul>
            </section>
            <section class="w33">
                <ul>
                    <li>
                        <div class="image_box center"><img src="https://static.accupass.com/eventintro/2010181947321953973068.jpg" alt=""/></div>
                    </li>
                    <li>
                        <p>喝咖啡？不如揪個團</p>
                    </li>
                </ul>
            </section>
            <section class="w33">
                <ul>
                    <li>
                        <div class="image_box center"><img src="https://static.accupass.com/eventintro/2010181948187978925800.jpg" alt=""/></div>
                    </li>
                    <li>
                        <p>週末假日的最佳選擇</p>
                    </li>
                </ul>

            </section>
        </div>
    </section>
  )
}
export default PicPage
