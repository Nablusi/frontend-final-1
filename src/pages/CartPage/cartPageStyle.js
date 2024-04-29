export const cartContainer = { 
    marginBottom: '185px' 
}
export const titleOfCart = (theme) =>  ({ 
    fontSize: '34px', 
    fontWeight: '600', 
    color: theme.palette.primary.carouselColor, 
    padding: "0", mt: '28px', mb: '87px'
});
export const cartBox = (isSmall) =>  ({ 
    display: 'grid', 
    gridTemplateColumns: isSmall ? 'minmax(1fr 1fr)' : '2fr 1fr', gap: '108px'
});
export const secondGrid = (isSmall) =>  ({ 
    display: 'grid',
     gridTemplateColumns: isSmall ? 'auto auto auto auto' : '2fr 1fr 1fr 1fr'
});
export const divider = {
    mt: '8px', 
    mb: '8px'
}
export const price = {
    marginLeft: '20px' 
}

