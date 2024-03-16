import React from 'react';
import { Typography,Button } from '@mui/material';
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';


const BCrumb = [
  {
    title: "Let's teach your bot to answer questions about Moufdi. This should only take a few minutes"
  }
];

const Inbox = () => {
  return (
    <PageContainer title="Inbox">
      <Typography variant="h4" color="black" gutterBottom>
        Inbox
      </Typography>
      {/* breadcrumb */}
      <Breadcrumb title="Let's train your bot" items={BCrumb} button={{ text: 'Train your bot' }} />
      {/* end breadcrumb */}
      
      {/* <DashboardCard title="Let's train your bot">
        <Typography>Let's teach your bot to answer questions about Moufdi. This should only take a few minutes</Typography>
        <Button style={{marginTop: '10px'}}>Train your bot</Button>
      </DashboardCard> */}
    </PageContainer>
  );
};

export default Inbox;
