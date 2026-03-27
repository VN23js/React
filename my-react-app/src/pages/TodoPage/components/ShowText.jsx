import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import { styled } from '@mui/joy/styles';
import FormTodoEdit from './FormEdit';
import { useTextOverflow } from '../../../hooks/useTextOverflow';

const Item = styled(Sheet)(({ theme }) => ({
  backgroundColor: '#efeff1',
  textAlign: 'center',
  borderRadius: 10,
}));
const Texblock = React.memo(
  ({
    text,
    id,
    title,
    onClick,
    completed,
    onUpdate, // ← получаем из пропсов
    onDelete, // ← получаем из пропсов
    onComplete,
  }) => {
    /// const displayText =expanded || !isLong ? text : text.slice(0, maxChar) + '...';
    // const maxChar = 300;
    // const isLong = text.length > maxChar; //true
    const dispatch = useDispatch();
    const [expanded, setexpanded] = useState(false);
    const [edit, setEdit] = useState(null);
    const textRef = useRef(null);
    const showMoreButton = useTextOverflow(textRef, edit);

    const renderCount = useRef(0);
    renderCount.current += 1;
  
    // Логирование с id компонента
    console.log(`🔄 [${id}] Рендер #${renderCount.current}`, {
      text: text?.substring(0, 20) + '...',
      title,
      completed,
      edit,
      expanded,
      showMoreButton,
      onComplete,
    });

    const prevPropsRef = useRef({ text, title, completed });
    useEffect(() => {
      const prev = prevPropsRef.current;
      if (prev.text !== text) console.log(`📝 [${id}] text изменился`);
      if (prev.title !== title) console.log(`📋 [${id}] title изменился`);
      if (prev.completed !== completed)
        console.log(`✅ [${id}] completed изменился`);
      prevPropsRef.current = { text, title, completed };
    });
    const Click = () => {
      setEdit(edit === id ? null : id);
      setexpanded(false);
    };

    const HandleCompleted = async () => {
      try {
        await onComplete(id);
      } catch (error) {
        console.error('Ошибка обновления todo:', error);
      }
    };

    return (
      <>
        <Item
          sx={{
            color: 'white',
            background: 'var(--color-libbg)',
            borderRadius: '20px',
            border: '1px solid rgba(147,115,234,0.15)',
            transition: '0.3s',
            '&:hover': {
              border: '1px solid rgba(147,115,234,0.4)',
            },
          }}
        >
          <div className='p-4 flex flex-col  text-left gap-2'>
            {edit === id ? (
              <FormTodoEdit
                text={text}
                id={id}
                title={title}
                Click={Click}
                hadnleDelete={onDelete}
                handleClick={onUpdate}
              ></FormTodoEdit>
            ) : (
              <div>
                {' '}
                <Typography
                  sx={{
                    fontWeight: 500,
                    wordWrap: 'break-word',
                    color: 'var(--color-text)',
                  }}
                  level='h3'
                >
                  {title}
                </Typography>
                <div className='relative w-full'>
                  <Typography
                    ref={textRef}
                    sx={{
                      wordWrap: 'break-word',
                      display: '-webkit-box',
                      WebkitBoxOrient: 'vertical',
                      WebkitLineClamp: expanded ? 'unset' : 5,
                      overflow: 'hidden',
                      whiteSpace: 'pre-wrap',
                      fontWeight: 500,
                      color: 'var(--color-text)',
                      padding: '5px',
                    }}
                    level='h5'
                  >
                    {text}
                  </Typography>

                  {showMoreButton && (
                    <span
                      tabIndex={0}
                      className='cursor-pointer  p-[5px] text-sm text-violet-600 select-none'
                      onClick={() => setexpanded(!expanded)}
                    >
                      {expanded ? 'скрыть' : 'еще'}
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className='flex justify-end pr-5 pb-5'>
            {edit === id ? (
              <div>b</div>
            ) : (
              <button
                className='w-9 h-9 cursor items-center !p-2 flex justify-center !text-[1.5em]'
                type='checkbox'
                onClick={HandleCompleted}
                style={{
                  background: completed ? '#00ff009e' : '#cb0000ee',
                }}
              >
                {completed ? '✓' : '✘'}
              </button>
            )}
          </div>
          <div className='mb-2'>
            <span
              tabIndex={0}
              onClick={Click}
              className='cursor-pointer
              text-sm
              text-violet-600
              hover:undreline
              select-none
               inline
               whitespace-nowrap
              '
            >
              {' '}
              {edit === id ? 'Назад' : 'Изменить'}
            </span>
          </div>
        </Item>{' '}
      </>
    );
  }
);
export default Texblock;
