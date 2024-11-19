import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields({...props}) {
  return (
    <Box sx={{ '& > :not(style)': { m: 1, width: 350 }}}>
      <TextField {...props} variant='outlined' autoFocus/>
    </Box>
  );
}
