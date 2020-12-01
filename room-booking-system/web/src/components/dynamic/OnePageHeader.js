import React from 'react'
import ReactModal from 'react-modal'


const OnePageHead = (props) => {
  console.log("props",props)
  return (
    <section class="container">

            <div class="p20">
                <p class="center" id="header-title">{props.title}</p>
                <p class="center" >{props.sub_titile}</p>
            </div>
            <div class="row">
                <section class="w25 center">
                    <a href={props.btn1.url} className="button ">{props.btn1.text}</a>
                </section>
                <section class="w25 center">
                    <a href={props.btn2.url} className="button ">{props.btn2.text}</a>
                </section>
                <section class="w25 center">
                    <a href={props.btn3.url} className="button ">{props.btn3.text}</a>
                </section>
                <section class="w25 center">
                    <a href={props.btn4.url} className="button ">{props.btn4.text}</a>
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