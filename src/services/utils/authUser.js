export const authUser = () => {
    try {
        const token = JSON.parse(localStorage.getItem('token')) ||  JSON.parse(sessionStorage.getItem('token')) || '';
        if (token !== '') {
            console.log('Token exists:', token);
            return true;
        } else {
            console.log('Token does not exist or is invalid:', token);
            return false;
        }
    } catch (error) {
        console.error('Error retrieving or parsing token:', error);
        return false;
    }
};
