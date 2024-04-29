export const box = (paymentMethod, name) => ({
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    padding: '12px 15px 25px 15px', 
    height: '174px', 
    backgroundColor: paymentMethod === name ? '#f3f7f7' : ''
})
export const formControl = {
    mb: '20px', 
    alignSelf: 'end', 
    transform: 'translateX(23px) '
}
export const typo = {
    mt: '8px', 
    fontWeight: '500'
}