import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog({ open, onClose, message, onConfirm }) {
    return (
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>{message}</DialogTitle>
        <DialogActions>
          <Button onClick={() => onConfirm(false)} color="primary">
            Não
          </Button>
          <Button onClick={() => onConfirm(true)} color="primary">
            Sim
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
