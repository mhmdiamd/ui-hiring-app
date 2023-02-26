import React from "react";
import CardActivation from "components/Cards/CardActivation/CardActivation";

const PasswordActivation = () => {
  return (
    <main style={{ background: "#F0F5F9" }}>
      <CardActivation
        title={"Email Acitavation Success!"}
        description={
          "please log in to be able to enjoy the thrill of adventure on the Yukgawe website"
        }
      >
        <button
          type="button"
          className="btn bg-purple mt-3 mb-3 rounded-pill px-4"
        >
          <a href="#" className="text-decoration-none text-light">
            Login Now!  
          </a>
        </button>
      </CardActivation>
    </main>
  );
};

export default PasswordActivation;
