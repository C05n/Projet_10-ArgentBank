const API_URL = 'http://localhost:3001/api/v1';

export const loginUser = async (credentials) => {
   const response = await fetch(`${API_URL}/user/login`, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials)
   });

   if (!response.ok) {
      throw new Error('Login failed');
   }

   return response.json();
};

export default API_URL;