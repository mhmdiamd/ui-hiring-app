import React from "react";
import style from "./ProfileCard.module.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const ProfileCard = () => {
  return (
    <Card className={"border-0 shadow-sm px-3 py-3"}>
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
        <p className="mb-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <Card.Text className={`text-muted`}>
          <FontAwesomeIcon className={`mt-3 me-2`} icon={faLocationDot} />
          Banten, Indonesia
        </Card.Text>
        <p className={"mt-4 text-muted"}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s.
        </p>

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
      </Card.Body>
    </Card>
  );
};

export default ProfileCard;
