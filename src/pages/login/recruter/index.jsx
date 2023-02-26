import AuthenticationLayout from "components/templates/Authentication/AuthenticationLayout";
import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import Link from "next/link";
import { useRecruterLoginMutation } from "@/features/auth/recruter/recruterApi";
import { showLoading, failedLoading, stopLoading } from "@/common/loadingHandler";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

const RecruterLogin = () => {
  const router = useRouter();
  const [loginRecruter, { isLoading, isSuccess, isError, error }] = useRecruterLoginMutation();
  const [data, setData] = useState({
    email: "",
    password: "",
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

  const loginHandler = async (e) => {
    e.preventDefault();
    await loginRecruter({ data });
  };

  const redirectWeb = () => {
    return router.push("/");
  };

  useEffect(() => {
    if (isLoading) {
      showLoading("Please Wait....");
    }

    if (isError) {
      Swal.close();
      setData((prev) => {
        return {
          ...prev,
          password: "",
        };
      });
    }

    if (isSuccess) {
      Swal.close();
      redirectWeb();
    }
  }, [isLoading, isSuccess, isError]);

  return (
    <AuthenticationLayout title={"Hello, Gawpeople"} description={"Kamu belum login? Wah, kamu sama sekali tidak akan bisa dapat pekerjaan, apalagi mendapatkan hatiku yang hangat!"}>
      {error && (
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
          {error?.data?.message}
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      )}
      <Form onSubmit={loginHandler} className="pb-4">
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control className={"bg-light py-2"} name={"email"} type="email" placeholder="Enter Name" onChange={changeHandler} required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control className={"bg-light py-2"} name={"password"} type="password" placeholder="*************" onChange={changeHandler} required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Link className={"text-decoration-none text-end text-dark mb-3 d-block"} href={"/forgot-password"}>
            Forgot Password?
          </Link>
          <Form.Control className={"btn btn-warning"} type="submit" value="Login" />
        </Form.Group>

        <span className={"text-center d-block mt-2"}>
          Already haven't account?{" "}
          <Link className="text-warning text-decoration-none" href="/register/recruter">
            Register Here
          </Link>
        </span>
      </Form>
    </AuthenticationLayout>
  );
};

export default RecruterLogin;
