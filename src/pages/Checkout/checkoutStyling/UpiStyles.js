export const mainPaper = { 
    display: 'flex', 
    flexDirection: 'column', 
    gap: '40px', 
    boxShadow: 'none', 
    border: '1px solid #21516A'
}
export const mainBox = (upiMethod) =>({
    display: 'flex',
    flexDirection: 'column',
    padding: '11px',
    backgroundColor: upiMethod === 'google' ? '#f3f7f7' : ''
});
export const mainBox3 = (upiMethod) =>({
    display: 'flex',
    flexDirection: 'column',
    padding: '11px',
    backgroundColor: upiMethod === 'path' ? '#f3f7f7' : ''
});
export const secondBox = { 
    display: 'flex', 
    flexDirection: 'row', 
    alignItems: 'center', 
    gap: '11px', 
    justifyContent: 'space-between'
}
export const thirdBox = {
    display: 'flex', 
    flexDirection: 'row', 
    alignItems: 'center', 
    gap: '11px'
}

export const firstPaper = {
    width: '68px', 
    height: '68px'
}
export const img = { 
    padding: '12px',
}
export const fontWeight = {
    fontWeight: '500'
}
export const formControl = {
    mb: '20px', 
    alignSelf: 'end', 
    transform: 'translateX(23px)'
}
export const boxSecond = {
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'space-between'
}
export const textFileds ={
    mt: '12px', 
    "& .MuiOutlinedInput-notchedOutline": { borderColor: "#639599" }
}
export const typoss = {
    color: '#A7A7A7', 
    mt: '8px', mb: '8px'
}
export const secondFormContol = {
    color: '#626262', 
    fontWeight: '500',
     mt: '8px', 
     mb: '8px'
}

export const mainBoxPhone = (upiMethod) =>({
    display: 'flex',
    flexDirection: 'column',
    padding: '11px',
    backgroundColor: upiMethod === 'phone' ? '#f3f7f7' : ''
});
export const thirdPaper = {
    width: '68px', 
    height: '68px', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center'
}
export const img2 = {
    padding: '12px', borderRadius: '50%', backgroundColor: '#5f259f'
}
