import React from "react";
import style from "./CardExperience.module.css";
import Card from "react-bootstrap/Card";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const CardExperience = ({
  photo,
  jobDesk,
  companyName,
  careerStart,
  careerEnd,
  description,
}) => {
  return (
    <div
      className={`${style.card} card py-3 px-2 border-0 rounded-0 min-w-100`}
    >
      <div className="row">
        <div className="col-12 col-sm-3 col-md-auto d-flex justify-content-center">
          <img
            src={photo}
            className={`${style.workerProfile} img-fluid`}
            alt="..."
          />
        </div>
        <div className="col-12 col-sm-8 col-md border-1 border-bottom">
          <div
            className={`${style.cardBody} card-body pt-0 px-0 d-flex flex-column`}
          >
            <span className={`${style.workerName} fs-5 fw-semibold`}>
              Sotware Engineer
            </span>
            <span>Tokopedia</span>
            <div className={`d-none d-sm-block text-secondary`}>
              <span className={`text-muted`}>
                <FontAwesomeIcon Icon={faLocationDot} /> July 2019 - January
                2020
                <span>6 Months</span>
              </span>
            </div>
            <p className={`${style.description} mt-3`}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardExperience;
