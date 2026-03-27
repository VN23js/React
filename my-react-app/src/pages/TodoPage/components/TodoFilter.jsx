import Grid from '@mui/joy/Grid';
import { motion } from 'framer-motion';

export default function TodoFilters({ setFilter, filter }) {
  const getStyles = () => {
    switch (filter) {
      case 'all':
        return {
          left: '0%',
          width: '90px',
        };
      case 'active':
        return {
          left: '47%',
          width: '100px',
          x: '-50%',
        };
      case 'completed':
        return {
          left: '100%',
          width: '120px',
          x: '-100%',
        };
      default:
        return {
          left: '0%',
          width: '90px',
        };
    }
  };

  return (
    <div className='mt-10 w-full'>
      <div
        style={{
          maxWidth: '500px',
          margin: '0 auto',
          position: 'relative',
        }}
      >
        <div className='flex justify-between relative mb-2 w-full'>
          <span
            tabIndex={0}
            role='button'
            className={`cursor-pointer text-lg pb-2 transition-colors duration-300 ${
              filter === 'all' ? 'text-violet-600' : 'text-gray-400'
            }`}
            onClick={() => setFilter('all')}
          >
            Все задачи
          </span>
          <span
            tabIndex={0}
            role='button'
            className={`cursor-pointer text-lg pb-2 transition-colors duration-300 ${
              filter === 'active' ? 'text-violet-600' : 'text-gray-400'
            }`}
            onClick={() => setFilter('active')}
          >
            Активные
          </span>
          <span
            tabIndex={0}
            role='button'
            className={`cursor-pointer text-lg pb-2 transition-colors duration-300 ${
              filter === 'completed' ? 'text-violet-600' : 'text-gray-400'
            }`}
            onClick={() => setFilter('completed')}
          >
            Выполненные
          </span>

          <motion.div
            className='absolute bottom-0 h-0.5 bg-violet-600'
            initial={false}
            animate={getStyles()}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          />
        </div>
      </div>

      <h1 className='text-[3.0em] max-[500px]:text-[2.5em] font-bold text-[var(--h1-color)] p-5 text-center'>
        Мои задачи
      </h1>
    </div>
  );
}
