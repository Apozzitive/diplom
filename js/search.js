"use strict"
let inputText;

document.addEventListener('DOMContentLoaded', () => {            // при готовности объектной модели (когда все элементы документа созданы)
    inputText = document.querySelector('.search__input');              // выбираем из документа элемент инпута
    inputText.value = localStorage.getItem('savedText') || '';   // присваиваем его значению сохраненное в localStorage, либо пустую строку (при отсутствии сохр. знач.) 
    let button = document.querySelector('.search__button');   // выбираем элемент, который у нас будет реагировать на клик 
    button.addEventListener('click', () => {                 // добавляем ему слушателя события "клик"... 
        localStorage.setItem('savedText', inputText.value);      // ...при котором, в localStorage будет добавлена/изменена запись с именем "savedLogin" и значением элемента inputLogin (на момент события)
    });
});

async function getResponseSearch() {
    let res = await fetch('https://diplomggkttid.herokuapp.com/search');
    let searchContent = await res.json();
    let valInp = '';
    valInp = document.querySelector('.search__input').value;
    let valueInput = valInp.toLowerCase();
    for (let i = 0; i <= searchContent.values.length - 1; i++) {
        if (searchContent.values[i].topic_content.includes(valueInput)) {
            let title = searchContent.values[i].topic_title;
            let link = "";
            switch (title) {
                case "Типовая организация современной СУБД":
                    link += "../pages/section-1-topic-1.html";
                    break;
                case "Ранние подходы к организации СУБД":
                    link += "../pages/section-1-topic-2.html";
                    break;
                case `Реляционный подход к организации БД. Основные концепции и термины`:
                    link += "../pages/section-1-topic-3.html";
                    break;
                case "Базисные средства манипулирования реляционными данными":
                    link += "../pages/section-1-topic-4.html";
                    break;
                case "Проектирование реляционных баз данных с использованием нормализации":
                    link += "../pages/section-1-topic-5.html";
                    break;
                case "Структуры внешней памяти, методы организации индексов":
                    link += "../pages/section-2-topic-1.html";
                    break;
                case "Управление транзакциями":
                    link += "../pages/section-2-topic-2.html";
                    break;
                case "Сериализация транзакций":
                    link += "../pages/section-2-topic-3.html";
                    break;
                case "Управление транзакциями, сериализация транзакций":
                    link += "../pages/section-2-topic-4.html";
                    break;
                case "Журнализация изменений БД":
                    link += "../pages/section-2-topic-5.html";
                    break;
                case "Функции и основные возможности языка SQL":
                    link += "../pages/section-3-topic-1.html";
                    break;
                case "Выборка данных с использованием предложения SELECT":
                    link += "../pages/section-3-topic-2.html";
                    break;
                case "Вложенные подзапросы":
                    link += "../pages/section-3-topic-3.html";
                    break;
                case "Манипулирование данными":
                    link += "../pages/section-3-topic-4.html";
                    break;
                case "SQL запросы и функции":
                    link += "../pages/section-3-topic-5.html";
                    break;
                case "SQL Функции даты":
                    link += "../pages/section-3-topic-6.html";
                    break;
                case "SQL cтроковые функции":
                    link += "../pages/section-3-topic-7.html";
                    break;
                case "Операции объединения JOIN":
                    link += "../pages/section-3-topic-8.html";
                    break;
                case "Описание данных на основе SQL":
                    link += "../pages/section-4-topic-1.html";
                    break;
                case "Основные особенности архитектуры клиент-сервер":
                    link += "../pages/section-4-topic-2.html";
                    break;
                case "Триггеры и хранимые процедуры":
                    link += "../pages/section-4-topic-3.html";
                    break;
                case "Работа с BLOB и функции, определенные пользователем":
                    link += "../pages/section-4-topic-4.html";
                    break;
                case "Транзакции. Механизм транзакций":
                    link += "../pages/section-4-topic-5.html";
                    break;
                case "Описание данных на основе SQL. Индексы. Создание, изменение индексов.":
                    link += "../pages/section-4-topic-6.html";
                    break;
                case "Этапы создания приложения":
                    link += "../pages/section-5-topic-1.html";
                    break;
                case "Технология dbExpress":
                    link += "../pages/section-5-topic-2.html";
                    break;
                case "Механизмы доступа к данным. Технология dbExpress":
                    link += "../pages/section-5-topic-3.html";
                    break;
                case "PHP: базовые понятия языка":
                    link += "../pages/section-6-topic-1.html";
                    break;
                case "Основы языка PHP. Конфигурация":
                    link += "../pages/section-6-topic-2.html";
                    break;
                case "Настройка файла PHP.ini":
                    link += "../pages/section-6-topic-3.html";
                    break;
                case "Функции для работы php с СУБД MySQL":
                    link += "../pages/section-6-topic-4.html";
                    break;
            }
            let content = searchContent.values[i].topic_content;
            content = content.replace(/[^a-zа-яё.,\s]/gi, '');
            let foundPos = content.indexOf(valueInput, 0);
            let foundDot = content.indexOf('.', foundPos);
            let sumVal = foundPos + 300;
            let strInter = "";
            let strResult = "";
            if (foundDot <= sumVal && foundDot < 500) {
                strInter += content.slice(foundPos, foundDot + 1);
                strResult += strInter[0].toUpperCase() + strInter.slice(1); // РЕЗУЛЬТАТ ДЛЯ ОПИСАНИЯ
            } else {
                strInter += content.slice(foundPos, sumVal - 1) + "…";
                strResult += strInter[0].toUpperCase() + strInter.slice(1);
            }
            const divSearchResult = document.createElement('div');
            divSearchResult.className = "search__result-result";
            divSearchResult.innerHTML = `<div class="search__result-title">
                                    <a class="result__title-link" href="${link}">${title}</a>
                                </div>
                                <div class="search__result-content">
                                    ${strResult}
                                </div>`;
            const resultElement = document.querySelector(".search__results");
            resultElement.append(divSearchResult);
        } /* /* else if (valueInput == '' || valueInput == ' ') {
            const notFound = "Ничего не найдено";
            const divSearchResult = document.createElement('div');
            divSearchResult.className = "search__result-result";
            divSearchResult.innerHTML = `<div class="search__result-notfound">
                                        <p class="result__title-link" href="">${notFound}</p>
                                    </div>`;
            const resultElement = document.querySelector(".search__results");
            resultElement.append(divSearchResult);
            return; */
        else {
            const notFound = "Ничего не найдено";
            const divSearchResult = document.createElement('div');
            divSearchResult.className = "search__result-result";
            divSearchResult.innerHTML = `<div class="search__result-notfound">
                                        <p class="result__title-link" href="">${notFound}</p>
                                    </div>`;
            const resultElement = document.querySelector(".search__results");
            resultElement.append(divSearchResult);
            break;
        }
    }

    // console.log(str);

    /* let valueInput = valInp.toLowerCase();
    if (searchContent.values[0] === undefined || valInp == '' || valInp == ' ') {
        
    } else {
        for (let i = 0; i <= searchContent.values.length - 1; i++) {
            
        }
    } */
}
getResponseSearch();

