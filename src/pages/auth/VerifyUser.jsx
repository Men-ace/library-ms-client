import React, { useState } from 'react'
import { Spinner } from 'react-bootstrap'

const VerifyUser = () => {
    const [isPending, setIsPensding] = useState(true)        

  return(
        <div className='py-5' >
            {isPending && (
                <div className='m-auto text-center' style={{width: "450"}}>

                    <div className='d-flex justify-content-center'>
                    <Spinner animation='border'
                    variant='primary'/>
                    </div>

                    <div>
                        Please do not do not go back or refresh the browser, Please Wait... 
                   </div> 
                 </div>  
            )}
        </div>
        )
}
export default VerifyUser
