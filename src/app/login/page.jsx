'use client'
import { authClient } from '@/lib/auth-client';
import { Button, Description, FieldError, Input, Label, TextField,Card } from '@heroui/react';
import {Icon} from "@iconify/react";
import { toast } from 'react-toastify';
import Link from 'next/link';



const LoginPage = () => {
const onSubmit = async (e) => {
e.preventDefault();
const email = e.target.email.value;
const password = e.target.password.value;

const {data,error} = await authClient.signIn.email({ 
email,
password,
callbackURL: "/",
})
console.log(data,error);

if(error){
  toast.error(error.message);
}
}

const handleGoogleLogin = async () => { 
  await authClient.signIn.social({
    provider: 'google'
  })
}

  return (
    <Card className='border mx-auto md:max-w-125  md:my-10 overflow-x-hidden '>
          <h1 className="text-center text-2xl font-bold">Login</h1>
      <form className="flex md:w-96 w-full  mx-auto flex-col gap-4" onSubmit={onSubmit}>
        
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="Enter Your Email" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }
            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description> 
          <FieldError /> 
        </TextField>

  <Button className="w-full rounded-md" type="submit">Login  </Button> 

      </form>

<p className='text-center'>Or</p>

<Button onClick={handleGoogleLogin} className="w-96 mx-auto " variant="tertiary">
        <Icon icon="devicon:google" />
       Login with Google
      </Button>
<p className='text-center'>Don't have an account? <Link href={"/register"}><span className='text-blue-500'>Register</span></Link> </p>
    </Card>
  );
};

export default LoginPage;