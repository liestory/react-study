export default [
    {
        "id": "61603b4ac8e590632109aef1",
        "idMemberCreator": "5cd1493c019da08f070525fb",
        "data": {
            "text": "@stanislavpavenko добрый вечер\nДомашнее задание (на минимальную оценку):\n\n## Задание 1\n\n>1: Посмотреть видео ролик и добавить решение в комментарии ссылку на stackblitz.com и картинку запущенного решения. https://www.youtube.com/embed/5X5ZLWdAnt4\n\nреализация перехода по ссылка внутри приложения через Route\nссылка на StackBlitz: https://stackblitz.com/github/liestory/react-study/tree/feature/L5_P1_Q1\nссылка на GitHub: https://github.com/liestory/react-study/tree/feature/L5_P1_Q1\n\n---\n\n## Задание 7\n\n>7: Самостоятельно найдите ответ на вопрос и добавьте ответ комментарием к карточке. **Ссылки меняют только URL, а не фактический компонент, отображаемый на странице что можно сделать?**\n\nПрописать в Route, что при изменении path в ссылке, будет отрисовываться нужны компонент.\n\n---\n\n## Задание 8\n\n>8: Самостоятельно найдите ответ на вопрос и добавьте ответ комментарием к карточке. **Что такое блокировка переходов в истории api для React Router?**\n\nПредотвращение переходной по ссылкам строго по правилам. При такой конфигуации не будет переход без подтверждения пользователя через браузер\n\n---\n\n## Задание 9\n\n>9: Самостоятельно найдите ответ на вопрос и добавьте ответ комментарием к карточке. **Приведите пример как получить параметры запроса и параметры контекстов в react-router-dom.**\n\n`<Route`\n `     render={({ staticContext }) => {`\n`        // we have to check if staticContext exists`\n `       // because it will be undefined if rendered through a BrowserRouter`\n`        if (staticContext) {`\n`          staticContext.statusCode = props.statusCode;`\n `       }`\n `       return <div>{props.children}</div>;`\n `     }}`\n `   />`\n\n\n---\n\n## Задание 10\n\n>10: Самостоятельно найдите ответ на вопрос и добавьте ответ комментарием к карточке. **Что такое window.performance.navigation.type и как после F5 загрузить нужную страницу?**\n\n performance.navigation.type используется для анализа того, как ваш сайт и его ресурсы загружаются в зависимости от поведения пользователей.\nЧтобы вернуть нужную нам страницу надо отловить значение performance.navigation.type === 1 и сделать загрузку нужного path",
            "textData": {
                "emoji": {}
            },
            "card": {
                "id": "6145d3a4912fdc72462abfba",
                "name": "Маршрутизация",
                "idShort": 12,
                "shortLink": "KripNzGy"
            },
        }
    },
    {
        "id": "6160226efe1e0e68ecdcea14",
        "idMemberCreator": "5cd1493c019da08f070525fb",
        "data": {
            "text": "@stanislavpavenko добрый вечер\nДомашнее задание:\n\n## Задание 6\n\n>6: Посмотреть и кратко описать в карточке сюжет видео ролика и добавить в комментарии внешнюю ссылку с пользователями. Перепишите пример с видео и добавьте ссылку в комментариях. https://www.youtube.com/embed/auAtFC5nfTs\n\nпример использования componentDidMount для получения данных с сервера.\nссылка на StackBlitz: https://stackblitz.com/github/liestory/react-study/tree/feature/L3_P2_Q6\nссылка на GitHub: https://github.com/liestory/react-study/tree/feature/L3_P2_Q6\n\n-----\n\n## Задание 7\n\n>7: Посмотреть и кратко описать в карточке сюжет видео ролика. Перепишите пример с видео и добавьте ссылку в комментариях. https://www.youtube.com/embed/bMApsb0FpFE\n\nЧерез логирования показаны когда вызываются и какие методы жизненного цикла копонента\nссылка на StackBlitz: https://stackblitz.com/github/liestory/react-study/tree/feature/L3_P2_Q7\nссылка на GitHub: https://github.com/liestory/react-study/tree/feature/L3_P2_Q7\n\n-----\n\n## Задание 8\n\n>8: Посмотреть и кратко описать в карточке сюжет видео ролика. Перепишите пример с видео и добавьте ссылку в комментариях. https://www.youtube.com/embed/4xjWX3oRQoc\n\nconstructor, getDerivedStateFromProps, componentDidMount и render через логирование\nссылка на StackBlitz: https://stackblitz.com/github/liestory/react-study/tree/feature/L3_P2_Q8\nссылка на GitHub: https://github.com/liestory/react-study/tree/feature/L3_P2_Q8",
            "textData": {
                "emoji": {}
            },
            "card": {
                "id": "613300c65841357ac707a65f",
                "name": "Жизненный цикл компонента",
                "idShort": 6,
                "shortLink": "3VvAC5Xb"
            },
        }
    },
    {
        "id": "615f24e14df663293fe3af3a",
        "idMemberCreator": "5cd1493c019da08f070525fb",
        "data": {
            "text": "@stanislavpavenko добрый вечер\nДомашнее задание (на минимальную оценку):\n\n## Задание 2\n\n>2: Посмотреть и кратко описать в карточке сюжет видео ролика. Перепишите пример с видео и добавьте ссылку в комментариях. https://www.youtube.com/embed/qdaDgC_xU0w\n\nОбновил проект:\nссылка на StackBlitz: https://stackblitz.com/github/liestory/react-study/tree/feature/L4_P2_Q2\nссылка на GitHub: https://github.com/liestory/react-study/tree/feature/L4_P2_Q2\n\n----\n\n## Задание 3\n\n>3: Посмотреть и кратко описать в карточке сюжет видео ролика. Перепишите пример с видео и добавьте ссылку в комментариях. https://www.youtube.com/embed/a2DkRBnp4ns\n\nОбновил проект:\nссылка на StackBlitz: https://stackblitz.com/github/liestory/react-study/tree/feature/L4_P2_Q3\nссылка на GitHub: https://github.com/liestory/react-study/tree/feature/L4_P2_Q3\n\n----\n\n## Задание 7\n\n>7: Выполнить задание и добавьте ссылку в комментариях. Полицейский радар скорости, который сообщает о том, превышена ли скорость или нет.\n\nссылка на StackBlitz: https://stackblitz.com/github/liestory/react-study/tree/feature/L4_P2_Q7\nссылка на GitHub: https://github.com/liestory/react-study/tree/feature/L4_P2_Q7\n",
            "textData": {
                "emoji": {}
            },
            "card": {
                "id": "613c80f8f870c80ab2df47dc",
                "name": "Подъём состояния. Композиция компонентов",
                "idShort": 9,
                "shortLink": "yf54qyUP"
            },
        }
    },
    {
        "id": "615f189d6b2aaf0ed0c42274",
        "idMemberCreator": "5cd1493c019da08f070525fb",
        "data": {
            "text": "@stanislavpavenko  добрый вечер\nДомашнее задание (на минимальную оценку по данной карточке(:\n\n## Задание 4\n\n>4: Изучить понятие [Refs](https://ru.reactjs.org/docs/refs-and-the-dom.html) и дать определение термину: React.createRef\n\nReact.createRef() -  создание реф для будущего прикрепления React-элементам через ref атрибут.\nСитуации, в которых использование рефов является оправданным:\n-Управление фокусом, выделение текста или воспроизведение медиа.\n-Императивный вызов анимаций.\n-Интеграция со сторонними DOM-библиотеками.\n\n---\n\n## Задание 6\n\n>6: Изучить понятие [перенаправления refs](https://ru.reactjs.org/docs/forwarding-refs.html) и дать определение термину: React.forwardRef\n\nПеренаправление рефов позволяет взять ref из атрибутов компонента, и передать его дочерним компонентам. Для этого используется React.forwardRef\n\n---\n\n## Задание 10\n\n>10: Написать новое приложение и добавить код с картинкой и ссылкой на приложение из stackblitz.com. Требования к форме. Поля ввода: Фамилия, Имя, Отчество, Дата рождения, Телефон, E-mail. Добавить кнопку \"Отправить\". Функционал кнопки отправка данных по адресу POST: https://jsonplaceholder.typicode.com/posts Требования к запросу: по нажатию \"Отправить\" заблокировать изменение полей, после ответа с сервера поменять все поля ввода на текстовые поля. Валидация полей: Фамилия - \"Не более 50 символа\",Имя - \"Не более 31 символа\", Отчество - \"Не более 31 символа\", Дата рождения - в формате \"dd.MM.yyyy\", Телефон-\"Маска “+7(NNN) NNN NN NN”, где N – любая цифра\", E-mail - \"валидация email\". Все поля обязательны, кроме E-mail\n\nпример создания приложения с помощью redux по паттерну Flux\nссылка на StackBlitz: https://stackblitz.com/github/liestory/react-study/tree/feature/L6_P1_Q10\nссылка на GitHub: https://github.com/liestory/react-study/tree/feature/L6_P1_Q10",
            "textData": {
                "emoji": {}
            },
            "card": {
                "id": "6145d2ae8160c445c924e2ae",
                "name": "HOC. Refs. Контекст. Формы. Валидация.",
                "idShort": 11,
                "shortLink": "5IilupDt"
            },
        }
    },
    {
        "id": "615ef6e738262b3e501ab33b",
        "idMemberCreator": "5cd1493c019da08f070525fb",
        "data": {
            "text": "@stanislavpavenko добрый вечер\nДомашнее задание:\n\n## Задание 1\n\n>1: Посмотреть и кратко описать в карточке сюжет видео ролика. Перепишите пример с видео и добавьте ссылку в комментариях. https://www.youtube.com/embed/l4tKCCGUeMo\n\nпример создания приложения с помощью redux по паттерну Flux\nссылка на StackBlitz: https://stackblitz.com/github/liestory/react-study/tree/feature/L6_P2_Q1\nссылка на GitHub: https://github.com/liestory/react-study/tree/feature/L6_P2_Q1\n\n-----\n\n## Задание 2\n\n>2: Посмотреть и своими словами описать что такое: Reducer, Actions, Action Creators, Store,  описать в карточке сюжет видео ролика. Перепишите пример с видео и добавьте ссылку в комментариях. https://www.youtube.com/embed/WLVjYRBoDgU?list=PLqHlAwsJRxANFIgAf7BO8hNYdvipLERxQ\n\nReducer - читая функция которая в зависимости от входящего action.type возвращает нужное значение из Store\nActions - функции содержащие в себе значения type и дополнительную полезную нагрузку, чаще всего payLoad. Являются значение для Reducer\nAction Creators - вызовы Actions внутри Reducer\nStore - хранилище состояний объектов в приложении со своей логикой обновления, получения и удаления.\nссылка на StackBlitz: https://stackblitz.com/github/liestory/react-study/tree/feature/L6_P2_Q2\nссылка на GitHub: https://github.com/liestory/react-study/tree/feature/L6_P2_Q2\n\n-----\n\n## Задание 3\n\n>3: изучить материал на странице и кратко пересказать для чего нужен хук useDebugValue(value) https://ru.reactjs.org/docs/hooks-reference.html#usedebugvalue\n\n`useDebugValue` может использоваться для отображения метки для пользовательских хуков в React DevTools. Принимает любое значение, которое мы хотим отобразить. Необходимо для отладки Хуков\n\n-----\n\n## Задание 4\n\n>4: Посмотреть и кратко пересказать в карточке для чего нужен хук `const [state, dispatch] = useReducer(reducer, initialArg, init);`. Перепишите пример с видео и добавьте ссылку в комментариях. https://www.youtube.com/embed/l4tKCCGUeMo\n\nuseReducer -  Принимает редюсер типа (state, action) => newState и возвращает текущее состояние в паре с методом dispatch.Мы  передать начальное состояние в качестве второго аргумента initialArg и функцию init для реализации начального состоянии в качестве третьего аргумента\n\nссылка на StackBlitz: https://stackblitz.com/github/liestory/react-study/tree/feature/L6_P2_Q4\nссылка на GitHub: https://github.com/liestory/react-study/tree/feature/L6_P2_Q4\n\n-----\n\n## Задание 5\n\n>5: Посмотреть и кратко пересказать в карточке для чего нужен хук `const memoizedCallback = useCallback(   () => {     doSomething(a, b);   },   [a, b], );`. объяснить на примере что такое [мемозолированный колбэк](https://vrogov-exceedteam.gitbook.io/react-hooks-redux/react/osnovy/khuk-kollbeka-usecallback). Перепишите пример с видео и добавьте ссылку в комментариях. https://www.youtube.com/embed/F8EvdTsl6hU\n\nuseCallback - возвращает мемоизированный колбэк. Хук useCallback вернёт мемоизированную версию колбэка, который изменяется только, если изменяются значения одной из зависимостей. \nuseCallback(fn, deps) — это эквивалент useMemo(() => fn, deps).\n\nссылка на StackBlitz: https://stackblitz.com/github/liestory/react-study/tree/feature/L6_P2_Q5\nссылка на GitHub: https://github.com/liestory/react-study/tree/feature/L6_P2_Q5\n\n-----\n\n## Задание 6\n\n>6: Посмотреть и кратко пересказать в карточке для чего предназначен хук `const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);`. Объяснить [понятие хука](https://vrogov-exceedteam.gitbook.io/react-hooks-redux/react/chto-dalshe/khuk-memoizirovannogo-znacheniya-usememo) применение на примере. Перепишите пример с видео и добавьте ссылку в комментариях. https://www.youtube.com/embed/bm7wyCDJ7H8\n\nПередайте  функцию и массив зависимостей. useMemo будет повторно вычислять мемоизированное значение только тогда, когда значение какой-либо из зависимостей изменилось. Эта оптимизация помогает избежать дорогостоящих вычислений при каждом рендере.\nЕсли массив не был передан, новое значение будет вычисляться при каждом рендере.\n\nссылка на StackBlitz: https://stackblitz.com/github/liestory/react-study/tree/feature/L6_P2_Q6\nссылка на GitHub: https://github.com/liestory/react-study/tree/feature/L6_P2_Q6\n\n-----\n\n## Задание 7\n\n>7: Посмотреть видео и рассказать на примере как создавать и зачем нужны [кастомные хуки](https://vrogov-exceedteam.gitbook.io/react-hooks-redux/react/sozdanie-sobstvennykh-khukov): https://www.youtube.com/embed/BGKbJ2aXCog\n\nКастомый хук - функция начинается с ”use” и она вызывает другие хуки и должно что-то возращаться. Нужно это чтобы использовать повторяющуюся логику состояния в нескольких компонентах.\nПример\n`const useInput = (initValue) => {`\n `   const [value, setValue] = useState(initValue);`\n `   `\n`    ..`\n `   `\n `   return{\n      value,\n        ..\n    }\n}`",
            "textData": {
                "emoji": {}
            },
            "card": {
                "id": "614f1f75786ae6644bd3cd77",
                "name": "Введение в Flux и Redux. Дополнительные хуки React",
                "idShort": 14,
                "shortLink": "5779c62O"
            },
        }
    },
    {
        "id": "614e24b16fe7170d011938b6",
        "idMemberCreator": "5cd1493c019da08f070525fb",
        "data": {
            "text": "@stanislavpavenko добрый вечер\nДомашнее задание:\n\n## Задание 1\n\n>1: Посмотреть и кратко описать в карточке сюжет видео ролика. Перепишите пример с видео и добавьте ссылку в комментариях. https://www.youtube.com/embed/dENUw979QiY\n\nссылка на StackBlitz: https://stackblitz.com/github/liestory/react-study/tree/feature/L4_P2_Q1\nссылка на GitHub: https://github.com/liestory/react-study/tree/feature/L4_P2_Q1\n\n----\n\n## Задание 2\n\n>2: Посмотреть и кратко описать в карточке сюжет видео ролика. Перепишите пример с видео и добавьте ссылку в комментариях. https://www.youtube.com/embed/qdaDgC_xU0w\n\nпроцесс обновления состояний через пропсы\nссылка на StackBlitz: https://stackblitz.com/github/liestory/react-study/tree/feature/L4_P2_Q2\nссылка на GitHub: https://github.com/liestory/react-study/tree/feature/L4_P2_Q2\n\n----\n\n## Задание 3\n\n>3: Посмотреть и кратко описать в карточке сюжет видео ролика. Перепишите пример с видео и добавьте ссылку в комментариях. https://www.youtube.com/embed/a2DkRBnp4ns\n\nкак правильно обновлять state\nссылка на StackBlitz: https://stackblitz.com/github/liestory/react-study/tree/feature/L4_P2_Q3\nссылка на GitHub: https://github.com/liestory/react-study/tree/feature/L4_P2_Q3",
            "textData": {
                "emoji": {}
            },
            "card": {
                "id": "613c80f8f870c80ab2df47dc",
                "name": "Подъём состояния. Композиция компонентов",
                "idShort": 9,
                "shortLink": "yf54qyUP"
            },
        }
    },
    {
        "id": "6144f248a279184c6d1d09b2",
        "idMemberCreator": "5cd1493c019da08f070525fb",
        "data": {
            "text": "@stanislavpavenko добрый вечер\nДомашнее задание:\n\n## Задание 1\n\n>1: Посмотреть и кратко описать в карточке сюжет видео ролика. Перепишите пример с видео и добавьте ссылку в комментариях. https://www.youtube.com/embed/LeysYaa8iW4\n\nРабота с массивами (удаление элемента, добавление элемента, обновление элемента). Вывод массива на страницу\nссылка на StackBlitz: https://stackblitz.com/github/liestory/react-study/tree/feature/L4_P1_Q1\nссылка на GitHub: https://github.com/liestory/react-study/tree/feature/L4_P1_Q1\n\n---\n\n## Задание 2\n\n>2. Выполнить задание \"Список задач\" Пусть в стейте дан массив: ['тестовое задание 1']. Выведите каждый элемент этого массива в отдельной <li> в списке ul.  Под списком кнопка, по нажатию на которую в конец списка будет добавляться элемент с текстом 'из поля ввода'. Добавьте кнопочку, по нажатию на которую каждый раз будет исчезать последняя li из списка (каждый раз по одной, пока li в списке не закончатся). Рядом с каждым именем добавить кнопочку, по нажатию на которую li с этим именем будет зачёркиваться запись.  Ссылку на пример добавить в комментарии.\n\nссылка на StackBlitz: https://stackblitz.com/github/liestory/react-study/tree/feature/L4_P1_Q2\nссылка на GitHub: https://github.com/liestory/react-study/tree/feature/L4_P1_Q2",
            "textData": {
                "emoji": {}
            },
            "card": {
                "id": "613c80a2df8fea284dfed6d6",
                "name": "Списки и ключи",
                "idShort": 8,
                "shortLink": "p6yZcghN"
            },
        }
    },
    {
        "id": "6144d453f0b97715e2b2965e",
        "idMemberCreator": "5cd1493c019da08f070525fb",
        "data": {
            "text": "@stanislavpavenko добрый вечер\nДомашнее задание:\n\n## Задание 3\n\n>3: Посмотреть и кратко описать в карточке сюжет видео ролика. Перепишите пример с видео и добавьте ссылку в комментариях. https://www.youtube.com/embed/m_mtV4YaI8c\n\nпоказаны все жизненные циклы компонентов через условия, ошибки, как ими пользоваться и для чего они нужны\nссылка на StackBlitz: https://stackblitz.com/github/liestory/react-study/tree/feature/L3_P2_Q3\nссылка на GitHub: https://github.com/liestory/react-study/tree/feature/L3_P2_Q3\n\n-----\n\n## Задание 4\n\n>4: Посмотреть и кратко описать в карточке сюжет видео ролика. Перепишите пример с видео и добавьте ссылку в комментариях. https://www.youtube.com/embed/enpVbjOSLpQ\n\nсоздание часов через изменения приходящие из метода `componentDidMount` \nссылка на StackBlitz: https://stackblitz.com/github/liestory/react-study/tree/feature/L3_P2_Q4\nссылка на GitHub: https://github.com/liestory/react-study/tree/feature/L3_P2_Q4\n\n-----\n\n## Задание 5\n\n>5: Посмотреть и кратко описать в карточке сюжет видео ролика. Перепишите пример с видео и добавьте ссылку в комментариях. https://www.youtube.com/embed/i2NE0cbuQa4\n\nДемонстрация жизненных компонентов через создания страницы с новостями.\nссылка на StackBlitz: https://stackblitz.com/github/liestory/react-study/tree/feature/L3_P2_Q5\nссылка на GitHub: https://github.com/liestory/react-study/tree/feature/L3_P2_Q5\n\n",
            "textData": {
                "emoji": {}
            },
            "card": {
                "id": "613300c65841357ac707a65f",
                "name": "Жизненный цикл компонента",
                "idShort": 6,
                "shortLink": "3VvAC5Xb"
            },
        },
    },
    {
        "id": "613c49409c60e03288145e3e",
        "idMemberCreator": "5cd1493c019da08f070525fb",
        "data": {
            "text": "@stanislavpavenko добрый вечер\nДомашнее задание:\n\n## Задание 1\n\n>1: Посмотреть и кратко описать в карточке сюжет видео ролика. Перепишите пример с видео и добавьте ссылку в комментариях. https://www.youtube.com/embed/ty2ApOkMRws\n\nПоказаны жизненные циклы компонента и ООП подходе и функциональном.\nссылка на StackBlitz: https://stackblitz.com/github/liestory/react-study/tree/feature/L3_P2_Q1\nссылка на GitHub: https://github.com/liestory/react-study/tree/feature/L3_P2_Q1\n\n----\n## Задание 2\n\n>2: Посмотреть и кратко описать в карточке сюжет видео ролика. Перепишите пример с видео и добавьте ссылку в комментариях. https://www.youtube.com/embed/CHFD45QYtI8\n\nНаглядное пособие, как на основе схемы жизни компонентов использовать это в коде и когда.\nссылка на StackBlitz: https://stackblitz.com/github/liestory/react-study/tree/feature/L3_P2_Q2\nссылка на GitHub: https://github.com/liestory/react-study/tree/feature/L3_P2_Q2\n",
            "textData": {
                "emoji": {}
            },
            "card": {
                "id": "613300c65841357ac707a65f",
                "name": "Жизненный цикл компонента",
                "idShort": 6,
                "shortLink": "3VvAC5Xb"
            },
        },
    },

    {
        "id": "613bf197bdd1887b7ab93fd0",
        "idMemberCreator": "5cd1493c019da08f070525fb",
        "data": {
            "text": "@stanislavpavenko добрый вечер\nДомашнее задание:\n\n## Задание 1\n\n>1: Посмотреть и кратко описать в карточке сюжет видео ролика. Перепишите пример с видео и добавьте ссылку в комментариях. https://www.youtube.com/embed/RfHw3oQRbgg\n\nВывод на страницу элементов в зависимости от условий.\nссылка на StackBlitz: https://stackblitz.com/github/liestory/react-study/tree/feature/L3_P1_Q1\nссылка на GitHub: https://github.com/liestory/react-study/tree/feature/L3_P1_Q1\n\n----\n## Задание 2\n\n>2: Посмотреть и кратко описать в карточке сюжет видео ролика. Перепишите пример с видео и добавьте ссылку в комментариях. https://www.youtube.com/embed/hZcKg7c7lbQ\n\nВсе виды условий и все виды примеров этих условий на основе времен года\nссылка на StackBlitz: https://stackblitz.com/github/liestory/react-study/tree/feature/L3_P1_Q2\nссылка на GitHub: https://github.com/liestory/react-study/tree/feature/L3_P1_Q2\n\n----\n## Задание 3\n\n>3: Посмотреть и кратко описать в карточке сюжет видео ролика. Перепишите пример с видео и добавьте ссылку в комментариях. https://www.youtube.com/embed/hzB0CvJANn8\n\nВывод на страницу элементов в зависимости от условий полностью в функциональном стиле\nссылка на StackBlitz: https://stackblitz.com/github/liestory/react-study/tree/feature/L3_P1_Q3\nссылка на GitHub: https://github.com/liestory/react-study/tree/feature/L3_P1_Q3",
            "textData": {
                "emoji": {}
            },
            "card": {
                "id": "61330e6ea993c089f1e3b522",
                "name": "Управление ресурсами. Условный рендеринг",
                "idShort": 7,
                "shortLink": "7iVuqWko"
            },
        }
    },

    {
        "id": "613bd96a94a3657ceca4c639",
        "idMemberCreator": "5cd1493c019da08f070525fb",
        "data": {
            "text": "@stanislavpavenko Добрый день.\n\nПрикладываю домашнее задание:\n\n\n##Задание 1\n\n>Задание 1: Посмотреть и кратко описать в карточке сюжет видео ролика. Что вам понравилось? А что хотелось бы улучшить в рассказе?  Перепишите пример с видео и добавьте ссылку в комментариях. https://www.youtube.com/embed/Q7FkSWMf2Qo\n\nХорошо показана работа `state` через счетчик. \nНе хватает показа работы через стрелочные функции вместо `bind` и не рассказана разница\nссылка на StackBlitz: https://stackblitz.com/github/liestory/react-study/tree/feature/L2_P2_Q1\nссылка на GitHub: https://github.com/liestory/react-study/tree/feature/L2_P2_Q1\n\n----\n\n##Задание 2\n\n>Задание 2 Посмотреть и кратко описать в карточке сюжет видео ролика. Кто читал видео (кампания, лектор)? Добавьте ссылку на github профиля лектора. Перепишите пример с видео и добавьте ссылку в комментариях.  https://www.youtube.com/embed/yzxE3M_xx3w\n\nВ ролике показано, как обрабатывать события на примере кнопок через функциональный стиль написания и через классовый.\nЛектора зовут Алексей Данчин, школа ConstCode. Ссылка на лектора в GitHub: https://github.com/Aleksey-Danchin/react-youtube-tutorial/tree/day_07\n\nссылка на StackBlitz: https://stackblitz.com/github/liestory/react-study/tree/feature/L2_P2_Q2\nссылка на GitHub: https://github.com/liestory/react-study/tree/feature/L2_P2_Q2\n\n----\n\n##Задание 3\n\n>Задание 3: Посмотреть и кратко описать в карточке о чём это видео. Перепишите пример с видео и добавьте ссылку в комментариях. https://www.youtube.com/embed/qqeKBHnRR6A\n\nХорошо объяснена реализация перерендера компонента  при обновлении `state` и как бы это выглядело в чистом js. Объяснены примеры использования при функциональном компоненте и классовом\n\nссылка на StackBlitz: https://stackblitz.com/github/liestory/react-study/tree/feature/L2_P2_Q3\nссылка на GitHub: https://github.com/liestory/react-study/tree/feature/L2_P2_Q3\n\n----\n\n##Задание 4\n\n>Задание 4: Посмотреть и кратко описать в карточке о чём это видео. https://www.youtube.com/embed/7JNz14uTMTE\n\nОбработка событий, разница изменения state из event и state при этой обработке\n\n----\n\n##Задание 5\n\n>Задание 5: Посмотреть и кратко описать в карточке о чём это видео. Перепишите пример и добавьте ссылку в комментариях. Пусть в стейте хранится массив с характеристиками самоката. У каждого самоката есть наименование, остаток заряда и стоимость в час. Выведите все самокаты на экран с помощью цикла. Сделайте так, чтобы отображением самоката на экран занимался отдельный компонент. https://www.youtube.com/embed/isrKkL_54Eo\n\nВ видео показа пример изменения стиля в зависимости от евента  на странице\n\nссылка на StackBlitz: https://stackblitz.com/github/liestory/react-study/tree/feature/L2_P2_Q5\nссылка на GitHub: https://github.com/liestory/react-study/tree/feature/L2_P2_Q5\n\n----\n\n##Задание 6\n\n>Задание 6: Дан массив с работниками. У каждого работника есть имя, фамилия, количество отработанных дней и зарплатная ставка за день. Выведите этих работников на экран в виде таблицы. Сделайте так, чтобы в последней колонке автоматически рассчитывалась зарплата работника (количество отработанных дней умножить на ставку). Сделайте так, чтобы количество дней и ставка выводились в виде инпутов. Если поредактировать эти инпуты - зарплата также должна поменяться. Под таблицей также выведите суммарную зарплату всех работников.\n\n(в коде ошибка и я не могу избавиться от нее. Если решаю ошибку, `input` не получает никаких значений)\nссылка на StackBlitz: https://stackblitz.com/github/liestory/react-study/tree/feature/L2_P2_Q6\nссылка на GitHub: https://github.com/liestory/react-study/tree/feature/L2_P2_Q6\n\n----\n\n##Задание 7\n\n>Задание 7: Дан следующий стейт: this.state = {show: true, name: 'Иван'}; Изначально результат работы метода render следующий ('Иван' берется из this.state.name): <div><p>Привет, Иван!</p></div> Сделайте так, чтобы если this.state.show был равен true, то выводился текст 'Привет, Иван', а если равен false - то 'Пока, Иван'\n\nссылка на StackBlitz: https://stackblitz.com/github/liestory/react-study/tree/feature/L2_P2_Q7\nссылка на GitHub: https://github.com/liestory/react-study/tree/feature/L2_P2_Q7\n\n----\n\n##Задание 8\n\n>Задание 8: Дан массив языков ['html', 'css', 'js', 'php']. Выведите эти языки в виде списка <ul>.\n\nссылка на StackBlitz: https://stackblitz.com/github/liestory/react-study/tree/feature/L2_P2_Q8\nссылка на GitHub: https://github.com/liestory/react-study/tree/feature/L2_P2_Q8\n\n----\n\n##Задание 9\n\n>Задание 9: Дан массив с числами. Выведите эти числа каждое в своем <span> так, чтобы на выводе к каждому числу прибавлялось число 3.\n\nссылка на StackBlitz: https://stackblitz.com/github/liestory/react-study/tree/feature/L2_P2_Q9\nссылка на GitHub: https://github.com/liestory/react-study/tree/feature/L2_P2_Q9\n\n----\n\n##Задание 10\n\n>Задание 10: Реализуйте игру крестики-нолики. Играют два игрока, каждый ходит по очереди.\n\nссылка на StackBlitz: https://stackblitz.com/github/liestory/react-study/tree/feature/L2_P2_Q10\nссылка на GitHub: https://github.com/liestory/react-study/tree/feature/L2_P2_Q10",
            "textData": {
                "emoji": {}
            },
            "card": {
                "id": "612a9596e1f7a26498c318be",
                "name": "Обработка событий и состояние компонента",
                "idShort": 4,
                "shortLink": "VbJB1ywC"
            },
        }
    },
    {
        "id": "6132c217b6d1e22ebec31bd2",
        "idMemberCreator": "5cd1493c019da08f070525fb",
        "data": {
            "text": "@stanislavpavenko Добрый вечер.\n\nДомашнее задание:\n\n##Задание 1\n\n>Задание 1: Посмотреть и кратко описать в карточке сюжет видео ролика. Что вам понравилось? А что хотелось бы улучшить в рассказе? https://www.youtube.com/embed/IXXO2-xnI8U\n\nПонравился наглядный показ рендера через функцию `setInterval`\nНе понравилось, что очень расплывчато рассказано, что такое элемента, и что весь рендер идет за счет  `setInterval`, что противоречит концепции реакта\n\n----\n\n##Задание 1\n\n>Задание 1: Посмотреть и кратко описать в карточке сюжет видео ролика. Что вам понравилось? А что хотелось бы улучшить в рассказе? https://www.youtube.com/embed/rlTvbjScIKA\n\nПонравился практический рассказ и показ создания и использования компонентов. Хорошее описание, что такое state  и props\nНе понравилось, что, как и в уроке про элементы, слабое описание что такое компонент, и нет никакого внятного перехода от практики элемента к практике компонентов.\n\n----\n\n##Задание 2\n\n>Задание 2: Создать новое приложение React и добавьте ссылку на https://stackblitz.com/ в историю карточки. Приложение часы из примера в задании 1 с изменением раз в 30 секунд.\n\n\nссылка на StackBlitz: https://stackblitz.com/github/liestory/react-study/tree/feature/L2_P1_Q2\nссылка на GitHub: GitHub - https://github.com/liestory/react-study/tree/feature/L2_P1_Q2\n\n\n----\n\n##Задание 3\n\n>Задание 3: Посмотреть и кратко описать в карточке сюжет видео ролика. Что вам понравилось? А что хотелось бы улучшить в рассказе?https://www.youtube.com/embed/kv-T62uFJZg\n\nПонравилось, что все показано в онлайне. Доступно и понятно.\nНе понравилось, что лектор в основном занимался красотой сайта, когда должен был объяснять, что такое props и зачем, и как он заменяет входящие параметры с функции\n\n----\n\n##Задание 4\n\n>Задание 4: Создать новое приложение React и добавьте ссылку на https://stackblitz.com/ в историю карточки. Приложением блога из примера в задании 2. Тема новостей своя (путешествие, машины и тп.).\n\nссылка на StackBlitz: https://stackblitz.com/github/liestory/react-study/tree/feature/L2_P1_Q4\nссылка на GitHub: GitHub - https://github.com/liestory/react-study/tree/feature/L2_P1_Q4\n\n----\n\n##Задание 5\n\n>Задание 5: Посмотреть и кратко описать в карточке сюжет видео ролика. Что вам понравилось? А что хотелось бы улучшить в рассказе?https://www.youtube.com/embed/-z-OAVigStA\n\nНаглядно показан принцип отрисовки компонентов в зависимости от состояния state. Очень интересно и самая сильная функциональность у react\nПлохо подготовленный лектор и приходится искать на ходу. Я понимаю, что все мы люди, но обычно материал готовят очень тщательно\n\n----\n\n##Задание 6\n\n>Задание 6: Посмотрев пример в задании 5 создать новое приложение React и добавьте ссылку на https://stackblitz.com/ в историю карточки. Приложение должно отображать только одну статью по выбору из списка (в качестве альтернативы может быть выбор другой тематики например бенефит услуг ДМС: 🦷 зубы, 👀 глаза, сосуды, амбулаторное лечение и тп. по выбору отображается список услуг и клиник)\n\n\nссылка на StackBlitz: https://stackblitz.com/github/liestory/react-study/tree/feature/L2_P1_Q6\nссылка на GitHub: GitHub - https://github.com/liestory/react-study/tree/feature/L2_P1_Q6\n",
            "card": {
                "id": "612a941a5ed5ac3876f71d53",
                "name": "Рендеринг элементов. Компоненты и пропсы.",
                "idShort": 3,
                "shortLink": "fwFt98in"
            },
        }
    },
    {
        "id": "612991be5aba2a792e6c8bbe",
        "idMemberCreator": "5cd1493c019da08f070525fb",
        "data": {
            "text": "@stanislavpavenko Доброго времени суток \nДомашнее задание:\n\n## Задание 1\n\n>Задание 1: Изучить видео и кратко описать комментарием к карточке, что такое JSX: https://www.youtube.com/embed/v8q0e0bqJXk https://ru.reactjs.org/docs/introducing-jsx.html https://metanit.com/web/react/1.3.php\n\nJSX — расширение языка JavaScript необходимого для  скрытого использования функции  `React.createElement(component, props, ...children)` при вызове любого тега.\n\n------------\n\n## Задание 2\n\n>Задание 2: Создать новый проект с использованием react.js. Cоздать стандартную разметку HTML5.0. Добавить div с ИД. И создать приложение с использованием ReactDOM\n\nссылка на StackBlitz: https://stackblitz.com/github/liestory/react-study/tree/feature/L1_P2_Q2\nссылка на GitHub:  https://github.com/liestory/react-study/tree/feature/L1_P2_Q2\n\n\n------------\n\n## Задание 3\n\n>Задание 3: Создать новый проект с использованием react.js. Cоздать стандартную разметку HTML5.0. Добавить div с ИД. И создать приложение с использованием ReactDOM. Приложение вычисляющее сумму первых N натуральных чисел. https://ru.reactjs.org/docs/hello-world.html [Сумма  n  первых натуральных чисел](http://www.math24.ru/%D0%BA%D0%BE%D0%BD%D0%B5%D1%87%D0%BD%D1%8B%D0%B5-%D1%87%D0%B8%D1%81%D0%BB%D0%BE%D0%B2%D1%8B%D0%B5-%D1%80%D1%8F%D0%B4%D1%8B.html)\n\n\nссылка на StackBlitz: https://stackblitz.com/github/liestory/react-study/tree/feature/L1_P2_Q3\nссылка на GitHub: https://github.com/liestory/react-study/tree/feature/L1_P2_Q3\n\n------------\n\n## Задание 4\n\n>Задание 4: Изучить видео и кратко описать комментарием к карточке, что такое babel. И для чего используется: https://www.youtube.com/embed/VrayPysaeGY https://www.youtube.com/embed/WjxH7GODv6k\n\nBabel — это транспилятор, который, в основном, используется для преобразования конструкций. Благодаря ему мы можем использовать JSX преобразуя в JavaScript и JSX-код, используя `@babel/preset-react` .\n\n------------\n\n## Задание 4\n\n>Задание 4: Изучить видео и кратко описать комментарием к карточке, что такое webpack. И для чего он используется: https://www.youtube.com/embed/1nQlcb7E_eg\n\nWebpack - это сборщик модулей. Его основная цель - объединять файлы JavaScript для использования в браузере, но при этом он также может преобразовывать, объединять или упаковывать практически любой ресурс или актив.\n\n------------\n\n## Задание 5\n\n>Задание 5: Изучить видео и кратко описать комментарием к карточке, что за расширение React Developer Tools. И для чего оно используется: https://www.youtube.com/embed/K2DB3B9PU9Q https://www.youtube.com/embed/-LfSE9ZxZDI\n\nReact Developer Tools - это расширение Chrome DevTools для библиотеки React JavaScript. В консоли разработчика в браузере появляется `@Components` и  `@Profiler`. Позволяет произвести инспекцию всего реакт-приложения, включая компоненты, а также их свойства и состояния (state, props).\n\n------------\n\n## Задание 6\n\n>Задание 6: Создать новое приложение React https://www.youtube.com/embed/0grybmrgc2Q с использованием Material-UI library https://www.youtube.com/embed/GMfAgHcPSqc https://www.youtube.com/embed/RVSR2p6vxi0 проект и разместить на странице адаптивное меню\n\nссылка на StackBlitz: https://stackblitz.com/github/liestory/react-study/tree/feature/L1_P2_Q6\nссылка на GitHub: https://github.com/liestory/react-study/tree/feature/L1_P2_Q6",
            "card": {
                "id": "612104261767860b310d5a9e",
                "name": "Создание React-приложения. Установка расширения React Developer Tools. Введение в React. Виртуальный DOM. Основы JSX.",
                "idShort": 2,
                "shortLink": "XOS8x9of"
            },
        }
    },
    {
        "id": "6127d3b17365a266bb748cb3",
        "idMemberCreator": "5cd1493c019da08f070525fb",
        "data": {
            "text": "@stanislavpavenko Добрый вечер\nДомашнее задание:\n## Задание 1.\n\n>Задание 1: Изучить и кратко описать комментарием к карточке, что такое NPM.\n\nNPM - это менеджер пакетов в составе node.js для удобного подтягивание зависимостей в проект на основе JS. Все зависимости автоматически подтягиваются при использовании команды, например `npm install jquery`\n\n----\n\n## Задание 2\n\n>Задание 2: Изучить и кратко описать комментарием к карточке команду \"npm version\" 1. https://docs.npmjs.com/cli/version.html 2. Об изменении версии командой npm version. Привести примеры атрибутов изменяемых разрядов мажорной/минорной/патч версий https://blog.popstas.ru/blog/2020/04/15/npm-version/\n\nКоманда `npm version` - это механизм версионирования npm. Примеры\n* `npm version patch` - 0.0.1 -> 0.0.2\n* `npm version minor` - 0.0.2 -> 0.1.0\n* `npm version majo`r - 0.1.0 -> 1.0.0\n\n----\n\n## Задание 3\n\n>Задание 3: Изучить и кратко описать комментарием к карточке команду \"npm install\" https://docs.npmjs.com/cli/install.html\n\nКоманда `npm install` - с помощью нее скачиваются и устанавливается пакет зависимостей. Все они отображаются в блоке dependencies  в файле `package.json` и находятся в директории node_modules. Пример команды\n `npm install antd` -скачает antd и все его зависимости, и укажет в файле `package.json` и положит в  директорию node_modules.\nТак же с помощью этой команды можно обновить npm до последней версии. Точная команда `npm install npm@latest -g`\n\n----\n\n## Задание 4\n\n>Задание 4: Изучить и кратко описать комментарием к карточке команду \"npm uninstall\" https://docs.npmjs.com/cli/uninstall.html\n\nКоманда `npm uninstall` - удаляет пакет зависимостей. Например `npm uninstall jquery`  удалит jquery и все его зависимости\n\n\n----\n\n## Задание 5\n\n>Задание 5: Изучить и кратко описать комментарием к карточке команду \"npm update\" https://docs.npmjs.com/cli/update.html\n\nКоманда `npm update` - обновление пакета зависимостей \n\n\n----\n\n## Задание 6\n\n>Задание 6: Изучить и кратко описать комментарием к карточке команду \"npm run-script\" https://docs.npmjs.com/cli/run-script.html\n\nКоманда `npm run-script`  - выполнения команды из блока scripts внутри package.json. Пример команды `npm run start`\n\n----\n\n## Задание 7\n\n>Задание 7: Изучить и кратко описать комментарием к карточке, что такое GitHub. Пока без углубления в Git.\n\nGitHub - портал основанный на системе контроля версий Git. Является крупшеним сервисом для хранения проектов с открытым исходным кодом\n\n----\n\n## Задание 10\n\n>Задание 9: Создать новый проект с файлом index.js на https://stackblitz.com со стандартным JS. Сделать описание ReadMe при помощи Маркдауна. Добавить [UML-схему сборки приложения](https://trello-attachments.s3.amazonaws.com/607a4f1910a1f27254381596/607a520b7cd92579e31ac9c6/cb276a837091193a7a8c20ac9ddceb61/image.png) на реакт (PlantUML), таблицу, картинку, сделать форматирование текста\n\nСсылка на GitHub: https://github.com/liestory/react-study/tree/feature/L1_P1_Q9\n\n## Задание 10\n\n>Задание 10: Изучить и кратко описать комментарием к карточке, что делает команда: `npx create-react-app name-app`\n\nКоманда `npx create-react-app name-app` - создает односраничное приложение name-app  с необходимым набором зависимостей и настроек. В момент создания установит всю структуру приложения и подтянет все зависимости. Этого набора достаточно чтобы продолжить писать приложение дальше\n\n----\n\n## Задание 11\n\n>Задание 11: Создать новый React с использованием react UI library [Ant Design of React](https://ant.design/docs/react/getting-started) проект и изменить текст на странице как вам понравилось первое занятие? И что Вы хотели бы улучшить.\n\nссылка на GitHub https://stackblitz.com/github/liestory/react-study/tree/feature/L1_P1_Q11\n\n\n",
            "card": {
                "id": "6121029b6f425f455473965e",
                "name": "Создание проекта курса в Трелло. Создание репозитория на GitHub. Файл ReadMe. Markdown язык разметки. Базовые команды Git. npm. Package.json. Создание проекта на stackblitz.com",
                "idShort": 1,
                "shortLink": "G5pngav5"
            },
        }
    },
]