export const heroContainer = (isLargeScreen)=>({
    marginTop: '33px',
    borderRadius: '10px',
    overflow: 'hidden',
    width: '100%',
    position: 'relative',
    height : isLargeScreen ? '500px': '400px', 
});

export const img = (heroImage) => ({
    backgroundImage: `url(${heroImage})`,
    width: '100%',
    objectFit: 'cover',
    borderRadius: "10px",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%', 
})