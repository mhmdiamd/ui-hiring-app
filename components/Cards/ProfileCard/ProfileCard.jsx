import React from "react";
import style from "./ProfileCard.module.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";

const ProfileCard = ({ data }) => {
  return (
    <Card className={"border-0 shadow px-3 py-3"}>
      <Card.Img
        className={`${style.userPhoto} mx-auto img-fluid rounded-circle`}
        variant="top"
        src={data?.photo == 'photodefault.jpg' ? '/photodefault.png' : data?.photo}
      />
      <div
        className={`${style.editUser} d-block text-center text-secondary pt-1`}
      >
        {/* <FontAwesomeIcon icon={faPen} /> Edit */}
      </div>
      <Card.Body>
        <Card.Title>{data?.name}</Card.Title>
        <Card.Subtitle className="mb-2">{data?.jobdesk}</Card.Subtitle>
        <div className={`text-muted`}>
          <FontAwesomeIcon className={`mt-3 me-2`} icon={faLocationDot} />
          Banten, Indonesia
          <span className={`d-block mt-1`}>
            {data?.worker_category || "Unknown"}
          </span>
          <p className={"mt-4"}>
            {data?.description}
          </p>
        </div>
        <Link
          className={
            "w-100 py-2 text-decoration-none btn fw-semibold text-light bg-purple mt-2 border-0"
          }
          href={`/hire/${data?.id}`}
        >
          Hire
        </Link>
        <span className={"fs-4 fw-semibold d-block mt-3"}>Skills</span>
        <div className={`d-flex flex-wrap gap-2 mt-2`}>
          {/* Worker Skill */}
          {data?.worker_skills?.map((skill, i) => (
            <Button key={i} className={"btn btn-warning text-light"} href="#">
              {skill?.skill}
            </Button>
          ))}
        </div>

        <div className={`social-media mt-5`}>
          <div className={"d-flex gap-4 text-muted align-items-center mt-3"}>
            <FontAwesomeIcon className={"fs-5"} icon={faEnvelope} />
            <span className={"d-flex gap-3"}>{data?.active_email}</span>
          </div>

          <div className={"d-flex gap-4 text-muted align-items-center mt-3"}>
            <FontAwesomeIcon className={"fs-5"} icon={faEnvelope} />
            <span className={"d-flex gap-3"}>{data?.instagram}</span>
          </div>

          <div className={"d-flex gap-4 text-muted align-items-center mt-3"}>
            <FontAwesomeIcon className={"fs-5"} icon={faEnvelope} />
            <span className={"d-flex gap-3"}>{data?.github}</span>
          </div>

          <div className={"d-flex gap-4 text-muted align-items-center mt-3"}>
            <FontAwesomeIcon className={"fs-5"} icon={faEnvelope} />
            <span className={"d-flex gap-3"}>{data?.gitlab}</span>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProfileCard;
