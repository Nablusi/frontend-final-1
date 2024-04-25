export const heroContainer = (isPhone) => ({
    position: 'relative',
    borderRadius: '24px',
    textDecoration: 'none',
    height: '400px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: isPhone ? 'center' : 'flex-end'
    
});
export const heroText = (isPhone) => ({
    position: 'absolute', 
    top: '109px', 
    right: isPhone ? '' : '150px' 
});
export const heroTextOne = (isSmall) => ({
    fontWeight: '700', 
    fontSize: isSmall ? '40px' :'72px'
});
export const heroTextTwo = (isSmall) => ({
    fontWeight: '400', 
    fontSize: isSmall ? '40px' :'72px'
});

export const img = {
    width: '100%',
    height: '100%',
    borderRadius: '24px',
    objectFit: 'cover'
};
