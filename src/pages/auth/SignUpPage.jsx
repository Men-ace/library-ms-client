import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { CustomInput } from '../../components/customInput/CustomInput';
import { signUpInputs } from '../../assets/customInputs/userSignUp';
import useForm from '../../hooks/useForm';
import { singUpNewUserApi } from '../../services/authAPI';


const initialState = {}
const SignUpPage = () => {
const { form, setForm, handleOnChange, passswordErrors}  = useForm(initialState)

const handleOnSubmit = async(e) =>{
  e.preventDefault()

  const result = await singUpNewUserApi(form)
}

  return (
    <div className='d-flex justify-content-center'>
     <Form 
     onSubmit={handleOnSubmit}
     style={{width:"450px"}}
      className="card p-3 shadow-lg mt-5 mb-5">

      <h1>Join Our Library Community</h1>
      <hr />

      {
        signUpInputs.map((input)=>
           (<CustomInput 
            key={input.name} 
            {...input} 
            onChange={handleOnChange}/>)
          )
      }

        <div className="p-3">
          <ul className='text-danger'>
            {
              passswordErrors?.length > 0 && 
              passswordErrors.map((msg)=> <li key={msg}>{msg}</li> )
            }
          </ul>
        </div>

      <Button variant="primary" type="submit" className='mb-4'
      disabled={passswordErrors?.length}>
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default SignUpPage
