import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={`bg-purple w-vh-100 pb-3 pt-5`}>
      <div className={"container"}>
        <div className={"row"}>
          <div className={"col-12 px-0 mb-3"}>
            <Link
              className="navbar-brand d-flex align-items-center btn fs-5"
              href="/"
            >
              <Image
                src={"/authpage/logo.png"}
                className="img-fluid small-logo"
                alt={''}
                width={150}
                height={150}
              />
              <span className="text-light fs-5 ms-2 fw-semibold">YuGawe</span>
            </Link>
          </div>
          <div className={"col-12 pb-5 border-0 border-bottom border-light"}>
            <div className={"row"}>
              <div className={"col-12 col-sm-6 col-md-4"}>
                <p className={"text-light"}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's.
                </p>
              </div>
            </div>
          </div>

          <div className={"col-12 pt-3 pb-3 d-flex justify-content-between"}>
            <span className={"copyright text-light"}>
              2023 Gawworld. All right reserved
            </span>
            <span className={"text-light d-flex gap-5"}>
              <Link className={"text-decoration-none text-light"} href={""}>
                Telepon
              </Link>
              <Link className={"text-decoration-none text-light"} href={""}>
                Email
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
