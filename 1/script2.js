function convertHTMLtoJSON() {
    // Очистка консоли для повторного запуска примера
    console.clear();
    // Показ в консоли названия программы
    console.log('= КОНВЕРТЕР HTML В JSON =');
    // Уведомление в консоль о начале работы конвертера
    console.log('   НАЧАТА СЕРИАЛИЗАЦИЯ HTML-КОДА.');
    let objectToStringify = new Object(); // Создаём объект для записи элементов и их контента (объект будет преобразован в JSON в конце)

    // Оценка HTML-элементов 1-го уровня
    const cardElms = document.querySelector('.section_bottom');
    let bodyElemsLength = cardElms.children.length; // Считаем количество элементов в body
    console.log('       НА СТРАНИЦЕ НАЙДЕНО ' + bodyElemsLength + ' ЭЛЕМЕНТОВ 1-ГО УРОВНЯ.'); // Уведомление о количестве найденных элементов 1-го уровня
    console.log(cardElms.children); // Вывод в консоль найденных элементов 1-го уровня
    console.log('____________________________________________________________________________________________________'); // Добавление отступа после вывода в консоль главной информации

    // Перебор всех HTML-элементов 1-го уровня
    for (let e = 0; e < bodyElemsLength; e++) {

        // Выбор элемента 1-го уровня
        let elementLevel1 = cardElms.children[e];

        // Запись названия элемента 1-го уровня
        let elementLevel1Name = elementLevel1.tagName; // Выбор названия элемента 1-го уровня
        console.log('   НАЙДЕН ЭЛЕМЕНТ 1-ГО УРОВНЯ <' + elementLevel1Name + '>'); // Уведомление о найденном элементе 1-го уровня
        objectToStringify['element' + e + 'Level1'] = [{ ['element' + e + 'Level1Name']: elementLevel1Name }]; // Запись названия элемента 1-го уровня в объект

        // Запись атрибутов элемента 1-го уровня

        // Проверка элемента 1-го уровня на наличие атрибутов
        if (elementLevel1.attributes.length > 0) {

            // Если атрибуты элемента 1-го уровня найдены
            let elementLevel1Attributes = elementLevel1.attributes; // Выбор атрибутов элемента 1-го уровня

            // Объявление массива для структурированной записи атрибутов элемента 1-го уровня
            let saveAttributes = new Array();

            // Перебор и запись в корневой объект objectToStringify атрибутов элемента 1-го уровня
            for (let a = 0; a < elementLevel1Attributes.length; a++) {

                // Уведомление о найденном атрибуте элемента 1-го уровня
                console.log('       Атрибут элемента 1-го уровня <' + elementLevel1.tagName + '>: ' + elementLevel1Attributes[a].name + '=' + elementLevel1Attributes[a].value);

                let attributeName = elementLevel1Attributes[a].name; // Запись названия атрибута элемента 1-го уровня
                let attributeValue = elementLevel1Attributes[a].value; // Запись значения атрибута элемента 1-го уровня

                // Запись названия и значения текущего атрибута  элемента 1-го уровня в объект
                let currentAttribute = {
                    ['element' + e + 'Level1' + 'attribute' + a]: [
                        {
                            ['element' + e + 'Level1' + 'attribute' + a + 'Name']: attributeName
                        },
                        {
                            ['element' + e + 'Level1' + 'attribute' + a + 'Value']: attributeValue
                        }
                    ]
                };
                // Сохранение структированного атрибута элемента 1-го уровня в массив
                saveAttributes.push(currentAttribute);

            };

            // Запись структурированных атрибутов элемента 1-го уровня из массива в корневой объект objectToStringify
            objectToStringify['element' + e + 'Level1'][1] = {
                ['element' + e + 'Level1Attributes']: saveAttributes
            };


        } else {
            // Если у элемента 1-го уровня нет атрибутов, вывод уведомления в консоль
            console.log('       Элемент 1-го уровня <' + elementLevel1Name + '> не имеет атрибутов.');
            // Если у элемента 1-го уровня нет атрибутов, то объект с местом под них оставляем с пустым значением
            objectToStringify['element' + e + 'Level1'][1] = {
                ['element' + e + 'Level1Attributes']: ''
            };
        };

        // Запись содержимого элемента 1-го уровня (других элементов или текста)

        // Проверка элемента 1-го уровня на наличие вложенных элементов
        if (elementLevel1.children.length > 0) {

            // Уведомление в консоль о количестве найденных элементов 2-го уровня внутри элемента 1-го уровня
            console.log('       У элемента <' + elementLevel1Name + '> ' + elementLevel1.children.length + ' вложенных элементов.');

            // Объявление массива для структурированной записи содержимого элемента 1-го уровня
            // (элементов 2-го уровня)
            let elementLevel1Content = new Array();

            // Перебор элементов 2-го уровня, если они найдены                
            for (let e2 = 0; e2 < elementLevel1.children.length; e2++) {

                let elementLevel2 = elementLevel1.children[e2]; // Выбор элемента 2-го уровня

                // Объявление массива для структурированной записи текущего элемента 2-го уровня
                let thisInnerContentLevel2 = new Array();

                // Запись названия элемента 2-го уровня
                let elementLevel2Name = elementLevel2.tagName; // Выбор названия элемента 2-го уровня
                console.log('           НАЙДЕН ЭЛЕМЕНТ 2-ГО УРОВНЯ <' + elementLevel2Name + '>'); // Уведомление о найденном элементе 2-го уровня

                // Запись структурированного названия элемента 2-го уровня
                let elementLevel2NameSaver = {
                    ['element' + e2 + 'Level2Name']: elementLevel2Name
                };
                thisInnerContentLevel2.push(elementLevel2NameSaver);

                // Запись атрибутов элемента 2-го уровня

                // Проверка элемента 2-го уровня на наличие атрибутов
                if (elementLevel2.attributes.length > 0) {

                    // Если атрибуты элемента 2-го уровня найдены
                    let elementLevel2Attributes = elementLevel2.attributes; // Выбор атрибутов элемента 2-го уровня

                    // Объявление массива для структурированной записи атрибутов элемента 2-го уровня
                    let saveAttributes2 = new Array();

                    // Перебор и запись атрибутов элемента 2-го уровня
                    for (let a2 = 0; a2 < elementLevel2Attributes.length; a2++) {
                        // Уведомление о найденном атрибуте элемента 2-го уровня
                        console.log('               Атрибут элемента 2-го уровня: <' + elementLevel2.tagName + '>: ' + elementLevel2Attributes[a2].name + '=' + elementLevel2Attributes[a2].value);

                        let attributeName2 = elementLevel2Attributes[a2].name; // Запись названия атрибута элемента 2-го уровня
                        let attributeValue2 = elementLevel2Attributes[a2].value; // Запись значения атрибута элемента 2-го уровня

                        // Запись названия и значения текущего атрибута  элемента 2-го уровня в объект
                        let currentAttribute2 = {
                            ['element' + e2 + 'Level2' + 'attribute' + a2]: [
                                {
                                    ['element' + e2 + 'Level2' + 'attribute' + a2 + 'Name']: attributeName2
                                },
                                {
                                    ['element' + e2 + 'Level2' + 'attribute' + a2 + 'Value']: attributeValue2
                                }
                            ]
                        };

                        // Сохранение структированного атрибута элемента 2-го уровня в массив
                        saveAttributes2.push(currentAttribute2);

                    };

                    // Запись структурированных атрибутов элемента 2-го уровня из массива атрибутов элемента 2-го уровня (saveAttributes2)
                    // в массив содержимого элемента 1-го уровня (elemenLevel1Content)
                    // с помощью промежуточного объекта elementLevel2AttributesSaver
                    let elementLevel2AttributesSaver = {
                        ['element' + e2 + 'Level2Attributes']: saveAttributes2
                    };
                    thisInnerContentLevel2.push(elementLevel2AttributesSaver);

                } else {

                    // Если у элемента 2-го уровня нет атрибутов, вывод уведомления в консоль
                    console.log('               Элемент 2-го уровня <' + elementLevel2Name + '> не имеет атрибутов.');

                    // Если у элемента 2-го уровня нет атрибутов, то объект с местом под них оставляем с пустым значением
                    let elementLevel2AttributesSaver = {
                        ['element' + e2 + 'Level2Attributes']: ''
                    };
                    thisInnerContentLevel2.push(elementLevel2AttributesSaver);

                };


                // Запись содержимого элемента 2-го уровня (других элементов или текста)

                // Проверка элемента 2-го уровня на наличие вложенных элементов
                if (elementLevel2.children.length > 0) {

                    // Уведомление в консоль о количестве найденных элементов 3-го уровня внутри элемента 2-го уровня
                    console.log('               У элемента <' + elementLevel2Name + '> ' + elementLevel2.children.length + ' вложенных элементов.');

                    // Объявление массива для структурированной записи содержимого элемента 2-го уровня
                    // (элементов 3-го уровня)
                    let elementLevel2Content = new Array();

                    // Перебор элементов 3-го уровня, если они найдены
                    for (let e3 = 0; e3 < elementLevel2.children.length; e3++) {

                        let elementLevel3 = elementLevel2.children[e3]; // Выбор элемента 3-го уровня

                        // Объявление массива для структурированной записи текущего элемента 3-го уровня
                        let thisInnerContentLevel3 = new Array();

                        // Запись названия элемента 3-го уровня
                        let elementLevel3Name = elementLevel3.tagName; // Выбор названия элемента 3-го уровня
                        console.log('                   НАЙДЕН ЭЛЕМЕНТ 3-ГО УРОВНЯ <' + elementLevel3Name + '>'); // Уведомление о найденном элементе 3-го уровня

                        // Запись структурированного названия элемента 3-го уровня
                        let elementLevel3NameSaver = {
                            ['element' + e3 + 'Level3Name']: elementLevel3Name
                        };
                        thisInnerContentLevel3.push(elementLevel3NameSaver);

                        // Запись атрибутов элемента 3-го уровня

                        // Проверка элемента 3-го уровня на наличие атрибутов
                        if (elementLevel3.attributes.length > 0) {

                            // Если атрибуты элемента 2-го уровня найдены
                            let elementLevel3Attributes = elementLevel3.attributes; // Выбор атрибутов элемента 3-го уровня

                            // Объявление массива для структурированной записи атрибутов элемента 3-го уровня
                            let saveAttributes3 = new Array();

                            // Перебор и запись атрибутов элемента 3-го уровня
                            for (let a3 = 0; a3 < elementLevel3Attributes.length; a3++) {

                                // Уведомление о найденном атрибуте элемента 3-го уровня
                                console.log('                       Атрибут элемента 3-го уровня: <' + elementLevel3.tagName + '>: ' + elementLevel3Attributes[a3].name + '=' + elementLevel3Attributes[a3].value);

                                let attributeName3 = elementLevel3Attributes[a3].name; // Запись названия атрибута элемента 3-го уровня
                                let attributeValue3 = elementLevel3Attributes[a3].value; // Запись значения атрибута элемента 3-го уровня

                                // Запись названия и значения текущего атрибута  элемента 3-го уровня в объект
                                let currentAttribute3 = {
                                    ['element' + e3 + 'Level3' + 'attribute' + a3]: [
                                        {
                                            ['element' + e3 + 'Level3' + 'attribute' + a3 + 'Name']: attributeName3
                                        },
                                        {
                                            ['element' + e3 + 'Level3' + 'attribute' + a3 + 'Value']: attributeValue3
                                        }
                                    ]
                                };

                                // Сохранение структированного атрибута элемента 3-го уровня в массив
                                saveAttributes3.push(currentAttribute3);

                            };

                            // Запись структурированных атрибутов элемента 3-го уровня из массива атрибутов элемента 3-го уровня (saveAttributes3)
                            // в массив элемента 3-го уровня (thisInnerContentLevel3)
                            // с помощью промежуточного объекта elementLevel3AttributesSaver
                            let elementLevel3AttributesSaver = {
                                ['element' + e3 + 'Level3Attributes']: saveAttributes3
                            };
                            thisInnerContentLevel3.push(elementLevel3AttributesSaver);

                        } else {

                            // Если у элемента 3-го уровня нет атрибутов, вывод уведомления в консоль
                            console.log('                       Элемент 3-го уровня <' + elementLevel3Name + '> не имеет атрибутов.');

                            // Если у элемента 3-го уровня нет атрибутов, то объект с местом под них оставляем с пустым значением
                            let elementLevel3AttributesSaver = {
                                ['element' + e3 + 'Level3Attributes']: ''
                            };
                            thisInnerContentLevel3.push(elementLevel3AttributesSaver);

                        };

                        // Запись любого HTML-содержимого элемента 3-го уровня

                        // Проверка элемента 3-го уровня на наличие любого HTML-содержимого
                        if (elementLevel3.innerHTML) {

                            let elementLevel3innerHTML = elementLevel3.innerHTML;
                            console.log('                       Элемент 3-го уровня <' + elementLevel3Name + '> содержит вложения: "' + elementLevel3innerHTML + '"');

                            elementLevel3innerHTMLSaver = {
                                ['element' + e3 + 'Level3Content']: elementLevel3innerHTML
                            };
                            thisInnerContentLevel3.push(elementLevel3innerHTMLSaver);

                        } else {
                            console.log('                       Элемент 3-го уровня <' + elementLevel3Name + '> не содержит вложений.');

                            // Если элемент 3-го уровня не имеет содержимого, то объект с местом под содержимое оставляем с пустым значением
                            let elementLevel3EmptyContentSaver = {
                                ['element' + e3 + 'Level3Content']: ''
                            };
                            thisInnerContentLevel3.push(elementLevel3EmptyContentSaver);

                        };

                        // Запись текущего вложенного элемента 3-го уровня в промежуточный объект
                        // (содержит объект с порядковым номером и значение-массив из трёх объектов:
                        // имя, атрибуты, содержимое элемента 3-го уровня)
                        let elementLevel3Saver = {
                            ['element' + e3 + 'Level3']: thisInnerContentLevel3
                        };

                        // Запись промежуточного объекта с вложенными элементом 3-го уровня в массив содержимого элемента 2-го уровня
                        elementLevel2Content.push(elementLevel3Saver);

                    }; // Конец цикла for для перебора элементов 3-го уровня, если они были найдены

                    // Запись массива всего содержимого элемента 2-го уровня (элементов 3-го уровня)
                    // в промежуточный объект (содержит порядковый номер элемента 2-го уровня, к которому относится контент,
                    // и значение-массив текущего содержимого выбранного элемента 2-го уровня
                    let elementLevel2ContentSaver = {
                        ['element' + e2 + 'Level2Content']: elementLevel2Content
                    };
                    // Запись промежуточного объекта всего структурированного содержимого элемента 2-го уровня
                    // в массив элемента 2-го уровня
                    thisInnerContentLevel2.push(elementLevel2ContentSaver);


                    // Конец проверки элементов 2-го уровня на наличие вложенных элементов 3-го уровня

                    // Проверка элементов 2-го уровня на наличие текста или отсутствия вложений
                } else if (elementLevel2.children.length == 0) {

                    // Проверка элемента 2-го уровня на наличие текста, если вложенных элементов нет
                    console.log('               У элемента 2-го уровня <' + elementLevel2Name + '> нет вложенных элементов. Поиск текста.');

                    if (elementLevel2.textContent) {
                        let elementLevel2Text = elementLevel2.textContent; // Выбор текстового контента внутри элемента 2-го уровня
                        console.log('               Элемент 2-го уровня <' + elementLevel2Name + '> содержит текст: "' + elementLevel2Text + '"');

                        // Запись текста элемента 2-го уровня
                        let elementLevel2TextSaver = {
                            ['element' + e2 + 'Level2Content']: elementLevel2Text
                        };
                        thisInnerContentLevel2.push(elementLevel2TextSaver);

                    } else {

                        // Если элемент 2-го уровня не содержит ни вложенных элементов, ни даже текста
                        console.log('               Элемент 2-го уровня <' + elementLevel2Name + '> не содержит текста.');

                        // Если элемент 2-го уровня не имеет содержимого, то объект с местом под содержимое оставляем с пустым значением
                        let elementLevel2EmptyContentSaver = {
                            ['element' + e2 + 'Level2Content']: ''
                        };
                        thisInnerContentLevel2.push(elementLevel2EmptyContentSaver);

                    };

                };

                // Запись всех вложенных элементов 2-го уровня в промежуточный объект
                let elementLevel2Saver = {
                    ['element' + e2 + 'Level2']: thisInnerContentLevel2
                };

                // Запись промежуточного объекта с вложенными элементами 2-го уровня в массив содержимого элемента 1-го уровня
                elementLevel1Content.push(elementLevel2Saver);

            }; // Конец цикла for для перебора элементов 2-го уровня, если они были найдены

            // Запись структурированного содержимого элемента 1-го уровня из массива в корневой объект objectToStringify
            objectToStringify['element' + e + 'Level1'][2] = {
                ['element' + e + 'Level1Content']: elementLevel1Content
            };

        } else if (elementLevel1.children.length == 0) {

            // Проверка элемента 1-го уровня на наличие текста, если вложенных элементов нет
            console.log('       У элемента 1-го уровня <' + elementLevel1Name + '> нет вложенных элементов. Поиск текста.');

            if (elementLevel1.textContent) {
                let elementLevel1Text = elementLevel1.textContent; // Выбор текстового контента внутри элемента 1-го уровня
                console.log('       Элемент 1-го уровня <' + elementLevel1Name + '> содержит текст: "' + elementLevel1Text + '"');

                // Запись текста элемента 1-го уровня в корневой объект objectToStringify
                objectToStringify['element' + e + 'Level1'][2] = {
                    ['element' + e + 'Level1Content']: elementLevel1Text
                };

            } else {

                // Если элемент 1-го уровня не содержит ни вложенных элементов, ни даже текста
                console.log('       Элемент 1-го уровня <' + elementLevel1Name + '> не содержит текста.');

                // Если элемент 1-го уровня не имеет содержимого, то объект с местом под содержимое оставляем с пустым значением
                objectToStringify['element' + e + 'Level1'][2] = {
                    ['element' + e + 'Level1Content']: ''
                };
            };

        };
    };

    // Вывод результата конвертации HTML в JSON
    let result = JSON.stringify(objectToStringify); // Сериализуем объект
    document.body.innerHTML = result; // Заменяем тело страницы на наш JSON
    // Добавление отступа перед уведомлением в консоль о завершении работы конвертера
    console.log('____________________________________________________________________________________________________');
    // Уведомление в консоль о завершении работы конвертера
    console.log('СЕРИАЛИЗАЦИЯ HTML-КОДА ЗАВЕРШЕНА.');
};

