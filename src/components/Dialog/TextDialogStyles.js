export const box = {
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center', 
    width: '100%', 
    mt: '24px'
}

export const secondBox = {
    position: 'relative', 
    width: '100%', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center'
}

export const firstButton = (theme) => ({
    textTransform: 'capitalize', 
    position: 'absolute', 
    right: '30px', 
    color: theme.palette.primary.carouselColor
});

export const textField = (theme) => ({
    width: '90%', 
    backgroundColor: theme.palette.primary.inputBackground,
});

export const placeOrderButton = (theme) => ({
    mt: '24px', 
    mb: '34px', 
    width: '100%', 
    textTransform: 'capitalize', 
    backgroundColor: theme.palette.primary.carouselColor 
});
export const continueButtons = (theme) => ({
    textTransform: 'capitalize', 
    textDecoration: 'underline', 
    color: theme.palette.primary.carouselColor
});

export const boxes = {
    width: '100%'
}