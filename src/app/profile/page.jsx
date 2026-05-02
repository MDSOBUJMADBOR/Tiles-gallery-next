'use client'


import UpdateUserModal from '@/components/UpdateProfile';
import { authClient } from '@/lib/auth-client';
import { Avatar, Card } from '@heroui/react';


const ProfilePage = () => {
const userData = authClient.useSession();
const user = userData.data?.user;
console.log(user,'user');

          return (
<div>
<Card className="max-w-96 mx-auto flex flex-col items-center border mt-5 border-red-500">
      <h1 className='text-center text-2xl font-bold'>My Profile</h1>
      <div className='flex items-center gap-8'>
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
        </div>

      </div>
       

        

        <UpdateUserModal></UpdateUserModal>
      </Card>
</div>
          );
};

export default ProfilePage;