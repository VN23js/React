import { FaTelegram } from 'react-icons/fa';
import { FaVk } from 'react-icons/fa6';
import { FaDiscord } from 'react-icons/fa6';
import { AiFillTikTok } from 'react-icons/ai';
import { FaYoutube } from 'react-icons/fa';
export default function NavigationFooter() {
  return (
    <div className=' relative'>
      <div className='footer-navigation'>
        <div className=' w-full max-w-[1500px]  rounded-4xl border-2 border-[rgba(49,47,45,0.22)] p-7'>
          <div>
            <div className='mb-1.5'>
              <span className='text-[#8e887ba3] font-bold  font-geo'>
                © 2026 petuh.gg
              </span>
            </div>
            <div className='lg:flex  '>
              <div className=' text-[#ffffffa3] font-geo text-[14px] gap-x-10 gap-y-3 grid lg:grid-cols-[repeat(3,110px)] mb-3 '>
                <ul className='cursor-pointer'>Пользовательское соглашение</ul>
                <ul className='cursor-pointer'>Соглашение о приватности</ul>
                <ul className='cursor-pointer'>Кейсы</ul>
                <ul className='cursor-pointer'>Контакты</ul>
              </div>
              <div className='w-full flex items-center gap-1 lg:justify-end'>
                {[FaTelegram, FaVk, FaDiscord, AiFillTikTok, FaYoutube].map(
                  (Icon, i) => (
                    <div
                      key={i}
                      className='group flex items-center justify-center w-9 h-9 rounded-lg cursor-pointer transition-colors hover:bg-white/10'
                      style={{ background: 'hsla(0, 0%, 100%, .06)' }}
                    >
                      <Icon
                        className='text-2xl transition-colors group-hover:text-white'
                        style={{ fill: 'hsla(0, 0%, 100%, .44)' }}
                      />
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
        <div className=' p-7 font-geo font-bold text-[#4a4744] flex flex-col text-[12px] gap-1 max-w-[490px]'>
          <p>
            ITSFAIL OÜ: Company number 17318261, Harju maakond, Tallinn,
            Kesklinna linnaosa, Vesivärava tn 50-201, Estonia, 10152.
          </p>
          <p>
            LLC «Transtrade»: Company number 310961-3301-LLC, Tax ID (INN)
            9909710251, Kyrgyz Republic, Bishkek, Leninsky District, 66 Kalyk
            Akiev Street.
          </p>
        </div>
      </div>
    </div>
  );
}
