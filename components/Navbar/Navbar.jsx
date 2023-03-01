import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {useDispatch} from 'react-redux'
import { logout } from "@/app/api/authSlice";

import {
  faShoppingCart,
  faFilter,
  faMagnifyingGlass,
  faRightFromBracket,
  faCaretDown,
  faUser,
  faTableColumns,
} from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
  const dispatch = useDispatch()
  const router = useRouter();
  const [auth, setAuth] = useState(false);

  const logoutHandler = (e) => {
    if(confirm('are you sure to logout?')){
      dispatch(logout())
      return router.push('/login/worker')
    }
  }

  useEffect(() => {
    if(localStorage.getItem('token')){
      setAuth(true)
    }
  }, [auth])

  return (
    <nav
      className="navbar navbar-expand-lg d-flex flex-column pb-0 sticky-top"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container pb-2">
        {/* <!-- Nav Logo --> */}
        <Link
          className="navbar-brand ps-0 d-flex align-items-center me-4 btn fs-5 color-trinary"
          href="/home"
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
        {auth ? (
                  <div className="d-flex gap-3 ms-auto">
                  <Link
                    href=""
                    className="btn fs-5 color-trinary btn fs-5 color-trinary"
                  >
                    <FontAwesomeIcon
                      className="color-trinary"
                      icon={faEnvelope}
                    ></FontAwesomeIcon>
                  </Link>
        
                  
                  <Link href="" className="color-trinary btn fs-5">
                    <FontAwesomeIcon
                      className="color-trinary"
                      icon={faBell}
                    ></FontAwesomeIcon>
                  </Link>

                  <button className="btn bg-transparent border-0 color-trinary" onClick={logoutHandler}>
                    Logout
                  </button>
                </div>
        ) : (
          <div className="d-flex gap-2 align-items-center">
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
        )}

       
        {/* <!-- End Nav menu Mobile Mode --> */}

      </div>
      {router?.pathname == "/worker" && (
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
