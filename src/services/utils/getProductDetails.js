export const getProductDetails = () =>  { 
    try{ 
        const cart = JSON.parse(localStorage.getItem('cart')) || []; 
        return cart; 
    } catch(e){
        console.log('Error in getting Cart Info From Local Storage', e); 
        return []; 
    }
}