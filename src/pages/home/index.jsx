import React, { useEffect } from "react";
import BaseTemplate from "../../../components/templates/base/BaseTemplate";
import SectionContent from "components/SectionContent/SectionContent";
import CardOpinion from "components/Cards/CardOpinion/CardOpinion";
import style from "./Home.module.css";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { excess, programmingLanguages } from "../../../lib/homeData.jsx";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required  
import { Pagination } from "swiper";
import Image from "next/image";
import { useGetAllWorkerQuery } from "@/features/worker/workerApi";

const LandingPage = () => {
  const { data: workers } = useGetAllWorkerQuery({ limit: 5 })

  return (
    <BaseTemplate>
      <SectionContent
        className={`${style.bgLight} ${style.bgImage} ${style.firstLanding} mt-0 mt-md-5`}
      >
        <div className="row d-flex align-items-center mt-md-0">
          <div className="col-12 col-md-6 d-flex flex-column justify-content-center ">
            <h1 className={`fw-semibold`}>
              The <span className={'text-purple'}>nation's best talents</span> for the change of the 4.0 revolution!
            </h1>
            <p>
              Find the best talent easily! Our hiring app is user-friendly,
              secure, and effective.
            </p>
            <Link
              href="/worker"
              className={`${style.btnFirstPage} btn border-0 bg-purple text-light py-2 px-5 fw-semibold`}
            >
              Start Now
            </Link>
          </div>
          <div className="col-5 offset-md-1 d-md-flex offset-md-1 position-relative justify-content-end d-none">
            <Image
              src={"/landing/photo1.png"}
              className={`${style.staticImage} ${style.firstImage} img-fluid`}
              alt="static-photo"
              width={500}
              height={500}
            />
            <div className={`${style.bgSpiral}`}></div>
            <div className={`${style.photoAccessories}`}></div>
          </div>
        </div>
      </SectionContent>

      <SectionContent className={`${style.bgLight} mt-3 mt-sm-5`}>
        <div className="row py-0 py-sm-4">
          <div className="col-12 col-md-5 position-relative">
            <Image
              src={"/landing/photo2.png"}
              alt="static-photo1"
              className={`${style.staticImage} ${style.secondImage} w-100 position-relative img-fluid`}
              width={400}
              height={400}
            />

            <div className={`${style.bgSpiral2} d-none d-sm-block`}></div>
            <div className={`${style.photoAccessories2}`}></div>
          </div>
          <div className={`${style.textSide} col-12 col-sm-7 col-md-6 p-3 ps-sm-5`}>
            <h2>Why should you look for talent in Gaworld</h2>
            <ul className="list-group">
              {excess?.map((text, i) => (
                <li
                  key={i}
                  className="list-group-item bg-transparent px-0 border-0"
                >
                  <i className="fa-solid fa-circle-check me-2 text-purple fs-5"></i>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionContent>

      <SectionContent className={`${style.bgLight}`}>
        <div className="row py-5">
          <div className={`${style.textSide} col-12 col-md-6 col-lg-5 offset-lg-1 order-2 order-md-1 d-flex flex-column justify-content-center`}>
            <h2>Skill Talent</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              euismod ipsum et dui rhoncus auctor.
            </p>
            <div className={"listGroup d-flex gap-5"}>
              <ul className="list-group">
                {programmingLanguages?.map((text, i) => {
                  if (i < 5) {
                    return (
                      <li
                        key={i}
                        className="list-group-item bg-transparent px-0 border-0"
                      >
                        <i className="fa-solid fa-circle-check me-2 text-warning fs-5"></i>
                        {text}
                      </li>
                    );
                  }
                })}
              </ul>

              <ul className="list-group">
                {programmingLanguages?.map((text, i) => {
                  if (i >= 5) {
                    return (
                      <li
                        key={i}
                        className="list-group-item bg-transparent px-0 border-0"
                      >
                        <i className="fa-solid fa-circle-check me-2 text-warning fs-5"></i>
                        {text}
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
          </div>
          <div className={`col-12 col-md-6 position-relative order-1 order-md-2 d-flex justify-content-end`}>
            <Image
              src={"/landing/photo3.png"}
              className={`${style.staticImage} ${style.thirdImage} w-100 position-relative`}
              alt="static-photo2"
              width={400}
              height={400}
            />
            <div className={`${style.bgSpiral}`}></div>
            <div className={`${style.photoAccessories3}`}></div>

          </div>
        </div>
      </SectionContent>

      <SectionContent className={"mt-4"}>
        <h1 className={"text-center mb-3"}>Their opinion about <span className="text-purple fw-semibold">Gawworld</span></h1>
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
          {workers.data.map((worker, i) => (
            <SwiperSlide key={worker.id}>
              <CardOpinion key={worker.id} data={worker} i={i} />
            </SwiperSlide>
          ))}

          <SwiperSlide>
            <CardOpinion data={{ name: "Muhamad Farhan" }} i={1} />
          </SwiperSlide>

          <SwiperSlide>
            <CardOpinion data={{ name: "Muhamad Dhia Ramy" }} i={2} />
          </SwiperSlide>
        </Swiper>
      </SectionContent>


      <SectionContent className={"mt-5 mb-5 px-4 position-relative"}>
        <div className={`${style.banner} row position-relative bg-purple d-flex flex-column justify-content-center`}>
          <div className={`${style.bgWave} col-12 position-absolute px-0`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fillOpacity="0.5" d="M0,224L40,234.7C80,245,160,267,240,261.3C320,256,400,224,480,224C560,224,640,256,720,250.7C800,245,880,203,960,192C1040,181,1120,203,1200,181.3C1280,160,1360,96,1400,64L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
          </div>
          <div className={`${style.bannerContent} col-12 position-absolute`}>
            <div className="row px-4">
              <div className="col-12 col-sm-7 col-md-6">
                <h2 className="text-light fw-semibold">Don't miss the opportunity, register now!</h2>
              </div>
              <div className="col-12 col-sm-5 col-md-6 d-block d-sm-flex justify-content-end align-items-center">
                <Link className={`${style.btnBanner} fw-semibold btn btn-light mt-2 mt-sm-0 text-purple px-4 py-2`} href={`/worker`} >Start From Now!</Link>
              </div>
            </div>
          </div>
        </div>
      </SectionContent>

    </BaseTemplate>
  );
};

// export async function getServerSideProps() {
//   const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_ENDPOINT}/workers?limit=5`);
//   const workers = await response.json();

//   // Pass data to the page via props
//   return {
//     props: {
//       workers,
//     },
//   };
// }

export default LandingPage;
