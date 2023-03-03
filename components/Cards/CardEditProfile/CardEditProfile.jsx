import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import style from "./CardEditProfile.module.css";

const CardEditProfile = ({onclick, data}) => {

  const saveHandler = (e) => {
    onclick(e)
  }
  return (
    <>
      <Card className={"border-0 shadow px-3 py-3"}>
        <Card.Img
          className={`${style.userPhoto} mx-auto img-fluid rounded-circle`}
          variant="top"
          src={data?.photo == 'photodefault.jpg' ? '/photodefault.png' : data?.photo}
        />
        <span
          className={`${style.editUser} d-block text-center text-secondary pt-1`}
        >
          <FontAwesomeIcon icon={faPen} /> Edit
        </span>
        <Card.Body>
          <Card.Title>{data?.role == 'worker' ? data?.name : data?.company_name}</Card.Title>
          <Card.Subtitle className="mb-2">{data?.role == 'worker' ? data?.job_desk : data?.company_field}</Card.Subtitle>
          <Card.Text className={`text-muted`}>
            {data?.address && (
              <span>
                <FontAwesomeIcon className={`mt-3 me-2`} icon={faLocationDot} /> {data?.address}
              </span>
            )}
            <span className={`d-block mt-1`}>{data?.category_worker}</span>
          </Card.Text>
        </Card.Body>
      </Card>
      <Button
        className={"w-100 py-2 fw-semibold text-light bg-purple mt-3 border-0"}
        href="#"
        onClick={saveHandler}
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
