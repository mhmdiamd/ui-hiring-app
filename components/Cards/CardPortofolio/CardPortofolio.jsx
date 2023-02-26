import React from "react";
import style from "./CardPortofolio.module.css";
import Card from "react-bootstrap/Card";
import Link from "next/link";

const CardPortofolio = ({ photo, title }) => {
  return (
    <Link className={"text-decoration-none"} href={""}>
      <Card className={"border-0"}>
        <Card.Img
          className={"img-fluid"}
          variant="top"
          src={photo}
        />
        <Card.Body className={"pt-1"}>
          <Card.Text className={"text-center text-dark"}>
            Some quick example
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default CardPortofolio;
