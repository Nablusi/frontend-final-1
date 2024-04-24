export const authUser = () => {
    try {
        const token = JSON.parse(localStorage.getItem('token')) || '';
        if (token !== '') {
            console.log('Token exists:', token);
            // You might want to perform additional checks on the token here
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
