# Руководство по запуску проекта
## Начало работы

1) На первом шаге мы выкачиваем репозиторий:

### `git clone https://github.com/matsi-work/test-react-unisender.git`

2) Потом необходимо установить все зависимости, для это переходим в корень нашего проекта и делаем:

**Пакетный менеджер зависит от вас, я предпочитаю с реактом yarn**

### `npm install` или `yarn install`

3) Теперь все готово к запуску, можно использовать команду:

### `npm start` или `yarn start`

## Описание проекта

Для этого тестового задания, я использовал **Flat Split** т.к. компонентов почти нету и это удобно. В каждом компоненте я использую точку входа это файл **index.ts**, мы так делаем на проектах и это удобно при импортах. По стилям требований не было, не стал использовать препроцессор, добавил для каждого компонента ***.css** и дополнил свою стилизации. В помощь с верткой я использовал библиотеку **material-ui**. В проекте присутствует утилита, там находится функция **getDateFormat** - которая меняет вид даты. 

Про **redux**, его я не стал использовать тут, я как разработчик всегда забочусь о производительности и не стал нагружать это приложение лишними библиотеками. Вообще я думал делать задание на **preact**, но из-за требований именно к **react** отказался от этого решения. В директории **api** вы найдете кастомный хук, с помощью которого я обращаюсь к **github api**. Там же и мой **условный стор** для приложения. Принцип тот же, просто редьюсер, экшены и стейт находятся в одном файле. Также обернул компоненты в **React.memo**.

Мне нравится использовать в своей работе **TypeScript**, поэтому для типизации приложения я его тут применил.

## Про сложности

Проект не смог запуститься **Stackblitz** т.к. он упорно искал точку входа в виде файла **index.js**, а он у меня **index.tsx**

Также мне было необходимо чтобы приложение открывалось с урлом [http://localhost:3000/page/1](http://localhost:3000/page/1), т.к. пагинация уже активирована на первой странице, можно конечно использовать **homepage** в **package.json** для установки домашней страницы, но тогда возникает проблема шаринга приложения в других сервисах. Я использовал компонент **redirect**. Мне интересно как это вы делаете.
