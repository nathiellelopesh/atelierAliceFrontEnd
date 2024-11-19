
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function CheckboxLabel({label}) {
  return <FormControlLabel control={<Checkbox />} label={label} />
}
