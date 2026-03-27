import { useDispatch, useSelector } from 'react-redux';
import {
  clearCase,
  closeWinModal,
  getItemsRuletFetch,
  openWinModal,
  randomItemFetch,
} from '../../../redux/caseSlice';
import { useMemo, useState } from 'react';
import { useEffect } from 'react';
import Motion from '../../../components/animate';
import useRoulette from '../../../hooks/useAnimationItems';
import { useRef } from 'react';
import AuthWarning from './AuthWarning';
import { NavLink, useParams } from 'react-router-dom';
import ModalWinItem from './ModalWinItem';
import SkeletonRoulette from '../Skeleton/SkeletonRoulette';
import ButtonCase from './ui/Button';
export default function RoletsItems() {
  const { id } = useParams();
  const { isAuth } = useSelector((state) => state.auth);
  const { isWinModalOpen, getItemsRulet, itemsrulet, CaseName } = useSelector(
    (state) => state.case
  );

  const trackRef = useRef(null);
  const [spining, setSpining] = useState(false);
  const { animateToIndex, resetPostion } = useRoulette(trackRef);
  const dispatch = useDispatch();
  const isMounted = useRef(true);
  useEffect(() => {
    isMounted.current = true;
    dispatch(getItemsRuletFetch(id));
    return () => {
      isMounted.current = false;
      dispatch(clearCase());
    };
  }, [id]);

  const HandleRandom = async () => {
    if (spining) return;
    setSpining(true);
    try {
      dispatch(closeWinModal());
      resetPostion();
      const result = await dispatch(randomItemFetch(id)).unwrap();
      await animateToIndex(result.winIndex);
      if (!isMounted.current) return;
      dispatch(openWinModal());
    } catch (error) {
      console.error('Ошибка', error);
    } finally {
      setSpining(false);
    }
  };
  const duplicateItems = useMemo(() => {
    if (!itemsrulet?.length) return [];
    const result = [];
    for (let i = 0; i < 10; i++) {
      result.push(...itemsrulet);
    }
    return result;
  }, [itemsrulet]);

  return (
    <>
      <h1 className=' mb-7 text-[15px] sm:text-[16px] lg:text-[18px]'>
        {CaseName}
      </h1>
      <div className='roulette mb-5'>
        <div className='flowers-top'> </div>
        <div className='flowers'>
          <div className='roulette-wrapper relative mb-5'>
            {!isAuth && getItemsRulet.status === 'succeeded' && <AuthWarning />}
            <div className='pointer'></div>
            <div className='viewport'>
              <div ref={trackRef} id='track' className='track'>
                {getItemsRulet.status === 'loading' ? (
                  <SkeletonRoulette></SkeletonRoulette>
                ) : (
                  <>
                    {duplicateItems?.map((item, i) => {
                      return (
                        <div
                          key={`${item._id}-${i}`}
                          className='item flex flex-col'
                          style={{
                            background: item.color,
                          }}
                        >
                          <img src={item.linkImg} alt='weapon' />
                          <div className='item_title text-[14px]'>
                            {item.nameWeapon}
                          </div>
                          <div className='text-[13px] truncate'>
                            {item.nameSkin}
                          </div>
                        </div>
                      );
                    })}
                  </>
                )}
              </div>
            </div>
          </div>

          <div className='relative w-full p-2 mb-5'>
            {isAuth ? (
              <div>
                <button
                  className='w-[220px]  !px-6 !py-3 max-[500px]:w-full !text-[#4a3e28]  !text-[15px] rounded-lg !bg-[var(--color-bgrule)] !font-bold disabled:opacity-50'
                  disabled={!itemsrulet?.length || spining}
                  onClick={HandleRandom}
                >
                  {spining ? '🎲 Вращение...' : 'Крутить'}
                </button>
              </div>
            ) : (
              <div>
                {getItemsRulet.status === 'loading' ? (
                  <>
                    <ButtonCase className='m-auto  !text-[15px] !p-3 rounded-lg '>
                      Загрузка...
                    </ButtonCase>{' '}
                  </>
                ) : (
                  <>
                    <NavLink to={'/login'}>
                      <ButtonCase className='m-auto  !text-[15px] !p-3 rounded-lg '>
                        Пройти авторизацию
                      </ButtonCase>{' '}
                    </NavLink>
                  </>
                )}
              </div>
            )}
          </div>
        </div>

        {isWinModalOpen && (
          <ModalWinItem HandleRandom={HandleRandom}></ModalWinItem>
        )}
      </div>
    </>
  );
}
