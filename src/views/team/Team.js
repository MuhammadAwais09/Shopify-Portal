import React, { useState } from 'react';
import { Typography, Button, Grid, TextField, Avatar, Accordion, AccordionSummary, AccordionDetails, ToggleButton, ToggleButtonGroup } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import { People } from '@mui/icons-material';
import { DataGrid } from '@mui/x-data-grid';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { makeStyles } from '@mui/styles';
import FilterListIcon from '@mui/icons-material/FilterList';

const useStyles = makeStyles({
  'super-app-theme--header': {
    backgroundColor: '#d3d3d3',
    color: 'black',
    fontWeight: 'bold',
  },
});

const columns = [
  {
    field: 'name',
    headerName: 'Name',
    width: 350,
    renderCell: (params) => (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Avatar alt={params.value} src="/path/to/profile/picture.jpg" sx={{ width: 24, height: 24, marginRight: 1 }} />
        <span>{params.value}</span>
      </div>
    ),
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 300,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 223,
  },
];

const rows = [
  { id: 1, name: 'moufdi@brmagency.co', email: 'moufdi@brmagency.co', status: 'Active' },
  { id: 2, name: 'john@example.com', email: 'john@example.com', status: 'Inactive' },
  { id: 3, name: 'jane@example.com', email: 'jane@example.com', status: 'Active' },
  { id: 4, name: 'doe@example.com', email: 'doe@example.com', status: 'Pending' },
  { id: 5, name: 'smith@example.com', email: 'smith@example.com', status: 'Active' },
  // Add more rows as needed
];

const Team = () => {
  const [density, setDensity] = useState(false);
  const [filterName, setFilterName] = useState('');
  const [filterEmail, setFilterEmail] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const classes = useStyles();

  const handleDensityChange = () => {
    setDensity(!density);
  };

  const filteredRows = rows.filter(row =>
    row.name.toLowerCase().includes(filterName.toLowerCase()) &&
    row.email.toLowerCase().includes(filterEmail.toLowerCase()) &&
    (filterStatus === '' || row.status.toLowerCase() === filterStatus.toLowerCase())
  );

  return (
    <PageContainer title="Team">
      <Typography variant="h4" color="black" gutterBottom>
        Team
      </Typography>
      <Grid container spacing={2} justifyContent='center'>
        <Grid item xs={12} sm={8} md={7}>
          <Typography>Invite your team to work together in Helpbase.</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'black',
              color: 'white',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: 'darkgrey',
              },
              '& .MuiSvgIcon-root': {
                color: 'white',
                width: '24px',
                height: '24px',
              },
            }}
            startIcon={<People />}
          >
            Invite teammate
          </Button>
        </Grid>
      </Grid>

      <Grid container justifyContent="center" style={{ marginTop: '2rem' }}>
        <Grid item xs={12} md={10}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{ backgroundColor: '#f3f3fb' }}
            >
              <Typography sx={{ color: 'black', display: 'flex', alignItems: 'center' }}>
                <FilterListIcon sx={{ marginRight: '0.5rem' }} />
                Filter
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: '#f3f3fb' }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    value={filterName}
                    onChange={(e) => setFilterName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    value={filterEmail}
                    onChange={(e) => setFilterEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="Status"
                    variant="outlined"
                    fullWidth
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                  />
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>

      <Grid item xs={12} sm={8} md={6} style={{ height: 400, marginTop: '2rem', margin: '0 auto', maxWidth: '85%' }}>
        <DataGrid
          rows={filteredRows}
          columns={columns.map((column) => ({
            ...column,
            headerClassName: classes['super-app-theme--header'], // Apply custom header class
          }))}
          disableSelectionOnClick
          style={{
            border: '1px solid #ccc',
            borderRadius: '6px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          }}
          density={density ? 'compact' : 'standard'}
          columnBuffer={8}
          getCellStyle={(params) => ({
            backgroundColor: '#f5f5f5',
          })}
          pagination={true} 
          pageSizeOptions={[5, 10, 25, 100]}
        />
        {/* <ToggleButtonGroup
          value={density ? 'compact' : 'standard'}
          exclusive
          onChange={handleDensityChange}
          aria-label="density"
        >
          <ToggleButton value="compact" aria-label="compact">
            Density
          </ToggleButton>
        </ToggleButtonGroup> */}
      </Grid>
    </PageContainer>
  );
};

export default Team;
