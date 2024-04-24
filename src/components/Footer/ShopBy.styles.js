export const categoryContainer =  {
    display: 'flex', 
    flexDirection: 'column', 
    gap: '6px'
}

export const topics = (theme) =>  ({ 
    fontWeight: '400', 
    color: theme.palette.primary.textWhiteColor,
});

export const link = (theme) =>  ({ 
    color: theme.palette.primary.greyColor, 
    textDecoration: 'none'
});

export const categoryStyle = (theme)=>({ 
    '&:hover': { color: theme.palette.primary.textWhiteColor }
});