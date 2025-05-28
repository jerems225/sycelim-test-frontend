const API_HOST = import.meta.env.VITE_API_HOST;

//Login Service
export const loginUser = async ({ email, password }) => {
  const response = await fetch(`${API_HOST}/api/v1/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();
  if (!response.ok) throw new Error(data.message || 'Login failed');
  return data;
};

//Registration Service
export const signup = async ({ fullName, email, password }) => {
    const response = await fetch(`${API_HOST}/api/v1/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName, email, password }),
    });

    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
    }

    return data;
};