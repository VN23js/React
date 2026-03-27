import { Briefcase, Circle, CirclePlus, UserRoundPen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import NavigationLinkInventory from './LinkNavigation/NavigationLink';
import NavigationLinkHome from './LinkNavigation/NavigationLinkHome';
export default function MobilePanel() {
  return (
    <div
      className='fixed
       shadow-[0_12px_12px_0_rgba(27,26,25,0.7),inset_0_3px_6.1px_0_rgba(68,60,54,0.5)]
      h-[60px] m p-4 bottom-[12px] px-4 right-[12px] rounded-[24px] left-[12px] min-[900px]:hidden z-50 flex items-center justify-between  bg-black'
      style={{
        background:
          'linear-gradient(180deg, rgba(77,64,39,0.2), rgba(78,66,40,0.7)), #312923',
      }}
    >
      <div className='w-full flex  gap-3'>
        {' '}
        <NavigationLinkHome></NavigationLinkHome>
        <NavigationLinkInventory></NavigationLinkInventory>
      </div>
      <div className='relative'>
        <div className='flex items-center h-[38px] px-3 gap-2 rounded-xl  font-geo  bg-[linear-gradient(307deg,#d26928_3.2%,#ffd014_99.71%)]'>
          <span className=' text-[16px] '>0 </span>
          <CirclePlus className='w-5 h-5 ' />
        </div>
      </div>
    </div>
  );
}
