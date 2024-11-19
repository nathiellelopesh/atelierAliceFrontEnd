
import Button from '@mui/material/Button';

export default function BasicButtons({children, ...props}) {
  return <Button variant="contained" {...props}>{children}</Button>
}

