export const authUser = () => {
    try {
        const token = localStorage.getItem('token') ||  sessionStorage.getItem('token') || '';
        if (token !== '') {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error('Error retrieving or parsing token:', error);
        return false;
    }
};
