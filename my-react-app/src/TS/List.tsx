import type React from 'react';

type ListProps<T> = {
  items: T[];
  renderItems: (items: T) => React.ReactNode;
};
export default function List<T>({ items, renderItems }: ListProps<T>) {
  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>{renderItems(item)}</div>
      ))}
    </div>
  );
}
