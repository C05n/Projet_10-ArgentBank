import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import AccountContent from "../../components/AccountContent/AccountContent";
import Button from "../../components/Button/Button";

import { getUserProfile } from "../../store/reducers/userSlice";

function UserPage() {
   const dispatch = useDispatch();
   const { firstName, lastName, accounts} = useSelector((state) => state.user);

   useEffect(() => {
      dispatch(getUserProfile());
   }, [dispatch]);

   return (
      <main className="main bg-dark">
         <div className="header">
            <h1>Welcome back<br />{firstName} {lastName}!</h1>
            <Button className="edit-button" text="Edit Name" />
         </div>
         <h2 className="sr-only">Accounts</h2>
         <AccountContent 
            title="Argent Bank Checking (x8349)"
            amount="$2,082.79"
            description="Available Balance"
         />
         <AccountContent
            title="Argent Bank Savings (x6712)"
            amount="$10,928.42"
            description="Available Balance"
         />
         <AccountContent
            title="Argent Bank Credit Card (x8349)"
            amount= "$184.30"
            description="Current Balance"
         />
      </main>
   )
}

export default UserPage;