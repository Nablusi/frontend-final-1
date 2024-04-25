export const footer = (theme) => ({ 
    width: '100%', 
    backgroundColor: theme.palette.primary.carouselColor,
});

export const container = { 
    margin: '0px 80px', 
    paddingTop: '25px'
}
export const outerContainer = { 
    display: 'flex', 
    justifyContent: 'space-between',
    pb: '80px', 
    flexWrap: 'wrap'
}

export const shopByProducts = (isPhone) => ({
    display: 'flex', 
    gap: '50px', 
    flexDirection: isPhone ? "column" : 'row'
});

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

export const divider = (theme) =>  ({
    borderTop: `solid 1px ${theme.palette.primary.greyColor}`, 
    width: '100%', 
    transform: 'translateY(23px)'
});

export const socialMediaContainer = { 
    display: 'flex', 
    flexDirection: 'column', 
    gap: '6px'
}

export const copyRight = (theme) => ({ 
    color: theme.palette.primary.greyColor
});

export const location = (theme, isPhone) =>  ({ 
    color: theme.palette.primary.textWhiteColor, 
    display: 'flex', 
    justifyContent: isPhone ? 'flex-start' : 'flex-end', fontWeight: '300'
});

export const social = (isPhone) =>  ({ 
    display: 'flex', 
    flexDirection: 'row', 
    alignContent: 'center', 
    justifyContent: isPhone ? 'flex-start' : 'flex-end', gap: '20px', mb: '30px', 
    flexWrap: 'wrap', 
    marginTop: isPhone ? '40px' : ''
});

export const iconButton = (theme) =>  ({ 
    backgroundColor: theme.palette.primary.zaytiColor,
});

export const icon = (theme) =>  ({ 
    color: theme.palette.primary.carouselColor 
});