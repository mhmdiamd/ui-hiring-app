import React from 'react'
import Image from 'next/image'

const CardListContact = ({user}) => {
  return (
    <div className='row pointer'>
      <div className="col-auto mb-2 d-flex align-items-center">
        <Image
          src={'/home/userProfile.jpg'}
          className={'img-fluid rounded-circle'}
          width={40}
          height={40}
        />
      </div>
      <div className="col d-flex flex-column overflow-hidden">
        <span className='fw-semibold'>Contact Name</span>
        <p className='text-muted text-nowrap w-100'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, aut?</p>
      </div>
    </div>
  )
}

export default CardListContact