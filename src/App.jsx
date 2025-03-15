import './App.css'
import {Button} from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import { BsAirplaneFill } from "react-icons/bs";

function App() {
toast.success('hello')

  return (
   <>
   <h1>
       hell0
    </h1>
    <Button> click me <BsAirplaneFill />  </Button>
    <ToastContainer/>
    </>
  )
}

export default App
