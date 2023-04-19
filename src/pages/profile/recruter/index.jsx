import React, { useEffect, useState } from "react";
import style from "./ProfileRecruter.module.css";
import BaseTemplate from "components/templates/base/BaseTemplate";
import Image from "next/image";
import Link from "next/link";
import { useGetRecruterByIdQuery, useUpdateRecruterByIdMutation } from "@/features/recruter/recruterApi";
import { useSelector } from "react-redux";
import { isLocalURL } from "next/dist/shared/lib/router/router";
import { showLoading, successLoading } from "@/common/loadingHandler";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [updateRecruterById, {isLoading: isLoadingUpdateRecruter, isSuccess: isSuccessUpdateRecruter}] = useUpdateRecruterByIdMutation()
  const recruter = useSelector(state => state.auth.user)

  console.log(recruter)

  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  const updateHandler = async () => {
    const formData = new FormData()
    formData.append('background_photo', selectedFile)
    await updateRecruterById({id: recruter.id, data: formData})
  }

  function trigerInputFile(e) {
    document.querySelector(`#background-photo`).click()
  }

  const selectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    setSelectedFile(e.target.files[0]);
  };

  useEffect(() => {
    if (!selectedFile) {
      setSelectedFile(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  useEffect(() => {
    if(recruter){
      setLoading(false)
    }
  }, [recruter])

  useEffect(() => {
    if(isSuccessUpdateRecruter) {
      successLoading('Success update Backround!')
    }

    if(isLoadingUpdateRecruter) {
      showLoading('Please Wait...')
    }

  }, [isLoadingUpdateRecruter, isSuccessUpdateRecruter])

  return (
    <BaseTemplate>
      {loading ? "Loading ....." : (
        <>
          <div className={`${style.bgRecruter} row`}>
      
            <div className={"col-12 h-100 bg-purple position-relative"}>
              {recruter?.background_photo != 'photodefault.jpg' && (
                <Image
                  src={preview ? preview : recruter?.background_photo}
                  className={`${style.imageBackground} img-fluid`}
                  alt={"background-recruter"}
                  width={500}
                  height={200}
                />
              )}

             <input type="file" className="d-none" id="background-photo" onChange={(e) => selectFile(e)} />
              <div className={`${style.editText} d-flex gap-2`}>
                <i 
                  className={`fa-solid fa-floppy-disk pointer text-light bg-purple pointer p-2 fs-5 rounded ${!preview ? 'd-none' : 'block'}`} 
                  onClick={updateHandler}>
                </i>

                <i 
                  className={`fa-solid fa-pen-to-square pointer text-light bg-purple pointer p-2 fs-5 rounded`} 
                  onClick={trigerInputFile}>
                </i>
              </div>
            </div>
              
          </div>
          <div className={`${style.rowContent} row`}>
            <div className={"col-12 d-flex justify-content-center"}>
              <Image
                src={
                  recruter ? recruter?.photo == 'photodefault.jpg' ? '/photodefault.png' : recruter.photo 
                  : '/photodefault.png'}
                className={`${style.imageProfile} rounded-circle img-fluid border border-3 border-light`}
                alt={"background-recruter"}
                width={150}
                height={150}
              />
            </div>
            <div className={"col-12 d-flex flex-column align-items-center"}>
              <span className={"fw-semibold fs-4"}>{recruter?.name}</span>
              <span className={"mt-2"}>{recruter?.company_field}</span>
              <span className={"text-secondary mt-2 w-50 text-center"}>{recruter?.address}</span>
            </div>
            <div className={"col-12 col-md-6 offset-0 offset-md-3 d-flex flex-column align-items-center"}>
              <p className={"text-secondary mx-auto text-center mt-2"}>
              {recruter?.description}
              </p>
            </div>
    
            <div
              className={
                "col-6 offset-3 d-flex flex-column align-items-center mb-4  "
              }
            >
              <Link
                href={"/profile/edit-recruter"}
                className={"btn text-light px-5 bg-purple"}
              >
                Edit Profile
              </Link>
            </div>
    
            <div className={"col-8 col-md-4 offset-2 offset-md-5 d-flex flex-column"}>
              <span className={"text-secondary mt-2"}>shopee@gmail.com</span>
              <span className={"text-secondary mt-2"}>@shopee</span>
              <span className={"text-secondary mt-2"}>+62 1982 1232 1233</span>
              <span className={"text-secondary mt-2"}>Shopee Company</span>
            </div>
          </div>
        </>
      )}
     
    </BaseTemplate>
  );
};

export default Index;
