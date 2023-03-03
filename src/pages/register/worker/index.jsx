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
    <AuthenticationLayout title={'Hello, Gawpeople'} description={"Hei, jangan sampe ketinggalan kereta menuju pekerjaan impianmu! Cepat daftar di Yuk Gawe, siapa tau kamu bisa menjadi kandidat favorit dari boss-nya Patrick Star dan bergabung dengan tim Spongebob Squarepants yang keren abis!"}>
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
          <Form.Control className={'btn btn-warning'}  type="submit" value="Register" />
        </Form.Group>
        
          <span className={'text-center d-block mt-2'}>Already have account? <Link className="text-warning text-decoration-none" href="/login/worker">Login Here</Link></span>
        
      </Form>
    </AuthenticationLayout>
  );
};

export default WorkerRegisterPage;
