'use client'
import PropTypes from 'prop-types';
import { Tabs, Tab, useTheme, useMediaQuery , Typography , Box} from '@mui/material';
import Blog from '../Blog'
import male from '../../../Images/male.png'
import Add from '../../../Images/add.png'
import women from '../../../Images/female.png'
import homeData from '../../mockData/homePageData/homePage'
import { useState } from 'react';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </Box>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = useState(0);

  const theme = useTheme();
  const isSmOrBelow = useMediaQuery(theme.breakpoints.down('899'));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: '100%',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: { md: 'row', xs: 'column' },
      }}
      >
      <Tabs
        orientation={isSmOrBelow ? 'horizontal' : 'vertical'}
        value={value}
        onChange={handleChange}
        indicatorColor="black" // Set the indicator color to black
        sx={{
          alignItems: 'center',
          width: { md: '8%', xs: '100%' },
          marginTop: {xs:'9%' , md: '2%'},
          margin: '0 auto',
          '& .MuiTab-root': {
            color: 'rgba(0, 0, 0, 0.87)', // Set the default tab color to black
            '&.Mui-selected': {
              color: 'black', // Set the selected tab color to black
            },
          },
        }}
      >
        <Tab label="All" {...a11yProps(0)} />
        <Tab label="News" {...a11yProps(1)} />
        <Tab label="Blog" {...a11yProps(2)} />
        <Tab label="Events" {...a11yProps(3)} />
      </Tabs>

      <Box sx={{
        width: {md: '90%' , lg: '100%' , xs: '100%'},
      }}>
        <TabPanel value={value} index={0}>
          <Box sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: {xs: 'column' , md: 'row'},

          }}>
            <Blog head='Mental health Services should count as Healthcare' type='Blog' img={women} Content={homeData[5].Blog1} />
            <Blog head='Mental health Services should count as Healthcare' type='News' img={male} Content={homeData[5].Blog1} />
            <Blog head='Mental health Services should count as Healthcare' type='Events' img={Add} Content={homeData[5].Blog1} />
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Blog head='Mental health Services should count as Healthcare' type='Blog' img={male} Content={homeData[5].Blog1} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Blog head='Mental health Services should count as Healthcare' type='News' img={Add} Content={homeData[5].Blog1} />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Blog head='Mental health Services should count as Healthcare' type='Events' img={women} Content={homeData[5].Blog1} />
        </TabPanel>
      </Box>
    </Box>
  );
}