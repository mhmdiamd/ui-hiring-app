import React from "react";
import Link from "next/link";
import style from "./Authentication.module.css";

const AuthenticationLayout = ({ children, title, description }) => {
  return (
    <main className="overflow-hidden">
      <div className={`${style.authContainer} container-fluid loginPage`}>
        <div className="row h-100 d-flex">
          <div
            className={`col-md-6 ${style.sideLeft} position-fixed p-4 min-vh-100 d-md-flex d-none`}
          >
            <div className="row">
              <div className="col-12 d-flex align-items-center gap-2">
                <img className={`${style.imgLogo}`} src="/authpage/logo.png" />
                <span className={"fw-semibold text-light"}>YuGawe</span>
              </div>
              <div className="col-12 col-lg-9 h-100 d-flex ps-2 ps-lg-5 align-items-center">
                <span className="fs-1 fw-semibold text-light">
                  Find <span className="text-purple">talented </span>& <span className="text-purple">best</span> developers in various fields skill
                </span>
              </div>
            </div>
          </div>
          <div
            className={`col-md-6 ${style.sideRight} offset-md-6 pt-3 min-vh-100 d-grid align-items-center`}
          >
            <div className="inputGroup">
              <div className={`${style.inputField} text-start mt-4`}>
                <div className="row justify-content-center">
                  <div className="px-0 col-lg-10 col-md-9 col-sm-8 col-10">
                    <h1 className="">{title}</h1>
                    <p className="mb-3">{description}</p>
                    {children}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AuthenticationLayout;
