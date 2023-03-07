import React from "react";
import style from "./MessageListCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faBell, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faRightFromBracket,
  faCaretDown,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";

const MessageListCard = ({ data, index }) => {
  return (
    <div
      data-bs-target={`#exampleModalToggle${data.id}`} data-bs-toggle="modal"
      className={`${style.card} card px-2 border-0 border-bottom rounded-0 pointer min-w-100`}
    >
      <div className="row">
        <div className="col-auto d-flex justify-content-center align-items-center">
          <FontAwesomeIcon className={`fs-1 
          ${data?.read_status == 1 ? 'text-danger' : 'text-secondary'}`} icon={faEnvelope} />
        </div>
        <div className="col">
          <div
            className={`${style.cardBody} card-body px-0 d-flex flex-column`}
          >
            <span className={`${style.workerName} fs-5 fw-semibold`}>
              {data?.purpose}
            </span>
            <span className="text-secondary">
              {data?.recruter_name}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageListCard;
