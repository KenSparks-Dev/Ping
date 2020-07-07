import React from 'react';
import '../css/NotifyMe.scss';

function NotifyMe({buttonCopy}) {
  return (
  <div>
    <form className="form">
      <input className="form__input" type="email" placeholder="Your email address"/>
      <button className="form__button">{buttonCopy}</button>
    </form>
  </div>
  )
}

export default NotifyMe
