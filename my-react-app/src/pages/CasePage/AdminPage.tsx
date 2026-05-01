import { useState } from 'react';
import Select from 'react-select';
import { selectClassNames } from './components/ui/shared/SelectStyle.js';
import { useForm, Controller } from 'react-hook-form';
import InputField from './components/Admin/InputField.js';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../redux/store.js';
import { postNewSkin } from '../../redux/AdminSlice.js';
type Rarity = {
  name: string;
  color: string;
};

type TypeForms = {
  Weapon: string;
  WeaponNameSkin: string;
  rarity: Rarity;
  Price: number;
  URL: string;
};
export default function AdminPage() {
  const dispatch = useDispatch<AppDispatch>()
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TypeForms>();
  const option: Rarity[] = [
    {
      name: 'red',
      color: '#ff594d',
    },
    {
      name: 'gold',
      color: '#e9b51d',
    },
    {
      name: 'pink',
      color: '#f949c4',
    },
    {
      name: 'blue',
      color: '#7214ff',
    },
    {
      name: 'green',
      color: '#2bade6',
    },
    {
      name: 'gray',
      color: '#9ba0ad',
    },
  ];
  const handleClick = (payloadData: TypeForms) => {
    dispatch(postNewSkin({ payloadData }));
  };

  return (
    <div className='flex flex-col  bg-g  p-2 justify-center items-center'>
      <div className='w-full   flex-col flex bg-[#262421] max-w-[600px] rounded-2xl p-7.5 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'>
        <h2 className='text-2xl font-bold font-geo mb-5'>Добавить предмет</h2>
        <form
          className='flex flex-col gap-5'
          onSubmit={handleSubmit(handleClick)}
        >
          <div className='grid grid-cols-2 gap-3.5'>
            <InputField
              label={' Оружие (напр. AK-47)'}
              {...register('Weapon', { required: 'Введите название оружие' })}
              error={errors.Weapon?.message as string}
              placeholder={'Введите оружие...'}
            ></InputField>

            <InputField
              label={'Скин (напр. Asiimov)'}
              {...register('WeaponNameSkin', {
                required: 'Введите название скина',
              })}
              error={errors.WeaponNameSkin?.message as string}
              placeholder={'Введите скин...'}
            ></InputField>
          </div>

          <div className='grid grid-cols-2 gap-3.5'>
            <div>
              <label className='mb-2 block font-geo text-[13px] text-[#a39f98]'>
                Редкость (Цвет)
              </label>
              <Controller
                name='rarity'
                control={control}
                rules={{ required: 'Выберете редкость ' }}
                render={({ field, fieldState }) => (
                  <div>
                    <Select<Rarity>
                      options={option}
                      value={field.value || null}
                      getOptionLabel={(o) => o.name}
                      onChange={(option) => field.onChange(option)}
                      onBlur={field.onBlur}
                      classNames={selectClassNames}
                      unstyled
                      formatOptionLabel={(o) => (
                        <div style={{ color: o.color }}>{o.name}</div>
                      )}
                    />
                    {fieldState.error && (
                      <p className='text-[#ff5c5c] text-[12px] pl-1'>
                        {fieldState.error.message}
                      </p>
                    )}
                  </div>
                )}
              ></Controller>
            </div>

            <InputField
              type='number'
              label={' Цена (₽ / Coins)'}
              {...register('Price', {
                required: 'Введите цену скина',
              })}
              error={errors.Price?.message as string}
              placeholder={'0.00'}
            ></InputField>
          </div>

          <div className='grid grid-cols-1 mb-2 gap-3.5'>
            <InputField
              label={'URL изображения'}
              {...register('URL', {
                required: 'Введите ссылку скина стим',
              })}
              error={errors.URL?.message as string}
              placeholder={'https://...'}
            ></InputField>
          </div>
          <button className=' text-shadow-[0_2px_3px_rgba(66,29,9,0.29)] !font-arco w-full  !p-3.5 !rounded-4xl bg-gradient-to-b from-[#d04c1b] to-[#eda636]  '>
            {' '}
            Добавить предмет
          </button>
        </form>
      </div>
    </div>
  );
}
