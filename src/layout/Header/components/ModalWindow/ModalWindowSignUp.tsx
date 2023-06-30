import React from 'react'
import { UilMultiply } from '@iconscout/react-unicons'
import './ModalWindowSignUp.scss'

export const ModalWindowSignUp = ({ open, setOpen }) => {
   return (
      <div className={open ? `modal-window-signup modal-window-signup_open` : `modal-window-signup modal-window-signup_close`}>
         <div className="modal-window-signup__body">
            <button 
               className="modal-window-signup__close-button"
               onClick={() => setOpen(!open)}
            >
               <UilMultiply className="modal-window-signup__close-button-icon" />
            </button>
            <h2 className="modal-window-signup__title">
               Create an Account!
            </h2>
            <form action="" className="modal-window-signup__form">
               <input type="email" className="modal-window-signup__email" placeholder='Email'/>
               <input type="password" className="modal-window-signup__password" placeholder='Password'/>
               <input type="password" className="modal-window-signup__password" placeholder='Repeat password'/>
               <button className="modal-window-signup__login-button">
                  Sign Up
               </button>
               <span className="modal-window-signup__create-account">
                  Already have an account? <br /> 
                  <a href="" className="modal-window-signup__create-account-link">
                     Log In!
                  </a>
               </span>
            </form>
         </div>
      </div>
   )
}
