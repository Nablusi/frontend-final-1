export const isProductsExistInBag = () => {
    try {
        const cart = JSON.parse(localStorage.getItem('cart'))  || [];
        if (cart.length !== 0) {
            return true;

        } else {
            return false;
        }
    } catch (error) {
        console.error('Error retrieving or parsing product:', error);
        return false;
    }
};
