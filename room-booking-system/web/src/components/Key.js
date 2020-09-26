import React from 'react'

const Key = props => (
  <div className="sidebar__box--key key">
    <h3 className="header__heading header__heading--sidebar">Key</h3>
    <div className="key__group">
      <span className="key__square key__square--bu1"></span>
      <p className="key__description">固定電影聚會</p>
    </div>
    <div className="key__group">
      <span className="key__square key__square--bu2"></span>
      <p className="key__description">固定桌遊活動</p>
    </div>
    <div className="key__group">
      <span className="key__square key__square--bu3"></span>
      <p className="key__description">互惠合作</p>
    </div>
    <div className="key__group">
      <span className="key__square key__square--bu4"></span>
      <p className="key__description">經常性遊客</p>
    </div>
    <div className="key__group">
      <span className="key__square key__square--bu5"></span>
      <p className="key__description">新進遊客</p>
    </div>
  </div>
)

export default Key