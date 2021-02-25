import React from 'react'
import ReactModal from 'react-modal'

//
import icon_bus from '../../assets/bus.png'
import icon_walk from '../../assets/walk.png'
import icon_plane from '../../assets/plane.png'
import icon_bike from '../../assets/bike.png'
import icon_train from '../../assets/train.png'
import icon_car from '../../assets/car.png'

//
import icon_right_arrow from '../../assets/right_arrow.png'

var traffic_option = {
    "bus": {"img":icon_bus,"label":"公車"},
    "walk": {"img":icon_walk,"label":"行走"},
    "train": {"img":icon_train,"label":"火車"},
    "plane": {"img":icon_plane,"label":"飛機"},
    "bike": {"img":icon_bike,"label":"腳踏車"},
    "car": {"img":icon_car,"label":"汽車"}
}

const TrafficRow = (props) => {
  var traffic = props.traffic_info.traffic? traffic_option[props.traffic_info.traffic]: traffic_option["bus"]
  return (
    <section id="menu" class="container">
        <div class="w100">
            <ul>
                <li>
                    <img src={traffic.img} className="center img_except" style={{width:"50px"}}/>
                </li>
                <li>
                    <p className="center">{props.traffic_info.text}</p>
                </li>
            </ul>
        </div>

    <div class="row">
            <section class="w25"></section>
            <section class="w20">
                <ul>
                    <li>
                        <p className="center">{props.spot1.text}</p>
                    </li>
                </ul>
            </section>
            
            <section class="w100 hidden_desktop">
                <ul>
                    <li>
                        <p className="center">⬇</p>
                    </li>
                </ul>
            </section>
            <section class="w10 hidden_mobile">
                <ul>
                    <li>
                        <img src={icon_right_arrow} className="center img_except" style={{width:"50px"}}/>
                    </li>
                </ul>
            </section>
            
            <section class="w20">
                <ul>
                    <li>
                        <p className="center">{props.spot2.text}</p>
                    </li>
                </ul>

            </section>
            <section class="w25"></section>
        </div>
    </section>
  )
}
export default TrafficRow
