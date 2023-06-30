import { useState } from 'react'
import { ModalWindowLogin } from '../ModalWindow/ModalWindowLogin'
import { ModalWindowSignUp } from '../ModalWindow/ModalWindowSignUp';
import './Enter.scss'

export const Enter = () => {

   const [loginOpen, setLoginOpen] = useState<boolean>(false);
   const [signUpOpen, setSignUpOpen] = useState<boolean>(false);

   return (
      <div className="enter">
         <button 
            className="enter__login-button"
            onClick={() => setLoginOpen(!loginOpen)}
         >
            Login
         </button>
         <button 
            className="enter__signup-button"
            onClick={() => setSignUpOpen(!signUpOpen)}
         >
            Sign Up
         </button>
         
         <ModalWindowLogin 
            open={loginOpen}
            setOpen={setLoginOpen}
         />
         <ModalWindowSignUp 
            open={signUpOpen}
            setOpen={setSignUpOpen}
         />
      </div>
   )
}