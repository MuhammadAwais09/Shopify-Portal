import React from 'react';
import { Typography, Button, Grid } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';



const Connect = () => {
    return (
        <PageContainer title="Connect">
            <Typography variant="h4" color="black" gutterBottom>
                Connect
            </Typography>
            <Grid container spacing={2} justifyContent='center'>
                <Grid item xs={2} sm={6} md={6}>
                    <Typography style={{ fontWeight: 'bold', fontSize: '22px' }}>How to Connect Helpbase To your Company Email Address</Typography>
                    <Typography style={{ fontSize: '13px', marginTop: '10px', marginBottom: '10px' }}>
                        Even though your customers can already reach your Helpbase support inbox at
                        <Typography component="span" style={{ fontWeight: 'bold' }}> moufdi@mail.Helpbase.ai </Typography>,
                        you may prefer to use a different email address on your company domain (such as
                        <Typography component="span" style={{ fontWeight: 'bold' }}> support@moufdi.com </Typography> for example).
                    </Typography>
                    <Typography>Here's a quick guide to help you set that up:</Typography>
                    <Typography style={{ fontWeight: 'bold', fontSize: '22px', marginTop: '10px', marginBottom: '10px' }}>Email Forwarding</Typography>
                    <Typography style={{ fontSize: '13px' }}>
                        The basic process is called email forwarding. By setting up email forwarding,
                        you can automatically redirect all incoming emails from your company support inbox to Helpbase. This integration
                        ensures all of your support requests will be captured in Helpbase, even though your customers never have to interact directly with a
                        <Typography component="span" style={{ fontWeight: 'bold' }}> @helpbase.ai </Typography>
                        email address.
                    </Typography>

                    <Typography style={{ fontSize: '13px', marginTop: '10px' }}>
                        The rest of this tutorial will explain how to setup email forwarding for Gmail, but the steps 
                        are more of less the same for all email providers.
                    </Typography>

                </Grid>
            </Grid>
        </PageContainer>
    );
};

export default Connect;
