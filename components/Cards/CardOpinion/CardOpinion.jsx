import React from "react";
import Card from "react-bootstrap/Card";
import style from "./CardOpinion.module.css";

function CardOpinion({ data, i }) {

  const staticOpinion = [
    'YuGawe is very helpful in finding a suitable job. The process is easy and the customer support team is responsive. Thank you Hiring Jobs!',
    'I am very impressed with YuGawe! The system is very easy to use and I can find suitable jobs easily. The customer support team was also very helpful in answering my questions.',
    'I highly recommend YuGawe for job seekers. The system is very efficient and I get many job opportunities according to my skills.'
  ]

  return (
    <Card className={`${style.card} border-0 shadow px-4 pt-4 pb-3`}>
      <Card.Img
        className={`${style.userPhoto} mx-auto rounded-circle`}
        variant="top"
        src={`https://source.unsplash.com/random/120x12${0 + i}/?man`}
      />
      <span
        className={`${style.editUser} d-block text-center text-secondary pt-1`}
      ></span>
      <Card.Body className={style.cardBody}>
        <Card.Title>{data.name}</Card.Title>
        <Card.Subtitle className="mb-2">{data.jobdesk}</Card.Subtitle>
        <Card.Text className={`text-muted`}>
          {staticOpinion[i]}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardOpinion;
