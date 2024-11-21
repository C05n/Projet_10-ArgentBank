import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import AccountContent from "../../components/AccountContent/AccountContent";
import InputForm from "../../components/InputForm/InputForm";
import Button from "../../components/Button/Button";

import { getUserProfile, updateUserName } from "../../store/reducers/userSlice";

function UserPage() {
   const dispatch = useDispatch();
   const { firstName, lastName, userName } = useSelector((state) => state.user);
   // État pour gérer l'édition du nom d'utilisateur
   const [isEditing, setIsEditing] = useState(false);
   const [newUserName, setNewUserName] = useState(userName);

   // Récupérer le profil utilisateur
   useEffect(() => {
      dispatch(getUserProfile());
   }, [dispatch]);

   // Mettre à jour le nom d'utilisateur local lorsque le nom d'utilisateur dans le store change
   useEffect(() => {
      if (userName) {
        setNewUserName(userName);
      }
   }, [userName]);
   // Fonction pour activer l'édition du nom d'utilisateur
   const handleEditClick = () => {
      setIsEditing(true);
   };
   // Fonction pour annuler l'édition et revenir à l'ancien nom
   const handleCancelEdit = () => {
      setIsEditing(false);
      setNewUserName(userName);
   };
   // Fonction pour sauvegarder l'édition et mettre à jour l'API
   const handleSaveClick = () => {
      dispatch(updateUserName(newUserName))
      setIsEditing(false);
   };
   // Fonction pour gérer les changements dans le champ de texte
   const handleUserNameChange = (event) => {
      setNewUserName(event.target.value);
   };

   return (
      <main className="main bg-dark">
         <div className="header">
         {!isEditing ? (
            <div>
               <h1>Welcome back<br /> {firstName} {lastName} </h1>
               <Button className="edit-button" text="Edit Name" onClick={handleEditClick} />
            </div>
            ) : (
               <div className="edit-container">
                  <h1>Edit user info</h1>
                  <div className="edit-mode-div">
                     <p>User name:</p>
                     <InputForm
                        type="text"
                        value={newUserName}
                        onChange={handleUserNameChange}
                        placeholder="New Username"
                        className="edit-username-input"
                     />
                  </div>
                  <div className="edit-mode-div">
                     <p>First name:</p>
                     <InputForm
                        type="text"
                        readOnly={true}
                        defaultValue={firstName}
                        placeholder="First Name"
                        className="name-input"
                     />
                  </div>
                  <div className="edit-mode-div">
                     <p>Last name:</p>
                     <InputForm
                        type="text"
                        readOnly={true}
                        defaultValue={lastName}
                        placeholder="Last Name"
                        className="name-input"
                     />
                  </div>
                  <div className="edit-mode-btn">
                     <Button className="edit-button" text="Save" onClick={handleSaveClick} />
                     <Button className="edit-button" text="Cancel" onClick={handleCancelEdit} />
                  </div>
               </div>
            )}
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
            amount="$184.30"
            description="Current Balance"
         />
      </main>
   );
}

export default UserPage;