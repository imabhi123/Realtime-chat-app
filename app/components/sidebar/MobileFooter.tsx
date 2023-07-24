'use client';

import useConversation from "@/app/hooks/useConversation";
import useRoutes from "@/app/hooks/useRoutes";
import MobileItem from "./MobileItem";

const MobileFooter = () => {
  const routes = useRoutes();
  const { isOpen } = useConversation();

  if (isOpen) {
    return null;
  }
<<<<<<< HEAD
 
=======

>>>>>>> 867ff84e7efde6625a2791d8014b1535aeba7073
  return ( 
    <div 
      className="
        fixed 
        justify-between 
        w-full 
        bottom-0 
        z-40 
        flex 
        items-center 
        bg-white 
        border-t-[1px] 
        lg:hidden
      "
    >
      {routes.map((route) => (
        <MobileItem 
<<<<<<< HEAD
          key={route.href}
          href={route.href}
          active={route.active}
=======
          key={route.href} 
          href={route.href} 
          active={route.active} 
>>>>>>> 867ff84e7efde6625a2791d8014b1535aeba7073
          icon={route.icon}
          onClick={route.onClick}
        />
      ))}
    </div>
   );
}
 
export default MobileFooter;