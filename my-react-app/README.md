# React + Vite
## React Compiler
## Expanding the ESLint configuration

  <div className='w-full justify-center flex'>
        <Select<Weapon>
          className='text-black font-geo w-full max-w-[400px] '
          options={option}
          value={selectedOption}
          getOptionLabel={(o) => o.name}
          getOptionValue={(o) => o.id}
          onChange={(option) => SetSelect(option)}
        ></Select>
      </div>
      {selectedOption?.name ?? 'Не выбрали '}
