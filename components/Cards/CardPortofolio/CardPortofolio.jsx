import React from "react";
import style from "./CardPortofolio.module.css";
import Card from "react-bootstrap/Card";
import Link from "next/link";

const CardPortofolio = ({data, photo, title }) => {
  return (
    <Link className={"text-decoration-none"} href={""}>
      <Card className={"border-0"}>
        <Card.Img
          className={`${style.photo} img-fluid`}
          variant="top"
          src={data?.photo || photo}
        />
        <Card.Body className={"pt-1"}>
          <Card.Text className={"text-center text-dark"}>
            {data?.application_name || 'more quicy expmle'}
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default CardPortofolio;
