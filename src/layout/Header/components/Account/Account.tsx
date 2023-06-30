import React, { useState } from 'react'
import './Account.scss'
import { Enter } from './Enter';
import { User } from './User';

export const Account = () => {

   const [isAuth, setIsAuth] = useState<boolean>(true);

   return (
      <div className="account">
         {
            isAuth ? <User /> : <Enter />
         }
      </div>
   )
}
