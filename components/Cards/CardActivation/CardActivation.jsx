import React from "react";

const CardActivation = ({ title, description, children }) => {
  return (
    <div className="container vh-100 d-flex justify-content-center">
      <div className="row mt-5">
        <div className="col-sm-12">
          <div className="modal-content modal-activation pt-4 pb-4 ps-4 pe-4 border-5 border-purple border-bottom rounded">
            <div className="row">
              <div className="col-12 d-flex justify-content-center align-items-center">
                <img src="/navbar/navbarLogo.png" alt="" />
                <span className="text-purple fs-2 ms-2 fw-bold">YuGawe</span>
              </div>
            </div>
            <div className="modal-body mt-3">
              <div className="row">
                <div className="col-12 d-flex flex-column align-items-center">
                  <span className="fw-bold fs-3 text-center">{title}</span>
                  <img className="mt-4" src="/activation/lock.png" alt="" />

                  <div className="col-8 mt-3 text-center">
                    <span>{description}</span>
                  </div>
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardActivation;
