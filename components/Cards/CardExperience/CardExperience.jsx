import React from "react";
import style from "./CardExperience.module.css";
import Card from "react-bootstrap/Card";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const CardExperience = ({ data, photo, descriptionVisibility }) => {
  return (
    <div
      className={`${style.card} card py-3 px-2 border-0 rounded-0 min-w-100`}
    >
      <div className="row">
        <div className="col-12 col-sm-3 col-md-auto d-flex justify-content-center">
          <img
            src={data?.photo || photo}
            className={`${style.workerProfile} img-fluid`}
            alt="..."
          />
        </div>
        <div className="col-12 col-sm-8 col-md border-1 border-bottom">
          <div
            className={`${style.cardBody} card-body pt-0 px-0 d-flex flex-column`}
          >
            <span className={`${style.workerName} fs-5 fw-semibold`}>
              {data.position}
            </span>
            <span>{data.company_name}</span>
            <div className={`d-none d-sm-block text-secondary`}>
              <span className={`text-muted`}>
                <FontAwesomeIcon Icon={faLocationDot} /> July 2019 - January
                2020
                <span className={`ms-2`}>6 Months</span>
              </span>
            </div>
            <p className={`${style.description} ${descriptionVisibility ? 'd-none' : ''} mt-3`}>{data.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardExperience;
