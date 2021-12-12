import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 600,
    height:450,
      m:'auto',
      marginTop:15,
      boxShadow:'none',
      
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
    }}>
      <CardMedia sx={{
          borderRadius:'50%',
          border:'2px solid black',
          width:"180px"
      }}
        component="img"
        height="180"
       
        image="profilepic.svg"
        alt="green iguana"
      />
      <CardContent sx={{
          backgroundColor:'slateblue',
          margin:'2px',
          marginTop:'40px',
          borderRadius:'5px',
      }}>
        <Typography gutterBottom variant="h5" component="div" m="auto" textAlign="center" fontWeight="700" color="white">
          XEESHANN TEELI
        </Typography>
        <Typography variant="h6" color="text.secondary" textAlign="center" color=" rgb(90, 169, 205)"
        sx={{textTransform:'capitalize'}}>front end web developer</Typography>
        <Typography variant="body2" color="text.secondary">
          my name is xeeshann and i am front end web developer Lorem ipsum, dolor sit
           amet consectetur adipisicing elit. Accusamus assumenda molestias odio delectus, dignissimos rem neque quib
        </Typography>
        <CardActions>
        <Link to='/hire'>
        <Button variant="contained" color="secondary" size="medium"  sx=
        {{textTransform:'capitalize',backgroundColor:" rgb(187, 241, 86)", color:"black"}}>Hire Me</Button>
        </Link>
      </CardActions>
      </CardContent>
      
    </Card>
  );
}
