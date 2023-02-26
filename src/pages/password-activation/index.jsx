import React from "react";
import CardActivation from "components/Cards/CardActivation/CardActivation";

const PasswordActivation = () => {
  return (
    <main style={{ background: "#F0F5F9" }}>
      <CardActivation
        title={"Request to reset your Account Password"}
        description={
          "The following is the button for you to reset the password."
        }
      >
        <button
          type="button"
          className="btn bg-purple mt-3 mb-3 rounded-pill px-4"
        >
          <a href="#" className="text-decoration-none text-light">
            Change Password
          </a>
        </button>
      </CardActivation>
    </main>
  );
};

export default PasswordActivation;
