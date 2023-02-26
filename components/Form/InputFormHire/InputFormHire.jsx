import React from "react";
import Form from "react-bootstrap/Form";

const InputFormHire = ({
  type,
  name,
  placeholder,
  title,
  onchange,
  required,
  className,
  value,
}) => {
  const changeHandler = (e) => {
    onchange(e);
  };

  return (
    <>
      {type == "textarea" ? (
        <Form.Group
          className={`$ mb-3`}
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label>{title}</Form.Label>
          <Form.Control
            className={`${className}`}
            name={name}
            as="textarea"
            placeholder={placeholder}
            rows={6}
            onChange={changeHandler}
            required={required || false}
            value={value}
          />
        </Form.Group>
      ) : (
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>{title}</Form.Label>
          <Form.Control
            className={`${className} py-2`}
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={changeHandler}
            required={required || false}
            value={value}
          />
        </Form.Group>
      )}
    </>
  );
};

export default InputFormHire;
