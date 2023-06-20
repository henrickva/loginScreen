'use client'
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import style from './page.module.css'
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Card, Paper } from '@mui/material';

export default function Home() {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <div className={style.container}>
      Clique no botão para fazer o Login
      <Button
        variant="outlined"
        className={style.btn} 
        onClick={handleOpen}
      >
        Login
      </Button>

      <Modal
         open={open}
         onClose={handleClose}
         aria-labelledby="modal-modal-title"
         aria-describedby="modal-modal-description"
      >
        <Card
          className={style.ctn}>
          <Paper 
            className={style.login}
          >
            Faça o login com sua conta
            <TextField 
              id="outlined-basic" 
              type='email'
              label="Email" 
              variant="outlined"
              className={style.entrada} 
            />
            <TextField 
              id="outlined-basic" 
              label="Senha" 
              variant="outlined"
              type="password"
              className={style.entrada} 
            />

            <Button
              variant="outlined"
              className={style.btn1} 
              onClick={handleClose}
            >
              Entrar
            </Button>
          </Paper>
        </Card>
      </Modal>
    </div>
  )
}
