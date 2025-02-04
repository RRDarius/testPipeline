import { useState } from 'react';
import { Grid2, Box, AppBar, Toolbar, Button } from '@mui/material';
import ItemFormDialog from './ItemFormDialog';

export default function NavigationBar() {

    let [isAddDialogOpen, setAddDialogState] = useState(false);
    if(isAddDialogOpen) {
        return <ItemFormDialog formDialogState={isAddDialogOpen} handleClose={closeAddDialog} formType="Add"/>;
    }

    function openAddDialog() {
        setAddDialogState(true);
    }

    function closeAddDialog() {
        setAddDialogState(false);
    }

    return(
        <>
            <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
            <Toolbar >
                <Grid2 sx={{ flexGrow: 1, textAlign: 'left', p: '1%'}}><img src='./ccs_logo.png' alt='logo' width='4%' height='4%'/></Grid2>
                <Grid2><Button color="inherit" onClick={openAddDialog}>Add Item</Button></Grid2>
                <Grid2><Button color="inherit">Logout</Button></Grid2>
            </Toolbar>
            </AppBar>
        </Box>
      </>
    );
}