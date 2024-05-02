export const boxContainer = {
    display: 'flex', 
    flexDirection: 'column', 
    mt: '16px'
}

export const typoTitle = {
    fontWeight: '600', 
    fontSize: '20px', 
    color: '#13101E'
}
export const dividerOne = {
    mb: '16px'
}
export const typo = {
    fontWeight: '500', 
    color: '#626262'
}
export const typoSecond = {
    fontWeight: '500', 
    color: '#13101E'
}

export const firstButton = (theme) => ({
    textTransform: 'capitalize', 
    fontWeight: '500', 
    backgroundColor: theme.palette.primary.carouselColor, 
    color: theme.palette.primary.textWhiteColor 
});
export const secondButton = (theme) => ({
    textTransform: 'capitalize', 
    fontWeight: '500', 
    borderColor: theme.palette.primary.carouselColor, 
    color: theme.palette.primary.carouselColor
});

export const box = {
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'space-between'
}