gen_agrs_DashBoard (() => ({
  "component_type":"DashBoard",
}))

gen_agrs_OnePageHead ((title,sub_titile,btn1,btn2,btn3,btn4) => ({
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
}))


gen_agrs_PicPage ((title,sub_titile,col1,col2,col3) => ({
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
}))



gen_agrs_EmailBlock ((title,sub_titile,ml1,ml2,ml3) => ({
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
}))