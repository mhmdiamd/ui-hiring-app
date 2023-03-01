import React, { useState } from "react";
import ProfileLayout from "components/templates/Profile/ProfileLayout";
import CardSection from "components/Cards/CardSection/CardSection";
import ProfileCardHire from "components/Cards/ProfileCardHire/ProfileCardHire";
import InputFormHire from "components/Form/InputFormHire/InputFormHire";
import Form from "react-bootstrap/Form";

const Index = () => {
  const [data, setData] = useState({
    project: "",
    name: "",
    email: "",
    phone: "0",
    description: "",
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
    <ProfileLayout
     classLeft={`col-12 col-lg-4`}
     classRight={`col-12 col-lg-8`}
     leftside={<ProfileCardHire />}>
      <div className="row">
        <div className="col-11 offset-sm-1">
          <h2>Message Muhamad Ilham Darmawan</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-11 offset-sm-1">
          <Form onSubmit={submitHandler}>
            <InputFormHire
              title={"Name"}
              name={"name"}
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
