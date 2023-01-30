import { Grid, TextField } from '@mui/material';
import React from 'react';
import Modal from 'react-modal';
import { IReceiptItems } from '../receipt-item/ReceipItem.interface';
import { AiOutlineDownload } from 'react-icons/Ai'

const  Modwind: React.FC<IReceiptItems> =({receipt, item, isOpen, onClose}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        // overlay: {background-color: rgb(18 17 17 / 75%)}
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      }}
    >
      <button onClick={onClose}>X</button>
    			<Grid container direction={'column'} style={{padding: 20}}>
						<TextField style={{padding: 10}} label={"Document name"} value={receipt.name} disabled/>
						<TextField style={{padding: 10}} label={"Shop name"} value={receipt.shop_name} disabled/>
						<TextField style={{padding: 10}} label={"City"} value={receipt.city} disabled/>
						<TextField style={{padding: 10}} label={"Price"}  value={receipt.price} disabled/>
						<TextField style={{padding: 10}} label={"Date"} value={receipt.purc_date} disabled/>
            <div>
              Download document file: 
              <button style={{color:'1313ff', margin:'5px'}} >
                 <AiOutlineDownload className='text-blue-800'/>
              </button>
            </div>
					</Grid>
    </Modal>
  );
}

export default Modwind;
