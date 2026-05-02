'use client'


import UpdateUserModal from '@/components/UpdateProfile';
import { authClient } from '@/lib/auth-client';
import { Avatar, Card } from '@heroui/react';


const ProfilePage = () => {
const userData = authClient.useSession();
const user = userData.data?.user;
console.log(user,'user');

          return (
<div className='max-w-[600px] mx-auto my-10 px-5 '>
      <h1 className=' text-2xl font-bold'>My Profile</h1>
<Card className=" flex flex-col items-center shadow-none mt-5 ">
      <div className='flex flex-wrap items-center gap-8 '>
        {/* left */}
        <div> <Avatar className="h-20 w-20">
          <Avatar.Image
            alt="John Doe"
            src={user?.image}
            referrerPolicy="no-referrer"
          />
          <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
        </Avatar>
        </div>
        {/* right */}
        <div>
      <h2 className="text-xl font-bold">{user?.name}</h2>
        <p className="text-muted">{user?.email}</p>
        <p className='text-gray-500'><span>Member Since </span>
  {user?.updatedAt &&
    new Date(user.updatedAt).toLocaleDateString("en-BD", {
      year: "numeric",
      month: "long",
       day: "numeric",
    })}
</p>
        </div>

      </div>
       

        

       
      </Card>
  <div className='text-gray-500 rounded-lg border-2 border-gray-200 p-5 space-y-5'>
  <div className='flex gap-3 md:gap-14 flex-wrap'>
    <p>Name  </p>
    <p>: {user?.name}</p>
  </div>
  <div className='flex gap-3 md:gap-15 flex-wrap'>
    <p>Email  </p>
    <p>: {user?.email}</p>
  </div>
  <div className='flex gap-5 flex-wrap'>
    <p>Photo URL  </p>
    <p>: {user?.image.slice(0,25)}.png</p>
  </div>
  <UpdateUserModal ></UpdateUserModal>
</div>
</div>
          );
};

export default ProfilePage;