import type { ClassNamesConfig } from 'react-select';

export const selectClassNames = {
  control: () =>
    'w-full bg-[#131210] font-geo border border-[#3d3529] outline-none text-white py-3 px-2 rounded-2xl cursor-pointer hover:border-[#fbc04e] transition-colors duration-300',
  menu: () =>
    'bg-[#1a1814] border border-[#3d3529] rounded-2xl mt-1 overflow-hidden',
  option: ({ isFocused }: any) => {
    if (isFocused)
      return 'bg-[#2a2621] text-white font-geo px-4 py-2 cursor-pointer';
    return 'text-[#6b5f4e] bg-[#1a1814]  font-geo px-4 py-2 cursor-pointer';
  },
  singleValue: () => 'text-white',
  input: () => 'text-white',
  placeholder: () => 'text-[#6b5f4e]',
};
