export const cartInfo = (isPhone) => ({
    height: isPhone ? '190px' : '94px', 
    marginLeft: '20px'
});
export const subTotal = (isPhone) => ({
    height: isPhone ? '190px' : '94px', 
    marginLeft: '20px', 
    display:'flex', 
    flexDirection:'column'
});
export const remove = {
    justifyContent:'flex-start', 
    color:'red', 
    textTransform:'capitalize', 
    padding:'0'
}