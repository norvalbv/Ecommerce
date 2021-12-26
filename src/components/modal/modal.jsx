import React, {useState, useEffect} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ModalComp() {

    const [open, setOpen] = useState(true);
    const handleClose = () => setOpen(() => !open);

    useEffect(() => {
        const modalTimer = setTimeout(() => {
            setOpen(() => !open)
        }, 7500)
        return () => {
            clearInterval(modalTimer);
        }
    }, [])

    return (
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
          <button onClick={handleClose}>Close</button>

            <Typography id="modal-modal-title" variant="h6" component="h2">
              Please note:
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Some of the pages on this site have not been coded intentionally, i.e., those displayed in the footer.
            </Typography>
          </Box>
        </Modal>
      </div>
    );
  }