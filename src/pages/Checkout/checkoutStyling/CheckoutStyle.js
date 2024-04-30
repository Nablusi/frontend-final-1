export const typoMain = (theme) => ({ 
    fontSize: '34px', 
    fontWeight: '600', 
    color: theme.palette.primary.carouselColor, 
    mb: '40px'
});
export const miniBox = { 
    marginBottom: '80px'
}
export const miniTypo = {
    fontWeight: '600', 
    fontSize: '32px'
}
export const homeButton = {
    textTransform: 'capitalize', 
    mt: '50px'
}
export const smallBox = (isSmall) =>({
    display: 'grid', 
    gridTemplateColumns: isSmall ? 'minmax(1fr 1fr)' : '2fr 1fr', 
    gap: '76px'
});
export const accordion = {
    boxShadow: 'none', 
    width: '100%', 
    mb: '40px', 
    padding: '0'
}
export const accordionSummary = {
    fontSize: '22px', 
    fontWeight: '600', 
    borderBottom: '1px solid #0000002e', 
    padding: '0'
}
export const radioGroup = {
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', 
    gap: '20px', 
    mt: '43px', 
    mb: '68px'
}
export const buttonContainer = {
    display: 'flex', flexWrap: 'wrap', 
    justifyContent: 'space-between', 
    mt: '20px', 
    mb: '50px'
}
export const firstButton = {
    textTransform: 'capitalize', 
    textDecoration: 'underline'
}
export const secondButton = (theme) => ({
    textTransform: 'capitalize', 
    color: theme.palette.primary.textWhiteColor, 
    backgroundColor: theme.palette.primary.carouselColor
})
export const accordionDetails = (isPhone) => ({
    display: 'grid', 
    mt: '45px', 
    gridTemplateColumns: isPhone ? 'ifr' : '1fr 1fr', 
    gap: '31px',
     width: '100%'
})

export const lastBox = {
    display: 'flex', 
    flexDirection: 'column', 
    mb: '50px'
}
export const lastTypo = {
    fontSize: '20px', 
    fontWeight: '600'
}
export const divider = {
    mb: '24px', 
    mt: '8px'
}
export const boxThree = {
    mt: '24px'
}
export const toaster = {
    mt: '50px', mb: '100px'
}