import AuthenticationLayout from "components/templates/Authentication/AuthenticationLayout";
import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import Link from "next/link";
import { showLoading } from "@/common/loadingHandler";
import { useRouter } from "next/router";
import { useWorkerLoginMutation } from "@/features/auth/worker/workerApi";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { setCredentials } from "@/app/api/authSlice";

const WorkerLogin = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [loginWorker, { isLoading, isSuccess, isError, error }] =
    useWorkerLoginMutation();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    const res = await loginWorker(data);
    dispatch(setCredentials({ user: res?.data?.data, token: res?.data?.token }));
  };

  const redirectWeb = () => {
    return router.push("/home", undefined, {shallow: true});
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
    <AuthenticationLayout
      title={"Hello, Gawpeople"}
      description={
        "You haven't logged in yet? Wow, you won't be able to get a job at all, let alone get my warm heart!"
      }
    >
      {error && (
        <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          {error?.data?.message}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      )}
      <Form onSubmit={loginHandler} className="pb-4">
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control
            className={"bg-light py-2"}
            value={data.email}
            name={"email"}
            type="email"
            placeholder="Enter Email"
            onChange={changeHandler}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            className={"bg-light py-2"}
            name={"password"}
            type="password"
            placeholder="*************"
            value={data.password}
            onChange={changeHandler}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Link
            className={"text-decoration-none text-end text-dark mb-3 d-block"}
            href={"/forgot-password"}
          >
            Forgot Password?
          </Link>
          <Form.Control
            className={"btn bg-purple text-light"}
            type="submit"
            value="Login"
          />
        </Form.Group>

        <span className={"text-center d-block mt-2"}>
          Are you haven't account?{" "}
          <Link
            className="text-purple text-decoration-none"
            href="/register/worker"
          >
            Register Here
          </Link>
        </span>

        <span className={"text-center d-block mt-2"}>
          Login as <span className="fw-semibold">Recruter</span>?{" "}
          <Link
            className="text-purple text-decoration-none"
            href="/login/recruter"
          >
            Login
          </Link>
        </span>
      </Form>
    </AuthenticationLayout>
  );
};

export default WorkerLogin;
