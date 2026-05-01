import { NavLink } from 'react-router-dom';

export default function NavigationLinkHomeDesktop() {
  return (
    <NavLink className='flex items-center group' to='/'>
      {({ isActive }) => (
        <div
          className={`items-center !font-geo flex gap-2 transition-all duration-[0.3s] px-2  flex ${
            isActive
              ? 'text-[#fabd3b]'
              : 'text-[#ac9b85] group-hover:text-white'
          }`}
        >
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='menu_icon__gS96a menu_defaultIcon__WeMdQ'
          >
            <path
              d='M12.8526 1.29962L21.5199 7.78769C22.0882 8.24544 22.1608 9.05797 21.6905 9.60226C21.2183 10.1512 20.3783 10.2224 19.8129 9.76778L11.9997 4.01061L4.18653 9.76782C3.62478 10.2202 2.77933 10.149 2.30958 9.60355C1.84267 9.06206 1.90738 8.24806 2.48016 7.78769L11.1462 1.29962C11.386 1.10634 11.6882 1.00033 12.0003 1C12.312 1.00013 12.6136 1.10619 12.8526 1.29962Z'
              fill='url(#paint0_linear_5259_4387)'
            ></path>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M18.0706 17.801H18.6664C19.0349 17.801 19.333 18.0892 19.3331 18.4454C19.3331 18.8017 19.0349 19.09 18.6664 19.09H5.33298C4.96448 19.09 4.66629 18.8017 4.66629 18.4454C4.66629 18.0892 4.96448 17.8009 5.33298 17.8009H5.92878L5.23945 11.2262C5.20246 10.8733 5.35519 10.5273 5.6408 10.3168L11.4065 6.06838C11.7593 5.80848 12.2401 5.80845 12.5928 6.0683L18.3586 10.3156C18.6443 10.5261 18.7971 10.8722 18.7601 11.2251L18.0706 17.801ZM11.4046 8.33947C11.6706 7.88684 12.3294 7.88685 12.5954 8.33947L15.9036 13.9692C16.2239 14.5143 15.6933 15.1626 15.0902 14.963L13.8776 14.5618L12.4465 12.2425C12.2471 11.9192 11.7529 11.9192 11.5535 12.2425L10.1224 14.5618L8.90979 14.963C8.30669 15.1626 7.77613 14.5143 8.09645 13.9692L11.4046 8.33947ZM12.2977 13.1455C12.1647 12.9515 11.8353 12.9515 11.7023 13.1455L10.0482 15.5582C9.88806 15.7918 10.1533 16.0697 10.4549 15.9842L11.891 15.5768C11.9617 15.5568 12.0382 15.5568 12.109 15.5768L13.5451 15.9842C13.8467 16.0697 14.1119 15.7918 13.9518 15.5582L12.2977 13.1455Z'
              fill='url(#paint1_linear_5259_4387)'
            ></path>
            <path
              d='M9.99967 22.3555V20.379L13.9997 20.379V22.3555C13.9997 22.7114 13.7012 23 13.333 23H10.6664C10.2982 23 9.99967 22.7114 9.99967 22.3555Z'
              fill='url(#paint2_linear_5259_4387)'
            ></path>

            {isActive ? (
              <defs>
                <linearGradient
                  id='paint0_linear_5259_4387'
                  x1='12'
                  y1='2.00391'
                  x2='12'
                  y2='22.0039'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#C67727'></stop>
                  <stop offset='1' stopColor='#FABD3B'></stop>
                </linearGradient>
                <defs>
                  <linearGradient
                    id='paint1_linear_5259_4387'
                    x1='12'
                    y1='1'
                    x2='12'
                    y2='23'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop stopColor='#C67727'></stop>
                    <stop offset='1' stopColor='#FABD3B'></stop>
                  </linearGradient>
                  <linearGradient
                    id='paint2_linear_5259_4387'
                    x1='12'
                    y1='1'
                    x2='12'
                    y2='23'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop stopColor='#C67727'></stop>
                    <stop offset='1' stopColor='#FABD3B'></stop>
                  </linearGradient>
                </defs>
              </defs>
            ) : (
              <defs>
                <linearGradient
                  id='paint0_linear_5259_4387'
                  x1='12'
                  y1='2.00391'
                  x2='12'
                  y2='22.0039'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#ac9b85'></stop>
                  <stop offset='1' stopColor='#ac9b85'></stop>
                </linearGradient>
                <defs>
                  <linearGradient
                    id='paint1_linear_5259_4387'
                    x1='12'
                    y1='1'
                    x2='12'
                    y2='23'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop stopColor='#ac9b85'></stop>
                    <stop offset='1' stopColor='#ac9b85'></stop>
                  </linearGradient>
                  <linearGradient
                    id='paint2_linear_5259_4387'
                    x1='12'
                    y1='1'
                    x2='12'
                    y2='23'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop stopColor='#ac9b85'></stop>
                    <stop offset='1' stopColor='#ac9b85'></stop>
                  </linearGradient>
                </defs>
              </defs>
            )}
          </svg>
          Главная
        </div>
      )}
    </NavLink>
  );
}
