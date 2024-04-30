export const button = (theme) => ({
    textTransform: 'capitalize', 
    fontWeight: '500', 
    borderColor:theme.palette.primary.carouselColor, 
    color: theme.palette.primary.carouselColor
});

export const box = (isPhone) => ({
    display: 'flex', 
    flexDirection: isPhone ? 'column' : "row", 
    gap: '16px', 
    ml: '5px', 
    width: '100%'
});

export const img = {
    width: '75px', 
    height: '80px'
}

export const boxContainer = {
    display: 'flex', 
    flexDirection: 'column', 
    mb: '16px' 
}
export const firstTypo = {
    padding: '0', 
    overflow:'hidden', 
    textOverflow: 'ellipsis', 
    whiteSpace:'nowrap'
}
export const secondTypo = {
    height: '30px', 
    overflow: 'hidden', 
    textOverflow: 'ellipsis', 
    padding: '0', 
    whiteSpace: 'nowrap'
}
export const thirdTypo = {
    padding: '0'
}