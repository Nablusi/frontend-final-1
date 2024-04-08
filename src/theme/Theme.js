import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
      primary: {
        main: '#17494D',
        textColor: '#171520',
        carouselColor: '#1B4B66', 
        textWhiteColor: '#ffffff',
        paragraph: "#626262", 
        sale:'#E21D1D', 
        star:'#FF8C4B', 
        inputBackground: "#F1F1F1", 
        sectionTitle: '#13101E', 
        error: '#B00020'
      },
    },
    components:{
        MuiContainer:{
            defaultProps: {
                component: 'div',
                disableGutters: true,
                maxWidth: false
            },
            styleOverrides:{
                root:{
                    margin: '0px 20px',
                    padding:'0px', 
                    width:'auto', 

                }
            }
        }

    }



  });

export default theme;
