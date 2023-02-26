import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

const Navbar = () => {
  const router = useRouter();
  return (
    <nav
      className="navbar shadow navbar-expand-lg d-flex flex-column pb-0 sticky-top"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container pb-2">
        {/* <!-- Nav Logo --> */}
        <Link
          className="navbar-brand ps-0 d-flex align-items-center me-4 btn fs-5 color-trinary"
          href="/"
        >
          <img
            src={"/navbar/navbarLogo.png"}
            alt=""
            className="img-fluid small-logo"
          />
          <span className="text-purple fs-5 ms-2 fw-semibold">YuGawe</span>
        </Link>
        {/* <!-- End Nav Logo --> */}

        {/* <!-- Nav Menu Mobile Mode --> */}
        <div className="d-flex d-lg-none gap-2 align-items-center">
          <Link
            href="http://127.0.0.1:5500/Pages/my-bag/my-bag.html"
            className="btn fs-5 color-trinary"
          >
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>

          <Link
            href="/login/worker"
            className="btn bg-purple py-0 text-light py-1"
          >
            Login
          </Link>

          <Link
            href="/register/worker"
            className="btn btn-signup border border-1 btn color-trinary py-0 color-trinary py-1"
          >
            Sign up
          </Link>
        </div>
        {/* <!-- End Nav menu Mobile Mode --> */}

        <div className="navbar-collapse">
          {/* <!-- Search and Filtering --> */}
          {/* <div className="col-12 col-lg-7 d-flex mt-md-0">
            <div className="col-12">
              <div className="input-form d-flex position-relative me-2">
                <div className="search-input position-relative w-100 d-flex">
                  <input className="form-control me-2 rounded-pill w-100" type="text" placeholder="Search" aria-label="Search" value={""} onChange={(e) => setSearch(e.target.value)} />

                  <button className="btn position-absolute search-btn me-2 " onClick={searchSubmitHandler} type="submit">
                    <FontAwesomeIcon className="color-trinary" icon={faMagnifyingGlass} />
                  </button>
                </div>
                <div className="filter">
                  <button className="btn border-trinary border shadow-0" type="submit" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <FontAwesomeIcon className="color-trinary" icon={faFilter}></FontAwesomeIcon>
                  </button>
                </div>
              </div>
            </div>
          </div> */}
          {/* <!-- End Search and Filtering --> */}

          {/* <!-- Nav Menu Desktop Mode --> */}
          <div className="d-lg-flex d-none gap-3 ms-auto align-items-center">
            <Link
              href="/customers/login"
              className="btn bg-purple btn py-0 text-light py-1 px-3"
            >
              Login
            </Link>

            <Link
              href="/customers/register"
              className="btn btn-signup border border-1 btn color-trinary py-0 color-trinary py-1 px-3"
            >
              Register
            </Link>
          </div>
          {/* <!-- End Nav Menu Desktops Mode --> */}
        </div>
      </div>
      {router?.pathname == "/home" && (
        <div className="row bg-purple w-100 pb-3 pt-2">
          <div className="col-12">
            <div className={"container"}>
              <span className={"d-block fs-5 fw-semibold text-light"}>
                Top Jobs
              </span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
