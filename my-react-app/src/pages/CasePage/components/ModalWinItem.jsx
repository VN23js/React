import { useSelector } from 'react-redux';
import * as React from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import ModalDialog from '@mui/joy/ModalDialog';
import useRoulette from '../../../hooks/useAnimationItems';

export default function ModalWinItem({ HandleRandom }) {
  const { isWinModalOpen, winItem } = useSelector((state) => state.case);
  const [open, setOpen] = React.useState(isWinModalOpen);
  const { resetPostion, againOpenCase } = useRoulette();
  console.log(open);
  if (!isWinModalOpen) return null;
  return (
    <>
      <Modal
        open={open}
        sx={{
          margin: '5px',
        }}
        onClose={resetPostion}
      >
        <ModalDialog
          size='md'
          sx={{
            display: 'flex',
            justifyItems: 'center',
            alignItems: 'center',
            background: '#17171a',
            minWidth: '10px',
            width: '100%',
            maxWidth: '700px',
            padding: '0 ',
          }}
          variant='soft'
        >
          <div className='flex flex-wrap justify-center bg-[#141417] p-3 rounded-lg items-center gap-2 w-full relative max-[800px]:pr-10 max-[800px]:justify-start  '>
            <ModalClose
              variant='plain'
              sx={{
                '&:hover': {
                  backgroundColor: 'transparent',
                  color: '#9FA6AD',
                },
              }}
            />
            <Typography
              component='h1'
              level='h3'
              textColor='#ffff'
              sx={{
                fontWeight: 'lg',
                wordBreak: 'break-word',

                mb: 1,
                '@media (max-width: 800px)': {
                  fontSize: '16px',
                },
              }}
            >
              Ваш выигрыш: {winItem.nameSkin}
            </Typography>
          </div>
          <div
            className='items-case !w-[250px] !h-[250px] flex-col flex  justify-center'
            style={{
              background: winItem.color,
              '--glow-color': winItem.glowColor,
              '--glow-rgb': winItem.glowRgb,
            }}
          >
            <img
              src={winItem.linkImg}
              className='m-auto w-[190px]  h-[190px]  object-contain'
              alt='ak-47'
            />
            <div className='item_title'>{winItem.nameWeapon}</div>
            <div className='text-white text-[14px] truncate'>
              {winItem.nameSkin}
            </div>
            <div className='text-white text-[16px] gap-1 flex truncate'>
              <span className='text-[#fbc04e]'>₽</span>
              {winItem.price}
            </div>
            <div className='item-component-line-pink'></div>
          </div>
          <div className='flex w-full justify-center max-[800px]:w-full  max-[800px]:flex-col p-2 mb-5 gap-2'>
            <button
              onClick={HandleRandom}
              className=' w-[220px] uppercase !px-6 !py-3 max-[800px]:w-full !text-[#4a3e28] !text-[15px]  rounded-lg !bg-[var(--color-bgrule)] !font-bold'
            >
              <span> Открыть кейс</span>
            </button>{' '}
            <button
              onClick={resetPostion}
              className=' w-[220px] uppercase !px-6 !py-3 max-[800px]:w-full !text-[#4a3e28]  !text-[15px] rounded-lg !bg-[var(--color-bgrule)] !font-bold'
            >
              Закрыть
            </button>{' '}
          </div>
        </ModalDialog>
      </Modal>
    </>
  );
}
