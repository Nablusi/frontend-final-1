export const getToken = () =>  {
    try {
        const token = localStorage.getItem('token') ||  sessionStorage.getItem('token') || '';
        if (token !== '') {
            return token;
        } else {
            return false;
        }
    } catch (error) {
        console.error('Error retrieving or parsing token:', error);
        return false;
    }
}