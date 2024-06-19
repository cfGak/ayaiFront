// src/components/MainMenu.tsx
import React from 'react';
import { Button, Container, Typography, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const MainMenu: React.FC = () => {
  const navigate = useNavigate();



  const handleAlertClick = () => {
    navigate("/alertform");
  };

  const handleRegiClick = () => {
    navigate("/manteregi");
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Menú Principal
      </Typography>
      <Stack spacing={2}>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={() => handleRegiClick()}
        >
          Registro y mantenimiento de información de trabajadores
        </Button>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={() => alert('Informe siendo generado WIP')}
        >
          Generación de informes de deducciones y pagos
        </Button>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={() => alert('Redireccionando a interfaz de pago electrónico / webpay WIP')}
        >
          Interfaz de pago electrónico integrada
        </Button>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={() => handleAlertClick()}
        >
          Sistema de alertas y notificaciones
        </Button>
      </Stack>
    </Container>
  );
};

export default MainMenu;
