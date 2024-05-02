export const isLoggedIn = () => {
    const email = localStorage.getItem('email') || sessionStorage.getItem('email') || '';
    if (email !== '') {
        return true;
    } else {
        return false;
    }
}