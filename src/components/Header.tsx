'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

const Header = () => {
    const [menuIsOpen, setMenuIsOpen] = React.useState(false);

    const { status, data } = useSession();

    const handleLoginClick = () => signIn(); 
    const handleLogoutClick = () => {
        setMenuIsOpen(false); 
        signOut();
    };
    const handleMenuClick = () => setMenuIsOpen(!menuIsOpen);

    return (
        <div className="container mx-auto pr-5 py-0 h-[133px] flex justify-between items-center">
            <div className="relative h-[133px] w-[133px]">
                <Image src={"/logo.jpeg"} alt="Nenel Trips Logo" fill/>
            </div>

            {status === "unauthenticated" && (
                <button className='text-primary text-sm font-semibold' onClick={handleLoginClick}>Login</button>
            )}

            {status === "authenticated" && data.user && (
                <div className="flex items-center gap-3 border-grayLighter border border-solid rounded-full p-2 px-3 relative">
                    <AiOutlineMenu className='cursor-pointer' size={16} onClick={handleMenuClick}/>

                    <Image height={35} width={35} src={data.user.image!} alt={data.user.name!} className='rounded-full shadow-md'/>

                    {menuIsOpen && (
                        <div className="absolute top-14 left-0 w-full h-full bg-white shadow-md flex flex-col justify-center items-center rounded-lg p-2">
                            <button className='text-primary text-sm font-semibold' onClick={handleLogoutClick}>Logout</button>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default Header;