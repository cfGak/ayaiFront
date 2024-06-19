import React, { useState } from 'react';
import {
    Button, TextField, Select, MenuItem, InputLabel, FormControl,
    Container, Typography, Stack
} from '@mui/material';

const ManteminetoRegistro: React.FC = () => {
    const [userId, setUserId] = useState<string>('');
  const [tipoAfp, setTipoAfp] = useState<string>('');
  const [porcentajeAfp, setPorcentajeAfp] = useState<number>(0);
  const [tipoIsapre, setTipoIsapre] = useState<string>('');
  const [porcentajeIsapre, setPorcentajeIsapre] = useState<number>(0);
  const [porcentajeSeguroCesantia, setPorcentajeSeguroCesantia] = useState<number>(0);

  const handleUserIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(event.target.value);
  };

  const handlePorcentajeAfpChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setPorcentajeAfp(event.target.value as number);
  };

  const handlePorcentajeIsapreChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setPorcentajeIsapre(event.target.value as number);
  };

  const handlePorcentajeSeguroCesantiaChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setPorcentajeSeguroCesantia(event.target.value as number);
  };

  const handleRegistroTrabajadores = () => {
    // Aquí puedes realizar la lógica para guardar los datos o enviarlos a otro componente
    alert(`Id Trabjador a modificar: ${userId}, Tipo AFP: ${tipoAfp}, Porcentaje AFP: ${porcentajeAfp}, Tipo ISAPRE: ${tipoIsapre}, Porcentaje ISAPRE: ${porcentajeIsapre}, Porcentaje Seguro Cesantía: ${porcentajeSeguroCesantia}`);
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '20px' }}>
        <Typography variant="h5" gutterBottom>
            Registro y Mantenimiento de Información de Trabajadores
        </Typography>
        {/* Sección para ID del Usuario */}
        <FormControl fullWidth sx={{ marginBottom: '10px' }}>
            <TextField
            label="ID del Usuario"
            value={userId}
            onChange={handleUserIdChange}
            fullWidth
            />
        </FormControl>

        <FormControl fullWidth sx={{ marginBottom: '10px' }}>
            <InputLabel>Tipo AFP</InputLabel>
            <Select
            value={tipoAfp}
            onChange={(e) => setTipoAfp(e.target.value as string)}
            fullWidth
            >
            <MenuItem value="afp1">AFP 1</MenuItem>
            <MenuItem value="afp2">AFP 2</MenuItem>
            <MenuItem value="afp3">AFP 3</MenuItem>
            </Select>
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: '10px' }}>
            <TextField
            label="Porcentaje AFP (%)"
            type="number"
            value={porcentajeAfp}
            onChange={handlePorcentajeAfpChange}
            fullWidth
            />
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: '10px' }}>
            <InputLabel>Tipo ISAPRE</InputLabel>
            <Select
            value={tipoIsapre}
            onChange={(e) => setTipoIsapre(e.target.value as string)}
            fullWidth
            >
            <MenuItem value="isapre1">ISAPRE 1</MenuItem>
            <MenuItem value="isapre2">ISAPRE 2</MenuItem>
            <MenuItem value="isapre3">ISAPRE 3</MenuItem>
            </Select>
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: '10px' }}>
            <TextField
            label="Porcentaje ISAPRE (%)"
            type="number"
            value={porcentajeIsapre}
            onChange={handlePorcentajeIsapreChange}
            fullWidth
            />
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: '10px' }}>
            <TextField
            label="Porcentaje Seguro de Cesantía (%)"
            type="number"
            value={porcentajeSeguroCesantia}
            onChange={handlePorcentajeSeguroCesantiaChange}
            fullWidth
            />
        </FormControl>
        <Button
            variant="contained"
            color="primary"
            onClick={handleRegistroTrabajadores}
        >
            Guardar Información
        </Button>
    </Container>
  );
};

export default ManteminetoRegistro;
