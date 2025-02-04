import {
    Button, 
    Dialog, 
    DialogActions, 
    DialogContent,
    DialogContentText,
    DialogTitle,
    Divider,
    List, 
    ListItem, 
    ListItemText
} from '@mui/material';

export default function ItemDetailsDialog({ detailsDialogState, closeDetailsDialog, deleteItemDialog, item }) {
    return(
        <Dialog open={detailsDialogState} onClose={closeDetailsDialog} fullWidth>
            <DialogTitle id="alert-dialog-title">Item Details</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <List sx={{
                        py: 0,
                        width: '100%',
                        borderRadius: 2,
                        border: '1px solid',
                        borderColor: 'divider'
                        }}
                    >
                        {Object.keys(item).map((detail_key) => (
                            <>
                                <ListItem key={`${item.id}_${detail_key}`}>
                                    {delete item.id}
                                    <ListItemText primary={`${detail_key} : ${item[detail_key]}`}/>
                                </ListItem>
                                <Divider variant="middle" component="li" />
                            </>
                        ))}
                    </List>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={closeDetailsDialog} autoFocus>Close</Button>
                <Button onClick={deleteItemDialog}>Delete</Button>
            </DialogActions>
        </Dialog>
    )
}