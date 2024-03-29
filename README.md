# Practical task: CAT

Live demo - https://kuscoder.github.io/task-cat/
#

**В паре абзацев опишите:**  
* **A**. какие вы использовали:  
   1. хорошие практики написания кода  
   2. как достигли масштабируемости  
   3. что сделали для увеличения надежности  
   4. какие применили вспомогательные утилиты, библиотеки и технологии . любые другие техники  
* **B**. сколько времени вы затратили на задачу  
* **C**. какие впечатления вы получили от выполнения задания  
  
**Ответы:**  
* **A**.   
  1. Для поддержания чистого кода в проекте, я использовал такие практики как: группировка кода на блоки, принцип DRY (Dont Repeat Yourself), избегание глубокой вложенности кода и архитектуры проекта, а также использование Prettier для обеспечения единого стиля форматирования. Я также старался писать модульный код, чтобы упростить его поддержку тестирование и обновление.  
  2. Масштабируемость проекта была достигнута благодаря использованию модульной архитектуры и следованию принципам SOLID. Я старался изначально проектировать структуру проекта таким образом, чтобы его можно было легко масштабировать в будущем. Например, основные стили приложения были разделены на отдельные конфигурационные файлы, такие как цвета, шрифты, вспомогательные классы и сброс стилей браузера по умолчанию. Это позволяет легко добавлять или изменять стили определенных элементов в проекте в одном месте. Такой подход обеспечивает гибкость и расширяемость проекта, что является ключевыми факторами для успешного масштабирования.  
  3. Для повышения надежности проекта в частности, были использованы препроцессоры, такие как SASS и CSS Modules, которые позволяют разработчикам избегать конфликтов именования классов и обеспечивают более чистый и структурированный код. Кроме того, в проект был интегрирован TypeScript, который исключает большинство ошибок на этапе компиляции проекта. Для статического анализа кода были применены инструменты, такие как ESLint и его плагины, которые помогают выявлять и исправлять ошибки в коде. Также был использован Babel, который позволяет проекту работать одинаково в разных браузерах.  
  4. Из вспомогательных библиотек я использовал: axios для отправки api запросов, react-router-dom для возможности добавления мультистраничности в проект, и react-transition-group для работы с анимациями. Все эти библиотеки тонко настраиваются, и чаще всего их можно встретить в любом проекте.  
* **B**. На разработку проекта было затрачено 6-8 часов чистого времени. Больше всего времени заняла ручная настройка webpack.  
* **C**. Мне понравилось работать над проектом. Очень приятно иногда отвлечься на какой-то небольшой проект и поработать над ним с удовольствием. Но, несмотря на кажущуюся простоту тех-задания, я все же подчерпнул для себя новые знания, в частности я говорю о тонкостях работы с webpack.  

Практическое задание: https://disk.yandex.ru/i/8Q0GebkGJ8i2AA
