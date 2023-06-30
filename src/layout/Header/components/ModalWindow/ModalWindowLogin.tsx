import React from 'react'
import { UilMultiply } from '@iconscout/react-unicons'
import { UilEye } from '@iconscout/react-unicons'
import './ModalWindowLogin.scss'

export const ModalWindowLogin = ({ open, setOpen }) => {
   return (
      <div className={open ? `modal-window-login modal-window-login_open` : `modal-window-login modal-window-login_close`}>
         <div className="modal-window-login__body">
            <button 
               className="modal-window-login__close-button"
               onClick={() => setOpen(!open)}
            >
               <UilMultiply className="modal-window-login__close-button-icon" />
            </button>
            <h2 className="modal-window-login__title">
               Welcome Back!
            </h2>
            <form action="" className="modal-window-login__form">
               <input type="email" className="modal-window-login__email" placeholder='Email'/>
               <input type="password" className="modal-window-login__password" placeholder='Password'/>
               <button className="modal-window-login__login-button">
                  Log in
               </button>
               <span className="modal-window-login__create-account">
                  Don't have an account? <br /> 
                  <a href="" className="modal-window-login__create-account-link">
                     Sign Up for free
                  </a>
               </span>
            </form>
         </div>
      </div>
   )
}
