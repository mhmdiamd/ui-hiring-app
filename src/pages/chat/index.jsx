import React from 'react'
import CardSectionChat from 'components/Cards/CardSectionChat/CardSectionChat'
import ChatLayout from 'components/templates/Chat/ChatLayout'
import style from './Chat.module.css'
import CardListContact from 'components/Cards/CardListContact/CardListContact'
import SendMessageBar from 'components/SendMessageBar/SendMessageBar'

const Chat = () => {
  return (
    <ChatLayout 
      classLeft={`col-12 col-md-4`}
      classRight={`col-12 col-md-8`}
      leftside={
        <CardSectionChat header={true} classBody={`pe-4`}>
          <CardListContact/>
          <CardListContact/>
          <CardListContact/>
        </CardSectionChat>
      }
    >

    <CardSectionChat 
      header={true} 
      className={`${style.sectionChat} position-relative overflow-hidden`}
      classBody={`${style.bodyChat}`}
    >
      {/* Chat Data */}
      <div className="row d-flex align-content-end pb-2">
        <div className="col-12">
          <p className={`${style.chat} ${style.peopleChat} mb-2 bg-light py-1 px-3`}>Hello World! Red</p>
        </div>
        <div className="col-12 d-flex justify-content-end">
          <p className={`${style.chat} ${style.myChat} bg-purple text-light py-1 px-3`}>Hello World!</p>
        </div>
        <div className="col-12 d-flex justify-content-end">
          <p className={`${style.chat} ${style.myChat} bg-purple text-light py-1 px-3`}>Hello World!</p>
        </div>
        <div className="col-12">
          <p className={`${style.chat} ${style.peopleChat} mb-2 bg-light py-1 px-3`}>Hello World! Red</p>
        </div>
        <div className="col-12 d-flex justify-content-end">
          <p className={`${style.chat} ${style.myChat} bg-purple text-light py-1 px-3`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it </p>
        </div>
      </div>
      <div className={`${style.inputBar} row bg-light border-1 w-100 border-top position-absolute`}>
        <div className="col-12 px-0 ms-0 py-2 ps-2 ms-0 pe-2">
          <SendMessageBar/>
        </div>
      </div>
    </CardSectionChat>

    </ChatLayout>
  )
}

export default Chat