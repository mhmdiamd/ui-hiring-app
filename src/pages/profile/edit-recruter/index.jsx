import React, { useState, useEffect } from "react";
import ProfileLayout from "components/templates/Profile/ProfileLayout";
import CardSection from "components/Cards/CardSection/CardSection";
import CardEditProfile from "components/Cards/CardEditProfile/CardEditProfile";
import InputFormHire from "components/Form/InputFormHire/InputFormHire";
import Form from "react-bootstrap/Form";
import {recruterForm} from '../../../../lib/edit-recruter/recruterForm'
import { useGetRecruterByIdQuery, useUpdateRecruterByIdMutation } from "@/features/recruter/recruterApi";
import { useSelector } from "react-redux";
import Swal from 'sweetalert2'
import {
  showLoading,
  successLoading,
  failedLoading,
} from "@/common/loadingHandler";

const EditRecruter = () => {
  const user = useSelector(state => state.auth.user)
  const { data: recruter, isLoading: isLoadingFetchRecruter, isSuccess: isSuccessFetchRecruter } = useGetRecruterByIdQuery(user?.id, {skip : user ? false : true});
  const [updateRecruterById, {isLoading: isLoadingUpdateRecruter, isSuccess: isSuccessUpdateRecruter, isError: isErrorUpdateRecruter}] = useUpdateRecruterByIdMutation()
  
  const [dataRecruter, setDataRecruter] = useState({
    company_name: "",
    company_field: "",
    address: "",
    description: "",
    email: "",
    phone: "",
    instagram: "",
    linkedin: "",
    photo: "",
  });

  const changeHandler = (e) => {
    setDataRecruter((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData()
    for(let attr in dataRecruter) {
      formData.append(attr, dataRecruter[attr])
    }
    await updateRecruterById({id: user?.id, data: formData})
  };

  
  useEffect(() => {
    if(isSuccessFetchRecruter){
      setDataRecruter(prev => {
        let data = {}
        for(let attr in dataRecruter) {
          data = {
            ...data,
            [attr] : recruter[attr]
          }  
        }
        return data
      })
    }
  }, [isLoadingFetchRecruter])

  useEffect(() => {
    if(isSuccessFetchRecruter) Swal.close()

    if(isSuccessUpdateRecruter) successLoading('Success update Data!')
  
    if(isLoadingFetchRecruter || isLoadingUpdateRecruter ) showLoading('Please Wait...')

  },[isLoadingFetchRecruter, isSuccessFetchRecruter, isErrorUpdateRecruter, isSuccessUpdateRecruter, isLoadingUpdateRecruter])

  return (
    <ProfileLayout 
      classLeft={`col-12 col-md-4`}
      classRight={`col-12 col-md-8`}
      leftside={<CardEditProfile data={recruter} 
      onchange={(file) => setDataRecruter(prev => ({...prev, photo: file}))}
      onclick={(e) => submitHandler(e)} />}>
      <CardSection header={true} title={"Biodata"}>
        <div className="row">
          <div className="col-12">
            <Form onSubmit={submitHandler}>
              {recruterForm.map((recruter, i) => (
                 <InputFormHire
                 key={i}
                 title={recruter.title}
                 name={recruter.name}
                 type={recruter.type}
                 value={dataRecruter[recruter.name]}
                 placeholder={recruter.placeholder}
                 onchange={(e) => changeHandler(e)}
                 required={true}
               />
              ))}     
            </Form>
          </div>
        </div>
      </CardSection>
    </ProfileLayout>
  );
};

export default EditRecruter;
