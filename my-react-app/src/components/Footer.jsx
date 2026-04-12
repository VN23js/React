export default function FooterPetuh() {
  return (
    <div className='w-full max-w-[1500px]  mx-auto min-[1500px]:pl-[200px] '>
      <footer className='bg-amber-9s00 w-full  px-2.5 h-[100px]'>
        <div className='lg:pb-0.5 pb-20 justify-center flex-col mx-auto flex '>
          <div className='grid grid-cols-1 min-[1500px]:grid-cols-2 gap-6 w-full'>
            <div className='before-loop'>
              <div className='text-content flex h-[160px] items-center overflow-hidden  bg-[#2d2720] rounded-3xl p-3 px-[24px]'>
                <div className='flex-1 seo-bg'>
                  <h1 className='mb-1.5 text-h z-20 relative  font-geo text-[#ffc23d]'>
                    Ищешь лучшие кейсы CS2?
                  </h1>
                  <p className='text-[14px] relative z-20 font-geo seo-text'>
                    Кейсы кс 2 от Petuh’a - твой идеальный вариант! Проверенный
                    дроп, честность и самый высокий во вселенной шанс поймать
                    редчайшие кс2 скины!
                  </p>
                </div>
              </div>
            </div>
            <div className='before-loop2'>
              <div className='text-content flex h-[160px] items-center overflow-hidden  bg-[#2d2720] rounded-3xl p-3 px-[24px]'>
                <div className='flex-1 seo-bg'>
                  <h1 className='mb-1.5 text-h z-20 relative  font-geo text-[#ffc23d]'>
                    Кейсы CS2 от Petuh’a это:
                  </h1>
                  <div className='z-20 text-[14px] relative z-20 font-geo seo-text'>
                    <p>Быстрое пополнение без комиссий!</p>
                    <p>Гарантия лучших шансов на дроп!</p>
                    <p>Быстрый вывод в Steam без задержек!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
