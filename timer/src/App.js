import { useEffect, useState } from "react";

const useCountdown = (onDone, initialSeconds) =>{    //  первым арг передаем функцию завершения,объявляем хук и передаем в функцию количеств секунд 
    const [seconds, setSeconds] = useState (initialSeconds);   // сосотояние отображает секунды
    const [timeout, _setTimeout] = useState();
    const [render, rerender] = useState(); //происходит undefined

    const countDown = () => {             //функция отсчета отнимает одну секунду
        setSeconds((prev) => prev - 1)
    };


    const runTimer = () => {      // функция запуска таймера раз в секунду
      if (seconds === 0) return onDone() // таймер не пойдет в минус  и выполнится onDone
        const timer = setTimeout(() =>{               // возвращает идентификатор 
          countDown ();
        },1000);
        _setTimeout(timer);    //присвоили сеттаймауту конст тимер 
    };

    const reset = () => { 
      setSeconds(initialSeconds) // функция сброса
      clearTimeout(timeout) // для того что бы не запускалось куча таймеров а сбрасывался и запускался только один
      rerender({}) // меняем undefined на пустой объект и контолируем выполнение useEffect
    };

    useEffect (() => {
      runTimer()
    },[seconds, render]);      // обратный отсчет при первом монтирвании запускается рантаймер если м еняется колво секунд срабатывает юзэффект. Так же происходит выполение рендера из-за пустого объекта
  
  return {seconds, reset}; // возвращаем колво секунд и сбрасываем таймер 
};




export default function App() {
  const onDone = () => console.log("Timer counted done"); // функция пишет в консоль что таймер завершон
  const {seconds, reset} = useCountdown(onDone,4); // получаем данные из хука 

  return (
    <div> 
      <h1>{seconds}</h1>                
      <button onClick={reset}>reset</button>   
    </div>
  );
}
