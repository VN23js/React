import { div } from 'framer-motion/client';

export default function Item({ user }) {
  if (!user) return null;
  const { name, age } = user;
  return (
    <div>
      <h1>Имя {name}</h1>
      <h1> Возраст {age}</h1>
    </div>
  );
}
