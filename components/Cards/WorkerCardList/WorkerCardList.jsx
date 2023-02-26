import React from 'react'
import style from './WorkerCardList.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link'

const WorkerCardList = () => {
  return (
    <div className={`${style.card} card py-3 px-2 border-0 border-bottom shadow rounded-0 min-w-100`}>
      <div className="row">
        <div className="col-12 col-sm-3 col-md-auto d-flex justify-content-center align-items-center">
          <img src="/home/userProfile.jpg" className={`${style.workerProfile} ms-md-4 img-fluid`} alt="..." />
        </div>
        <div className="col-12 col-sm-9 col-md ">
          <div className={`${style.cardBody} card-body px-0 d-flex flex-column`}>
            <span className={`${style.workerName} fs-5 fw-semibold`}>Muhamad Ilham Darmawan</span>
            <span className="text-secondary">Web Developer</span>
            <span className={`d-none d-sm-block text-secondary`}>
              <small className={`text-muted`}>
                <FontAwesomeIcon Icon={faLocationDot} /> Banten, Indonesia
              </small>
            </span>
            <div className={`${style.workerSkills} skills mt-2 d-flex flex-wrap gap-2`}>
              <Link className={'text-decoration-none py-0 text-center text-light btn btn-warning pb-1'} href={''}>Java</Link>
              <Link className={'text-decoration-none py-0 text-light btn btn-warning pb-1'} href={''}>PHP</Link>  
             
            </div>
          </div>
        </div>
        <div className="col-9 d-none offset-sm-3 offset-md-0 col-md-auto d-sm-flex align-items-center">
          <Link href={'/profile'} className={'btn text-light bg-purple me-5'}>See Profile</Link>
        </div>
      </div>
    </div>
  )
}

export default WorkerCardList