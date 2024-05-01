export const getUserId = () =>  {
    try {
        const userId = localStorage.getItem('userId') ||  sessionStorage.getItem('userId') || '';
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