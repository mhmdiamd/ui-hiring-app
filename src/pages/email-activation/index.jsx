import React, {useEffect} from "react";
import CardActivation from "components/Cards/CardActivation/CardActivation";
import { useRouter } from 'next/router'
import Swal from 'sweetalert2'
import {
  showLoading,
  successLoading,
  failedLoading,
} from "@/common/loadingHandler";
import { useUserRegisterQuery } from "@/features/auth/userApi";


const EmailActivation = () => {
  const router = useRouter()
  const {data, isLoading, isSuccess, isError} = useUserRegisterQuery({
    token : router?.query?.token,
    role: router?.query?.role
  }, {skip: router.query.token ? false: true})

  
  useEffect(() => {
    if(isLoading) showLoading('Please wait...')
    if(isSuccess || isError) Swal.close()
  }, [isLoading, isSuccess, isError])

   return (
    <main style={{ background: "#F0F5F9" }}>
      <CardActivation
          title={isSuccess ? "Register Succes, Email aleready Active!" : `Register Failed!`}
          description={isSuccess ? "Selamat!!, email Anda berhasil diaktivasi. Silakan login ke akun Anda untuk mulai menggunakan layanan kami." : "Mohon maaf, sepertinya ada masalah saat mengaktivasi email Anda. Silakan daftar kembali untuk mendapatkan akun baru."}
      >
          <button
           className="btn bg-purple mt-3 mb-3 rounded-pill px-4"
        >
          <a href={`/login/${router?.query?.role}`} className="text-decoration-none text-light">
            Login Now!  
          </a>
        </button>
      </CardActivation>
    </main>
  );
};

export default EmailActivation;
