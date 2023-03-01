import React, { useState } from "react";
import style from "./ProfileRecruter.module.css";
import BaseTemplate from "components/templates/base/BaseTemplate";
import Image from "next/image";
import Link from "next/link";

const Index = () => {
  return (
    <BaseTemplate>
      <div className={`${style.bgRecruter} row`}>
        <div className={"col-12 h-100 bg-purple position-relative"}>
          {/* <Image
            src={"/recruter/bg-recruter.jpg"}
            className={`${style.imageBackground} img-fluid`}
            alt={"background-recruter"}
            width={500}
            height={200}
          /> */}
          <span className={`${style.editText} text-light d-block`}>
            Edit Profile
          </span>
        </div>
      </div>
      <div className={`${style.rowContent} row`}>
        <div className={"col-12 d-flex justify-content-center"}>
          <Image
            src={"/recruter/bg-recruter.jpg"}
            className={`${style.imageProfile} img-fluid`}
            alt={"background-recruter"}
            width={150}
            height={150}
          />
        </div>
        <div className={"col-12 d-flex flex-column align-items-center"}>
          <span className={"fw-semibold fs-4"}>Muhamad Ilham Darmawan</span>
          <span className={"mt-2"}>Financial</span>
          <span className={"text-secondary mt-2"}>Banten, Indonesia</span>
        </div>
        <div className={"col-6 offset-3 d-flex flex-column align-items-center"}>
          <p className={"text-secondary mx-auto text-center mt-2"}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>

        <div
          className={
            "col-6 offset-3 d-flex flex-column align-items-center mb-4  "
          }
        >
          <Link
            href={"/profile/edit-recruter"}
            className={"btn text-light px-5 bg-purple"}
          >
            Edit Profile
          </Link>
        </div>

        <div className={"col-4 offset-5 d-flex flex-column"}>
          <span className={"text-secondary mt-2"}>example@gmail.com</span>
          <span className={"text-secondary mt-2"}>@instagram</span>
          <span className={"text-secondary mt-2"}>+62 1982 1232 123</span>
          <span className={"text-secondary mt-2"}>Muhamad Ilham Darmawan</span>
        </div>
      </div>
    </BaseTemplate>
  );
};

export default Index;
