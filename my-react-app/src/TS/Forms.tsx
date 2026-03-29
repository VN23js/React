import { useEffect, useState } from 'react';
import ButtonCase from '../pages/CasePage/components/ui/Button.js';

type Form = {
  id?: number;
  name: string;
  email: string;
};
type User = {
  id?: number;
  name: string;
  email: string;
};
export default function FormsTsx() {
  const [user, setUser] = useState<User[]>([]);
  useEffect(() => {
    console.log(user);
  }, [user]);
  const addUsers = (): void => {
    setUser((prevUsers) => [
      ...prevUsers,
      { ...form, id: prevUsers.length + 1 },
    ]);
    setForm({
      id: 0,
      name: '',
      email: '',
    });  form.email = '';
    form.name = '';
    form.id = 0;
  };
  const [form, setForm] = useState<Form>({
    id: 0,
    name: '',
    email: '',
  });
  function updateField<K extends keyof Form>(key: K, value: Form[K]) {
    setForm({
      ...form,
      [key]: value,
    });
  }

  return (
    <div className='container'>
      <form className='max-w-[700px] mx-auto  '>
        <div className='mx-auto gap-1 flex'>
          <input
            value={form.name}
            onChange={(e) => updateField('name', e.target.value)}
            className='w-full bg-[#1a1814] border border-[#3d3529] rounded-xl px-4 py-3 text-white placeholder-[#6b5f4e] focus:outline-none focus:border-[#fbc04e] transition-colors duration-300'
            placeholder='name'
          ></input>
          <input
            value={form.email}
            onChange={(e) => updateField('email', e.target.value)}
            className='w-full bg-[#1a1814] border border-[#3d3529] rounded-xl px-4 py-3 text-white placeholder-[#6b5f4e] focus:outline-none focus:border-[#fbc04e] transition-colors duration-300'
            placeholder='email'
          ></input>
        </div>
      </form>
      <div className='p-2.5'>
        <ButtonCase className='mx-auto' onClick={addUsers}>
          Добавить
        </ButtonCase>

        {user.map((item) => (
          <div key={item.id}>
            <div> {item.id} id</div>
            <div> {item.name} Name</div>
            <div> {item.email} Email</div>
          </div>
        ))}
      </div>
    </div>
  );
}
