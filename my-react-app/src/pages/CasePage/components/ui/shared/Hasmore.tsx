import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../../../../redux/store.js';
import { useState } from 'react';
import { gethasMoreItems } from '../../../../../redux/ProfileSlice.js';
import { IoReloadSharp } from 'react-icons/io5';
export default function HasmoreCase({ id }: { id: string }) {

  const dispatch = useDispatch<AppDispatch>();
  const [page, setPage] = useState<number>(1);
  const HandleMoreCases = async () => {
    try {
      const nextPage: number = page + 1;
      setPage(nextPage);
      const result = await dispatch(gethasMoreItems({ id, nextPage }));
    } catch (error) {
      console.error('Ошибка обновления:', error);
    }
  };

  return (
    <div>
      <button
        onClick={HandleMoreCases}
        className='!bg-[#c7c2b829] !font-geo gap-1 !font-bold   !items-center flex  !text-[13px] h-10 !text-[#c6c1b6] px-3.5'
      >
        Показать еще
        <IoReloadSharp className='text-[17px]   drop-shadow-[0_0_0.5px_white] ' />
      </button>
    </div>
  );
}
