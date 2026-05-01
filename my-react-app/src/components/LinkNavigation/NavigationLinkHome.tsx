import { NavLink } from 'react-router-dom';

export default function NavigationLinkHome() {
  return (
    <NavLink className='flex items-center' to='/'>
      {({ isActive }) => (
        <div
          className={`items-center !font-geo flex flex-col px-2   text-[14px] ${
            isActive ? 'text-[#fabd3b]' : 'text-[#ac9b85]  '
          }`}
        >
          <svg
            width='24'
            height='24'
            viewBox='2 2 16 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='mobilePanel_buttonIcon__3EmjR'
          >
            <path
              fill='url(#gradient_home)'
              fillRule='evenodd'
              d='M12.875 2.25a3.376 3.376 0 0 1 3.375 3.375v6.75a3.376 3.376 0 0 1-3.375 3.375h-6.75a3.38 3.38 0 0 1-3.375-3.375v-6.75A3.38 3.38 0 0 1 6.125 2.25h6.75ZM6.721 3.282a.794.794 0 1 0 0 1.588h5.558a.794.794 0 0 0 0-1.588H6.721Z'
              clipRule='evenodd'
            />

            {isActive ? (
              <defs>
                <linearGradient
                  id='gradient_home'
                  x1='12'
                  y1='2.00391'
                  x2='12'
                  y2='22.0039'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#C67727'></stop>
                  <stop offset='1' stopColor='#FABD3B'></stop>
                </linearGradient>
              </defs>
            ) : (
              <defs>
                <linearGradient
                  id='gradient_home'
                  x1='12'
                  y1='2.00391'
                  x2='12'
                  y2='22.0039'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#ac9b85'></stop>
                </linearGradient>
              </defs>
            )}
          </svg>
          Кейсы
        </div>
      )}
    </NavLink>
  );
}
