import React from 'react';
import styled from './Modal.module.scss'
import { Grid, TextField } from '@mui/material';
import { AiOutlineDownload } from 'react-icons/Ai';
import { TModal } from '../../../types/modal';
import { FC } from 'react'
import { BiCloset, BiX } from 'react-icons/bi';
const Modal: FC<TModal> = ({ receipt, isOpen, onClose, disabled, onEdit }) => {
    const r = {
        'Document name': receipt.name,
        'Shop name': receipt.shop_name,
        'City': receipt.city,
        'Price': receipt.price,
        'Date': receipt.purc_date
    }
    return (
        <div className={`${styled.wrapper} ${!isOpen ? styled.hidden : ''}`}>
            <div className={styled.modal}>
                <button className={styled.close} onClick={onClose}>
                    <BiX size={24}/>
                </button>
                <div className={styled.content}>
                    <div>
                        <p>Document Nr.{receipt?._id}</p>
                    </div>
                    <Grid container direction={'column'} style={{ padding: 20 }}>
                        {Object.keys(r).map((e, key) =>
                            <TextField key={`${Math.floor((Math.random() * 1000))}-min`} style={{ padding: 10 }} label={e} defaultValue={r[e] || ''} disabled={disabled} onChange={(e: any) => r[e] = e.target.value} />
                        )}
                        <div className={styled.bottomActions}>
                            {disabled
                                ? <>
                                    <span>Download document file:</span>
                                    <button style={{ color: '1313ff', margin: '5px' }} >
                                        <AiOutlineDownload className='text-blue-800' />
                                    </button>
                                </>
                                : <>
                                    <button className={styled.save} onClick={() => onEdit(receipt)}>
                                        Save changes
                                    </button>
                                </>
                            }
                        </div>
                    </Grid>
                </div>
            </div>
        </div>
    );
}

export default Modal;
