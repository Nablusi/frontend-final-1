import theme from "../../../theme/Theme";
const styles = {
    Parentgrid:{
        display:'grid',
        gridTemplateColumns: '2fr 9fr',
        [theme.breakpoints.down('md')]:{
            gridTemplateColumns: '1fr',
        }
    },
    ProductsGrid:{
        display:'grid',
        gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
        gap:'15px',
        [theme.breakpoints.between('xs','md')]:{
            gridTemplateColumns: 'repeat(2,6fr)',
        },
    },
    centerText:{
    }
};
export default styles;