import {  useState, useEffect } from 'react';
import { Grid,Paper, Avatar, TextField, Button, Typography,Box } from '@material-ui/core'
import axios from 'axios';

const Login = () => {
    const paperStyle={padding :20,height:'70vh',width:280, margin:"100px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'50px 0'}

    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    useEffect(() => {
        setErrMsg('');
    }, [email, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        let data = {
            email: email,
            password: pwd
        }
        console.log(data);
        axios.post('/api/login', data)
        .then((response) => {
          console.log('Logged in')
         
          console.log(JSON.stringify(response?.data));        
          setEmail('');
          setPwd('');
          setSuccess(true);
        })
        .catch((errors) => {
          console.log('Cannot log in')
          setErrMsg (errors.response.data[2].message)
        })


    }

    return (
        <>
           <Grid container style={{minHeight: "100vh"}}>
           <Grid  item xs={12} sm={4}>
            <Paper elevation={10} style={paperStyle} >
                <Grid align='center'>
                     <Avatar style={avatarStyle} src={"./uic_logo.png"}></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='NetID' placeholder='Enter username' fullWidth  onChange={(e) => setEmail(e.target.value)}
                            value={email} required/>
                <TextField label='Password' placeholder='Enter password' type='password' onChange={(e) => setPwd(e.target.value)} fullWidth required                             onChange={(e) => setPwd(e.target.value)}
                            value={pwd}/>

                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth onClick={handleSubmit}>Sign in</Button>
                <Typography >
                Shibalike is NOT a secure authentication service and should be used for development purposes only. If you are an end user and see this page, please report immediately to your system administrator.
                </Typography>
            </Paper>
        </Grid>
            <Grid item xs={12} sm={8}>
                <img 
                src={"./uic_arc1.jpeg"}
                style={{width:"100%",height:"100%",objectFit:"cover"}}
                />
                

            </Grid>
          

        </Grid>
        </>
    )
}

export default Login