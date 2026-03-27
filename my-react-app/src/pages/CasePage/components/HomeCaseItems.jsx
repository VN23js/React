import { Grid } from '@mui/joy';
import { useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function HomeCaseItems({ cases, nameCase }) {
  const navigate = useNavigate();
  return (
    <div className=' items-center justify-center mb-5'>
      <h1 className='category_title font-geo justify-center flex'>
        {nameCase}
      </h1>
      <Grid container spacing={0} justifyContent='center'>
        {cases.map((item, i) => (
          <Grid key={item._id} xs={6} sm={4} md={3} lg={2.3}>
            <div
              onClick={() => navigate(`/case/${item._id}`)}
              className='cursor-pointer p-[2px]  transition-transform duration-300 hover:text-[#fac26f] flex flex-col items-center'
            >
              <img
                draggable='false'
                className='case-img max-w-[310px]  w-full object-contain transition-transform duration-300 hover:scale-105'
                alt='Гавайский Павлин'
                src={item.image}
              />
              <span className='box_title mt-2 mb-2 text-center font-bold text-sm sm:text-base'>
                {item.name}
              </span>
              <span className='box-price px-2 font-bold h-[32px] font-geo items-center  align-center flex rounded-lg text-[#ffc23d]  bg-[linear-gradient(180deg,#5e4437,#3e2c23)]'>
                {item.price} ₽
              </span>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
