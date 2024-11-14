import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from '../../store/reducers/services/authService';
// 
import InputForm from "../../components/InputForm/InputForm";
import Button from "../../components/Button/Button";

function Form() {
   const [credentials, setCredentials] = useState({
      email: "",
      password: "",
   });
   
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const handleInputChange = (e) => {
      const { id, value, type, checked } = e.target;
      setCredentials(prev => ({
         ...prev,
         [id]: type === 'checkbox' ? checked : value
      }));
   }

   const handleSubmit = async (e) => {
      e.preventDefault();
      console.log('Attempting login with:', credentials);

      const loginPayload = {
         email: credentials.email,
         password: credentials.password
      };
   
      
      try {
         dispatch({ type: 'LOGIN_REQUEST'});
         const data = await loginUser(credentials);
         console.log('Login response:', data);
         
         dispatch({ 
            type: 'LOGIN_SUCCESS',
            payload: {
               token: data.body.token,
               user: data.body
            }
         });
         
         navigate('/User');
      } catch (error) {
         console.error('Login error:', error);
         dispatch({ 
            type: 'LOGIN_FAILURE',
            payload: error.message
         });
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
                  value={credentials.email}
                  onChange={handleInputChange}
               />
               <InputForm
                  label="Password"
                  type="password"
                  id="password"
                  value={credentials.password}
                  onChange={handleInputChange}
               />
               <div className="input-remember">
                  <input
                     type="checkbox"
                     id="remember-me"
                     checked={credentials.rememberMe}
                     onChange={handleInputChange}
                  />
                  <label htmlFor="remember-me">Remember me</label>
               </div>
               <Button className="sign-in-button" text="Sign In" type="submit" />
            </form>
         </section>
      </main>
   );
}

export default Form;