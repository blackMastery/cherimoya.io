/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const Trek = (): JSX.Element => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="R & R" {...a11yProps(0)} />
          <Tab label="Escape Room Adventures" {...a11yProps(1)} />
          <Tab label="Netflix Party"  {...a11yProps(2)} />

        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Typography sx={{
           color: "#ffffff"
        }}>
          R  R Games
          Use code: "cherimo1" to receive a 5% discount on each game purchased.
          Some of the offered games are featured here.
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Typography sx={{
           color: "#ffffff"
        }}>
       Escape Room Adventures
‍
Enter code "cherimo1" to enter each escape room.
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Typography sx={{
           color: "#ffffff"
        }}>
      Netflix Party (Teleparty)
‍
Teleparty synchronizes video playback and adds group chat to Netflix, Disney, Hulu and HBO.
        </Typography>
      </TabPanel>
    </>

  );
};

export default Trek;
