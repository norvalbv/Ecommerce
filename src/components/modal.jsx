import React, {useState} from 'react'
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

    return (
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
          <button onClick={handleClose} style={{position: 'absolute', right: '1rem', top: '1rem', cursor: 'pointer'}}>Close</button>

            <Typography id="modal-modal-title" variant="h6" component="h2">
              Please note:
              <hr />
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Some of the pages on this site have not been coded intentionally, i.e., those displayed in the footer.
                <br />
                <br />
                Currently the images have been manually imported. Etsy API will soon be implemented to handle this.
                <br />
                <br />
                Check out the roadmap for the upcoming features of the site in the README
            </Typography>
          </Box>
        </Modal>
      </div>
    );
  }