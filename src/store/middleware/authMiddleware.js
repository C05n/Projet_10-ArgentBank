export const authMiddleware = store => next => action => {
  if (action.type === 'LOGIN_SUCCESS') {
    localStorage.setItem('token', action.payload.token);
    if (action.payload.rememberMe) {
      localStorage.setItem('rememberMe', 'true');
      localStorage.setItem('user', JSON.stringify(action.payload.user));
    }
  }

  if (action.type === 'LOGOUT') {
    localStorage.removeItem('token');
    localStorage.removeItem('rememberMe');
    localStorage.removeItem('user');
  }

  return next(action);
};