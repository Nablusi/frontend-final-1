export const nav = (theme) => ({ 
    backgroundColor: theme.palette.primary.textWhiteColor, 
    boxShadow: 'none'
});

export const toolbar = { 
    height: '80px', 
    padding: '0px !important' 
};

export const toolbarBox = {
    display: 'flex', 
    width: '100%', 
    justifyContent: 'space-between', 
    alignItems: 'center'
};

export const itemBox = { 
    display: 'flex', 
    flexDirection: 'row', 
    alignItems: 'center', 
    gap: '10px'
};

export const logo = (theme) => ({ 
    color: theme.palette.primary.main, 
    fontSize: '22px', 
    fontWeight: 'bold'
});

export const navItems = (theme) => ({ 
    color: theme.palette.primary.textColor, 
    fontSize: '14px', 
    textDecoration: 'none',
    padding:'0px 10px', 
    textTransform: 'capitalize',
    fontWeight:'400', 

});

export const textField = (theme, isIpad) => ({ 
    backgroundColor: theme.palette.primary.inputBackground,
    borderRadius:'5px',
    fontSize: '14px',
    width: isIpad ? "300px" : '362px',
    '& .MuiOutlinedInput-notchedOutline': {
        borderWidth: '0px', 
      },
});

export const textFieldInput = { 
    height: '44px', 
    alignItems: 'center'
};

export const IconButton = (theme) => ({ 
    color: theme.palette.primary.main, 
    padding: '5px',
    position:'relative'
});

export const orangeDot = {
    backgroundColor:'#FF8C4B', 
    border:"2px solid white", 
    position:'absolute', 
    right:'5px',
    top:'9px' ,
    width:'8px', 
    height:'8px', 
    borderRadius:'50%'
}
