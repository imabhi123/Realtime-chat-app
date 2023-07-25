import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { HiChat } from 'react-icons/hi';
import { HiArrowLeftOnRectangle, HiUsers } from 'react-icons/hi2';
import { signOut } from "next-auth/react";
import useConversation from "./useConversation";

const useRoutes = () => {
  const pathname = usePathname();
  const { conversationid } = useConversation();

  const routes = useMemo(() => [
    { 
      label: 'Chat', 
      href: '/conversations', 
      icon: HiChat,
      active: pathname === '/conversations' || !!conversationid
    },
    { 
      label: 'Users', 
      href: '/users', 
      icon: HiUsers, 
      active: pathname === '/users'
    },
    {
      label: 'Logout', 
      onClick: () => signOut(),
      href: '#',
      icon: HiArrowLeftOnRectangle, 
    }
  ], [pathname, conversationid]);

  return routes;
};

export default useRoutes;