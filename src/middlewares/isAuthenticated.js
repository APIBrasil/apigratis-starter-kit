export const isAuthenticated = () => {

    const user = localStorage.getItem('user');
    const token = JSON.parse(user)?.authorization.token;
    
    if (token) {
        return true;
    }

    return false;
}


