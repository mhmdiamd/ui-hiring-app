import React from "react";
import style from "./WorkerCardList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";

const WorkerCardList = ({ data }) => {
  return (
    <div
      className={`${style.card} card py-3 px-2 border-0 border-bottom shadow rounded-0 min-w-100`}
    >
      <div className="row">
        <div className="col-12 col-sm-3 col-md-auto d-flex justify-content-center align-items-center">
          <Image
            src={data?.photo == 'photodefault.jpg' ? '/photodefault.png' : data?.photo}
            className={`${style.workerProfile} ms-md-4 img-fluid`}
            alt="..."
            width={120}
            height={120}
          />
        </div>
        <div className="col-12 col-sm-9 col-md ">
          <div
            className={`${style.cardBody} card-body px-0 d-flex flex-column`}
          >
            <span className={`${style.workerName} fs-5 fw-semibold`}>
              {data?.name}
            </span>
            <span className="text-secondary">
              {data?.job_desk || "Software Engineer"}
            </span>
            <span className={`d-none d-sm-block text-secondary`}>
              <small className={`text-muted`}>
                <FontAwesomeIcon Icon={faLocationDot} />{" "}
                {data?.address ? data?.address : "Banten, Indonesia"}
              </small>
            </span>
            <div
              className={`${style.workerSkills} skills mt-2 d-flex flex-wrap gap-2`}
            >
              {data?.worker_skills?.map((data, i) => {
                if (i < 3) {
                  return (
                    <Link
                      key={i}
                      className={
                        "text-decoration-none py-0 text-center text-light btn btn-warning pb-1"
                      }
                      href={""}
                    >
                      {data.skill}
                    </Link>
                  );
                }
              })}
            </div>
          </div>
        </div>
        <div className="col-9 d-none offset-sm-3 offset-md-0 col-md-auto d-sm-flex align-items-center">
          <Link
            href={`/worker/${data.id}`}
            className={"btn text-light bg-purple me-5"}
          >
            See Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WorkerCardList;
