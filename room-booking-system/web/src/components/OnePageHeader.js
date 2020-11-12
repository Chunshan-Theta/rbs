import React from 'react'
import ReactModal from 'react-modal'


const OnePageHead = (props) => {

  return (
    <section class="container">

            <div class="p20">
                <p class="center" id="header-title">多一個空間</p>
                <p class="center" > 下午茶 ｜ 桌上遊戲 ｜ 電影觀賞</p>
            </div>
            <div class="row">
                <section class="w25 center">
                    <a href="#event" className="button ">本月活動</a>
                </section>
                <section class="w25 center">
                    <a href="https://ddm.com.tw/" className="button ">多多看電影</a>
                </section>
                <section class="w25 center">
                    <a href="#menu" className="button ">菜單</a>
                </section>
                <section class="w25 center">
                    <a href="https://www.facebook.com/onemoreplace2019/" className="button ">紛絲專頁</a>
                </section>
            </div>

    </section>
  )
}
export default OnePageHead


//<section class="container">
//
//            <h1 id="logo"><a href="index.html">Strongly Typed</a></h1>
//            <p>A responsive HTML5 site template. Manufactured by HTML5 UP.</p>
//
//            <nav id="nav">
//                <ul>
//                    <li  ><a class="icon solid fa-home" href="index.html"><span>Introduction</span></a></li>
//                    <li class="opener" style="user-select: none; cursor: pointer; white-space: nowrap; opacity: 1;">
//                        <a href="#" class="icon fa-chart-bar"><span>Dropdown</span></a>
//
//                    <ul class="" style="user-select: none; display: none; position: absolute;">
//                            <li  ><a href="#"  >Lorem ipsum dolor</a></li>
//                            <li  ><a href="#"  >Magna phasellus</a></li>
//                            <li  ><a href="#"  >Etiam dolore nisl</a></li>
//                            <li class="opener" style="user-select: none; cursor: pointer; white-space: nowrap;">
//                                <a href="#"  >Phasellus consequat</a>
//                                <ul class="dropotron" style="user-select: none; display: none; position: absolute;">
//                                    <li  ><a href="#"  >Magna phasellus</a></li>
//                                    <li  ><a href="#"  >Etiam dolore nisl</a></li>
//                                    <li  ><a href="#"  >Phasellus consequat</a></li>
//                                </ul>
//                            </li>
//                            <li  ><a href="#"  >Veroeros feugiat</a></li>
//                        </ul></li>
//                    <li  ><a class="icon solid fa-cog" href="left-sidebar.html"><span>Left Sidebar</span></a></li>
//                    <li  ><a class="icon solid fa-retweet" href="right-sidebar.html"><span>Right Sidebar</span></a></li>
//                    <li  ><a class="icon solid fa-sitemap" href="no-sidebar.html"><span>No Sidebar</span></a></li>
//                </ul>
//            </nav>
//
//    </section>