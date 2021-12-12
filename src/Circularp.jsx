import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import './skills.css'

export default function CircularDeterminate(props) {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
      <>
    <Stack spacing={5} direction="row" position="absolute">
     
      <CircularProgress variant="determinate" color="success" value={95} />
      <Typography variant="caption" component="div" color="primary" fontSize="larger" fontWeight="bold"
       position="relative" top="-25px" left="-36px">
          {`${Math.round(95)}%`}
        </Typography>
        <h5 className="priceh5">html</h5>
        <CircularProgress variant="determinate" color="secondary" value={85} />
      <Typography variant="caption" component="div" color="primary" fontSize="larger" fontWeight="bold"
       position="relative" top="-25px" left="-35px">
          {`${Math.round(85)}%`}
        </Typography>
        <h5 className="priceh5">css</h5>
        <CircularProgress variant="determinate" color="inherit" value={75} />
      <Typography variant="caption" component="div" color="primary" fontSize="larger" fontWeight="bold"
       position="relative" top="-25px" left="-30px">
          {`${Math.round(75)}%`}
        </Typography>
        <h5 className="priceh5">java<br/>script</h5>
      
    </Stack>
    </>
  );
}

