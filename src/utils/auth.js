export const setToken = (token) => {
    if (token) {
        localStorage.setItem('token', token);
    }
};

export const getToken = () => {
    return localStorage.getItem('token');
};

export const removeToken = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
};
