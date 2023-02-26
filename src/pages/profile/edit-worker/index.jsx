import React, { useState } from "react";
import ProfileLayout from "components/templates/Profile/ProfileLayout";
import CardSection from "components/Cards/CardSection/CardSection";
import EditProfileWorker from "components/Cards/CardEditProfile/CardEditProfile";
import InputFormHire from "components/Form/InputFormHire/InputFormHire";
import { workerForm, workerExperienceForm } from "./workerForm";
import Form from "react-bootstrap/Form";

const EditWorker = () => {
  const [workerData, setWorkerData] = useState({
    name: "",
    job_desk: "",
    address: "",
    workplace: "",
    description: "",
  });
  const [workerSkill, setWorkerSkill] = useState("");

  const [workerExperienceData, setWorkerExperienceData] = useState({
    position: "",
    company_name: "",
    career_start: "",
    career_end: "",
    description: "",
  });

  const [workerPortofolio, setWorkerPortofolio] = useState({
    application_name: "",
    link_repository: "",
    type: "",
    photo: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const submitHandlerExperience = (e) => {
    e.preventDefault();
  };

  const submitHandlerSkill = (e) => {
    e.preventDefault();
  };

  const submitHandlerPortofolio = (e) => {
    e.preventDefault();
  };
  return (
    <ProfileLayout leftside={<EditProfileWorker />}>
      <CardSection header={true} title={"Biodata"}>
        <Form onSubmit={submitHandler}>
          <div className="row">
            {workerForm.map((worker, i) => (
              <div key={i} className="col-12">
                <InputFormHire
                  title={worker.title}
                  name={worker.name}
                  type={worker.type}
                  value={workerData[worker.name]}
                  placeholder={worker.placeholder}
                  onchange={(e) => changeHandler(e)}
                  required={true}
                />
              </div>
            ))}
          </div>
        </Form>
      </CardSection>

      <CardSection header={true} title={"Skill"}>
        <Form onSubmit={submitHandlerSkill}>
          <div className={"row"}>
            <div className={"col-10"}>
              <InputFormHire
                title={"Skill"}
                name={"skill"}
                type={"text"}
                value={workerSkill}
                placeholder={"Enter Your Skill"}
                onchange={(e) => changeHandler(e)}
                required={true}
              />
            </div>
            <div className={"col-2 d-flex align-items-end"}>
              <InputFormHire
                className={
                  "btn btn-warning text-light border-2 fw-semibold w-100"
                }
                type={"submit"}
                value={"Add Skill"}
              />
            </div>
          </div>
        </Form>
      </CardSection>

      <CardSection header={true} title={"Experience"}>
        <Form onSubmit={submitHandlerExperience}>
          <div className={"row pb-2 border-1 border-bottom"}>
            {workerExperienceForm.map((experience, i) => (
              <div
                key={i}
                className={`
                ${experience.type == "date" ? "col-12 col-sm-6" : "col-12"}`}
              >
                <InputFormHire
                  title={experience.title}
                  name={experience.name}
                  type={experience.type}
                  value={workerExperienceData[experience.name]}
                  placeholder={experience.placeholder}
                  onchange={(e) => changeHandler(e)}
                  required={true}
                />
              </div>
            ))}
          </div>
          <div className={"row mt-3"}>
            <div className={"col-12"}>
              <InputFormHire
                className={
                  "btn btn-yellow bg-transparent border-2 fw-semibold w-100"
                }
                type={"submit"}
                value={"Add Experience"}
              />
            </div>
          </div>
        </Form>
      </CardSection>

      <CardSection header={true} title={"Portofolio"}>
        <Form onSubmit={submitHandlerPortofolio}>
          <div className={"row pb-2 border-1 border-bottom"}>
            <div className={`col-12`}>
              <InputFormHire
                title={"Application Name"}
                name={"application_name"}
                type={"text"}
                value={workerPortofolio.application_name}
                placeholder={`Enter Your Application Name`}
                onchange={(e) => changeHandler(e)}
                required={true}
              />
            </div>
            <div className={`col-12`}>
              <InputFormHire
                title={"Application Name"}
                name={"application_name"}
                type={"text"}
                value={workerPortofolio.application_name}
                placeholder={`Enter Your Application Name`}
                onchange={(e) => changeHandler(e)}
                required={true}
              />
            </div>
            <div className={`col-12`}>
              <span className={"d-block mb-2"}>Type Portofolio</span>
              <div className="mb-3">
                {["radio"].map((type) => (
                  <div key={`inline-${type}`} className="mb-3 d-flex gap-2">
                    <span className={"border border-1 py-2 px-3"}>
                      <Form.Check
                        inline
                        label="Mobile App"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                    </span>
                    <span className={"border border-1 p-2"}>
                      <Form.Check
                        inline
                        label="Web App"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                      />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={"row mt-3"}>
            <div className={"col-12"}>
              <InputFormHire
                className={
                  "btn btn-yellow bg-transparent border-2 fw-semibold w-100"
                }
                type={"submit"}
                value={"Add Portofolio"}
              />
            </div>
          </div>
        </Form>
      </CardSection>
    </ProfileLayout>
  );
};

export default EditWorker;
