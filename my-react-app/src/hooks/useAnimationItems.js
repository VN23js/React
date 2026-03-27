import { useDispatch, useSelector } from 'react-redux';
import { closeWinModal } from '../redux/caseSlice';

export default function useRoulette(trackRef) {
  const dispatch = useDispatch();
  const { itemsrulet } = useSelector((state) => state.case);
  const animateToIndex = (targetIndex) => {
    return new Promise((res) => {
      const track = trackRef.current;
      if (!track) return;
      const items = itemsrulet.length; //38
      const size = 150;
      const spins = 5;
      // 5*35=175 выбрали середину
      // 175*150=26250 px
      // 28*150=4200px
      // 26250+4200=30450
      const offset = spins * items * size + targetIndex * size - 90;
      console.log(offset);
      // Немного не доезжаем до победителя
      const overshootOffset = spins * items * size + targetIndex * size + 30;
      // Финальная позиция — точно на победителе
      const finalOffset = spins * items * size + targetIndex * size;

      // 1. Разгон и прокрутка
      track.style.transition = 'transform 4s cubic-bezier(0.1, 0, 0.2, 1)';
      track.style.transform = `translateX(-${overshootOffset}px)`;

      // 2. Небольшой отскок назад
      setTimeout(() => {
        track.style.transition =
          'transform 0.4s cubic-bezier(0.34, 1.2, 0.64, 1)';
        track.style.transform = `translateX(-${finalOffset - 20}px)`;
      }, 4000);

      // 3. Точная остановка
      setTimeout(() => {
        track.style.transition =
          'transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)';
        track.style.transform = `translateX(-${finalOffset}px)`;
      }, 4400);

      setTimeout(() => res(), 4500);
    });
  };
  const resetPostion = () => {
    const track = document.getElementById('track');
    track.style.transition = 'none';
    //  track.style.transform = `translateX(${-300}px)`;
    track.style.transform = `translateX(${-4500}px)`;
    dispatch(closeWinModal());
  };
  const againOpenCase = () => {
    track.style.transition = 'none';
    // track.style.transform = `translateX(${-300}px)`;
    track.style.transform = `translateX(${-4500}px)`;
    dispatch(closeWinModal());
  };
  return { animateToIndex, resetPostion, againOpenCase };
}
