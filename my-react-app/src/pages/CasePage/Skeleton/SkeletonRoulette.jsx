export default function SkeletonRoulette() {
  const skeletonColors = [
    'linear-gradient(rgb(19, 34, 40), rgb(24, 48, 58))',
    'linear-gradient(180deg, #2d1325, #421b37)',
    'linear-gradient(180deg, #132228, #18303a)',
    'linear-gradient(180deg, #1f1430, #291549)',
    'linear-gradient(180deg, #38211c, #54211d)',
    'linear-gradient(180deg, #2d1325, #421b37)',
    'linear-gradient(180deg, #38211c, #54211d)',
    'linear-gradient(180deg, #2d1325, #421b37)',
    'linear-gradient(180deg, #38211c, #54211d)',
    'linear-gradient(180deg, #2d1325, #421b37)',
  ];

  return (
    <>
      <div className='flex transform translate-x-[3900px]'>
        {skeletonColors.map((color, i) => (
          <div
            key={i}
            className='item flex flex-col animate-pulse'
            style={{
              width: '150px',
              height: '195px',
              background: color,
              padding: '10px',
            }}
          >
            <div className='m-auto w-[100px] h-[100px] rounded-lg bg-white/10' />
            <div className='h-[14px] mx-2 mt-2 rounded bg-white/10' />
            <div className='h-[14px] mx-2 mt-1 rounded bg-white/10 w-3/4' />
          </div>
        ))}
      </div>
    </>
  );
}
