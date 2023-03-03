import React, { useState, useEffect } from "react";
import ProfileLayout from "components/templates/Profile/ProfileLayout";
import CardSection from "components/Cards/CardSection/CardSection";
import EditProfileWorker from "components/Cards/CardEditProfile/CardEditProfile";
import InputFormHire from "components/Form/InputFormHire/InputFormHire";
import { workerForm, workerExperienceForm } from "../../../../lib/edit-worker/workerForm";
import Form from "react-bootstrap/Form";
import { useCreateExperienceMutation } from "@/features/worker/experience/experienceApi";
import CardExperience from "../../../../components/Cards/CardExperience/CardExperience";
import { useCreateWorkerSkillMutation } from "@/features/worker/worker_skill/workerSkillApi";
import { useCreatePortofolioMutation } from "@/features/worker/portofolio/portofolioApi";
import { useGetWorkerByIdQuery, useUpdateWorkerByIdMutation } from "@/features/worker/workerApi";
import Swal from 'sweetalert2'
import {
  showLoading,
  successLoading,
  failedLoading,
} from "@/common/loadingHandler";
import { useSelector } from "react-redux";

const EditWorker = () => {
  const user = useSelector(state => state.auth.user)
  const { data: worker, isLoading: isLoadingFetchWorker, isSuccess: isSuccessFetchWorker } = useGetWorkerByIdQuery(user?.id, {skip : user ? false : true});
  const [updateWorkerById, {isLoading: isLoadingUpdateWorker, isSuccess: isSuccessUpdateWorker, isError: isErrorUpdateWorker}] = useUpdateWorkerByIdMutation()

  const [dataWorker, setDataWorker] = useState({
    name: "",
    job_desk : "",
    address: "",
    workplace: "",
    description: "",
    phone: "",
    photo: "",
    active_email : "",
    worker_category: "",
    instagram: "",
    github: "",
    gitlab: ""
  });

  useEffect(() => {
    if(isSuccessFetchWorker){
      setDataWorker(prev => {
        let data = {}
        for(let attr in dataWorker) {
          data = {
            ...data,
            [attr] : worker[attr]
          }  
        }
        console.log(data)
        return data
      })
    }
    console.log(dataWorker)
  }, [isLoadingFetchWorker])


  const [
    createExperience,
    {
      isSuccess: isSuccessExperience,
      isLoading: isLoadingExperience,
      isError: isErrorExperience,
    },
  ] = useCreateExperienceMutation();
  const [
    createPortofolio,
    {
      isSuccess: isSuccessPortofolio,
      isLoading: isLoadingPortofolio,
      error: errorPortofolio,
      isError: isErrorPortofolio,
    },
  ] = useCreatePortofolioMutation();

  const [
    createWorkerSkill,
    {
      isSuccess: isSuccessWorkerSkill,
      isLoading: isLoadingWorkerSkill,
      error: errorWorkerSkill,
      isError: isErrorWorkerSkill,
    },
  ] = useCreateWorkerSkillMutation();

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

  const changeHandler = (e, callback) => {
    console.log(dataWorker)
    callback((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const updateHandler = async (e) => {
    await updateWorkerById({id : user?.id, data: dataWorker})
  }

  const submitHandler = async (e) => {
    e.preventDefault();
  };

  const submitHandlerExperience = async (e) => {
    e.preventDefault();
    await createExperience({
      data: {
        ...workerExperienceData,
        career_start: undefined,
        career_end: undefined,
      },
    });
  };

  const submitHandlerSkill = async (e) => {
    e.preventDefault();
    await createWorkerSkill({ skill: workerSkill });
    setWorkerSkill("");
  };

  const submitHandlerPortofolio = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (let attr in workerPortofolio) {
      formData.append(attr, workerPortofolio[attr]);
    }
    await createPortofolio(formData);
  };


  useEffect(() => {
    if (isLoadingExperience || isLoadingWorkerSkill || isLoadingPortofolio || isLoadingFetchWorker || isLoadingUpdateWorker) {
      showLoading("Please wait");
    }

    if (isSuccessExperience || isSuccessWorkerSkill || isSuccessPortofolio || isSuccessUpdateWorker) {
      if (isSuccessWorkerSkill) {
        successLoading("Success create Skill!");
      } else if (isSuccessPortofolio) {
        successLoading("Success create Portofolio!");
        setWorkerPortofolio({
          application_name: "",
          link_repository: "",
          type: "",
          photo: "",
        });
      } else if(isSuccessExperience){
        successLoading("Success!");
        setWorkerExperienceData({
          position: "",
          company_name: "",
          career_start: "",
          career_end: "",
          description: "",
        });
      } else {
        successLoading("Success!");
      }
    }
    if (isErrorExperience || isErrorWorkerSkill || isErrorPortofolio || isErrorUpdateWorker) {
      failedLoading("Failed to create!");
    }

  }, [
    isLoadingExperience,
    isSuccessExperience,
    isErrorExperience,
    isLoadingWorkerSkill,
    isSuccessWorkerSkill,
    isErrorWorkerSkill,
    isLoadingPortofolio,
    isSuccessPortofolio,
    isErrorPortofolio,
    isLoadingFetchWorker,
    isSuccessFetchWorker,
    isSuccessUpdateWorker,
    isLoadingUpdateWorker,
    isErrorUpdateWorker,
  ]);

  useEffect(() => {
    
    if(isSuccessFetchWorker) {
      Swal.close()
    }
  }, [isSuccessFetchWorker])
  return (
    <ProfileLayout
      classLeft={`col-12 col-lg-4`}
      classRight={`col-12 col-lg-8`}
      leftside={<EditProfileWorker data={worker} onclick={(e) => updateHandler(e)}/>}
    >
      <CardSection header={true} title={"Biodata"}>
        <Form onSubmit={submitHandler}>
          <div className="row">
            {workerForm.map((worker, i) => (
              <div key={i} className="col-12">
                <InputFormHire
                  title={worker.title}
                  name={worker.name}
                  type={worker.type}
                  value={dataWorker[worker.name]}
                  placeholder={worker.placeholder}
                  onchange={(e) => changeHandler(e, setDataWorker)}
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
            <div className={"col-8 col-md-10"}>
              <InputFormHire
                title={"Skill"}
                name={"skill"}
                type={"text"}
                value={workerSkill}
                placeholder={"Enter Your Skill"}
                onchange={(e) => setWorkerSkill(e.target.value)}
                required={true}
              />
            </div>
            <div className={"col-4 col-md-2 d-flex align-items-end"}>
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
        <div className="row">
          <div className="col-12">
            {worker?.experiences?.map((experience, i) => {
              if (i < 3) {
                return (
                  <div className="col-12" key={i}>
                    <CardExperience
                      key={experience.id}
                      data={experience}
                      descriptionVisibility={true}
                      photo={"/portofolios/portofolio1 (1).png"}
                    />
                  </div>
                );
              }
            })}
          </div>
        </div>
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
                  onchange={(e) => changeHandler(e, setWorkerExperienceData)}
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
                onchange={(e) => changeHandler(e, setWorkerPortofolio)}
                required={true}
              />
            </div>
            <div className={`col-12`}>
              <InputFormHire
                title={"Repository Link"}
                name={"link_repository"}
                type={"text"}
                value={workerPortofolio.link_repository}
                placeholder={`Enter Your Repository Link`}
                onchange={(e) => changeHandler(e, setWorkerPortofolio)}
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
                        value={"mobile"}
                        onChange={(e) =>
                          setWorkerPortofolio((prev) => ({
                            ...prev,
                            type: e.target.value,
                          }))
                        }
                        id={`inline-${type}-1`}
                      />
                    </span>
                    <span className={"border border-1 p-2"}>
                      <Form.Check
                        inline
                        label="Web App"
                        name="group1"
                        type={type}
                        value={"web"}
                        onChange={(e) =>
                          setWorkerPortofolio((prev) => ({
                            ...prev,
                            type: e.target.value,
                          }))
                        }
                        id={`inline-${type}-2`}
                      />
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className={`col-12`}>
              <InputFormHire
                title={"Portofolio Image"}
                name={"photo"}
                type={"file"}
                onchange={(e) =>
                  setWorkerPortofolio((prev) => ({
                    ...prev,
                    photo: e.target.files[0],
                  }))
                }
                required={true}
              />
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
