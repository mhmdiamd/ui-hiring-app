import React, { useState } from "react";
import ProfileLayout from "components/templates/Profile/ProfileLayout";
import CardSection from "components/Cards/CardSection/CardSection";
import CardEditProfile from "components/Cards/CardEditProfile/CardEditProfile";
import InputFormHire from "components/Form/InputFormHire/InputFormHire";
import Form from "react-bootstrap/Form";

const EditRecruter = () => {
  const [data, setData] = useState({
    company_name: "",
    business: "",
    city: "",
    description: "",
    email: "",
    phone: "0",
    instagram: "",
    linkedin: "",
    photo: "",
  });

  const changeHandler = (e) => {
    console.log(data);
    setData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <ProfileLayout leftside={<CardEditProfile />}>
      <CardSection header={true} title={"Biodata"}>
        <div className="row">
          <div className="col-12">
            <Form onSubmit={submitHandler}>
              <InputFormHire
                title={"Company Name"}
                name={"company_name"}
                type={"text"}
                value={data.company_name}
                placeholder={"Enter Your Company Name"}
                onchange={(e) => changeHandler(e)}
                required={true}
              />
              <InputFormHire
                title={"Field of Business"}
                name={"business"}
                type={"text"}
                value={data.business}
                placeholder={"Enter Your Business Field, ex : Finance"}
                onchange={(e) => changeHandler(e)}
                required={true}
              />
              <InputFormHire
                title={"City"}
                name={"city"}
                type={"text"}
                value={data.city}
                placeholder={"Enter Your City"}
                onchange={(e) => changeHandler(e)}
                required={true}
              />
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
                placeholder={"+62 "}
                onchange={(e) => changeHandler(e)}
                required={true}
              />

              <InputFormHire
                title={"Instagram"}
                name={"instagram"}
                type={"text"}
                value={data.instagram}
                placeholder={"Enter Your Instagram Name"}
                onchange={(e) => changeHandler(e)}
                required={true}
              />

              <InputFormHire
                title={"Linkedin"}
                name={"linkedin"}
                type={"text"}
                value={data.linkedin}
                placeholder={"Enter Your linkedin Name"}
                onchange={(e) => changeHandler(e)}
                required={true}
              />
            </Form>
          </div>
        </div>
      </CardSection>
    </ProfileLayout>
  );
};

export default EditRecruter;
