// Необходимо создать веб-страницу с динамическими элементами с расписанием занятий.

// На странице должна быть таблица с расписанием занятий, на основе JSON-данных.
// Каждая строка таблицы должна содержать информацию о занятии, а именно:
// - название занятия
// - время проведения занятия
// - максимальное количество участников
// - текущее количество участников
// - кнопка "записаться"
// - кнопка "отменить запись"

// Если максимальное количество участников достигнуто, либо пользователь уже записан на занятие, сделайте кнопку "записаться" неактивной.
// Кнопка "отменить запись" активна в случае, если пользователь записан на занятие, иначе она должна быть неактивна.

// Пользователь может записаться на один курс только один раз.

// При нажатии на кнопку "записаться" увеличьте количество записанных участников.
// Если пользователь нажимает "отменить запись", уменьшите количество записанных участников.
// Обновляйте состояние кнопок и количество участников в реальном времени.

// Если количество участников уже максимально, то пользователь не может записаться, даже если он не записывался ранее.

// Сохраняйте данные в LocalStorage, чтобы они сохранялись и отображались при перезагрузке страницы.
document.body.style.backgroundColor = "lightgrey";

const scheduleData = [
    {
        "id": 1,
        "name": "Йога",
        "time": "10:00 - 11:00",
        "maxParticipants": 15,
        "currentParticipants": 8
    },
    {
        "id": 2,
        "name": "Пилатес",
        "time": "11:30 - 12:30",
        "maxParticipants": 10,
        "currentParticipants": 5
    },
    {
        "id": 3,
        "name": "Кроссфит",
        "time": "13:00 - 14:00",
        "maxParticipants": 20,
        "currentParticipants": 15
    },
    {
        "id": 4,
        "name": "Танцы",
        "time": "14:30 - 15:30",
        "maxParticipants": 12,
        "currentParticipants": 10
    },
    {
        "id": 5,
        "name": "Бокс",
        "time": "16:00 - 17:00",
        "maxParticipants": 8,
        "currentParticipants": 6
    }
];

// Создание расписания
function createScheduleRow(data) {
    let row = "<tr>";
    row += "<td>" + data.name + "</td>";
    row += "<td>" + data.time + "</td>";
    row += "<td class='member-add'>" + data.maxParticipants + "</td>";
    row += "<td>" + data.currentParticipants + "</td>";

    if (data.currentParticipants < data.maxParticipants) {
        row += "<td><button class='add' onclick='signup(" + data.id + ")'>Записаться</button></td>";
    } else {
        row += "<td><button disabled>Мест нет</button></td>";
    }

    if (data.currentParticipants > 0) {
        row += "<td><button class='delete' onclick='cancelSignup(" + data.id + ")'>Отменить запись</button></td>";
    } else {
        row += "<td><button disabled>Нет записавшихся</button></td>";
    }

    row += "</tr>";
    return row;
}

// Обновление расписания
function updateSchedule() {
    const scheduleTable = document.getElementById('schedule');
    scheduleTable.innerHTML = "<tr><th>Название занятия</th><th>Время</th><th>Макс. участники</th><th>Текущие участники</th><th>Записаться</th><th>Отменить запись</th></tr>";
    for (let i = 0; i < scheduleData.length; i++) {
        const row = createScheduleRow(scheduleData[i]);
        scheduleTable.innerHTML += row;
    }
}

// Запись на занятие
function signup(id) {
    const index = scheduleData.findIndex(function (item) { return item.id === id; });
    if (index !== -1 && scheduleData[index].currentParticipants < scheduleData[index].maxParticipants) {
        scheduleData[index].currentParticipants++;
        updateSchedule();
        localStorage.setItem('scheduleData', JSON.stringify(scheduleData));
    }
}

// Отмена записи на занятие
function cancelSignup(id) {
    const index = scheduleData.findIndex(function (item) { return item.id === id; });
    if (index !== -1 && scheduleData[index].currentParticipants > 0) {
        scheduleData[index].currentParticipants--;
        updateSchedule();
        localStorage.setItem('scheduleData', JSON.stringify(scheduleData));
    }
}

updateSchedule();