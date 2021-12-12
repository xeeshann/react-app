import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './ser.css'





export default function MultiActionAreaCard(props) {
  return (
      <>
    <Card sx={{ width: 320 , maxWidth:250}}>
      <CardActionArea >
        <CardMedia
        sx={{objectFit:"scale-down"}}
          id="img"
          component="img"
          height="280"
          image={props.imgsrc}
          alt="green iguana"
        />
    <div className="accord">
        <details>
            <summary>{props.title}</summary>
            <p className="first-cards">{props.details}</p>
        </details>
    </div>

      </CardActionArea>
     
    </Card>
    </>
  );
};
