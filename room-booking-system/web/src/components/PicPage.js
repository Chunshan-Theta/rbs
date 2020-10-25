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
                        <div class="image_box center"><img src="https://images.unsplash.com/photo-1594034040864-790e76450565?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=925&q=80" alt=""/></div>
                    </li>
                    <li>
                        <p>炸物小點，每場遊戲的必要良伴</p>
                    </li>
                </ul>
            </section>
            <section class="w33">
                <ul>
                    <li>
                        <div class="image_box center"><img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt=""/></div>
                    </li>
                    <li>
                        <p>喝咖啡？揪個團</p>
                    </li>
                </ul>
            </section>
            <section class="w33">
                <ul>
                    <li>
                        <div class="image_box center"><img src="https://images.unsplash.com/photo-1580013759032-c96505e24c1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=825&q=80" alt=""/></div>
                    </li>
                    <li>
                        <p>窈窕追求的最佳選擇</p>
                    </li>
                </ul>

            </section>
        </div>
    </section>
  )
}
export default PicPage
