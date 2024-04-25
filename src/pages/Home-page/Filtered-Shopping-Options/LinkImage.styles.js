export const image = { 
    width: '100%', 
    height: '100%', 
    borderRadius:'24px', 
    objectFit:'cover'

}

export const link = (isFull,isSmall, isOther, flip) => ({ 
    gridColumn: isFull ?  '1 / span 4' : isSmall ? '1 / span 4' : isOther ? '3 / span 2' :'1 / span 2',
    position: 'relative', 
    borderRadius:'24px', 
    textDecoration:'none', 
    height: flip ? '228px' : '400px', 
}); 

export const defaultContent = { 
    position: 'absolute', 
    top: "16%", 
    left: '38px'
}

export const limitedEdition = (theme) => ({
    textTransform: 'uppercase', 
    color: theme.palette.primary.brownColor, 
    mb: '19px'
});
export const limited = (theme) => ({
    color: theme.palette.primary.brownColor,
});


export const contentFlip =  {
    position: 'absolute', 
    top: "16%", 
    right: '38px', 
    display:'flex', 
    flexDirection:'column', 
    alignItems:'flex-end'
};

export const contentTypo = (theme, first) => ({
    color: first ?  theme.palette.primary.pinkColor : theme.palette.primary.darkBlueColor , 
    width: first ?'196px':'230px' , mb:'21px'
});
export const contentButton = (theme, first) => ({
    color: first ?  theme.palette.primary.pinkColor : theme.palette.primary.darkBlueColor,  
    width:'47px', height:'47px', backgroundColor: first ? '#F1F1F1': '#c1cbd1', borderRadius:'50%'
});