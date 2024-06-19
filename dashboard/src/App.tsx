
import Grid from "@mui/material/Unstable_Grid2";
import Indicator from "./components/Indicator";
import './App.css'
import Summary from './components/Summary';

import BasicTable from './components/BasicTable';



function App() {
  return (

    <Grid container spacing={5}>
      <Grid xs={12} sm={4} md={3} lg={10}>      <BasicTable /></Grid>

      <Grid xs={6} sm={4} md={3} lg={10}>      <Indicator title='Precipitación' subtitle='Probabilidad' value={0.13} /></Grid>

      <Grid xs={6} sm={4} md={3} lg={15} alignSelf={'center'}>      <Summary></Summary></Grid>






    </Grid>




  )
}

export default App
