export const dialog = (theme) => ({ 
    '.MuiDialog-container': {
        justifyContent: 'flex-end',
        alignItems:'flex-start'
    },
    '& .MuiDialog-paper': {
        margin: '16px',
        width: '460px',
        maxWidth: '100%',
        padding: theme.spacing(2),
        borderRadius: theme.shape.borderRadius,
    }
}); 

export const dialogTitle = { 
    mb: '24px',
};

export const buttonDialogTitle = (theme) => ({ 
    gap: '25px', 
    color: theme.palette.primary.carouselColor, 
    fontWeight: '600', 
    textTransform: 'capitalize',
});

export const arrowIcon = { 
    fontSize: '17px',
}

export const list = { 
    width: '100%', 
}

export const listItem = { 
    width: '100%', 
    display: 'flex', 
    flexDirection: 'column' 
}

export const boxListItem = {
    display: 'flex', 
    flexDirection: 'row', 
    width: '100%'
}

export const img = { 
    width: '75px', 
    height: '80px', 
    marginRight: '16px'
}

export const cardBody = { 
    display: 'flex', 
    flexDirection: 'column', 
    width: '100%'
}

export const cardHeader = {
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    width: '100%'
}

export const cardTitle = { 
    fontWeight: 'bold'
}

export const cardFooter = {
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    width: '100%'
}

export const numberLine = (theme) => ({ 
    width: '73px', 
    height: '30px', 
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center', 
    position: 'relative', 
    border: `1px solid ${theme.palette.primary.carouselColor}`, 
    borderRadius: '4px',
});

export const plusMinusIcons = {
    color: 'black',
}

export const dividerOne = {
    width: '100%', 
    mt: '24px', 
    mb: '24px'
}