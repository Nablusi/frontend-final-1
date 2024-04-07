export const heroContainer = (isLargeScreen) => ({
    marginTop: '33px',
    borderRadius: '10px',
    overflow: 'hidden',
    width: '100%',
    position: 'relative',
    
});

export const img = (heroImage) => ({
    backgroundImage: `url(${heroImage})`,
    width:'100%', 
    borderRadius: '10px',
    backgroundSize: 'cover', 
    backgroundPosition: 'center',
    backgroundRepeat:'no-repeat',
    objectFit: 'cover',
    height: '400px',
});
