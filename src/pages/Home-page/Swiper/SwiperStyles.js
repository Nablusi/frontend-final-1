export const slider = {
    marginTop: '33px',
}

export const imgContainer = (isLargeScreen, isPadScreen, isMediumScreen, isSmallScreen) => ({
    borderRadius: '10px',
    overflow: 'hidden',
    width: '100%',
    position: 'relative', 
    height : isLargeScreen ? '400x': isPadScreen ? "400px" : isMediumScreen ? '520px' : isSmallScreen ? "680px" : '100%', 
});

export const image = {
    width: '100%',
    borderRadius: "10px",
    height:'100%',
    // backgroundSize: 'cover',
    objectFit: 'cover',
}

export const Box = (isSmallScreen, isPhoneScreen) =>({ 
    backgroundColor: 'rgb(222 222 222 / 70%)', 
    right: '0', 
    width: isSmallScreen ? "100%" :'56%', 
    top: '41px', borderTopLeftRadius: '10px', 
    borderBottomLeftRadius: '10px', 
    padding: '40px 40px 10px 40px', 
    position: 'absolute', 
    height: '80%', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: isPhoneScreen ? 'center' : 'start', 
    flexDirection: 'column'
}); 
export const topic = (theme, isPhoneScreen, isPadScreen) => ({
    color: theme.palette.primary.carouselColor, 
    fontWeight: 'bold', 
    fontSize: isPadScreen ? "40px" : '60px', 
    textAlign: isPhoneScreen ? 'center' : "start", 
}); 

export const trendy = (theme, isMediumScreen,isSmallScreen, isPhoneScreen ) =>({
    color: theme.palette.primary.carouselColor, 
    fontSize: '28px', 
    textAlign: isPhoneScreen ? 'center' : "start", 
    width: isMediumScreen ? "100%" : isSmallScreen ? "100%" :"74%",
}); 

export const button = (theme) =>({
    backgroundColor: theme.palette.primary.carouselColor, 
    color: theme.palette.primary.textWhiteColor, 
    marginTop: '70px', 
    width: '188px', 
    height: '44px', 
    borderRadius: '10px',  
    textDecoration:'none', 
    display:'flex', 
    justifyContent:'center', 
    alignItems:'center',
    gap:'10px',
})