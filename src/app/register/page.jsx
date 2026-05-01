'use client'

import { Button, Card, Description, FieldError, Input, Label, TextField } from '@heroui/react';
import { Icon } from '@iconify/react';
import Link from 'next/link';


const RegisterPage = () => {


    

  

  return (
    <Card className=" border mx-auto max-w-120 py-10 my-10">
      <h1 className="text-center text-2xl font-bold">Register</h1>

      <form className="flex w-96 mx-auto flex-col gap-4" >

        <TextField isRequired name="name" type="text">
          <Label>Name</Label>
          <Input placeholder="Enter your name" />
          <FieldError />
        </TextField>

        <TextField isRequired name="image" type="text">
          <Label>Image URL</Label>
          <Input placeholder="Image URL" />
          <FieldError />
        </TextField>

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
          <Input placeholder="Enter You Email" />
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

<Button className="w-full rounded-md" type="submit">Register </Button>    

      </form>

<p className='text-center'>Or</p>

 <Button className="w-full rounded-md" variant="tertiary">
        <Icon icon="devicon:google" />
        Continue with Google
      </Button>
<p className='text-center'>Already have an account? <Link href={"/login"}><span className='text-blue-500'>Login</span></Link> </p>
   

    </Card>
  );
};

export default RegisterPage;