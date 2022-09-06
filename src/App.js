import * as React from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import aerect from 'aerect.js';
import Typography from '@mui/material/Typography';


function App() {
const [length, setLength] = React.useState(15);
const [password, setPassword] = React.useState('');

const genPass = () => {
const securepassword = aerect.generateID(length);
setPassword(securepassword);
navigator.clipboard.writeText(password);
toast.success(`Password generated and copied to active clipboard!`);
}

  return (
   <>
    <ToastContainer />
   <Container maxWidth="sm">
   <br />   <br />   <br />   <br />   <br />   <br />   <br />   <br />   <br />
   <Typography variant="h4" component="h1" gutterBottom>Password Generator</Typography>
    
<div style={{"marginTop": "5%", "color": "white"}}>

<TextField value={password} style={{"marginBottom": "1%",  "width": "100%"}}id="standard-basic" label="" variant="standard" /><br/>
<TextField  value={length} onChange={(e) => {setLength(e.target.value)}} style={{"marginBottom": "1%",  "width": "100%"}}id="standard-basic" label="Length" variant="standard" type="number"/><br/>
<Button variant="contained" className="genbtn" onClick={genPass}>Generate Password</Button>
</div>

</Container>
   </>
  );
}

export default App;
