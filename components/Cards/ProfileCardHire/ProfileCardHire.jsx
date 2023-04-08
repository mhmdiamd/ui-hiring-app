import React from "react";
import style from "./ProfileCard.module.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const ProfileCard = ({data}) => {
  return (
    <Card className={"border-0 shadow-sm px-3 py-3"}>
      <Card.Img
        className={`${style.userPhoto} mx-auto img-fluid rounded-circle`}
        variant="top"
        src={data?.photo == 'photodefault.jpg' ? '/photodefault.png' : data?.photo}
      />
 
      <Card.Body>
        <Card.Title>{data?.name}</Card.Title>
        <p className="mb-2">
         {data?.description}
        </p>
        <Card.Text className={`text-muted`}>
          <FontAwesomeIcon className={`mt-3 me-2`} icon={faLocationDot} />
          {data?.address ? data.address : 'indonesia'}
        </Card.Text>

        <span className={"fs-4 fw-semibold d-block mt-3"}>Skills</span>
        <div className={`d-flex flex-wrap gap-2 mt-2`}>
          {data?.worker_skills?.map((skill, i) => (
            <Button key={i} className={"btn btn-warning text-light"} href="#">
              {skill.skill}
            </Button>
          ))}  
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProfileCard;
