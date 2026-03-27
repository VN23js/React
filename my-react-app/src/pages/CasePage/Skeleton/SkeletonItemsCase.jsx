import { Grid } from '@mui/joy';
export default function SkeletonItemsCase() {
  const skeletonColors = [
    'linear-gradient(180deg, #38211c, #54211d)', // красный
    'linear-gradient(180deg, #38211c, #54211d)',
    'linear-gradient(180deg, #38211c, #54211d)',
    'linear-gradient(180deg, #2d1325, #421b37)', // фиолетовый
    'linear-gradient(180deg, #2d1325, #421b37)',
    'linear-gradient(180deg, #2d1325, #421b37)',
    'linear-gradient(180deg, #132228, #18303a)', // синий
    'linear-gradient(180deg, #132228, #18303a)',
    'linear-gradient(180deg, #132228, #18303a)',
    'linear-gradient(180deg, #1f1430, #291549)', // тёмно-фиолетовый
    'linear-gradient(180deg, #1f1430, #291549)',
    'linear-gradient(180deg, #1f1430, #291549)',
    'linear-gradient(rgb(19, 34, 40), rgb(24, 48, 58))',
    'linear-gradient(rgb(19, 34, 40), rgb(24, 48, 58))',
  ];
  return (
    <Grid container spacing={1}>
      {skeletonColors.map((color, i) => (
        <Grid key={i} item xs={6} sm={3} md={2}>
          <div
            className='items-case flex-col flex justify-center animate-pulse'
            style={{ background: color }}
          >
            <div className='m-auto w-[120px] h-[120px] rounded-lg bg-white/10' />
            <div className='h-[14px] mx-2 mt-2 rounded bg-white/10' />
            <div className='h-[14px] mx-2 mt-1 rounded bg-white/10 w-3/4' />
            <div className='item-component-line-pink' />
          </div>
        </Grid>
      ))}
    </Grid>
  );
}
