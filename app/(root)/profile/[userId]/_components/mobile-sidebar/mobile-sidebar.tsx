
import { User } from "@prisma/client";

import { Menu } from 'lucide-react';

import { 
    Sheet, 
    SheetContent, 
    SheetTrigger 
} from '@/components/ui/sheet'
import { MobileSidebarContents } from './mobile-sidebar-contents';

type MobileSidebarProps = {
  userId: User["id"];
}

export const MobileSidebar = ({ userId }: MobileSidebarProps) => {
  return (
    <Sheet>
        <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition">
            <Menu className='w-5 h-5'/>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-60">
            <MobileSidebarContents userId={userId!}/>
        </SheetContent>
    </Sheet>
  )
}

