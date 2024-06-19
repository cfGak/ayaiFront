// src/components/AlertForm.tsx
import React, { useState } from 'react';
import {
    Button, TextField, Select, MenuItem, InputLabel, FormControl,
    Container, Typography, Stack
} from '@mui/material';

const AlertForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [alertType, setAlertType] = useState('');
    const [alertDate, setAlertDate] = useState<string>('');
    const [alertContent, setAlertContent] = useState('');

    const handleFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        alert(`Correo: ${email}, Tipo de alerta: ${alertType}, Fecha: ${alertDate}, Contenido: ${alertContent}`);
    };

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAlertDate(e.target.value); // Actualiza el estado con el valor del input
    };

    const formatDate = (inputDate: string): string => {
        // Convierte el formato 'yyyy-mm-dd' a 'dd-mm-yyyy'
        const [year, month, day] = inputDate.split('-');
        return `${day}-${month}-${year}`;
    };

    const handleBlur = () => {
        // Cuando se pierde el foco del campo de entrada, formatea la fecha
        setAlertDate(formatDate(alertDate));
      };

    return (
        <Container maxWidth="sm" style={{ marginTop: '20px' }}>
            <Typography variant="h5" gutterBottom>
                Sistema de Alertas
            </Typography>
            <form onSubmit={handleFormSubmit}>
                <Stack spacing={3}>
                    <TextField
                        label="Correo Electrónico"
                        variant="outlined"
                        fullWidth
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <FormControl fullWidth variant="outlined">
                        <InputLabel id="alert-type-label">Tipo de Alerta</InputLabel>
                        <Select
                            labelId="alert-type-label"
                            value={alertType}
                            onChange={(e) => setAlertType(e.target.value as string)}
                            label="Tipo de Alerta"
                        >
                            <MenuItem value="pago">Pago Próximo</MenuItem>
                            <MenuItem value="legislacion">Cambio en la Legislación</MenuItem>
                            <MenuItem value="general">General</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        label="Fecha de la Alerta"
                        type="date"
                        variant="outlined"
                        fullWidth
                        value={alertDate}
                        onChange={handleDateChange}
                        onBlur={handleBlur} // Llama a la función para formatear la fecha al perder el foco
                        InputLabelProps={{
                            shrink: true, // Muestra la etiqueta incluso cuando no hay fecha seleccionada
                        }}
                        // Muestra la fecha en el formato deseado
                        InputProps={{
                            inputProps: {
                            value: alertDate,
                            onChange: handleDateChange,
                            },
                        }}
                    />
                    <TextField
                        label="Contenido de la Alerta"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                        value={alertContent}
                        onChange={(e) => setAlertContent(e.target.value)}
                    />
                    <Button type="submit" variant="contained" color="primary">
                        Enviar Alerta
                    </Button>
                </Stack>
            </form>
        </Container>
    );
};

export default AlertForm;
