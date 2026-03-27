import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function OnMoreTask({ onMoreTask, hasMore }) {
  const [page, setPage] = useState(1);
  const HandleMoreTask = async () => {
    try {
      const nextPage = page + 1;
      setPage(nextPage);
      await onMoreTask(nextPage);
    } catch (error) {
      console.error('Ошибка обновления todo:', error);
    }
  };

  return (
    <>
      {hasMore && (
        <div className='relative mb-5 flex flex-col items-center gap-3'>
          <div style={{ display: 'flex', gap: '5px', marginBottom: '4px' }}>
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  width: '5px',
                  height: '5px',
                  borderRadius: '50%',
                  background: '#6366f1',
                  opacity: 0.5,
                  animation: `bounce 1.2s ease-in-out ${i * 0.2}s infinite`,
                }}
              />
            ))}
          </div>

          <button
            onClick={HandleMoreTask}
            style={{
              position: 'relative',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 24px',
              fontFamily: "'Syne', sans-serif",
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              borderRadius: '10px',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              /* Работает и на тёмном и на светлом фоне */
              background: 'rgba(99, 102, 241, 0.1)',
              border: '1px solid rgba(99, 102, 241, 0.35)',
              color: '#6366f1',
              boxShadow: '0 4px 20px rgba(99, 102, 241, 0.15)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(99, 102, 241, 0.18)';
              e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.6)';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow =
                '0 8px 25px rgba(99, 102, 241, 0.25)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(99, 102, 241, 0.1)';
              e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.35)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow =
                '0 4px 20px rgba(99, 102, 241, 0.15)';
            }}
            onMouseDown={(e) =>
              (e.currentTarget.style.transform = 'translateY(0)')
            }
          >
            <svg
              width='14'
              height='14'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2.5'
              strokeLinecap='round'
              strokeLinejoin='round'
              style={{ animation: 'arrowBounce 1.5s ease-in-out infinite' }}
            >
              <polyline points='6 9 12 15 18 9' />
            </svg>
            Ещё записи
          </button>

          <style>{`
      @keyframes bounce {
        0%, 100% { transform: translateY(0); opacity: 0.4; }
        50% { transform: translateY(-4px); opacity: 1; }
      }
      @keyframes arrowBounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(3px); }
      }
    `}</style>
        </div>
      )}
    </>
  );
}
