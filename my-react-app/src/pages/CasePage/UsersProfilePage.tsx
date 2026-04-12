import { useEffect } from 'react';
import UsersProfileCard from './components/UserProfileCard.js';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../redux/store.js';
import { useParams } from 'react-router-dom';
import { ClearUserProfile, getProfileUser } from '../../redux/testSlice.js';
import LoadingCard from './components/ui/shared/Loading.js';
import Error from './components/ui/shared/Error.js';
import UsersProfileInventory from './components/UserProfileInvenory.js';

export default function UsersProfilePage() {
  const dispatch = useDispatch<AppDispatch>();
  const profileUserStatus = useSelector(
    (state: RootState) => state.caseTestTs.profileUserStatus
  );

  const { id } = useParams<{ id: string }>();
  console.log(profileUserStatus);
  useEffect(() => {
    if (id) {
      dispatch(getProfileUser(id));
    }
    return () => {
      dispatch(ClearUserProfile());
    };
  }, [id]);

  if (profileUserStatus === 'error') {
    return <Error></Error>;
  }
  if (profileUserStatus === 'loading') {
    return <LoadingCard></LoadingCard>;
  }
  return (
    <div className=' max-w-[1086px] justify-center flex-col mx-auto flex p-4'>
      <UsersProfileCard></UsersProfileCard>
      <UsersProfileInventory></UsersProfileInventory>
    </div>
  );
}
