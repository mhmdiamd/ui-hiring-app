import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import style from "./CardOpinion.module.css";

function CardOpinion({ data }) {
  return (
    <Card className={`${style.card} border-0 shadow px-4 py-4`}>
      <Card.Img
        className={`${style.userPhoto} mx-auto rounded-circle`}
        variant="top"
        src={data?.photo == 'photodefault.jpg' ? '/photodefault.png' : data?.photo}
      />
      <span
        className={`${style.editUser} d-block text-center text-secondary pt-1`}
      ></span>
      <Card.Body className={style.cardBody}>
        <Card.Title>{data.name}</Card.Title>
        <Card.Subtitle className="mb-2">{data.jobdesk}</Card.Subtitle>
        <Card.Text className={`text-muted`}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardOpinion;
