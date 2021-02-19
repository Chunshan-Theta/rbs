import React from 'react'

const PageInfo = (props) => {

  return (
    <section className="container">
      此些資訊不會顯示在對外網頁上，是作為SEO等等功用<br/>
      標題：{props.title}<br/>
      說明：{props.description}<br/>
      關鍵字：{props.keyword}<br/>
    </section>
  )
}

export default PageInfo
