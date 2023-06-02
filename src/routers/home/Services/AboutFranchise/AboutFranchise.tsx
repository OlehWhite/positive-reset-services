import { Box, Tab} from '@mui/material';
import { SyntheticEvent, useState } from 'react';
import {Container, Title, Text, MUITabs} from './styled';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

export const AboutFranchise = () => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <MUITabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="FRANCHISE OPPORTUNITY" {...a11yProps(0)} />
          <Tab label="BUSINESS OPPORTUNITY" {...a11yProps(1)} />
          <Tab label="INVESTMENT OPPORTUNITY" {...a11yProps(2)} />
        </MUITabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Title>WHAT MAKES A FRANCHISE AN ATTRACTIVE OPPORTUNITY?</Title>
        <Text>
          Franchises offer easier access to financing and more predictable growth models than most
          sole proprietorships. To obtain financing for a sole proprietorship, you might have to
          convince your family and friends, a private lender, or the Small Business Association that
          you have a sound business plan and growth model.
        </Text>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Title>WHAT IS A BUSINESS OPPORTUNITY?</Title>
        <Text>
          Business opportunities are a highly regulated method of business expansion where a company
          provides outsiders the opportunity, for a fee, to go into business.
        </Text>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Title>WHY YOU SHOULD INVEST IN A FRANCHISE?</Title>
        <Text>
          The franchise organization model offers the franchisee the ability to grow under a common
          brand and share in the benefits of a larger group of business owners. … Training from
          successful business operators. A lower risk of failure and/or loss of investments than if
          you were to start your own business from scratch
        </Text>
      </TabPanel>
    </Container>
  );
};
