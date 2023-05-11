import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { createProfessor } from '../../services';

export default function AdminPopUpProfessor() {
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({});

  const submitProfessor = async () => {
    try {
        const { data } = await createProfessor(formData)
        console.log(data)
        // if (data !== 1) throw new Error('Erro ao enviar criacao de turma')
    } catch (error) {
        console.log(error)
    }
    finally {
      handleClose()
    }
}

  const handleFormChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		})
    console.log(formData)
	}

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Adicionar Professor(a)
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Adicionar Professor(a)</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {/* Adicionar */}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name="name"
            label="Nome"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleFormChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            name="email"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
            onChange={handleFormChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="matricula"
            name="employeeNumber"
            label="Numero de servidor"
            type="numeric"
            fullWidth
            variant="standard"
            onChange={handleFormChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={submitProfessor}>Criar
            
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
