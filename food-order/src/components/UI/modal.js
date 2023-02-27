import { Fragment, useState } from 'react';
import classes from './modal.module.css';
//reactDOM for definsition of constent
import ReactDOM from 'react-dom';


//the backdrop it background transbarent
const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose} />
};

//the modaloverlay it window white for cart
const ModalOverlay = (props) => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
};

const PortalElement = document.getElementById('overlays');

const Modal = (props) => {
    return <Fragment>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, PortalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, PortalElement)}
    </Fragment>
};

export default Modal;