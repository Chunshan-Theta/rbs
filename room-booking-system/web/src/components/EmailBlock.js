import React from 'react'
import ReactModal from 'react-modal'
//<a href={`mailto:${props.user}?subject=我想預約桌遊活動&body=我想預約桌遊活動%0D你好`} className="button">Contact</a>
const EmailBlock = (props) => {

  return (
    <div>
       <a href={`mailto:${props.email_address}?subject=${props.email_subject}&body=${props.email_body}`} className="mail_button">{props.btn_title}</a>
    </div>
  )
}
export default EmailBlock
