import React from 'react'
import ReactModal from 'react-modal'
//<a href={`mailto:${props.user}?subject=我想預約桌遊活動&body=我想預約桌遊活動%0D你好`} className="button">Contact</a>
const EmailBlock = (props) => {

  return (
    <section class="container bkc-gray">
        <header class="major-lf">
            <h1>聯絡方式</h1>
        </header>

        <div class="row">

            <section className="w50">
                <p>想做點什麼呢？</p>

            </section>
            <section className="w50">
                <ul>
                    <li className="left"><a href={`mailto:ddm.cooperation@gmail.com?subject=我想預約空間用餐&body=我想預約預約空間用餐%0D%0A姓名：%0D%0A時間：%0D%0A人數：`} className="button ">預約空間用餐</a></li>
                    <li className="left"><a href={`mailto:ddm.cooperation@gmail.com?subject=我想預約空間舉辦活動&body=我想預約空間舉辦活動%0D%0A姓名：%0D%0A時間：%0D%0A人數：`} className="button ">預約空間舉辦活動</a></li>
                    <li className="left"><a href={`mailto:ddm.cooperation@gmail.com?subject=我想參加桌遊活動&body=我想預參加桌遊活動%0D%0A姓名：%0D%0A時間：%0D%0A人數：`} className="button ">參加桌遊活動</a></li>
                </ul>
            </section>

        </div>

    </section>
  )
}
export default EmailBlock



