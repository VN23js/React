import type { InputHTMLAttributes } from 'react';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder:string
  error?: string;
}

export default function InputField({
  label,
  error,
  placeholder,
  ...props

}: InputFieldProps) {
  return (
    <div>
      <label className='mb-2 block font-geo text-[13px] text-[#a39f98]'>
        {label}
      </label>
      <input
        className='w-full bg-[#131210] font-geo  outline-none text-white py-3 px-4 rounded-2xl'
        placeholder={placeholder}
        {...props}
      />
      {error && (
        <p className='text-[#ff5c5c] text-[12px] pl-1'>{error as string}</p>
      )}
    </div>
  );
}
