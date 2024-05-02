export const getUserId = () =>  {
    try {
        const userId = localStorage.getItem('id') ||  sessionStorage.getItem('id') || '';
        if (userId !== '') {
            return userId;
        } else {
            return false;
        }
    } catch (error) {
        console.error('Error retrieving or parsing token:', error);
        return false;
    }
}