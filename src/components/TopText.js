import React from 'react'
import '../css/TopText.scss'
function TopText ({title, period, paraOne, paraTwo, soon}) {
    return (
      <div className="top-text">
        <h1 className="top-text__title">{title}<span>{period}</span></h1>
        <p className="top-text__para-one">{paraOne} <span>{soon}</span></p>
    <p className="top-text__para-two">{paraTwo}</p>
      </div>
    )
  }


export default TopText
