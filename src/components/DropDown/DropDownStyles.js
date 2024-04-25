export const list = (more) => ({ 
    opacity: more ? 1 : 0,
    transition: more ? 'opacity 0.5s ease' : 'opacity 0.5s ease',
});

export const textField = (theme) => ({
    width: '100%', 
    backgroundColor: theme.palette.primary.inputBackground
});

export const link = (theme) => ({ 
    textDecoration: 'none', 
    color: theme.palette.primary.textColor, 
});