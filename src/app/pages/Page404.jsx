import React from 'react';
import { Typography, Box, Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const Page404 = () => {

    const navigate = useNavigate();

    const goToHome = () => {
        navigate("/main/home"); 
    };

    return (
        <>
            <Grid container item justifyContent='center'>
                <Grid item xs={12} sx={{ mt: 2, maxWidth: '360px!important' }}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: "center",
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        minHeight: "80vh"
                    }}>

                        {/*<SearchOffOutlinedIcon className='icon404' sx={{ fontSize: '5rem', width: '70px', mb: 2 }} />*/}
                        <Typography><strong>¡Página no encontrada!</strong></Typography>
                        <Typography>Error 404</Typography>
                        <Button
                            variant='contained'
                            type=''
                            sx={{ mt: 5 }}
                            size="large"
                            disableRipple
                            fullWidth
                            onClick={goToHome}
                        >
                            IR A INICIO
                        </Button>

                    </Box>
                </Grid>
            </Grid>

        </>
    )
}
