'use client';

import Link from "next/link"
import { usePostHog } from 'posthog-js/react';
import { useEffect } from 'react';

const Users = () => {
  const posthog = usePostHog();

  useEffect(() => {
    // Track when users list is viewed
    posthog.capture('users_list_viewed', {
      page_path: '/dashboard/users',
    });
  }, [posthog]);

  const handleUserClick = (userId: string) => {
    posthog.capture('user_profile_clicked', {
      user_id: userId,
      profile_clicked_id: userId,
    });
  };

  return (
    <div>
        <h1>Users</h1>
        <ul className="mt-10">
            <li><Link href='/dashboard/users/1' onClick={() => handleUserClick('1')}>User 1</Link></li>
            <li><Link href='/dashboard/users/2' onClick={() => handleUserClick('2')}>User 2</Link></li>
            <li><Link href='/dashboard/users/3' onClick={() => handleUserClick('3')}>User 3</Link></li>
            <li><Link href='/dashboard/users/4' onClick={() => handleUserClick('4')}>User 4</Link></li>
        </ul>


    </div>
  )
}

export default Users