import React from "react";
import style from "./ProfileCard.module.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";

const ProfileCard = () => {
  return (
    <Card className={"border-0 shadow px-3 py-3"}>
      <Card.Img
        className={`${style.userPhoto} mx-auto img-fluid rounded-circle`}
        variant="top"
        src="/home/userProfile.jpg"
      />
      <div
        className={`${style.editUser} d-block text-center text-secondary pt-1`}
      >
        <FontAwesomeIcon icon={faPen} /> Edit
      </div>
      <Card.Body>
        <Card.Title>Muhamad Ilham Darmawan</Card.Title>
        <Card.Subtitle className="mb-2">Software Engineer</Card.Subtitle>
        <Card.Text className={`text-muted`}>
          <FontAwesomeIcon className={`mt-3 me-2`} icon={faLocationDot} />
          Banten, Indonesia
          <span className={`d-block mt-1`}>Freelance</span>
          <p className={"mt-4"}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </Card.Text>
        <Link
          className={
            "w-100 py-2 text-decoration-none btn fw-semibold text-light bg-purple mt-2 border-0"
          }
          href="/hire/12345"
        >
          Hire
        </Link>
        <span className={"fs-4 fw-semibold d-block mt-3"}>Skills</span>
        <div className={`d-flex flex-wrap gap-2 mt-2`}>
          <Button className={"btn btn-warning text-light"} href="#">
            PHP
          </Button>
          <Button className={"btn btn-warning text-light"} href="#">
            Java
          </Button>
          <Button className={"btn btn-warning text-light"} href="#">
            Javascript
          </Button>
          <Button className={"btn btn-warning text-light"} href="#">
            Python
          </Button>
          <Button className={"btn btn-warning text-light"} href="#">
            Golang
          </Button>
          <Button className={"btn btn-warning text-light"} href="#">
            C++
          </Button>
          <Button className={"btn btn-warning text-light"} href="#">
            C
          </Button>
          <Button className={"btn btn-warning text-light"} href="#">
            C#
          </Button>
        </div>

        <div className={`social-media mt-5`}>
          <div className={"d-flex gap-4 text-muted align-items-center mt-3"}>
            <FontAwesomeIcon className={"fs-5"} icon={faEnvelope} />
            <span className={"d-flex gap-3"}>darmawanilham34@gmail.com</span>
          </div>

          <div className={"d-flex gap-4 text-muted align-items-center mt-3"}>
            <FontAwesomeIcon className={"fs-5"} icon={faEnvelope} />
            <span className={"d-flex gap-3"}>darmawanilham34@gmail.com</span>
          </div>

          <div className={"d-flex gap-4 text-muted align-items-center mt-3"}>
            <FontAwesomeIcon className={"fs-5"} icon={faEnvelope} />
            <span className={"d-flex gap-3"}>darmawanilham34@gmail.com</span>
          </div>

          <div className={"d-flex gap-4 text-muted align-items-center mt-3"}>
            <FontAwesomeIcon className={"fs-5"} icon={faEnvelope} />
            <span className={"d-flex gap-3"}>darmawanilham34@gmail.com</span>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProfileCard;
