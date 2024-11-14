export const authMiddleware = store => next => action => {
   if (action.type === 'LOGIN_SUCCESS') {
     localStorage.setItem('token', action.payload.token);
   }
   
   if (action.type === 'LOGOUT') {
     localStorage.removeItem('token');
   }
   
   return next(action);
 };