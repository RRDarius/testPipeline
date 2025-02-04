import { useState } from 'react';
import { TableRow, TableCell, IconButton } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';

import ItemDetailsDialog from './ItemDetailsDialog';
import DeletedItemSnackbar from './DeletedItemSnackbar';
import ItemFormDialog from './ItemFormDialog';

export default function SearchableItem({item}) {
    let [isDialogOpen, setDialogState] = useState(false);
    let [isSnackbarOpen, setSnackbarState] = useState(false);
    let [isEditFormDialogOpen, setEditFormDialogState] = useState(false);
    if(isDialogOpen) {
        return <ItemDetailsDialog detailsDialogState={isDialogOpen} closeDetailsDialog={closeDialog} deleteItemDialog={deleteItemDialog} item={item} /> 
    }

    if(isSnackbarOpen) {
        return <DeletedItemSnackbar deletedItemSnackbarState={isSnackbarOpen} closeDeletedItemSnackbar={closeSnackbar} undoDelete={closeAndUndoDelete}/>
    }

    if(isEditFormDialogOpen) {
        return <ItemFormDialog formDialogState={isEditFormDialogOpen} handleClose={closeEditDialog} formType="Edit" item={item}/>
    }

    function openDialog() {
        setDialogState(true);
    }

    function closeDialog() {
        setDialogState(false);
    }

    function deleteItemDialog() {
        setDialogState(false);
        setSnackbarState(true);
    }

    function closeSnackbar(event, reason) {
        if (reason === 'clickaway') {
          return;
        }
        setSnackbarState(false);
    }

    function closeAndUndoDelete(event, reason) {
        closeSnackbar(event, reason);
        console.log("Add UNDO DELETE here!! :)");
    }

    function openEditDialog() {
        setEditFormDialogState(true);
    }

    function closeEditDialog() {
        setEditFormDialogState(false);
    }

    return(
        <>
            <TableRow>
                <TableCell>{item.type.toLowerCase()}</TableCell>
                <TableCell>{item.color}</TableCell>
                <TableCell>{item.brand}</TableCell>
                <TableCell>
                <IconButton onClick={openEditDialog}><EditIcon color="primary"/></IconButton>
                    <IconButton onClick={openDialog}><InfoIcon color="primary"/></IconButton>
                </TableCell>
            </TableRow>     
        </>
    );
}