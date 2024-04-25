import { Tabs, Tab, Paper, useTheme, Stack } from "@mui/material";
import * as tabStyles from './ProductDescripstyles.js'; 

export function ProductDescrip({ selectedTab, handleChange, descrip, reviews }){
  const theme = useTheme();

  return (
    <div style={{ margin: '30px 22px 24px 18px' }}>
      <Paper sx={{backgroundColor: '#F1F1F1', borderRadius:'12px', boxShadow:'none', padding:'20px' }} square>
        <Tabs
          value={selectedTab}
          indicatorColor="white"
          textColor={theme.palette.primary.textWhiteColor}
          onChange={handleChange}
          aria-label="product details tabs"
          sx={{  fontWeight:'500' }}
        >
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={4}>
            <Tab 
              label="Product Description" 
              value={0}
              selected={selectedTab === 0}
              onClick={() => handleChange(null, 0)}
              sx={selectedTab === 0 ? tabStyles.selectedTab(theme) : ''}
            />
            <Tab 
              label="Related Products" 
              value={1}
              selected={selectedTab === 1}
              onClick={() => handleChange(null, 1)}
              sx={selectedTab === 1 ? tabStyles.selectedTab(theme) : ''}
            />
            <Tab 
              label="Ratings and Reviews" 
              value={2}
              selected={selectedTab === 2}
              onClick={() => handleChange(null, 2)}
              sx={selectedTab === 2 ? tabStyles.selectedTab(theme) : ''}
            />
          </Stack>
        </Tabs>
      </Paper>
      {selectedTab === 0 && (
        <div style={{marginTop:'20px'}}>
          {/* Product description content  */}
          {descrip}
        </div>
      )}
      {selectedTab === 1 && (
        <div style={{marginTop:'20px'}}>
          {/* Related products content  */}
          <p>Related Products Content</p>
        </div>
      )}
      {selectedTab === 2 && (
        <div style={{marginTop:'20px'}}>
          {/* Ratings and reviews content  */}
          {reviews}
        </div>
      )}
    </div>
  );
};
