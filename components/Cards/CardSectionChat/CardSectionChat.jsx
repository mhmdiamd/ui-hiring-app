import React from "react";
import Card from "react-bootstrap/Card";
import style from "./CardSectionChat.module.css";
import Image from "next/image";

const CardSectionChat = ({ data, children, header, className, classBody }) => {
  return (
    <Card className={`${className} border-0 shadow mb-3`}>
      {header && (
        <Card.Header className={`${style.cardHeader} px-3 py-2 d-flex gap-3 align-items-center fw-semibold`} as="h5">
          <Image
            className={`rounded-circle`}
            src={`/home/userProfile.jpg`}
            alt={'user-profile'}
            width={40}
            height={40}
          />
          <span className={'text-dark'}>User Name</span>
        </Card.Header>
      )}
      <Card.Body className={`pt-3 pb-2 ${classBody}`}>{children}</Card.Body>
    </Card>
  );
};

export default CardSectionChat;
