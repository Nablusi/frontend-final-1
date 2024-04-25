import { borderBottom, borderRadius } from "@mui/system";


export const selectedTab = (theme) => ({
  backgroundColor: theme.palette.primary.carouselColor,
  color: theme.palette.primary.textWhiteColor,
  padding:'6px 18px',
  mb:'8px',
  mt:'8px',
  borderRadius:'8px 8px',
  borderBottom:'none'
})