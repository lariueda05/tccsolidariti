import {useState} from 'react';
import {Button} from 'react-bootstrap';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from "axios"
import { toast } from 'react-toastify';

export default function FormDialog(props) {

  const[editValues, setEditvalues] = useState({
    id: props.id,
    produtos: props.produtos,
    doador: props.doador,
    categoria:props.categoria,
    quant: props.quant,
    data_: props.data_,
  })

  const handleChangeValues = (values) => {
    setEditvalues(prevValues => ({
      ...prevValues,
      [values.target.id] : values.target.value
    }))
  }

  const handleEdit = () => {
    axios.put("http://localhost:3001/edit", {
      id: editValues.id,
      produtos: editValues.produtos,
      doador: editValues.doador,
      categoria: editValues.categoria,
      quant: editValues.quant,
      data_: editValues.data_,
    }).then(() => {
      props.setListClient(
        props.listClient.map((value) => {
          return value.id == editValues.id
            ? {
              id: editValues.id,
              produtos: editValues.produtos,
              doador: editValues.doador,
              categoria: editValues.categoria,
              quant: editValues.quant,
              data_: editValues.data_,
              }
            : value;
        })
      );
    });
    handleClose();
    toast.success("Produto editado com sucesso")
  };

  const handleDelete = () => {
     axios.delete(`http://localhost:3001/delete/${editValues.id}`).then(() => {
     props.setListClient(
      props.listClient.filter((value) => {
        return value.id != editValues.id;
      })
    );
  });
     handleClose()
     alert("Produto excluido com sucesso")
  }

  const handleClose = () => {
    props.setOpen(false);
  };

  return (
    <div>
      <Dialog open={props.open} onClose={handleClose}>
        <DialogTitle>Excluir</DialogTitle>
        <DialogContent>
          <DialogContentText>
           Edite o produto mostrado caso haja erros ou exclua
          </DialogContentText>
          <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nome do Produto"
            defaultValue={props.produtos}
            onChange={handleChangeValues}
            type="name"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email ou informacao do doador"
            defaultValue={props.doador}
            onChange={handleChangeValues}
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="senha"
            label="Categoria do produto"
            defaultValue={props.categoria}
            onChange={handleChangeValues}
            type="senha"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="quant"
            label="Quantidade"
            defaultValue={props.quant}
            onChange={handleChangeValues}
            type="quant"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="quant"
            label="Data"
            defaultValue={props.data_}
            onChange={handleChangeValues}
            type="quant"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose()}>Cancel</Button>
          <Button onClick={() => handleEdit()}>Salvar</Button>
          <Button onClick={() => handleDelete()}>Excluir</Button>
        </DialogActions>
        </DialogContent>
      </Dialog>
    </div>
  );
}