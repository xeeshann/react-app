import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Price from './Price';
import './price.css';
import { textAlign } from '@mui/system';



export default function BasicCard(props) {
  return (
    <Card sx={{ width: 300,maxWidth:260,height:470 ,margin:'10px', textAlign:"center"}}>
      <CardContent
      sx={{
        
        paddingTop:"16px",
        padding:"0px"
      }}
      >
        
        <Typography variant="h6" component="div" sx={{textTransform:"capitalize" ,
        fontWeight:"bold", backgroundColor:"cornflowerblue",marginTop:"16px"}}>
        {props.heading}
        </Typography>
       
        <Typography variant="body1" >
          {props.optionone}
         
        </Typography>
        <Typography variant="body1">
          {props.optiontwo}
         
        </Typography>
        <Typography variant="body1">
          {props.optionthree}
         
        </Typography>
        <Typography variant="body1">
          {props.optionfour}
         
        </Typography>
        <Typography variant="body1">
          {props.optionfive}
         
        </Typography>
        <Button variant="contained" color="primary" size="medium" 
         sx={{textTransform:'capitalize',backgroundColor:" rgb(187, 241, 86)", color:"black" ,marginTop:"40px" , fontWeight:"bold"}}>{props.price}</Button>
      </CardContent>
     
    </Card>
  );
}
