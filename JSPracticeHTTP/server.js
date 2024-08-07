const express = require('express');
const app = express();
const port = 3000;

const createRange = (start, end) => Array.from({ length: end - start + 1 }, (_, i) => start + i);

const statusCodes = [
  ...createRange(200, 208),
  226,
  ...createRange(300, 308),
  ...createRange(400, 431),
  451,
  ...createRange(500, 511)
];

const statusDescriptions = {
  200: 'ОК',
  201: 'Создано',
  202: 'Принято',
  203: 'Не авторитетная информация',
  204: 'Нет содержимого',
  205: 'Сброс содержимого',
  206: 'Частичное содержимое',
  207: 'Многостатусный',
  208: 'Уже сообщалось',
  226: 'Использовано IM',
  300: 'Множественный выбор',
  301: 'Перемещено навсегда',
  302: 'Найдено',
  303: 'Смотрите другое',
  304: 'Не изменялось',
  305: 'Использовать прокси',
  306: 'Прокси переключен',
  307: 'Временное перенаправление',
  308: 'Постоянное перенаправление',
  400: 'Некорректный запрос',
  401: 'Не авторизован',
  402: 'Необходима оплата',
  403: 'Запрещено',
  404: 'Не найдено',
  405: 'Метод не разрешен',
  406: 'Неприемлемо',
  407: 'Необходима аутентификация прокси',
  408: 'Истекло время ожидания',
  409: 'Конфликт',
  410: 'Удалено',
  411: 'Необходима длина',
  412: 'Условие ложно',
  413: 'Полезная нагрузка слишком велика',
  414: 'URI слишком длинный',
  415: 'Неподдерживаемый тип данных',
  416: 'Диапазон не достижим',
  417: 'Ожидание не удалось',
  418: 'Я - чайник',
  421: 'Неправильный запрос',
  422: 'Необрабатываемый экземпляр',
  423: 'Заблокировано',
  424: 'Не выполнена зависимость',
  425: 'Слишком рано',
  426: 'Требуется обновление',
  428: 'Требуется предусловие',
  429: 'Слишком много запросов',
  431: 'Поля заголовка запроса слишком большие',
  451: 'Недоступно по юридическим причинам',
  500: 'Внутренняя ошибка сервера',
  501: 'Не реализовано',
  502: 'Плохой шлюз',
  503: 'Сервис недоступен',
  504: 'Шлюз не отвечает',
  505: 'Версия HTTP не поддерживается',
  506: 'Вариант тоже проводит согласование',
  507: 'Недостаточно места',
  508: 'Обнаружено циклическое перенаправление',
  510: 'Не расширено',
  511: 'Требуется сетевая аутентификация'
};

statusCodes.forEach(code => {
  app.get(`/status/${code}`, (req, res) => {
    const description = statusDescriptions[code] || 'Неизвестный статус';
    res.status(code).send(`Код состояния: ${code} - ${description}`);
  });
});

app.listen(port, () => {
  console.log(`Сервер запущен по адресу http://localhost:${port}`);
});
