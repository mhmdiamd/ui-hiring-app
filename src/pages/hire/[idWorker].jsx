import React, { useState, useEffect } from "react";
import ProfileLayout from "components/templates/Profile/ProfileLayout";
import ProfileCardHire from "components/Cards/ProfileCardHire/ProfileCardHire";
import InputFormHire from "components/Form/InputFormHire/InputFormHire";
import Form from "react-bootstrap/Form";
import {useRouter} from "next/router"
import { useGetWorkerByIdQuery } from "@/features/worker/workerApi";
import { useCreateMessageMutation } from "@/features/message/messageApi";
import Swal from 'sweetalert2'
import {
  showLoading,
  successLoading,
  failedLoading,
} from "@/common/loadingHandler";

const Index = () => {
  const router = useRouter();
  const { data: worker, isLoading } = useGetWorkerByIdQuery(
    router.query.idWorker, {skip : router.query.idWorker ? false : true }
  );
  const [createMessage, {isLoading: isLoadingCreateMessage, isSuccess : isSuccessCreateMessage, isError : isErrorCreateMessage}] = useCreateMessageMutation()

  const [data, setData] = useState({
    purpose: "1",
    recruter_name: "",
    email: "",
    phone: "0",
    description: "",
    photo: "",
  });

  const changeHandler = (e) => {
    setData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData()
    for(let attr in data){
      formData.append(attr, data[attr])
    }
    formData.append("id_worker", router?.query?.idWorker)
    formData.append("id_category_message", data.purpose)
    await createMessage({data: formData})
  };

  useEffect(() => {
    if(isLoadingCreateMessage) showLoading('Please wait...')
    if(isErrorCreateMessage) failedLoading('Message failed to send!')
    if(isSuccessCreateMessage) {
      successLoading('Success send Message!')
      setData({
        purpose: "1",
        recruter_name: "",
        email: "",
        phone: "0",
        description: "",
        photo: "",
      });
    
    }

  }, [isLoadingCreateMessage, isSuccessCreateMessage, isErrorCreateMessage])

  return (
    <ProfileLayout
     classLeft={`col-12 col-md-5 col-lg-4`}
     classRight={`col-12 col-md-7 col-lg-8`}
     leftside={<ProfileCardHire data={worker}/>}>
      <div className="row">
        <div className="col-12 col-md-11 offset-0 offset-md-1">
          <h2>Message {worker?.name}</h2>
          <p>
            {worker?.description ? worker.description : 
            ("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s")}
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-11 offset-0 offset-md-1">
          <Form onSubmit={submitHandler}>
            <label className={'mb-1'}>Title</label>
            <Form.Select aria-label="Default select example" className={'mb-2'} name={'purpose'} onChange={changeHandler}>
              <option value="1">Project</option>
              <option value="2">Fulltime</option>
              <option value="3">Internship</option>
              <option value="4">Magang</option>
            </Form.Select>
            <InputFormHire
              title={"Name"}
              name={"recruter_name"}
              type={"text"}
              value={data.name}
              placeholder={"Enter Your Name"}
              onchange={(e) => changeHandler(e)}
              required={true}
            />
            <InputFormHire
              title={"Email"}
              name={"email"}
              type={"email"}
              value={data.email}
              placeholder={"example@gmail.com"}
              onchange={(e) => changeHandler(e)}
              required={true}
            />
            <InputFormHire
              title={"Phone Number"}
              name={"phone"}
              type={"number"}
              value={data.phone}
              placeholder={"Enter Your Phone Number"}
              onchange={(e) => changeHandler(e)}
              required={true}
            />

            <div className={'position-relative'}>
              <InputFormHire
                title={"Description"}
                name={"description"}
                type={"textarea"}
                value={data.description}
                placeholder={"Explain the detail the purpse of this message"}
                onchange={(e) => changeHandler(e)}
                required={true}
              />

              <InputFormHire
                className={'d-none position-absolute'}
                type={"file"}
                name={'photo'}
                onchange={(e) => changeHandler(e)}
              />
            </div>


            <InputFormHire
              value={"Message"}
              type={"submit"}
              className={"btn text-light btn-warning w-100"}
              placeholder={"Explain the detail the purpse of this message"}
              onchange={(e) => changeHandler(e)}
              required={true}
            />

          </Form>
        </div>
      </div>
    </ProfileLayout>
  );
};

export default Index;
