import React, { useState } from "react";
import style from "./Profile.module.css";
import ProfileLayout from "components/templates/Profile/ProfileLayout";
import CardSection from "components/Cards/CardSection/CardSection";
import ProfileCard from "components/Cards/ProfileCard/ProfileCard";
import CardPortofolio from "components/Cards/CardPortofolio/CardPortofolio";
import CardExperience from "./../../../components/Cards/CardExperience/CardExperience";

const Index = () => {
  const [menuActive, setMenuActive] = useState("portofolios");

  return (
    <ProfileLayout leftside={<ProfileCard />}>
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
            <>
              <div className="col-4">
                <CardPortofolio photo={"/portofolios/portofolio1 (2).png"} />
              </div>
              <div className="col-4">
                <CardPortofolio photo={"/portofolios/portofolio1 (3).png"} />
              </div>
              <div className="col-4">
                <CardPortofolio photo={"/portofolios/portofolio1 (4).png"} />
              </div>
              <div className="col-4">
                <CardPortofolio photo={"/portofolios/portofolio1 (5).png"} />
              </div>
              <div className="col-4">
                <CardPortofolio photo={"/portofolios/portofolio1 (6).png"} />
              </div>
              <div className="col-4">
                <CardPortofolio photo={"/portofolios/portofolio1 (7).png"} />
              </div>
            </>
          ) : (
            <>
              <div className="col-12">
                <CardExperience photo={"/portofolios/portofolio1 (1).png"} />
              </div>
              <div className="col-12">
                <CardExperience photo={"/portofolios/portofolio1 (1).png"} />
              </div>
              <div className="col-12">
                <CardExperience photo={"/portofolios/portofolio1 (1).png"} />
              </div>
            </>
          )}
        </div>
      </CardSection>
    </ProfileLayout>
  );
};

export default Index;
