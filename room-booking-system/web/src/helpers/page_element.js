import React from 'react'

//
import DashBoard from '../components/dynamic/ViewCalendar'
import EmailBlock from '../components/dynamic/EmailBlock'
import PicPage from '../components/dynamic/PicPage'
import OnePageHead from '../components/dynamic/OnePageHeader'

function gen_agrs_DashBoard (){return({
  "component_type":"DashBoard",
})}

function gen_agrs_OnePageHead (title,sub_titile,btn1,btn2,btn3,btn4){return({
  "component_type":"OnePageHead",
	"title": title,
	"sub_titile": sub_titile,
	"btn1":{
		"text": btn1.text,
		"url": btn1.url
	},
	"btn2":{
		"text": btn2.text,
		"url": btn2.url
	},
	"btn3":{
		"text": btn3.text,
		"url": btn3.url,
	},
	"btn4":{
		"text": btn4.text,
		"url": btn4.url,
	}
})}


function gen_agrs_PicPage (title,sub_titile,col1,col2,col3){return({
  "component_type":"PicPage",
	"title": title,
	"sub_titile": sub_titile,
	"col1":{
		"text": col1.text,
		"url": col1.url
	},
	"col2":{
		"text": col2.text,
		"url": col2.url
	},
	"col3":{
		"text": col3.text,
		"url": col3.url
	}
})}



function gen_agrs_EmailBlock (title,sub_titile,ml1,ml2,ml3){return({
  "component_type":"EmailBlock",
	"title": title,
	"sub_titile": sub_titile,
	"ml1":{
    "text": ml1.text,
    "mail":ml1.mail,
    "subject":ml1.subject,
    "body":ml1.body
  },
  "ml2":{
    "text": ml2.text,
    "mail":ml2.mail,
    "subject":ml2.subject,
    "body":ml2.body
  },
  "ml3":{
    "text": ml3.text,
    "mail":ml3.mail,
    "subject":ml3.subject,
    "body":ml3.body
	}
})}


function gen_component(data){
	let component_type = data['component_type']? data['component_type']: null;
	console.log("data",data)
	switch(component_type){
		case "OnePageHead":
			return OnePageHead(data)
			break;
		case "PicPage":
			return PicPage(data)
			break;
		case "DashBoard":
		  return DashBoard(data)
		  break;
  
		case "EmailBlock":
		  return EmailBlock(data)
		  break;
			
		default:
		  return(<h1>`Not Fount Component! {component_type}`</h1>)
	}
  
	
  }
const agrs_Demo_DashBoard = {
"component_type":"DashBoard",
}
const agrs_Demo_OnePageHead = {
"component_type":"OnePageHead",
	"title": "多一個空間",
	"sub_titile": "下午茶 ｜ 桌上遊戲 ｜ 電影觀賞",
	"btn1":{
		"text": "本月活動",
		"url": "#event"
	},
	"btn2":{
		"text": "多多看電影",
		"url": "https://ddm.com.tw/"
	},
	"btn3":{
		"text": "關於",
		"url": "#menu"
	},
	"btn4":{
		"text": "紛絲專頁",
		"url": "https://www.facebook.com/onemoreplace2019/"
	}
}
const agrs_Demo_PicPage = {
"component_type":"PicPage",
	"title": "關於 多一個空間",
	"sub_titile": "好吃，好玩，好開心",
	"col1":{
		"text": "三兩好友，最佳戰友",
		"url": "https://static.accupass.com/eventintro/2010181959479011781510.jpg"
	},
	"col2":{
		"text": "喝咖啡？不如揪個團",
		"url": "https://static.accupass.com/eventintro/2010181947321953973068.jpg"
	},
	"col3":{
		"text": "週末假日的最佳選擇",
		"url": "https://static.accupass.com/eventintro/2010181948187978925800.jpg"
	}
}

const agrs_Demo_EmailBlock = {
"component_type":"EmailBlock",
	"title": "聯絡方式",
	"sub_titile": "想做點什麼呢？",
	"ml1":{
	"text": "預約空間用餐",
	"mail":"ddm.cooperation@gmail.com",
	"subject":"我想預約空間用餐",
	"body":"我想預約預約空間用餐%0D%0A姓名：%0D%0A時間：%0D%0A人數："
	},
	"ml2":{
	"text": "預約空間舉辦活動",
	"mail":"ddm.cooperation@gmail.com",
	"subject":"我想預約空間舉辦活動",
	"body":"我想預約空間舉辦活動%0D%0A姓名：%0D%0A時間：%0D%0A人數："
	},
	"ml3":{
	"text": "參加桌遊活動",
	"mail":"ddm.cooperation@gmail.com",
	"subject":"我想參加桌遊活動",
	"body":"我想預參加桌遊活動%0D%0A姓名：%0D%0A時間：%0D%0A人數："
	}
}

export { gen_component, agrs_Demo_OnePageHead, agrs_Demo_DashBoard, agrs_Demo_PicPage,agrs_Demo_EmailBlock}

