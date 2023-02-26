import React from "react";
import Card from "react-bootstrap/Card";
import style from "./CardSection.module.css";

const CardSection = ({ title, children, header }) => {
  return (
    <Card className={"border-0 shadow mb-3"}>
      {header && (
        <Card.Header className={`${style.cardHeader} px-4 pt-3 pb-2`} as="h5">
          {title}
        </Card.Header>
      )}
      <Card.Body className={`px-4 pt-3 pb-2`}>{children}</Card.Body>
    </Card>
  );
};

export default CardSection;
