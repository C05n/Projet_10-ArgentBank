import { getUserProfile } from '../reducers/userSlice';
import { authService } from '../reducers/services/authService';

export const loginFailure = (error) => ({
   type: 'LOGIN_FAILURE',
   payload: error
 });

export const loginActions = {
   login: (authData) => async (dispatch) => {
      localStorage.clear();
      dispatch({ type: 'LOGOUT' });

      try {
         const response = await authService.login(authData);

         if (response.status === 200 && response.body.token) {
            dispatch({
               type: 'LOGIN_SUCCESS',
               payload: {
                  token: response.body.token,
                  rememberMe: authData.rememberMe
               }
            });
            await dispatch(getUserProfile());
            return true;
         }
         return false;
      } catch (error) {
         dispatch(loginFailure(error.message));
         return false;
      }
   }
};

