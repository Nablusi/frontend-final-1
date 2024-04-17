export const image = { 
    width: '100%', 
    height: 'auto', 
}

export const link = (isFull,isSmall, isOther) => ({ 
    gridColumn: isFull ?  '1 / span 4' : isSmall ? '1 / span 4' : isOther ? '3 / span 2' :'1 / span 2',
}); 