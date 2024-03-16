import React, { useState } from 'react';
import {
    Box, TextField, IconButton,
    Select, MenuItem, InputLabel,
    FormControl, Typography, Button,

} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from 'src/components/container/PageContainer';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const BCrumb = [
    {
        title: "Upload some helpful information about your company (such as FAQs, support articles, etc)\nfor your bot to read. This information will be used to answer questions from your customers,\nso don't apply anything that you wouldn't want the public to read!"
    }
];


const TrainYourBot = () => {

    const [selectedDate, setSelectedDate] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    const handleTypeChange = (event) => {
        setSelectedType(event.target.value);
    };
    return (
        <PageContainer title="Train Your Bot">
            <Typography variant="h4" color="black" gutterBottom>
                Train Your Bot
            </Typography>
            {/* breadcrumb */}
            <Breadcrumb title="Let's teach your bot about Moufdi" items={BCrumb} button={{ text: 'upload' }} />
            {/* end breadcrumb */}
            <Box display="flex" alignItems="center" justifyContent="space-between">
                <Typography>
                    Help your bot answer questions and resolve common user issues by uploading training documents
                    (such as FAQs, product wikis, a company overview, and more). Don't upload anything that you wouldn't want
                    your customers to see!
                </Typography>

                <Button variant="contained" color="primary">
                    Upload
                </Button>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="space-between">
                <TextField
                    placeholder='Search...'
                    variant="outlined"
                    size="small"
                    sx={{ marginRight: 1 }}
                    style={{ marginTop: '10px' }}
                    InputProps={{
                        startAdornment: (
                            <IconButton
                                size="small"
                                sx={{ marginRight: 1 }}
                            >
                                <SearchIcon />
                            </IconButton>
                        ),
                    }}
                />
                <Box display="flex" justifyContent="flex-end">
                    <FormControl variant="standard" size="small" sx={{ minWidth: 120 }}>
                        <InputLabel htmlFor="date-select">Select Date</InputLabel>
                        <Select
                            labelId="date-select-label"
                            id="date-select"
                            value={selectedDate}
                            onChange={handleDateChange}
                            IconComponent={ArrowDropDownIcon}
                        >
                            <MenuItem value={10}>Today</MenuItem>
                            <MenuItem value={20}>Tomorrow</MenuItem>
                            <MenuItem value={30}>Next Week</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl variant="standard" size="small" sx={{ minWidth: 120 }}>
                        <InputLabel htmlFor="all-type-label">All type</InputLabel>
                        <Select
                            labelId="all-type-label"
                            id="all-type"
                            value={selectedType}
                            onChange={handleTypeChange}
                            IconComponent={ArrowDropDownIcon}
                        >
                            <MenuItem value={10}>Type A</MenuItem>
                            <MenuItem value={20}>Type B</MenuItem>
                            <MenuItem value={30}>Type C</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Box>



        </PageContainer>
    );
};

export default TrainYourBot;
