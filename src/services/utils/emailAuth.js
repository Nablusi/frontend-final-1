export const emailAuth = () => {
    try {
        const email = localStorage.getItem('email') || sessionStorage.getItem('email') || '';
        if (email !== '') {
            return email;
        } else {
            return "z";
        }
    } catch (error) {
        console.error('Error retrieving or parsing email:', error);
        return "z";
    }
}