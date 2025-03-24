import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { CustomInput } from '../../components/customInput/CustomInput';
import { signUpInputs } from '../../assets/customInputs/userSignUp';


const SignUpPage = () => {
  return (
    <div className='d-flex justify-content-center'>
     <Form style={{width:"450px"}} className="card p-3 shadow-lg mt-5 mb-5">
      <h1>Join Our Library Community</h1>
      <hr />
      {
        signUpInputs.map((inputs)=> <CustomInput keys={inputs.name} {...inputs}/> 

        )
      }

      <Button variant="primary" type="submit" className='mb-4'>
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default SignUpPage
