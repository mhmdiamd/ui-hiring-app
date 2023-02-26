import React from "react";
import BaseTemplate from "./../../../components/templates/base/BaseTemplate";
import SearchBar from "./../../../components/SearchBar/SearchBar";
import WorkerCardList from "../../../components/Cards/WorkerCardList/WorkerCardList";
import Pagination from "react-bootstrap/Pagination";
import style from "./Home.module.css";

const index = () => {
  return (
    <BaseTemplate>
      <div className={`${style.mainBackground} row min-vh-100`}>
        <div className="col-12">
          <div className="container">
            <div className={"row d-none d-sm-grid"}>
              <div className={"col-12"}>
                <SearchBar />
              </div>
            </div>
            <div
              className={`${style.rowCard} row mt-5 d-flex flex-nowrap d-sm-grid`}
            >
              <div className={`col-6 col-sm-12 ${style.colCard}`}>
                <WorkerCardList />
              </div>
              <div className={`col-6 col-sm-12 ${style.colCard}`}>
                <WorkerCardList />
              </div>
              <div className={`col-6 col-sm-12 ${style.colCard}`}>
                <WorkerCardList />
              </div>
              <div className={`col-6 col-sm-12 ${style.colCard}`}>
                <WorkerCardList />
              </div>
            </div>

            <div className={`row mt-5`}>
              <div className="col-12 d-flex justify-content-center">
                <Pagination className={"mx-auto gap-1"}>
                  <Pagination.First />
                  <Pagination.Prev />
                  <Pagination.Item>{1}</Pagination.Item>
                  <Pagination.Ellipsis />

                  <Pagination.Item>{10}</Pagination.Item>
                  <Pagination.Item>{11}</Pagination.Item>
                  <Pagination.Item active>{12}</Pagination.Item>
                  <Pagination.Item>{13}</Pagination.Item>
                  <Pagination.Item disabled>{14}</Pagination.Item>

                  <Pagination.Ellipsis />
                  <Pagination.Item>{20}</Pagination.Item>
                  <Pagination.Next />
                  <Pagination.Last />
                </Pagination>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseTemplate>
  );
};

export default index;
