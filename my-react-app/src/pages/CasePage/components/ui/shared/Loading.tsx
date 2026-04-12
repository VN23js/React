export default function LoadingCard() {
  return (
    <div className='flex items-center justify-center min-h-[220px]'>
      <div className='rounded-2xl p-8 flex flex-col items-center gap-5 w-[500px]'>
        <div className='animate-bounce'>
          <svg
            width='102'
            height='102'
            viewBox='0 0 64 64'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill='#ffc23d'
              d='M37.485 6.4c-8.617 0-15.961 9.09-18.824 19.345-.488 1.75 1.172 3.236 2.916 2.727a1.828 1.828 0 0 1 2.29 1.32 6.638 6.638 0 0 0 8.31 4.799 1.829 1.829 0 0 1 2.29 1.322l.452 1.855a4.81 4.81 0 0 0 6.021 3.476 1.829 1.829 0 0 1 2.216 2.422 30.046 30.046 0 0 1-1.944 4.068 24.248 24.248 0 0 1-4.703 5.95c-1.479 1.364-1.036 3.916.976 3.916 11.109 0 20.115-9.621 20.115-22.857C57.6 21.507 48.594 6.4 37.485 6.4Z'
            />
            <path
              fill='#e6a820'
              d='M33.74 40.647a4.232 4.232 0 0 0-5.3-3.059 4.234 4.234 0 0 1-5.299-3.06 4.235 4.235 0 0 0-5.3-3.06l-1.977.577a2.264 2.264 0 0 1-2.835-1.635l-.082-.337c-.412-1.686-2.535-2.127-3.407-.627-5.79 10.03-3.264 21.21 5.045 26.007 8.308 4.797 19.253 1.395 25.044-8.634.862-1.503-.58-3.117-2.242-2.631l-.33.096a2.258 2.258 0 0 1-2.828-1.632l-.49-2.005Z'
            />
          </svg>
        </div>

        <div className='flex gap-2'>
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className='w-2.5 h-2.5 rounded-full bg-[#ffc23d]'
              style={{
                animation: `pulse 1.2s ease-in-out ${i * 0.2}s infinite`,
              }}
            />
          ))}
        </div>

        <span className='text-[#fff8da] font-geo text-[15px] tracking-[2.5px] uppercase opacity-60'>
          Загрузка
        </span>
      </div>
    </div>
  );
}
