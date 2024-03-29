import React, { useState } from "react";
import style from "./ProfileWorker.module.css";
import ProfileLayout from "components/templates/Profile/ProfileLayout";
import CardSection from "components/Cards/CardSection/CardSection";
import ProfileCard from "components/Cards/ProfileCard/ProfileCard";
import CardPortofolio from "components/Cards/CardPortofolio/CardPortofolio";
import CardExperience from "../../../components/Cards/CardExperience/CardExperience";
import { useRouter } from "next/router";
import { useGetWorkerByIdQuery } from "@/features/worker/workerApi";
import { showLoading } from "@/common/loadingHandler";
import Swal from 'sweetalert2'
import { staticDate } from "lib/staticDate";

const Index = () => {  
  const router = useRouter();
  const { data: worker, isLoading } = useGetWorkerByIdQuery(
    router.query.idWorker, {skip : router.query.idWorker ? false : true }
  );
  const [menuActive, setMenuActive] = useState("portofolios");


  return isLoading ? showLoading('Please Wait!') : (
    Swal.close(),
    <ProfileLayout
      classLeft={`col-12 col-lg-4`}
      classRight={`col-12 col-lg-8 mt-3 mt-lg-0`}
      leftside={<ProfileCard data={worker} />}
    >
      <CardSection header={false}>
        <div className={`${style.menu} d-flex gap-4`}>
          <button
            onClick={() => setMenuActive("portofolios")}
            className={`${style.btnMenu} d-block py-1 border-0 ${
              menuActive != "portofolios"
                ? "text-muted pb-2"
                : "border-3 border-bottom"
            } px-0 bg-transparent fs-5 fw-semibold`}
          >
            Portofolio
          </button>
          <button
            onClick={() => setMenuActive("experiences")}
            className={`${style.btnMenu} d-block border-0 ${
              menuActive != "experiences"
                ? "text-muted pb-2"
                : "border-3 border-bottom"
            } py-1 px-0 bg-transparent fs-5 fw-semibold`}
          >
            Experience
          </button>
        </div>
        <div className="row mt-3">
          {menuActive == "portofolios" ? (
            worker?.portofolios?.map((portofolio) => (
              <div key={portofolio.id} className="col-4">
                <CardPortofolio
                  photo={"/portofolios/portofolio1 (2).png"}
                  data={portofolio}
                />  
              </div>
            ))
          ) : (
            <>
              {worker?.experiences?.map((experience, i) => (
                <div className="col-12" key={experience.id}>
                  <CardExperience
                    id={experience.id}
                    data={experience}
                    date={staticDate[1]}
                  />
                </div>
              ))}
            </>
          )}
        </div>
      </CardSection>
    </ProfileLayout>
  );
};

export default  Index;
