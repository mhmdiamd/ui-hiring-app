import AuthenticationLayout from 'components/templates/Authentication/AuthenticationLayout';
import React, {useState, useEffect} from 'react';
import { Form } from 'react-bootstrap';
import Link from 'next/link'
import {workerForm} from '../../../../lib/workerForm'
import { useWorkerRegisterMutation } from '@/features/auth/worker/workerApi';
import {showLoading, successLoading, failedLoading} from '@/common/loadingHandler' 
import InputGroup from 'react-bootstrap/InputGroup';


const WorkerRegisterPage = () => {
  const [workerRegister, {isLoading, isSuccess, isError, error}] = useWorkerRegisterMutation()
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
    password: ''
  })


  const changeHandler = (e) => {
    setData(prev => {
      return {
        ...prev,
        [e.target.name] : e.target.value
      }
    })
  }

  const registerHandler = async (e) => {
    e.preventDefault();

    if(data.password != passwordConfirmation) {
      failedLoading("Password Doesn't Match!")
    }else {
      await workerRegister({data})
    }

  }
  useEffect(() => {
    if(isLoading) {
      showLoading('Please Wait....')
    }

    if(isSuccess) {
      successLoading('Register Success, Please check your Email for activation!')
      setPasswordConfirmation('')
      setData({
        name: '',
        email: '',
        phone: '',
        password: ''
      })
    }
    
    if(isError) {
      failedLoading(error.data.message)
      setPasswordConfirmation('')
      setData(prev => {
        return {
          ...prev,
          password: ''
        }
      })
    }

  }, [isLoading, isSuccess, isError])

  return (
    <AuthenticationLayout title={'Hello, Gawpeople'} description={"Hey, don't miss the train to your dream job! Hurry up and register at Yuk Gawe, who knows you might become the favorite candidate of Patrick Star's boss and join the cool Spongebob Squarepants team!"}>
      <Form onSubmit={registerHandler} className='pb-4'>
        {workerForm?.map((worker, i) => (
          <Form.Group key={i} className="mb-3" controlId={`formGroup${worker?.name}`}>
            <Form.Label>{worker?.title}</Form.Label>
            <InputGroup hasValidation>
              {worker?.name == 'phone' && (
                <InputGroup.Text id="phone">+62</InputGroup.Text>
              )}
              <Form.Control 
                className={'bg-light py-2'} 
                name={worker?.name} 
                type={worker?.type} 
                placeholder={worker?.placeholder} 
                value={data[worker.name]} 
                onChange={changeHandler} 
                required
              />
            </InputGroup>
          </Form.Group>
        ))}
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Confirmation Password</Form.Label>
          <Form.Control className={'bg-light py-2'} value={passwordConfirmation}  onChange={(e) => setPasswordConfirmation(e.target.value)} type="password" placeholder="*************" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Control className={'btn text-light bg-purple'}  type="submit" value="Register" />
        </Form.Group>
        
          <span className={'text-center d-block mt-2'}>Already have account? <Link className="text-purple text-decoration-none" href="/login/worker">Login Here</Link></span>
        
          <span className={'text-center d-block mt-2'}>Register as <span className='fw-semibold'>Recruter</span>? <Link className="text-purple text-decoration-none" href="/login/recruter">Register Here</Link></span>
      </Form>
    </AuthenticationLayout>
  );
};

export default WorkerRegisterPage;
