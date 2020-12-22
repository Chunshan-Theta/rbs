import React from 'react'

//
import DashBoard from '../components/dynamic/ViewCalendar'
import EmailBlock from '../components/dynamic/EmailBlock'
import PicPage from '../components/dynamic/PicPage'
import OnePageHead from '../components/dynamic/OnePageHeader'
import LeftPicRightWord from '../components/dynamic/LeftPicRightWord'
import LeftInstaRightWord from '../components/dynamic/LeftInstaRightWord'


//
import Edit_OnePageHead from '../components/dynamic/Edit_OnePageHeader'
import Edit_PicPage from '../components/dynamic/Edit_PicPage'
import Edit_DashBoard from '../components/dynamic/Edit_ViewCalendar'
import Edit_EmailBlock from '../components/dynamic/Edit_EmailBlock'
import Edit_LeftPicRightWord from '../components/dynamic/Edit_LeftPicRightWord'



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

function gen_agrs_LeftPicRightWord (title,sub_titile,image,content){return({
  "component_type":"LeftPicRightWord",
	"title": title,
	"sub_titile": sub_titile,
	"image":{
		"text": image.text,
		"url": image.url
	},
	"content":{
		"text": content.text,
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

function gen_component_n_editor(data){
	let component_type = data['component_type']? data['component_type']: null;
	console.log("data",data)
	switch(component_type){
		case "OnePageHead":
			return [OnePageHead(data),Edit_OnePageHead(data)]
			break;
		case "PicPage":
			return [PicPage(data),Edit_PicPage(data)]
			break;
		case "DashBoard":
		  return [DashBoard(data), Edit_DashBoard(data)]
		  break;
  
		case "EmailBlock":
		  return [EmailBlock(data),Edit_EmailBlock(data)]
		  break;
        case "LeftPicRightWord":
          return [LeftPicRightWord(data),Edit_LeftPicRightWord(data)]
		  break;
		case "LeftInstaRightWord":
			return [LeftInstaRightWord(data)]
			break;  
		default:
		  return(<h1>`Not Fount Component! {component_type}`</h1>)
	}
  
	
}

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

		case "LeftPicRightWord":
		  return LeftPicRightWord(data)
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
	"title": "商店名稱",
	"sub_titile": "商店說明之副標題",
	"btn1":{
		"text": "連結1",
		"url": "./"
	},
	"btn2":{
		"text": "連結2",
		"url": "./"
	},
	"btn3":{
		"text": "連結3",
		"url": "./"
	},
	"btn4":{
		"text": "連結4",
		"url": "./"
	}
}
const agrs_Demo_PicPage = {
"component_type":"PicPage",
	"title": "關於 商店",
	"sub_titile": "關於 商店說明之副標題",
	"col1":{
		"text": "標語1",
		"url": "https://images.unsplash.com/photo-1608195156025-dfbae92b6943?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
	},
	"col2":{
		"text": "標語2",
		"url": "https://images.unsplash.com/photo-1608195156025-dfbae92b6943?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
	},
	"col3":{
		"text": "標語3",
		"url": "https://images.unsplash.com/photo-1608195156025-dfbae92b6943?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
	}
}

const agrs_Demo_LeftPicRightWord = {
    "component_type":"LeftPicRightWord",
	"title": "關於 商店",
	"sub_titile": "關於 商店說明之副標題",
	"image":{
		"text": "標語1",
		"url": "https://images.unsplash.com/photo-1608195156025-dfbae92b6943?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
	},
	"content":{
		"text": "標語2",
	}
}

const agrs_Demo_EmailBlock = {
"component_type":"EmailBlock",
	"title": "電子郵件聯絡方式",
	"sub_titile": "電子郵件聯絡之說明方式",
	"ml1":{
	"text": "聯絡目的 一",
	"mail":"your.mail.adress@mail.com",
	"subject":"電子郵件主旨1",
	"body":"預設內文1"
	},
	"ml2":{
	"text": "聯絡目的 二",
	"mail":"your.mail.adress@mail.com",
	"subject":"電子郵件主旨2",
	"body":"預設內文2"
	},
	"ml3":{
	"text": "聯絡目的 三",
	"mail":"your.mail.adress@mail.com",
	"subject":"電子郵件主旨3",
	"body":"預設內文3"
	}
}

export {
    gen_agrs_EmailBlock,
    gen_agrs_PicPage,
    gen_agrs_OnePageHead,
    gen_component_n_editor,
    gen_component,
    gen_agrs_LeftPicRightWord,
    agrs_Demo_OnePageHead,
    agrs_Demo_DashBoard,
    agrs_Demo_PicPage,
    agrs_Demo_EmailBlock,
    agrs_Demo_LeftPicRightWord,
}



