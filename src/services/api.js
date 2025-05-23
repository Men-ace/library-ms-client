import axios from 'axios'
import { toast } from 'react-toastify'
export const apiProcessor = async({url, method, payload, showToast}) =>{
    try {
        const responsePending = await axios({
            url,
            method,
            data : payload,
            // headers
        })
        // show toast message 
        if(showToast){
            toast.promise(responsePending, {
                pending : " Please wait...",
            })
        }

        const {data} = await  responsePending
 showToast && toast[data.status] (data.message)
        return data
    } catch (error) {
        console.log(error)
        const msg = error?.response?.data?.message || error.message
        showToast &&  toast.error(msg)

        return{
            status: "error",
            message: msg, 
        }
       
    }
}
