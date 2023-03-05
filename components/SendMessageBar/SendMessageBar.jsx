import React, { useState } from 'react'
import style from './SendMessageBar.module.css'



const SendMessageBar = ({onclick, className}) => {
  const [message, setMessage] = useState("")

  const sendMessageHandler = (e) => {
    onclick(message)
  }
  return (
    <div className={`${style.containerInput} ${className} d-flex w-100 gap-2`}>
      <div className="form-group d-flex position-relative align-items-center w-100">
        <input 
          className='form-control rounded-pill w-100' 
          type="text" 
          name='inputChat' 
          placeholder={'Text here ....'}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className={`${style.utilsGroup} d-flex gap-2 position-absolute align-items-center`}>
          <i className="fa-solid fa-image text-secondary pointer"></i>
          <i className="fa-solid fa-paperclip text-secondary pointer"></i>
        </div>
      </div>

      <i 
        className="fa-solid fa-paper-plane bg-purple p-3 text-light rounded-circle pointer"
        onClick={sendMessageHandler}  
      ></i>
    </div>
  )
}

export default SendMessageBar