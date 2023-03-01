import React, { useEffact } from "react";
import BaseTemplate from "../../../components/templates/base/BaseTemplate";
import SectionContent from "components/SectionContent/SectionContent";
import CardOpinion from "components/Cards/CardOpinion/CardOpinion";
import style from "./Home.module.css";
import Link from "next/link";
import "@/styles/swiper.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { excess, programmingLanguages } from "./homeData.jsx";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

const LandingPage = ({ workers }) => {
  return (
    <BaseTemplate>
      <SectionContent
        className={`${style.bgLight} ${style.bgImage} ${style.firstLanding} mt-0 mt-md-5`}
      >
        <div className="row d-flex align-items-center mt-md-0">
          <div className="col-12 col-md-6 d-flex flex-column justify-content-center ">
            <h1>
              The nation's best talents for the change of the 4.0 revolution!
            </h1>
            <p>
              Find the best talent easily! Our hiring app is user-friendly,
              secure, and effective. Manage your recruitment process from
              anywhere, anytime with features such as data analysis, secure data
              storage, and mobility.
            </p>
            <Link
              href="/worker"
              className={`${style.btnFirstPage} btn border-0 bg-purple text-light py-2 px-5`}
            >
              Start Now
            </Link>
          </div>
          <div className="col-5 offset-md-1 d-md-flex offset-md-1 justify-content-end d-none">
            <img
              src={"/landing/photo1.png"}
              className={`${style.staticImage} img-fluid position-relative`}
              alt="static-photo"
            />
          </div>
        </div>
      </SectionContent>

      <SectionContent className={`${style.bgLight} mt-3 mt-sm-5`}>
        <div className="row py-0 py-sm-4">
          <div className="col-12 col-sm-5">
            <img
              src={"/landing/photo2.png"}
              alt="static-photo1"
              className={`${style.staticImage} w-100 position-relative img-fluid`}
            />
          </div>
          <div className="col-12 col-sm-7 col-md-6 p-3 ps-sm-5">
            <h2>Why should you look for talent in Gaworld</h2>
            <ul class="list-group">
              {excess?.map((text, i) => (
                <li key={i} class="list-group-item bg-transparent px-0 border-0">
                  <FontAwesomeIcon
                    className={"me-2 text-purple fs-5"}
                    icon={faCircleCheck}
                  />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionContent>

      <SectionContent className={`${style.bgLight}`}>
        <div className="row py-5">
          <div className="col-12 col-md-5 offset-md-1 order-2 order-md-1 d-flex flex-column justify-content-center">
            <h2>Skill Talent</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              euismod ipsum et dui rhoncus auctor.
            </p>
            <div className={"listGroup d-flex gap-5"}>
              <ul class="list-group">
                {programmingLanguages?.map((text, i) => {
                  if (i < 5) {
                    return (
                      <li key={i} class="list-group-item bg-transparent px-0 border-0">
                        <FontAwesomeIcon
                          className={"me-2 text-warning fs-5"}
                          icon={faCircleCheck}
                        />
                        {text}
                      </li>
                    );
                  }
                })}
              </ul>

              <ul class="list-group">
                {programmingLanguages?.map((text, i) => {
                  if (i >= 5) {
                    return (
                      <li key={i} class="list-group-item bg-transparent px-0 border-0">
                        <FontAwesomeIcon
                          className={"me-2 text-warning fs-5"}
                          icon={faCircleCheck}
                        />
                        {text}
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-6 order-1 order-md-2 d-flex justify-content-end">
            <img
              src={"/landing/photo3.png"}
              className={`${style.staticImage} img-fluid position-relative`}
              alt="static-photo2"
            />
          </div>
        </div>
      </SectionContent>

      <SectionContent className={"mt-4"}>
        <h1 className={"text-center mb-3"}>Their opinion about peworld</h1>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            576: {
              slidesPerView: 2,
              spaceBetween: 20,
            },

            990: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination]}
          className="mySwiper p-3"
        >
          {workers.data.data.map((worker) => (
            <SwiperSlide key={worker.id}>
              <CardOpinion key={worker.id} data={worker} />
            </SwiperSlide>
          ))}
        </Swiper>
      </SectionContent>
    </BaseTemplate>
  );
};

export async function getServerSideProps({ req, res }) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  const response = await fetch(`http://localhost:3001/api/v1/workers?limit=5`);
  const workers = await response.json();

  // Pass data to the page via props
  return {
    props: {
      workers,
    },
  };
}

export default LandingPage;
