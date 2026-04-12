import { Link } from 'react-router-dom';
import type { RootState } from '../../../redux/store.js';
import { useSelector } from 'react-redux';
import EmptyInventory from './profile/EmptyInventory.js';
import ItemsInventory from './profile/ItemsInventory.js';

export default function UsersProfileInventory() {
  const profileUser = useSelector(
    (state: RootState) => state.caseTestTs.profileUser
  );
  console.log(profileUser);
  if (!profileUser) return null;
  const hasItems =
    profileUser.inventory === null ? 0 : profileUser.inventory.length;

  return (
    <div className=' max-w-[1086px] justify-center flex-col  flex p-4'>
      <h1 className='category_title font-geo justify-center mb-4 flex'>
        Инветарь
      </h1>
      <div className='flex justify-center bg-[#151515] rounded-[24px] p-4 w-full '>
        <div className='flex  flex flex-col justify-center w-full   col'>
          {!hasItems ? (
            <EmptyInventory></EmptyInventory>
          ) : (
            <ItemsInventory profileUser={profileUser}></ItemsInventory>
          )}
        </div>
      </div>
    </div>
  );
}
