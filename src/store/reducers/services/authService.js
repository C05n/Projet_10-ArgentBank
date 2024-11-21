const API_URL = 'http://localhost:3001/api/v1';

export const authService = {
    login: async (authData) => {
        const response = await fetch(`${API_URL}/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: authData.email,
                password: authData.password
            })
        });
        if (!response.ok) {
            throw new Error('The email address or password is incorrect. Please retry...');
        }
        const data = await response.json();
        if (data.token) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('userName', data.body.userName);
        }
        return data;
    },

    getUserProfile: async () => {
        const token = localStorage.getItem('token');
        const response = await fetch(`${API_URL}/user/profile`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        return response.json();
    },
    
    updateUserName: async (newUserName) => {
        const token = localStorage.getItem('token');
        const response = await fetch(`${API_URL}/user/profile`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userName: newUserName })
        });

        if (!response.ok) {
            throw new Error('Error updating username');
        }

        const data = await response.json();
        console.log('API response data:', data);
        return data.body;
    }
};