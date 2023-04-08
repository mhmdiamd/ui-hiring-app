import React, { useState } from "react";
import BaseTemplate from "../../../components/templates/base/BaseTemplate";
import SearchBar from "../../../components/SearchBar/SearchBar";
import WorkerCardList from "../../../components/Cards/WorkerCardList/WorkerCardList";
import Pagination from "react-bootstrap/Pagination";
import style from "./Worker.module.css";
import { useGetAllWorkerQuery } from "@/features/worker/workerApi";
import Swal from "sweetalert2";
import { showLoading } from "@/common/loadingHandler";
import { useRouter } from "next/router";

const Index = ({workers}) => {
  const router = useRouter();
  const [search, serSearch] = useState("");
  // const { data: workers, isLoading } = useGetAllWorkerQuery({
  //   search: router?.query?.search,
  //   page: router?.query?.page,
  //   sortBy: router?.query?.sortBy,
  //   sort: router?.query?.sort,
  //   limit: router?.query?.limit
  // });


  const changePageHandler = (e, i) => {
    e.preventDefault();

    router.push(`${router.pathname}/?page=${i}&limit=${workers?.limit}`);
  };

  const searchHandler = ({ sortBy, search }) => {
    router.push(`${router.pathname}/?search=${search}&sortBy=${sortBy}`);
  };

  const renderPagination = () => {
    let pagination = [];
    for (let i = 1; i <= workers?.totalPage; i++) {
      pagination.push(
        <Pagination.Item
          key={i}
          active={i == workers?.currentPage}
          onClick={(e) => changePageHandler(e, i)}
        >
          {i}
        </Pagination.Item>
      );
    }
    return pagination;
  };

  return (
    <BaseTemplate>
      <div className={`${style.mainBackground} row min-vh-100`}>
        <div className="col-12">
          <div className="container">
        
            <div className={"row d-none d-sm-grid"}>
              <div className={"col-12"}>
                <SearchBar onsearch={(data) => searchHandler(data)} />
              </div>
            </div>
            <div
              className={`${style.rowCard} row mt-5 d-flex flex-nowrap d-sm-grid`}
            >
              {workers?.data?.map((worker) => (
                <div
                  key={worker.id}
                  className={`col-6 col-sm-12 ${style.colCard}`}
                >
                  <WorkerCardList data={worker} />
                </div>
              ))}
            </div>

            <div className={`row mt-5`}>
              <div className="col-12 d-flex justify-content-center">
                <Pagination className={"mx-auto gap-1"}>
                  <Pagination.First />
                  <Pagination.Prev />
                  {renderPagination()?.map((page) => page)}
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

export async function getStaticProps() {
  const response = await fetch(`http://localhost:3001/api/v1/workers?limit=5`);
  const workers = await response.json();

  // Pass data to the page via props
  return {
    props: {
      workers,
    },
  };
}
export default Index;
