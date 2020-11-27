import React from 'react'
import ReactModal from 'react-modal'
//<a href={`mailto:${props.user}?subject=我想預約桌遊活動&body=我想預約桌遊活動%0D你好`} className="button">Contact</a>
const EmailBlock = (props) => {
  console.log("props",props);
  let ml1 = "mailto:"+props.ml1.mail+"?subject="+props.ml1.subject+"&body="+props.ml1.body;
  let ml2 = "mailto:"+props.ml2.mail+"?subject="+props.ml2.subject+"&body="+props.ml2.body;
  let ml3 = "mailto:"+props.ml3.mail+"?subject="+props.ml3.subject+"&body="+props.ml3.body;
  return (
    <section class="container bkc-gray">
        <header class="major-lf">
            <h1>{props.title}</h1>
        </header>

        <div class="row">

            <section className="w50">
                <p>{props.sub_titile}</p>

            </section>
            <section className="w50">
                <ul>
                    <li className="left"><a href={ml1} className="button ">{props.ml1.text}</a></li>
                    <li className="left"><a href={ml2} className="button ">{props.ml2.text}</a></li>
                    <li className="left"><a href={ml3} className="button ">{props.ml3.text}</a></li>
                </ul>
            </section>

        </div>

    </section>
  )
}

export default EmailBlock



