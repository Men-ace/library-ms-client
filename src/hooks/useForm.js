import { useEffect, useState } from "react"
import { validator } from "../utils/validatePassword"

const handleOnChange = ({e, form , setForm}) => {
    const { name, value } = e.target
    setForm({
        ...form, 
        [name]: value
    })
}


const useForm = (initialState) =>{
    const [form, setForm] = useState(initialState)
    const [passswordErrors, setpassswordErrors] = useState([])

    // only when the password and confirmpassword changes
    useEffect(()=>{
        const errorArg = validator(form.password, form.confirmPassword)
        setpassswordErrors(errorArg)
    }, [form.password, form.confirmPassword])

    
   return {
    form, 
    setForm,
    passswordErrors,
    handleOnChange: (e) =>handleOnChange({e, form, setForm})
   }
}

export default useForm