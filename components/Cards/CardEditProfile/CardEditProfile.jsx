import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import style from "./CardEditProfile.module.css";

const CardEditProfile = () => {
  return (
    <>
      <Card className={"border-0 shadow px-3 py-3"}>
        <Card.Img
          className={`${style.userPhoto} mx-auto img-fluid rounded-circle`}
          variant="top"
          src="/home/userProfile.jpg"
        />
        <span
          className={`${style.editUser} d-block text-center text-secondary pt-1`}
        >
          <FontAwesomeIcon icon={faPen} /> Edit
        </span>
        <Card.Body>
          <Card.Title>Muhamad Ilham Darmawan</Card.Title>
          <Card.Subtitle className="mb-2">Web Developer</Card.Subtitle>
          <Card.Text className={`text-muted`}>
            <FontAwesomeIcon className={`mt-3 me-2`} icon={faLocationDot} />
            Banten, Indonesia
            <span className={`d-block mt-1`}>Freelance</span>
          </Card.Text>
        </Card.Body>
      </Card>
      <Button
        className={"w-100 py-2 fw-semibold text-light bg-purple mt-3 border-0"}
        href="#"
      >
        Save
      </Button>
      <Button
        className={"w-100 py-2 fw-semibold btn-purple bg-transparent mt-2"}
        href="#"
      >
        Cancel
      </Button>
    </>
  );
};

export default CardEditProfile;
