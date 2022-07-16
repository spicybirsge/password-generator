import * as React from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import aerect from 'aerect.js';


function App() {
const [length, setLength] = React.useState(15);
const [password, setPassword] = React.useState('');

const genPass = () => {
const password = aerect.generateID(length);
setPassword(password);
navigator.clipboard.writeText(password);
toast.success(`Password generated and copied to active clipboard!`);
}

  return (
   <>
    <ToastContainer />
   <Container maxWidth="sm">
   
<div style={{"marginTop": "50%", "color": "white"}}>
<TextField value={password} style={{"marginBottom": "1%",  "width": "500px"}}id="standard-basic" label="" variant="standard" /><br/>
<TextField  value={length} onChange={(e) => {setLength(e.target.value)}} style={{"marginBottom": "1%",  "width": "500px"}}id="standard-basic" label="Length" variant="standard" type="number"/><br/>
<Button variant="contained" className="genbtn" onClick={genPass}>Generate Password</Button>
</div>

</Container>
   </>
  );
}

export default App;
