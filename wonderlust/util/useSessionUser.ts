import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import {useState,useEffect} from 'react'

function useSessionUser (){
 const [user, setUser] = useState(null);
 
  const pathname = usePathname();
  const { data: session } = useSession();
  const fetchUser = async () => {
    fetch('/api/auth/me', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) =>setUser(data.user))
      .catch((error) => console.error('Error:', error));
  };
useEffect(() => {
    if (session) {
      setUser(session?.user);
    } else {
      fetchUser();
    }
  }, [pathname, session]);

 return user
}
export default useSessionUser;