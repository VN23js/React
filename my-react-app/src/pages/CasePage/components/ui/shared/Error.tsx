import { NavLink } from 'react-router-dom';
import ButtonCase from './Button.js';

export default function Error() {
  return (
    <div className='flex pt-76 font-bold text-center font-geo items-center flex-col'>
      {' '}
      <h1 className='text-2xl'>Ошибка 404</h1>{' '}
      <h1 className='text-2xl'>Упс, что-то не так!</h1>{' '}
      <p className='text-[#9c9689] mb-5'>
        Мы не смогли найти запрашиваемую страницу. Вернитесь на главную
      </p>
      <ButtonCase className='h-[48px]  !text-black !px-7'>
        {' '}
        <NavLink to={'/'}>На Главную</NavLink>
      </ButtonCase>
    </div>
  );
}
