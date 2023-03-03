import AuthenticationLayout from 'components/templates/Authentication/AuthenticationLayout';
import React, {useState, useEffect} from 'react';
import { Form } from 'react-bootstrap';
import Link from 'next/link'
import { recruterForm } from '../../../../lib/recruterForm';
import { useRecruterRegisterMutation } from '@/features/auth/recruter/recruterApi';
import {showLoading, successLoading, failedLoading} from '@/common/loadingHandler'
import InputGroup from 'react-bootstrap/InputGroup'; 

const RecruterRegister = () => {
  const [recruterRegister, {isLoading, isSuccess, isError, error}] = useRecruterRegisterMutation()
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
      await recruterRegister({data})
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
    <AuthenticationLayout title={'Hello, Gawpeople'} description={"Hei, jangan sampai HRD-nya ketinggalan zaman ya! Daftarkan dirimu sekarang di website ini, siapa tahu kamu akan menemukan calon karyawan yang cerdas dan berbakat seperti Spongebob yang selalu punya ide brilian untuk Krusty Krab!"}>
      <Form onSubmit={registerHandler} className='pb-4'>
        {recruterForm.map((recruter, i) => (
           
          <Form.Group key={i} className="mb-3" controlId={`formGroup${recruter?.name}`}>
            <Form.Label>{recruter?.title}</Form.Label>
            <InputGroup hasValidation>
              {recruter?.name == 'phone' && (
                <InputGroup.Text id="phone">+62</InputGroup.Text>
              )}
              <Form.Control 
                className={'bg-light py-2 rounded-0'} 
                value={data[recruter.name]}
                name={recruter?.name} 
                type={recruter?.type} 
                placeholder={recruter?.placeholder} onChange={changeHandler} 
                required
              />
            </InputGroup>
          </Form.Group>
        ))}

        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Confirmation Password</Form.Label>
          <Form.Control className={'bg-light py-2 rounded-0'} value={passwordConfirmation}  onChange={(e) => setPasswordConfirmation(e.target.value)} type="password" placeholder="*************" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Control className={'btn btn-warning'}  type="submit" value="Register" />
        </Form.Group>
        
        <span className={'text-center d-block mt-2'}>Already have account? <Link className="text-warning text-decoration-none" href="/login/recruter">Login Here</Link></span>
        
      </Form>
    </AuthenticationLayout>
  );
};

export default RecruterRegister;
