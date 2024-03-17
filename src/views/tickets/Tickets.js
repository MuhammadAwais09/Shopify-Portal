import React, { useState } from 'react';
import {
 Typography, Button,
 Select, MenuItem, TextField,
 Grid, Table, TableBody,
 TableCell, TableContainer,
 TableHead, TableRow, Paper,
 Pagination
} from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import PageContainer from 'src/components/container/PageContainer';

const Tickets = () => {
 const [filter, setFilter] = useState('ALL');
 const [dateFilter, setDateFilter] = useState(new Date());
 const [currentPage, setCurrentPage] = useState(1);
 const itemsPerPage = 5;

 const handleFilterChange = (event) => {
    setFilter(event.target.value);
 };

 const handleDateChange = (date) => {
    setDateFilter(date);
 };

 const categories = [
    { name: 'Category 1', value: 30, date: '2023-03-17' },
    { name: 'Category 2', value: 150, date: '2023-03-18' },
    { name: 'Category 3', value: 200, date: '2023-03-17' },
    { name: 'Category 4', value: 10, date: '2023-03-17' },
    { name: 'Category 5', value: 200, date: '2023-03-18' },
    { name: 'Category 6', value: 150, date: '2023-03-19' },
 ];

 const getButtonColor = (value) => {
    if (value <= 50) return '#90ee90'; // Light green
    if (value <= 199) return '#FDE74C'; // Light yellow
    return '#FF6347'; // Light red
 };

 const filteredCategories = categories.filter(category => {
    if (filter === 'ALL') return true;
    if (filter === 'TO REVIEW') return category.value <= 50;
    const categoryDate = new Date(category.date);
    const startOfDay = (date) => new Date(date.setHours(0, 0, 0, 0));
    return startOfDay(categoryDate).getTime() === startOfDay(dateFilter).getTime();
 });

 const totalPages = Math.ceil(filteredCategories.length / itemsPerPage);

 const currentItems = filteredCategories.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

 return (
    <PageContainer title="Tickets">
      <Typography variant="h4" color="black" gutterBottom>
        Tickets
      </Typography>
      <Grid container spacing={2} alignItems='center' sx={{ margin: '1rem' }}>
        <Grid item xs={1.5}>
          <Select
            value={filter}
            onChange={handleFilterChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Filter Tickets' }}
          >
            <MenuItem value="ALL">ALL</MenuItem>
            <MenuItem value="TO REVIEW">TO REVIEW</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={4}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Date Filter"
              value={dateFilter}
              onChange={handleDateChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>
      </Grid>
      <Grid container spacing={2} justifyContent='center' >
        <Grid item xs={11}>
          <TableContainer component={Paper} sx={{ marginTop: '1rem', border: '1rem', boxShadow: '5', width: '100%', overflowX: 'auto' }}>
            <Table sx={{ minWidth: 500, border: 'none', boxShadow: 'none', width: '100%' }} aria-label="simple table">
              <TableHead style={{ backgroundColor: 'grey' }}>
                <TableRow>
                 <TableCell style={{ fontWeight: 'bold', fontSize: '1rem', color: 'black', padding: '0.5rem' }}>Category</TableCell>
                 <TableCell align="right" style={{ fontWeight: 'bold', fontSize: '1rem', color: 'black', padding: '0.5rem' }}>Value</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {currentItems.map((category) => (
                 <TableRow key={category.name}>
                    <TableCell component="th" scope="row" style={{ fontSize: '0.8rem', padding: '0.5rem' }}>
                      {category.name}
                    </TableCell>
                    <TableCell align="right" style={{ fontSize: '0.8rem', padding: '0.5rem' }}>
                      <Button variant='contained' style={{ backgroundColor: getButtonColor(category.value), color: 'black', fontSize: '0.8rem' }}>
                        {category.value}
                      </Button>
                    </TableCell>
                 </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>

      <Grid container justifyContent="flex-end" sx={{ marginTop: '1rem' }}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={(event, value) => setCurrentPage(value)}
        />
      </Grid>

    </PageContainer>
 );
};

export default Tickets;
