export const slider = {
    marginTop: '33px',
}

export const imgContainer = (isLargeScreen, isPadScreen, isMediumScreen, isSmallScreen) => ({
    borderRadius: '10px',
    overflow: 'hidden',
    width: '100%',
    position: 'relative', 
    height : isLargeScreen ? '400x': isPadScreen ? "440px" : isMediumScreen ? '520px' : isSmallScreen ? "680px" : '100%', 
});

export const image = {
    width: '100%',
    borderRadius: "10px",
    height:'100%',
    backgroundSize: 'cover',
}

export const Box = (isSmallScreen) =>({ 
    backgroundColor: 'rgb(222 222 222 / 70%)', 
    right: '0', 
    width: isSmallScreen ? "100%" :'56%', 
    top: '41px', borderTopLeftRadius: '10px', 
    borderBottomLeftRadius: '10px', 
    padding: '40px 40px 10px 40px', 
    position: 'absolute', 
    height: '80%', 
    display: isSmallScreen ? 'flex' : '', 
    justifyContent: 'center', 
    alignItems:'center', 
    flexDirection: 'column'
}); 
export const topic = (theme) => ({
    color: theme.palette.primary.carouselColor, 
    fontWeight: 'bold', 
    fontSize: '60px'
}); 

export const trendy = (theme, isMediumScreen,isSmallScreen ) =>({
    color: theme.palette.primary.carouselColor, 
    fontSize: '28px', 
    width: isMediumScreen ? "100%" : isSmallScreen ? "100%" :"74%",
}); 

export const button = (theme) =>({
    backgroundColor: theme.palette.primary.carouselColor, 
    color: theme.palette.primary.textWhiteColor, 
    marginTop: '70px', 
    width: '188px', 
    height: '44px', 
    borderRadius: '10px', 
    textTransform: 'capitalize'
})