setTimeout(convertHTMLtoJSON, 1000); // Выводим результат через секунду после загрузки исходной страницы

/*
function convertJSONtoHTML() {
    // Очистка консоли для повторного запуска примера
    console.clear();
    // Показ в консоли названия программы
    console.log('= КОНВЕРТЕР JSON В HTML =');
    // Уведомление в консоль о начале работы конвертера
    console.log('   НАЧАТА ПОПЫТКА ДЕСЕРИАЛИЗАЦИИ HTML-КОДА.');
    // Добавление отступа после вывода в консоль главной информации
    console.log('____________________________________________________________________________________________________');
    
    // Выбор JSON-строки для последующего преобразования
    let JSONString = document.body.innerHTML;
    
    // Уведомление в консоль о найденной JSON-строке
    console.log('       НАЙДЕНА JSON-СТРОКА:');
    console.log(JSONString);
    console.log('           Тип полученных данных: ' + typeof JSONString);
    
    // Если результат проверки — строка (как запланировано)
    if (typeof JSONString === 'string') {
    
        console.log('       ПРЕОБРАЗОВАНИЕ JSON-СТРОКИ В ОБЪЕКТ'); // Уведомление в консоль о реальном начале конвертации
        let JSONtoObject = JSON.parse(JSONString); // Преобразование JSON-строки в объект
        
        // Уведомления в консоль о результате конвертации JSON-строки в JavaScript-объект
        console.log('           Результат преобразования:');
        console.log(JSONtoObject);
        console.log('           Тип после преобразования: ' + typeof JSONtoObject);
        console.log('           Длина объекта (количество элементов 1-го уровня): ' + Object.keys(JSONtoObject).length);
        
        // Добавление отступа в консоль перед началом перебора найденных элементов
        console.log('____________________________________________________________________________________________________');
            
        // Перебор всех сериализованных HTML-элементов 1-го уровня
        for (let e = 0; e < Object.keys(JSONtoObject).length; e++) {
            
            // Выбор элемента 1-го уровня (пары "ключ: значение" верхнего уровня)
            let elementLevel1 = Object.values(JSONtoObject)[e];
            // console.log(typeof elementLevel1);
            
            // Запись названия элемента 1-го уровня
            let elementLevel1Name = Object.values(elementLevel1[0]); // Выбор названия элемента 1-го уровня
            console.log('       НАЙДЕН ЭЛЕМЕНТ 1-ГО УРОВНЯ <' + elementLevel1Name + '>'); // Уведомление о найденном элементе 1-го уровня
            
            // Запись атрибутов элемента 1-го уровня
            let elementLevel1Attributes = Object.values(Object.values(elementLevel1[1])[0]); // Выбор атрибутов элемента 1-го уровня (или места, где они могли бы быть, если их нет)
            console.log('           У элемента 1-го уровня <' + elementLevel1Name + '> найдено ' + elementLevel1Attributes.length + ' атрибутов.');
                
                // Перебор и запись в корневой объект objectToStringify атрибутов элемента 1-го уровня
                for (let a = 0; a < elementLevel1Attributes.length; a++) {
                    
                    // Уведомление о найденном атрибуте элемента 1-го уровня
                    let currentAttributeA = Object.values(elementLevel1Attributes)[a]; // Выбор массива текущего атрибута элемента 1-го уровня
                    console.log(currentAttributeA);
                        
                    let attributeName = Object.values(currentAttributeA)[0]; // Запись названия атрибута элемента 1-го уровня
                    console.log(attributeName);
                    // let attributeValue = elementLevel1Attributes[a].value; // Запись значения атрибута элемента 1-го уровня
                    
                    // console.log('        Атрибут элемента 1-го уровня <' + elementLevel1Name + '>: ' + elementLevel1Attributes[a].name + '=' + elementLevel1Attributes[a].value);
                
                };
        };
    
    };
    
    // Добавление отступа перед уведомлением в консоль о завершении работы конвертера
    console.log('____________________________________________________________________________________________________');
    // Уведомление в консоль о завершении работы конвертера
    console.log('ДЕСЕРИАЛИЗАЦИЯ HTML-КОДА ЗАВЕРШЕНА.');
};
setTimeout(convertJSONtoHTML, 1500); // Выводим результат обратного конвертирования
*/
