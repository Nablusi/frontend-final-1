export const emailAuth = () => {
    try {
        const email = JSON.parse(localStorage.getItem('email')) || JSON.parse(sessionStorage.getItem('email')) || '';
        if (email !== '') {
            console.log('email exists:', email);
            return email;
        } else {
            console.log('email does not exist or is invalid:', email);
            return "z";
        }
    } catch (error) {
        console.error('Error retrieving or parsing email:', error);
        return "z";
    }
}