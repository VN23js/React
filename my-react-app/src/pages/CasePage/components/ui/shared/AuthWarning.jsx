export default function AuthWarning() {
  return (
    <div className='w-full max-w-[450px] mx-auto rounded-lg absolute backdrop-blur-[9px] left-[50%]  bottom-1 -translate-x-1/2 z-100 bg-[rgba(250,219,78,0.2)] p-4'>
      <span className='caseAuth_title uppercase font-bold text-[16px] text-[#ffc23d]'>
        Вы не авторизованы!
      </span>
      <p className='caseAuth_text text-[13px] text-[#ffc23d]'>
        Для открытия кейсов необходимо пройти авторизацию
      </p>
    </div>
  );
}
