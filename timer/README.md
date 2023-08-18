Название проекта: #Count

Краткое описание: Данный учебный проект является счетчиком отсчета определенного количества  времени  до нуля
Первым арг передаем функцию завершения,объявляем хук и передаем в функцию количеств секунд 
сосотояние отображает секунды
существуте функция отсчета отнимает одну секунду
так же функция запуска таймера раз в секунду
таймер не пойдет в минус  и выполнится onDone вернется идентификатор
Так же выполняем функцию сброса для того что бы не запускалось куча таймеров а сбрасывался и запускался только один
меняем undefined на пустой объект и контолируем выполнение useEffect обратный отсчет при первом монтирвании запускается рантаймер 
если меняется колво секунд срабатывает юзэффект. Так же происходит выполение рендера из-за пустого объекта возвращаем колво секунд
и сбрасываем таймер 
Далее выполнется функция onDone пишет в консоль что таймер завершон
Затем получаем данные из хука 


Прект собран с использованием Java script, React, проект был загружен с помощью [Create React App]

Для пользования проектом необходимо запустить его в браузере с помощью VS Code с использованием команды в терминале npm start


Project Name: #Count

Brief description: This training project is a counter for counting a certain amount of time to zero
The first arg we pass the completion function, declare the hook and pass to the function of the number of seconds
, the count displays the seconds
, the countdown function takes one second
, the timer start function once a second
, the timer will not go into negative and will be executed onDone, the identifier will return
We also perform the reset function so that a bunch of timers are not started, but only one is reset and started
, we change undefined to an empty object and control the execution of useEffect countdown at the first mounting, the runtimer is started 
if the number of seconds changes, the user effect is triggered. The render is also executed due to an empty object, we return the number of seconds
and reset the timer 
Next, the onDone function is executed, writes to the console that the timer is completed
Then we get the data from the hook 


The project was built using Java script, React, the project was loaded using VS Code using the command in the npm start terminal
