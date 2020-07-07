import React from 'react';
import '../css/TopText.scss';

function TopText ({title, period, paraOne, paraTwo, soon}){
  return (
  <div className="text-block">
    <h1 className="text-block__title">{title}<span>{period}</span></h1>
    <p className="text-block__para-one">{paraOne}<span>{soon}</span></p>
    <p className="text-block__para-two">{paraTwo}</p>
  </div>
  )
}

export default TopText
