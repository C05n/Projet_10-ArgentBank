import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginActions } from "../../store/actions/authActions";
// 
import InputForm from "../../components/InputForm/InputForm";
import Button from "../../components/Button/Button";

function Form() {
   const [authData, setAuthData] = useState({
     email: "",
     password: "",
     rememberMe: false
   });
   const error = useSelector(state => state.auth.error);
   
   const dispatch = useDispatch();
   const navigate = useNavigate();
 
   const handleInputChange = ({ target: { id, value, type, checked } }) => {
      setAuthData(prev => ({
        ...prev,
        [id]: type === 'checkbox' ? checked : value
      }));
    }
 
   const handleSubmit = async (e) => {
      e.preventDefault();
      const loginSuccess = await dispatch(loginActions.login(authData));
      if (loginSuccess) {
         navigate('/user');
      }
   }

   return (
      <main className="main bg-dark">
         <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
               <InputForm
                  label="Email"
                  type="email"
                  id="email"
                  value={authData.email}
                  onChange={handleInputChange}
               />
               <InputForm
                  label="Password"
                  type="password"
                  id="password"
                  value={authData.password}
                  onChange={handleInputChange}
               />
               <div className="input-remember">
                  <input
                     type="checkbox"
                     id="rememberMe"
                     checked={authData.rememberMe}
                     onChange={handleInputChange}
                  />
                  <label htmlFor="rememberMe">Remember me</label>
               </div>
               {error && <p className="error">{error}</p>}
               <Button className="sign-in-button" text="Sign In" type="submit" />
            </form>
         </section>
      </main>
   );
}

export default Form;