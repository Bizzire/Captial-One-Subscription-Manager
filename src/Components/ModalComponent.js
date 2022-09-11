    import * as React from 'react';
    import Box from '@mui/material/Box';
    import Button from '@mui/material/Button';
    import { TextField } from '@mui/material';
    import Modal from '@mui/material/Modal';
    import SubscriptionBasket from './TransitionGroupComponent';
    import styles from '../Components/ModalComponent.module.scss';

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

    const ModalComponent = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
        <Button onClick={handleOpen}>Manage My Subscriptions</Button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
            <section className={styles.inputSection}>
                <div className={styles.textField}>
                    <TextField id="filled-basic" label="Service Name" variant="filled" />
                </div>
                <div className={styles.textField}>
                    <TextField id="filled-basic" label="Service Cost" variant="filled" />
                </div>
            </section>
            <SubscriptionBasket>
            </SubscriptionBasket>
            </Box>
        </Modal>
        </div>
    );
    }

    export default ModalComponent;

