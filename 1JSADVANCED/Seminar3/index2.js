/* <style>
    body {
        font - family: 'Arial', sans-serif;
    background-color: #f3f4f6;
    padding: 20px;
        }

    select,
    button {
        width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #d1d1d1;
    border-radius: 4px;
    font-size: 16px;
        }

    button {
        background - color: #007bff;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;
        }

    button:hover {
        background - color: #0056b3;
        }

    h2 {
        text - align: center;
    margin-bottom: 20px;
        }
</style>


<h1>Создайте свой мебельный гарнитур</h1>


<div class="furniture-option">
<h2>Стол</h2>
<label>
Цвет:
<select id="table-color">
<option value="brown">Коричневый</option>
<option value="white">Белый</option>
</select>
</label>
</div>


<div class="furniture-option">
<h2>Стул</h2>
<label>
Материал:
<select id="chair-material">
<option value="wood">Дерево</option>
<option value="metal">Металл</option>
</select>
</label>
</div>


<button id="save-btn">Сохранить комплект</button>
<button id="load-btn">Загрузить последний комплект</button>
<button id="clear-btn">Очистить настройки</button>
<script src="https://cdn.jsdelivr.net/npm/js-cookie@2/src/js.cookie.min.js"></script> */




// Вы разрабатываете онлайн-магазин по заказу индивидуальных мебельных комплектов. Посетители сайта могут выбирать разные элементы мебели, цвета и материалы для своего гарнитура. После того как пользователь собрал свой комплект и сохраняет свой выбор, информация о нем сохраняется в куки. При следующем посещении сайта их индивидуальные настройки автоматически загружаются, и они видят ранее созданный мебельный комплект.

// 1. Создайте базовую HTML-структуру с различными элементами мебели (например, стол, стул, диван) и возможными параметрами для них (цвет, материал, дизайн).
// 2. Пользователи могут выбирать разные элементы и параметры, чтобы составить свой мебельный гарнитур.
// 3. После выбора всех желаемых параметров предоставьте кнопку "Сохранить комплект", которая сохраняет текущий выбор пользователя в куки.
// 4. При следующем посещении сайта автоматически загрузите сохраненные параметры из куки и отобразите ранее созданный комплект.
// 5. Убедитесь, что у пользователей есть возможность очистить сохраненные настройки (очистить куки)//


const saveBtn = document.querySelector("#save-btn");
const loadBtn = document.querySelector("#load-btn");
const clearBtn = document.querySelector("#clear-btn");
const tableSelectEl = document.querySelector("#table-color");
const chairSelectEl = document.querySelector("#chair-material");

saveBtn.addEventListener("click", saved);
loadBtn.addEventListener("click", loaded);
clearBtn.addEventListener("click", cleared);

function saved(event) {
    Cookies.set('tableConfig', tableSelectEl.value);
    Cookies.set('chairConfig', chairSelectEl.value);
    alert("настройки сохраненны")
}

function loaded(event) {
    if (!Cookies.get("tableConfig")) {
        return alert("печенек нет")
    }
    tableSelectEl.value = Cookies.get("tableConfig")
    chairSelectEl.value = Cookies.get("chairConfig")
    alert("настройки загружены")
}

function cleared(event) {
    Cookies.remove("tableConfig")
    Cookies.remove("chairConfig")
    alert("Съели все печеньки)")
}
document.addEventListener("DOMContentLoaded", loaded)