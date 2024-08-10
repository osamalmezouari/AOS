import React from 'react';
import { Container, Grid, Typography } from '@mui/material';

const Companies: React.FC = () => {
  return (
    <div className="w-full bg-white py-[50px]">
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" className={'font-main text-mainBleu font-bold text-[28px] capitalize'}>
        Les principaux domaines d'activités de notre association
        </Typography>
        <Typography variant="h6" align="center" sx={{ color: '#536E96', mt: 1 }} className='max-w-[850px] m-auto text-[16px]'>
        Une Vision Globale de Nos Activités Principales pour Favoriser le Développement et le Soutien Communautaire
        </Typography>
        <div className="flex justify-center py-8 md:gap-8">
          <Grid container spacing={2} justifyContent="center" className={'max-w-[600px]'}>
            <Grid item xs={6} md={3}>
              <img src={"https://cdn-icons-png.flaticon.com/512/3135/3135706.png"} alt="Company Logo 1"  className='w-16 h-16'/>
            </Grid>
            <Grid item xs={6} md={3}>
              <img src={"https://cdn-icons-png.flaticon.com/512/3135/3135706.png"} alt="Company Logo 1"  className='w-16 h-16'/>
            </Grid>
            <Grid item xs={6} md={3}>
              <img src={"https://cdn-icons-png.flaticon.com/512/3135/3135706.png"} alt="Company Logo 1"  className='w-16 h-16'/>
            </Grid>
            <Grid item xs={6} md={3}>
              <img src={"https://cdn-icons-png.flaticon.com/512/3135/3135706.png"} alt="Company Logo 1"  className='w-16 h-16'/>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Companies;
