import React, {useEffect, useState} from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import style from "./CardEditProfile.module.css";

const CardEditProfile = ({onclick, data, onchange}) => {

  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  function trigerInputFile(e) {
    document.querySelector(`#user-photo`).click()
  }

  const selectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    setSelectedFile(e.target.files[0]);
    onchange(e.target.files[0]);
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

  const saveHandler = (e) => {
    onclick(e)
  }

  return (
    <>
      <Card className={"border-0 shadow px-3 py-3"}>
        <input id={`user-photo`} type={'file'} className={'d-none'} name="photo" onChange={selectFile}/>
        <Card.Img
          className={`${style.userPhoto} mx-auto img-fluid rounded-circle`}
          variant="top"
          src={
            preview ? preview : 
            data?.photo == 'photodefault.jpg' ? '/photodefault.png' : data?.photo}
        />
        <span
          className={`${style.editUser} d-block text-center text-secondary pt-1`}
        >
          <span className="pointer" onClick={trigerInputFile}>
            <i className="fa-solid fa-pen-to-square "></i> Edit
          </span>
        </span>
        <Card.Body>
          <Card.Title>{data?.role == 'worker' ? data?.name : data?.company_name}</Card.Title>
          <Card.Subtitle className="mb-2">{data?.role == 'worker' ? data?.job_desk : data?.company_field}</Card.Subtitle>
          <Card.Text className={`text-muted`}>
            {data?.address && (
              <span>
                <FontAwesomeIcon className={`mt-3 me-2`} icon={faLocationDot} /> {data?.address}
              </span>
            )}
            <span className={`d-block mt-1`}>{data?.category_worker}</span>
          </Card.Text>
        </Card.Body>
      </Card>
      <Button
        className={"w-100 py-2 fw-semibold text-light bg-purple mt-3 border-0"}
        href="#"
        onClick={saveHandler}
      >
        Save
      </Button>
      <Button
        className={"w-100 py-2 fw-semibold btn-purple bg-transparent mt-2"}
        href="#"
      >
        Cancel
      </Button>
    </>
  );
};

export default CardEditProfile;
