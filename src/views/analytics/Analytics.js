import React from 'react';
import { Typography, Button, Grid } from '@mui/material';
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import ReactApexChart from 'react-apexcharts';


const BCrumb = [
  {
    title: "Let's teach your bot to answer questions about Moufdi. This should only take a few minutes"
  }
];

class ApexChart extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      series: [{
        name: "New Tickets",
        data: [0,0,0,0,0,0,0,0,0,0]
      },
    {
      name: "Bot Messages",
      data: [0,0,0,0,0,0,0,0,0,0]
    },
  {
    name: "Agent Messages",
    data: [0,0,0,0,0,0,0,0,0,0]
  }],
  options:{
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: [5,7,5],
      curve: 'straight',
      dashArray: [0,8,5]
    },
    // title: {
    //   text: 'page Statistics',
    //   align: 'left'
    // },
    legend: {
      tooltipHoverFormatter: function(val,opts){
        return val + '-<strong>'+ opts.w.globals.series[opts.seriesIndex]
        [opts.dataPointIndex]+ '</strong>'
      }
    },
    markers: {
      size: 0,
      hover: {
        sizeOffset:6
      }
    },
    xaxis: {
      categories: ['Mar 01', 'Mar 02', 'Mar 03', 'Mar 04', 'Mar 05', 'Mar 06', 'Mar 07', 'Mar 08', 'Mar 09', 'Mar 10'],

    },
    tooltip: {
      y: [
        {
          title: {
            formatter: function(val){
              return val+ "(mins)"
            }
          }
        },
        {
          title: {
            formatter: function (val){
              return val + "per tickets"
            }
          }
        },
        {
          title: {
            formatter: function(val)
            {
              return val;
            }
          }
        }
      ]
    },
    grid: {
      borderColor: '#1bafca',
    }
  },
    };
  }

  render(){
    return(
      <div>
      <div id='chart'>
        <ReactApexChart options={this.state.options}
        series={this.state.series} type='line' height={350}/>
      </div>
      <div id="html-dist"></div>
      </div>
    );
  } 
}

const Analytics = () => {
  return (
    <PageContainer title='Analytics'>
      <Typography variant='h4' color='black' gutterBottom>
        Analytics
      </Typography>
      <Grid container spacing={2} justifyContent='center'>
        <Grid item xs={12} sm={6} md={3}>
          <DashboardCard backgroundColor="#dbf1e5">
            <Typography variant='h6' color='primary' style={{ color: 'black', fontWeight: 'bold', fontSize: '22px' }} align='center'>0</Typography>
            <Typography variant='h6' color='primary' align='center' style={{ color: '#606c38ff', fontSize: '12px', margin: '5px' }}>New Tickets</Typography>
          </DashboardCard>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <DashboardCard backgroundColor="#dbf4f9" >
            <Typography variant='h6' color='primary' align='center' style={{ color: 'black', fontWeight: 'bold', fontSize: '22px' }}>0</Typography>
            <Typography variant='h6' color='primary' align='center' style={{ color: '#283618ff', fontSize: '12px', margin: '5px' }}>Bot Replies</Typography>
          </DashboardCard>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <DashboardCard backgroundColor="#fef5de">
            <Typography variant='h6' color='primary' align='center' style={{ color: 'black', fontWeight: 'bold', fontSize: '22px' }}>0</Typography>
            <Typography variant='h6' color='primary' align='center' style={{ color: '#bc6c25ff', fontSize: '12px', margin: '5px' }}>Open Tickets</Typography>
          </DashboardCard>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <DashboardCard backgroundColor="#ffe6df">
            <Typography variant='h6' color='primary' align='center' style={{ color: 'black', fontWeight: 'bold', fontSize: '22px' }}>0</Typography>
            <Typography variant='h6' color='primary' align='center' style={{ color: '#bc6c25ff', fontSize: '12px', margin: '5px' }}>Unassigned Tickets</Typography>
          </DashboardCard>
        </Grid>
      </Grid>
      <Grid container spacing={2} justifyContent='center'>
        <Grid item xs={12} sm={6} md={8} style={{ marginTop: '1.5rem' }}>
          <DashboardCard>
            <Typography style={{ fontWeight: 'bold', fontSize: '16px' }}>Ticket Volume</Typography>
            <Typography style={{ fontSize: '12px' }}>over the past 10 days</Typography>
            <ApexChart/>
          </DashboardCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4} style={{ marginTop: '1.5rem' }}>
          <DashboardCard >
            <Typography style={{ fontWeight: 'bold', fontSize: '16px' }}>Messages Sent</Typography>
          </DashboardCard>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default Analytics;
