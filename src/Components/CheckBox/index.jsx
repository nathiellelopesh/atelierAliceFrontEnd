import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function CheckboxLabel({ checked, onChange, label }) {
  return <FormControlLabel control={<Checkbox checked={checked} onChange={onChange} />} label={label} />
}
