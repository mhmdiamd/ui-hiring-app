import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faRightFromBracket,
  faCaretDown,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";

import { logout, setCredentials } from "@/app/api/authSlice";
import { useGetDataUserLoginQuery, useLogoutUserLoginMutation } from "@/features/auth/userApi";
import { useGetMessageWorkerQuery, useGetMessageRecruterQuery, useUpdateMessageByIdMutation } from "@/features/message/messageApi";
import MessageListCard from '../Cards/MessageListCard/MessageListCard'
import style from './Navbar.module.css'

const Navbar = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector(state => state.auth)
  const [loading, setLoading] = useState(false)
  const [logoutUserLogin, {isLoading: isLoadingUserLogout}] = useLogoutUserLoginMutation()

  const {data, isLoading: isLoadingGetDataUserLogin} = useGetDataUserLoginQuery()
  const {data: messages, isLoading: isLoadingMessage} = useGetMessageWorkerQuery({}, {skip: data?.data?.role == 'worker' ? false : true})

  const [updateMessageById, { isLoading: isLoadingUpdateMessage}] = useUpdateMessageByIdMutation()
  const [auth, setAuth] = useState(false);


  const logoutHandler = async (e) => {
    if (confirm("are you sure to logout?")) {
      await logoutUserLogin()
      dispatch(logout());
      return router.push("/login/worker");
    }
  };
  
  const openMessageHandler = async (id, readStatus) => {
    if(readStatus != 2) {
      await updateMessageById({id, data: {read_status : 2}})
    }
  }

  useEffect(() => {
    if (localStorage.getItem("token")) {
      if(!user.user) {
        dispatch(setCredentials({
          user: data?.data,
          token: localStorage.getItem("token")
        }))
      }
      setAuth(true);
    }
  }, [auth, user, data]);


  return (
    <>
    <nav
      className="navbar navbar-expand-lg d-flex flex-column pb-0 sticky-top" style={{background: "#ffffff"}}
    >
      <div className="container pb-2">
        {/* <!-- Nav Logo --> */}
        <Link
          className="navbar-brand ps-0 d-flex align-items-center me-4 btn fs-5 text-dark"
          href="/home"
          shallow={true}
        >
          <Image
            src={"/navbar/navbarLogoPink.png"}
            alt="logo-image"
            className="img-fluid small-logo"
            width={50}
            height={50}
          />
          <span className="text-dark fs-5 ms-2 fw-semibold">YuGawe</span>
        </Link>
        {/* <!-- End Nav Logo --> */}

        {/* <!-- Nav Menu Mobile Mode --> */}
        {auth ? (
          <div className="d-flex gap-2 ms-auto">
            <Link
              href=""
              className={`btn fs-5 text-light btn position-relative text-light`}
              data-bs-target="#exampleModalToggle" data-bs-toggle="modal"
            >
              <FontAwesomeIcon 
                className="text-dark"
                icon={faEnvelope}
              ></FontAwesomeIcon>
              {messages?.total > 0 && (
                <span className={`${style.messageNotification} p-1 rounded-circle d-flex justify-content-center align-items-center bg-danger text-light`}>{messages?.total}</span>
              )} 
            </Link>

            <Link href="" className="text-light btn fs-5">
              <FontAwesomeIcon
                className="text-dark"
                icon={faBell}
              ></FontAwesomeIcon>
            </Link>

            <div className="dropdown navbar-profile profile">
              <div
                className="img-group d-flex align-items-center"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <Image
                  src={
                    isLoadingGetDataUserLogin ? '/photodefault.png' : 
                    data?.data?.photo == 'photodefault.jpg' ? '/photodefault.png' : data?.data?.photo}
                  className={`me-2 rounded-circle dropdown-toggle`}
                  alt="profil-user"
                  width={40}
                  height={40}
                />
                <FontAwesomeIcon
                  className="fs-4 text-dark"
                  icon={faCaretDown}
                />
              </div>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <Link href={`/profile/edit-${data?.data?.role}`} className="dropdown-item">
                    <FontAwesomeIcon className="me-2" icon={faUser} /> Profile
                  </Link>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    type="button"
                    onClick={logoutHandler}
                  >
                    <FontAwesomeIcon
                      className="me-2"
                      icon={faRightFromBracket}
                    />{" "}
                    Logout
                  </button>
                </li>
              </ul>
            </div>
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
              className="btn btn-signup border border-1 btn py-0 py-1"
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

    <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalToggleLabel">
              <FontAwesomeIcon data-bs-target="#exampleModalToggle" data-bs-toggle="modal"
                icon={faEnvelope}
              ></FontAwesomeIcon> Your Message!</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {messages?.data?.map((message,i) => (
              <div key={i} onClick={() => openMessageHandler(message.id, message.read_status)}>
                <MessageListCard data={message} index={i}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
 
    {messages?.data?.map((message,i) => (
      <div key={i} className="modal fade" id={`exampleModalToggle${i}`} aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalToggleLabel2">{message?.recruter_name}</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className={`row`}>
                <div className={`col-12`}>
                  <span className={'fw-semibold'}>Title : </span>
                  <span>{message?.category_message?.name}</span>
                </div>
                <div className={`col-12`}>
                  <span className={'fw-semibold'}>Sender : </span>
                  <span>{message?.recruter_name}</span>
                </div>
                <div className={`col-12 p-2 ${style.bgDescription}`}>
                  {message?.description}
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary" data-bs-target={`#exampleModalToggle`} data-bs-toggle="modal">Back to first</button>
            </div>
          </div>
        </div>
      </div>
    ))}
    </>
  );
};

export default Navbar;
