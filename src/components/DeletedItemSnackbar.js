import {
    Button,
    IconButton,
    Snackbar
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
export default function DeletedItemSnackbar({ deletedItemSnackbarState, closeDeletedItemSnackbar, undoDelete }) {
    const action = (
        <>
          <Button size="small" onClick={undoDelete} color="inherit">
            UNDO
          </Button>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={closeDeletedItemSnackbar}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </>
      );
    
      return(
        <Snackbar
            open={deletedItemSnackbarState}
            autoHideDuration={6000}
            onClose={closeDeletedItemSnackbar}
            message="Item deleted"
            action={action}
            ContentProps={{
                sx: {
                background: "#1976d2"
                }
            }}
        />
      );
}