# CarGo2
[project2.js](https://github.com/user-attachments/files/24073301/project2.js)

function plus(n) {
    var cena = document.getElementById("cena_" + n);
    var col = document.getElementById("col_" + n);
    var cenap = document.getElementById("cenap_" + n);
    var itog = document.getElementById("itog");
    [project2.html](https://github.com/user-attachments/files/24073303/project2.html)
[project2.css](https://github.com/user-attachments/files/24073302/project2.css)

    col.innerHTML = 1 + Number(col.innerHTML);
    cenap.innerHTML = Number(cenap.innerHTML) + Number(cena.innerHTML);
    itog.innerHTML = Number(itog.innerHTML) + Number(cena.innerHTML);
}

function minus(n) {
    var cena = document.getElementById("cena_" + n);
    var col = document.getElementById("col_" + n);
    var cenap = document.getElementById("cenap_" + n);
    var itog = document.getElementById("itog");
    
    if (col.innerHTML != "0") {
        col.innerHTML = Number(col.innerHTML) - 1;
        cenap.innerHTML = Number(cenap.innerHTML) - Number(cena.innerHTML);
        itog.innerHTML = Number(itog.innerHTML) - Number(cena.innerHTML);
    }
}


function showPage(pageId) {
    // Скрыть все страницы
    var pages = document.getElementsByClassName('page');
    for (var i = 0; i < pages.length; i++) {
        pages[i].classList.remove('active');
    }

    document.getElementById(pageId).classList.add('active');
    
    var navLinks = document.getElementsByClassName('nav-link');
    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.remove('active');
    }
    
    event.target.classList.add('active');
    
    
    var navLinks = document.getElementById('nav-links');
    navLinks.classList.remove('active');
    
    window.scrollTo(0, 0);
}

document.addEventListener('DOMContentLoaded', function() {
    
    document.getElementById('mobile-menu').addEventListener('click', function() {
        var navLinks = document.getElementById('nav-links');
        navLinks.classList.toggle('active');
    });
    

    var navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            var navMenu = document.getElementById('nav-links');
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    });
    
    // Установка текущей даты в поле даты начала аренды
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    
    today = yyyy + '-' + mm + '-' + dd;
    document.getElementById('start_date').value = today;
    document.getElementById('contact_message_date').value = today;
});
function adaptTablesForMobile() {
    const tables = document.querySelectorAll('.responsive-table');
    
    tables.forEach(table => {
        if (window.innerWidth < 768) {
            
            table.setAttribute('data-mobile', 'true');
            
            
            const tableWidth = table.offsetWidth;
            const containerWidth = table.parentElement.offsetWidth;
            
            if (tableWidth > containerWidth) {
                table.style.minWidth = '100%';
                table.style.overflowX = 'scroll';
            }
        } else {
            table.removeAttribute('data-mobile');
            table.style.minWidth = '';
            table.style.overflowX = '';
        }
    });
}


document.addEventListener('DOMContentLoaded', function() {
    
    
    adaptTablesForMobile();
    window.addEventListener('resize', adaptTablesForMobile);
});

function buildSearchQuery() {
    const model = document.getElementById("car_model").value;
    const days = document.getElementById("rental_days").value;
    const pickup = document.querySelector('input[name="pickup_location"]:checked').value;
    const date = document.getElementById("start_date").value;
    const pass = document.getElementById("client_password").value;

    const query = `Бронирование авто: модель ${model}, дней ${days}, место ${pickup}, дата ${date}, пароль ${pass}`;

    document.getElementById("search_query").value = query;

    return true;
}

:root {
    --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --text-dark: #2d3748;
    --text-medium: #4a5568;
    --text-light: #718096;
    --bg-light: rgba(255, 255, 255, 0.95);
    --border-color: #e2e8f0;
    --shadow-light: 0 5px 15px rgba(0,0,0,0.05);
    --shadow-medium: 0 8px 25px rgba(0,0,0,0.1);
    --shadow-heavy: 0 10px 30px rgba(0,0,0,0.15);
    --transition: all 0.3s ease;
    --border-radius: 15px;
    --blur-bg: blur(10px);
}

/* БАЗОВЫЕ СТИЛИ */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    background: var(--primary-gradient);
    color: var(--text-dark);
    min-height: 100vh;
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

/* =================== ТИПОГРАФИЯ =================== */
h1, h2, h3 {
    color: var(--text-dark);
    margin-bottom: 1.5rem;
    font-weight: 700;
}

h1 {
    background: var(--primary-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

/* =================== ОБЩИЕ КОМПОНЕНТЫ =================== */
.section, .accessories-catalog {
    background: var(--bg-light);
    padding: 2.5rem;
    margin-bottom: 2rem;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-medium);
    backdrop-filter: var(--blur-bg);
}

.btn {
    background: var(--primary-gradient);
    color: white;
    padding: 0.85rem 2rem;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    text-decoration: none;
    display: inline-block;
    font-size: 1rem;
    font-weight: 600;
    transition: var(--transition);
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
}

.btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
}

/* =================== НАВИГАЦИЯ =================== */
nav {
    background: var(--bg-light);
    backdrop-filter: var(--blur-bg);
    color: var(--text-dark);
    padding: 1rem 0;
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: var(--shadow-light);
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
}

.logo {
    font-size: 1.8rem;
    font-weight: 800;
    background: var(--primary-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-decoration: none;
    z-index: 101;
}

.nav-links {
    display: flex;
    list-style: none;
    transition: var(--transition);
}

.nav-links li {
    margin-left: 2rem;
}

.nav-links a {
    color: var(--text-medium);
    text-decoration: none;
    font-weight: 600;
    transition: var(--transition);
    padding: 0.5rem 1rem;
    border-radius: 25px;
}

.nav-links a:hover,
.nav-links a.active {
    color: var(--primary-color);
    background: rgba(102, 126, 234, 0.1);
}

/* Бургер меню */
.menu-toggle {
    display: none;
    flex-direction: column;
    cursor: pointer;
    padding: 5px;
    z-index: 101;
}

.menu-toggle span {
    width: 25px;
    height: 3px;
    background: var(--primary-color);
    margin: 3px 0;
    transition: 0.3s;
    border-radius: 2px;
}

.hero {
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.9) 0%, rgba(118, 75, 162, 0.9) 100%);
    color: white;
    padding: 6rem 0;
    text-align: center;
    margin-bottom: 2rem;
    border-radius: 0 0 30px 30px;
    box-shadow: var(--shadow-heavy);
}

.hero h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    font-weight: 800;
    color: white;
    background: none;
    -webkit-text-fill-color: white;
}

.hero-subtitle {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: white;
}

/* =================== СПИСКИ =================== */
.nested-list, .compact-list {
    margin: 1rem 0;
    padding-left: 2rem;
}

.nested-list ul, .nested-list ol,
.compact-list ul {
    margin: 0.5rem 0;
    padding-left: 1.5rem;
}

.nested-list li, .compact-list li {
    margin: 0.5rem 0;
    padding: 0.3rem 0;
}

.compact-list ul {
    list-style: none;
    padding: 0;
}

.compact-list li {
    margin: 5px 0;
    padding: 3px 0;
    color: var(--text-medium);
    font-size: 0.95rem;
    line-height: 1.4;
}

.compact-list li:first-child {
    font-weight: bold;
    color: var(--text-dark);
    margin-bottom: 8px;
    padding-bottom: 5px;
    border-bottom: 1px solid var(--border-color);
}

/* =================== ГАЛЕРЕЯ =================== */
.car-gallery {
    display: flex;
    gap: 1.5rem;
    margin: 2rem 0;
    flex-wrap: wrap;
    justify-content: center;
}

.car-thumb {
    width: 280px;
    height: 180px;
    object-fit: cover;
    border-radius: var(--border-radius);
    cursor: pointer;
    transition: var(--transition);
    border: 3px solid transparent;
    box-shadow: var(--shadow-light);
}

.car-thumb:hover {
    transform: translateY(-10px) scale(1.05);
    border-color: var(--primary-color);
    box-shadow: var(--shadow-heavy);
}

/* =================== ТАБЛИЦЫ =================== */
.table-container {
    background: rgba(248, 249, 250, 0.7);
    padding: 20px;
    border-radius: var(--border-radius);
    margin: 1.5rem 0;
    backdrop-filter: blur(5px);
    overflow: visible;
}

/* Общие стили для всех таблиц */
table, .responsive-table, .accessory-table {
    width: 100%;
    border-collapse: collapse;
    margin: 1rem 0;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: var(--shadow-light);
}

table th, table td,
.responsive-table th, .responsive-table td,
.accessory-table th, .accessory-table td {
    border: 1px solid var(--border-color);
    padding: 15px;
    text-align: left;
    vertical-align: top;
}

table th, .responsive-table th, .accessory-table th {
    background: var(--primary-gradient);
    color: white;
    font-weight: 600;
}

table tr:nth-child(even),
.responsive-table tr:nth-child(even),
.accessory-table tr:nth-child(even) {
    background-color: rgba(248, 249, 250, 0.8);
}

table tr:hover,
.responsive-table tr:hover,
.accessory-table tr:hover {
    background-color: rgba(102, 126, 234, 0.05);
}

/* Специфичные стили для таблиц */
.responsive-table th {
    width: 30%;
    min-width: 120px;
}

.responsive-table td {
    background: white;
    width: 70%;
}

.accessory-table td {
    text-align: center;
}

/* =================== ФОРМЫ =================== */
.form-group {
    margin-bottom: 1.5rem;
}

label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: var(--text-medium);
}

input, select, textarea {
    width: 100%;
    padding: 0.75rem;
    border: 2px solid var(--border-color);
    border-radius: 10px;
    font-size: 1rem;
    transition: var(--transition);
    background: white;
}

input:focus, select:focus, textarea:focus {
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);
    outline: none;
}

input[type="radio"], input[type="checkbox"] {
    width: auto;
    margin-right: 0.5rem;
}

.radio-group, .checkbox-group {
    margin: 0.5rem 0;
}

/* =================== ВНУТРЕННЯЯ НАВИГАЦИЯ =================== */
.internal-nav {
    background: rgba(237, 242, 247, 0.8);
    padding: 1.5rem;
    margin-bottom: 2rem;
    border-radius: var(--border-radius);
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    backdrop-filter: blur(5px);
}

.internal-nav a {
    color: var(--text-medium);
    text-decoration: none;
    padding: 0.7rem 1.5rem;
    border-radius: 50px;
    transition: var(--transition);
    font-weight: 600;
    background: white;
    box-shadow: 0 3px 10px rgba(0,0,0,0.08);
}

.internal-nav a:hover {
    color: var(--primary-color);
    background: rgba(102, 126, 234, 0.1);
    transform: translateY(-3px);
    box-shadow: var(--shadow-light);
}

/* =================== ПАСПОРТ =================== */
.passport {
    background: white;
    border: 2px solid var(--border-color);
    padding: 2rem;
    margin: 2rem 0;
    font-family: 'Courier New', monospace;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-light);
}

.passport-page {
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 1px dashed #cbd5e0;
}

.passport-page:last-child {
    border-bottom: none;
}

.dom-result, .result {
    background: rgba(102, 126, 234, 0.1);
    padding: 1.5rem;
    margin: 1rem 0;
    border-left: 4px solid var(--primary-color);
    border-radius: 10px;
}

.changed {
    color: #e53e3e;
    font-weight: bold;
    background-color: #fed7d7;
    padding: 2px 8px;
    border-radius: 5px;
}

/* =================== СТРАНИЦЫ =================== */
.page {
    display: none;
    animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.page.active {
    display: block;
}

.vehicle-section {
    margin-bottom: 3rem;
    animation: fadeInUp 0.5s ease-out;
}

/* =================== АВТОПАРК =================== */
.car-main-image-container {
    text-align: center;
    margin-bottom: 1.5rem;
    border-radius: var(--border-radius);
    overflow: hidden;
    box-shadow: var(--shadow-medium);
    max-height: 300px;
}

.car-main-image {
    width: 100%;
    height: 300px;
    object-fit: cover;
    object-position: center;
    transition: var(--transition);
    display: block;
}

.car-main-image:hover {
    transform: scale(1.05);
}

/* =================== КАТАЛОГ АКСЕССУАРОВ =================== */
.accessories-catalog {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(247, 250, 252, 0.9) 100%);
}

.accessory-table th {
    padding: 18px;
    text-align: center;
    font-weight: 700;
    font-size: 1.1rem;
}

.accessory-table td {
    padding: 18px;
    text-align: center;
    border-bottom: 1px solid var(--border-color);
    font-weight: 500;
}

.quantity-control {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
}

.quantity-btn {
    background: var(--primary-gradient);
    color: white;
    border: none;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    cursor: pointer;
    font-weight: bold;
    transition: var(--transition);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 3px 10px rgba(102, 126, 234, 0.3);
}

.quantity-btn:hover {
    /* Убрано увеличение при наведении */
    transform: none;
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
}

.quantity-btn.minus {
    background: linear-gradient(135deg, #e53e3e 0%, #c53030 100%);
    box-shadow: 0 3px 10px rgba(229, 62, 62, 0.3);
}

.quantity-btn.minus:hover {
    /* Убрано увеличение при наведении */
    transform: none;
    box-shadow: 0 5px 15px rgba(229, 62, 62, 0.4);
}

.total-section {
    background: var(--primary-gradient);
    color: white;
    padding: 1.5rem;
    border-radius: var(--border-radius);
    margin-top: 1.5rem;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 700;
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
}



/* =================== ФУТЕР =================== */
footer {
    background: rgba(45, 55, 72, 0.9);
    color: white;
    text-align: center;
    padding: 3rem 0;
    margin-top: 4rem;
    backdrop-filter: var(--blur-bg);
}

/* =================== АДАПТИВНОСТЬ =================== */
@media (max-width: 768px) {
    .nav-container {
        flex-direction: column;
        align-items: flex-start;
    }
    
    .menu-toggle {
        display: flex;
        position: absolute;
        right: 20px;
        top: 15px;
    }
    
    .nav-links {
        display: none;
        flex-direction: column;
        width: 100%;
        background: white;
        position: absolute;
        top: 100%;
        left: 0;
        box-shadow: var(--shadow-medium);
        padding: 1rem 0;
        border-radius: 0 0 var(--border-radius) var(--border-radius);
        z-index: 100;
    }
    
    .nav-links.active {
        display: flex;
    }
    
    .nav-links li {
        margin: 0;
        width: 100%;
    }
    
    .nav-links a {
        display: block;
        padding: 1rem 2rem;
        border-radius: 0;
        width: 100%;
    }
    
    .hero h1 {
        font-size: 2.5rem;
    }
    
    .internal-nav {
        flex-direction: column;
        gap: 0.8rem;
    }
    
    .section, .accessories-catalog {
        padding: 1.5rem;
    }
    
    .container {
        width: 95%;
        padding: 10px;
    }
    
    .reviews-container {
        grid-template-columns: 1fr;
    }
    
    /* Адаптивность для таблиц */
    .responsive-table, table, .accessory-table {
        display: block;
        width: 100%;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
    }
    
    .responsive-table thead {
        display: none;
    }
    
    .responsive-table tr,
    table tr {
        display: block;
        margin-bottom: 15px;
        border: 1px solid var(--border-color);
        border-radius: 8px;
        overflow: hidden;
        background: white;
        box-shadow: var(--shadow-light);
    }
    
    .responsive-table th, .responsive-table td,
    table th, table td {
        display: block;
        width: 100%;
        padding: 12px 15px;
        border: none;
        border-bottom: 1px solid var(--border-color);
        text-align: left;
    }
    
    .responsive-table th, table th {
        background: var(--primary-gradient);
        color: white;
        font-weight: 600;
        padding: 12px 15px;
    }
    
    .responsive-table td, table td {
        padding: 15px;
    }
    
    .responsive-table tr:last-child th,
    .responsive-table tr:last-child td,
    table tr:last-child th,
    table tr:last-child td {
        border-bottom: none;
    }
    
    /* Автопарк на мобильных */
    .vehicle-section {
        margin-bottom: 2rem;
    }
    
    .car-main-image-container {
        max-height: 200px;
        border-radius: 10px;
    }
    
    .car-main-image {
        height: 200px;
    }
    
    .nested-list, .compact-list {
        padding-left: 1rem;
        font-size: 0.9rem;
    }
    
    .nested-list ul, .compact-list ul {
        padding-left: 1rem;
    }
    
    .compact-list li {
        font-size: 0.9rem;
        padding: 4px 0;
    }
    
    /* Аксессуары на мобильных */
    .accessory-table th, 
    .accessory-table td {
        padding: 12px 8px;
        font-size: 0.9rem;
    }
}

@media (max-width: 480px) {
    .hero h1 {
        font-size: 2rem;
    }
    
    .hero {
        padding: 4rem 0;
    }
    
    .vehicle-section h2 {
        font-size: 1.3rem;
        margin-bottom: 1rem;
    }
    
    .car-main-image-container {
        max-height: 180px;
    }
    
    .car-main-image {
        height: 180px;
    }
    
    .responsive-table th, .responsive-table td,
    table th, table td {
        padding: 10px 12px;
        font-size: 0.9rem;
    }
    
    .compact-list li {
        font-size: 0.85rem;
        padding: 3px 0;
    }
    
    .accessory-table {
        font-size: 0.8rem;
    }
}

@media (max-width: 360px) {
    .car-main-image-container {
        max-height: 150px;
    }
    
    .car-main-image {
        height: 150px;
    }
    
    .table-container {
        padding: 15px 12px;
    }
    
    .responsive-table th, .responsive-table td,
    table th, table td {
        padding: 8px 10px;
        font-size: 0.85rem;
    }
    
    .compact-list li {
        font-size: 0.8rem;
    }
}
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CarGo - Аренда автомобилей</title>
    <link rel="stylesheet" href="project2.css">
</head>
<body>
    <!-- Навигация -->
    <nav>
        <div class="container nav-container">
            <a href="#" class="logo" onclick="showPage('index')">CarGo</a>
            
            <div class="menu-toggle" id="mobile-menu">
                <span></span>
                <span></span>
                <span></span>
            </div>
            
            <ul class="nav-links" id="nav-links">
                <li><a href="#" class="nav-link active" onclick="showPage('index')">Главная</a></li>
                <li><a href="#" class="nav-link" onclick="showPage('fleet')">Автопарк</a></li>
                <li><a href="#" class="nav-link" onclick="showPage('accessories')">Аксессуары</a></li>
                <li><a href="#" class="nav-link" onclick="showPage('terms')">Условия</a></li>
                <li><a href="#" class="nav-link" onclick="showPage('contacts')">Контакты</a></li>
                <li><a href="https://favorit-detailing.ru/" target="_blank">Партнеры</a></li>
            </ul>
        </div>
    </nav>

    <!-- Главная страница -->
    <div id="index" class="page active">
        <!-- Герой секция -->
        <section class="hero">
            <div class="container">
                <h1>Арендуйте автомобиль мечты</h1>
                <p style="font-size: 1.2rem; margin-bottom: 2rem;">Лучшие автомобили по доступным ценам</p>
        </section>

        <div class="container">
            <!-- Внутренняя навигация -->
            <div class="internal-nav">
                <a href="#advantages">Наши преимущества</a>
                <a href="#how-to">Как арендовать</a>
                <a href="#various">Автопарк</a>
                <a href="#booking">Бронирование</a>
            </div>

            <!-- Преимущества с вложенным списком -->
            <section id="advantages" class="section">
                <h2>Наши преимущества</h2>
                <div class="nested-list">
                    <ul>
                        <li> Обслуживание клиентов
                            <ul>
                                <li>Круглосуточная поддержка 24/7</li>
                                <li>Персональный менеджер</li>
                                <li>Многоязычная поддержка
                                    <ul>
                                        <li>Русский</li>
                                        <li>Английский</li>
                                        <li>Китайский</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li> Гибкие условия
                            <ul>
                                <li>Бесплатная отмена за 24 часа</li>
                                <li>Возможность продления аренды</li>
                                <li>Различные варианты оплаты
                                    <ul>
                                        <li>Наличные</li>
                                        <li>Банковские карты</li>
                                        <li>Электронные кошельки</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li> Безопасность
                            <ul>
                                <li>Полная страховка включена</li>
                                <li>Регулярный технический осмотр</li>
                                <li>Система GPS-мониторинга</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </section>

            <!-- Как арендовать с вложенным нумерованным списком -->
            <section id="how-to" class="section">
                <h2>Как арендовать автомобиль</h2>
                <div class="nested-list">
                    <ol>
                        <li>Подготовительный этап
                            <ol type="a">
                                <li>Выберите подходящий автомобиль из нашего автопарка</li>
                                <li>Определите сроки аренды</li>
                                <li>Проверьте требования к арендатору</li>
                            </ol>
                        </li>
                        <li>Оформление заказа
                            <ol type="a">
                                <li>Заполните форму бронирования онлайн</li>
                                <li>Выберите дополнительные услуги
                                    <ul>
                                        <li>Детское кресло</li>
                                        <li>Навигатор</li>
                                        <li>Дополнительный водитель</li>
                                    </ul>
                                </li>
                            </ol>
                        </li>
                        <li>Подтверждение
                            <ol type="a">
                                <li>Подтвердите бронь через менеджера</li>
                                <li>Ознакомьтесь с договором</li>
                                <li>Внесите предоплату</li>
                            </ol>
                        </li>
                    </ol>
                </div>
            </section>

            <!-- Галерея автомобилей -->
            <section id="various" class="section">
                <h2>Наши автомобили</h2>
                <div class="car-gallery">
                    <a href="https://ru.wikipedia.org/wiki/Mercedes-Benz_V-%D0%BA%D0%BB%D0%B0%D1%81%D1%81" target="_blank">
                        <img src="https://cdn.kodixauto.ru/media/resized_image/webp/649a91b07f6d4e9d7acd34e6/1024/0" alt="Mercedes-Benz V-Class" class="car-thumb">
                    </a>
                    <a href="https://www.rangerover.com/ru-kz/26my/range-rover/sv" target="_blank">
                        <img src="https://service-landrover.ru/assets/galleries/562/range-rover-velar-r-dynamic-black_5.jpg"
                         alt="Range Rover sv black" class="car-thumb">
                    </a>
                    <a href="https://sales.mercedes-autoforum.ru/cars/s-class-wv223/" target="_blank">
                        <img src="https://www.carscoops.com/wp-content/uploads/2024/04/2025-Mercedes-S-class-facelift-00021.jpg" alt="Mercedes S-Class" class="car-thumb">
                    </a>
                </div>
            </section>


            <section id="booking" class="section">
    <h2>Форма бронирования автомобиля</h2>

    <!-- Форма теперь отправляет поисковый запрос -->
    <form action="https://www.google.com/search" method="get" target="_blank" onsubmit="return buildSearchQuery()">

        <!-- Поле q — то, что реально ищет Google -->
        <input type="hidden" id="search_query" name="q" value="">

        <input type="hidden" name="form_type" value="booking">
        
        <div class="form-group">
            <label for="car_model">Модель автомобиля:</label>
            <input type="text" id="car_model" name="car_model" value="Range Rover SV Black" required>
        </div>
        
        <div class="form-group">
            <label for="rental_days">Количество дней аренды:</label>
            <input type="number" id="rental_days" name="rental_days" value="3" min="1" required>
        </div>
        
        <div class="form-group">
            <label>Место получения:</label>
            <div class="radio-group">
                <input type="radio" id="office" name="pickup_location" value="В офисе" checked>
                <label for="office" style="display: inline;">К офису</label>
            </div>
            <div class="radio-group">
                <input type="radio" id="airport" name="pickup_location" value="В аэропорту">
                <label for="airport" style="display: inline;">К аэропорту</label>
            </div>
        </div>
        
        <div class="form-group">
            <label for="start_date">Дата начала аренды:</label>
            <input type="date" id="start_date" name="start_date" required>
        </div>
        
        <div class="form-group">
            <label for="client_password">Пароль для доступа:</label>
            <input type="password" id="client_password" name="client_password" required>
        </div>
        
        <button type="submit" class="btn">Забронировать</button>
    </form>
</section>
        </div>
    </div>

    <!-- Страница автопарка -->
       <!-- Страница автопарка -->
    <div id="fleet" class="page">
        <div class="container">
            <div class="section">
                <h1>Наш автопарк</h1>

                <!-- Микроавтобус -->
                <div id="microbus">
                    <h2> Микроавтобус</h2>
                    <div class="table-container">
                        <div class="car-main-image-container">
                            <img src="https://cdn.kodixauto.ru/media/resized_image/webp/649a91b07f6d4e9d7acd34e6/1024/0" 
                                 alt="Mercedes-Benz V EXCLUSIVE Long" class="car-main-image">
                        </div>
                        <table class="responsive-table">
                            <tr>
                                <th>Модель</th>
                                <th>Цена за день</th>
                                <th>Характеристики</th>
                            </tr>
                            <tr>
                                <td><strong>Mercedes-Benz V EXCLUSIVE Long</strong></td>
                                <td><strong>15 000 ₽</strong></td>
                                <td>
                                    <div class="nested-list">
                                        <ul>
                                            <li><strong>Технические характеристики</strong>
                                                <ul>
                                                    <li>Двигатель: 2.0 л (237 л.с.)</li>
                                                    <li>Коробка передач: АКПП (9-ступенчатая)</li>
                                                    <li>Год выпуска: 2025</li>
                                                    <li>Тип кузова: Микроавтобус</li>
                                                    <li>Количество мест: 8</li>
                                                    <li>Расход топлива: 8.5 л/100км
                                                        <ul>
                                                            <li>Город: 10.2 л/100км</li>
                                                            <li>Трасса: 7.3 л/100км</li>
                                                        </ul>
                                                    </li>
                                                    <li>Клиренс: 150 мм</li>
                                                    <li>Объем багажника: 1030 л</li>
                                                </ul>
                                            </li>
                                            <li><strong>Комфорт и безопасность</strong>
                                                <ul>
                                                    <li>Кожаный салон премиум-класса</li>
                                                    <li>Двухзонный климат-контроль</li>
                                                    <li>Панорамная крыша</li>
                                                    <li>Система кругового обзора</li>
                                                    <li>Адаптивный круиз-контроль</li>
                                                    <li>Система экстренного торможения</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>

                <!-- Внедорожник -->
                <div id="suv" class="vehicle-section">
                    <h2> Внедорожник</h2>
                    <div class="table-container">
                        <div class="car-main-image-container">
                            <img src="https://service-landrover.ru/assets/galleries/562/range-rover-velar-r-dynamic-black_5.jpg"
                            alt="Range Rover SV Black" class="car-main-image">
                        </div>
                        <table class="responsive-table">
                            <tr>
                                <th>Модель</th>
                                <th>Цена за день</th>
                                <th>Характеристики</th>
                            </tr>
                            <tr>
                                <td><strong>Range Rover SV Black</strong></td>
                                <td><strong>25 000 ₽</strong></td>
                                <td>
                                    <div class="nested-list">
                                        <ul>
                                            <li><strong>Технические характеристики</strong>
                                                <ul>
                                                    <li>Двигатель: 4.4 л V8 (530 л.с.)</li>
                                                    <li>Коробка передач: АКПП (8-ступенчатая)</li>
                                                    <li>Год выпуска: 2024</li>
                                                    <li>Тип кузова: Внедорожник</li>
                                                    <li>Привод: полный (4WD)</li>
                                                    <li>Разгон 0-100 км/ч: 4.6 сек</li>
                                                    <li>Расход топлива: 12.8 л/100км
                                                        <ul>
                                                            <li>Город: 15.2 л/100км</li>
                                                            <li>Трасса: 10.5 л/100км</li>
                                                        </ul>
                                                    </li>
                                                    <li>Дорожный просвет: 295 мм</li>
                                                </ul>
                                            </li>
                                            <li><strong>Особенности</strong>
                                                <ul>
                                                    <li>Эксклюзивная отделка SV Black</li>
                                                    <li>Пневматическая подвеска с адаптацией</li>
                                                    <li>Режим бездорожья Terrain Response 2</li>
                                                    <li>Система прозрачного капота</li>
                                                    <li>Массажный функция передних сидений</li>
                                                    <li>29-дюймовые колеса</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>

                <!-- Седан -->
                <div id="sedan" class="vehicle-section">
                    <h2> Седан</h2>
                    <div class="table-container">
                        <div class="car-main-image-container">
                            <img src="https://www.carscoops.com/wp-content/uploads/2024/04/2025-Mercedes-S-class-facelift-00021.jpg" 
                                 alt="Mercedes-Benz S-Class AMG S 63" class="car-main-image">
                        </div>
                        <table class="responsive-table">
                            <tr>
                                <th>Модель</th>
                                <th>Цена за день</th>
                                <th>Характеристики</th>
                            </tr>
                            <tr>
                                <td><strong>2025 Mercedes-Benz S-Class AMG S 63 E PERFORMANCE</strong></td>
                                <td><strong>30 000 ₽</strong></td>
                                <td>
                                    <div class="nested-list">
                                        <ul>
                                            <li><strong>Технические характеристики</strong>
                                                <ul>
                                                    <li>Двигатель: 4.0 л V8 + электромотор (802 л.с.)</li>
                                                    <li>Коробка передач: АКПП (9-ступенчатая AMG Speedshift)</li>
                                                    <li>Год выпуска: 2025</li>
                                                    <li>Тип кузова: Седан</li>
                                                    <li>Привод: полный (4MATIC+)</li>
                                                    <li>Разгон 0-100 км/ч: 3.3 сек</li>
                                                    <li>Запас хода на электротяге: 33 км</li>
                                                    <li>Расход топлива: 8.9 л/100км
                                                        <ul>
                                                            <li>Город: 10.5 л/100км</li>
                                                            <li>Трасса: 7.8 л/100км</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><strong>Технологии и комфорт</strong>
                                                <ul>
                                                    <li>Гибридная система E PERFORMANCE</li>
                                                    <li>Активная пневмоподвека AMG RIDE CONTROL</li>
                                                    <li>Цифровая панель MBUX Hyperscreen</li>
                                                    <li>Система AR-навигации</li>
                                                    <li>Биометрический доступ</li>
                                                    <li>Система фильтрации воздуха ENERGIZING</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Страница аксессуаров -->
    <div id="accessories" class="page">
        <div class="container">
            <div class="section">
                <h1>Дополнительные аксессуары</h1>
                <p>Подберите аксессуары для вашего автомобиля. Увеличивайте или уменьшайте количество с помощью кнопок [-] и [+].</p>
                
                <div class="accessories-catalog">
                    <table class="accessory-table">
                        <tr>
                            <th>АКСЕССУАР</th>
                            <th>ЦЕНА ЗА 1шт</th>
                            <th>КОЛИЧЕСТВО</th>
                            <th>ЦЕНА ЗА ВСЁ</th>
                        </tr>
                        
                        <tr>
                            <td align="center">Детское автокресло</td>
                            <td align="center"><b id="cena_1">500</b> руб.</td>
                            <td align="center">
                                <div class="quantity-control">
                                    <button class="quantity-btn minus" onclick="minus(1)">-</button>
                                    <b id="col_1">0</b> шт.
                                    <button class="quantity-btn" onclick="plus(1)">+</button>
                                </div>
                            </td>
                            <td align="center"><b id="cenap_1">0</b> руб.</td>
                        </tr>
                        
                        <tr>
                            <td align="center">авторегистратор</td>
                            <td align="center"><b id="cena_2">1000</b> руб.</td>
                            <td align="center">
                                <div class="quantity-control">
                                    <button class="quantity-btn minus" onclick="minus(2)">-</button>
                                    <b id="col_2">0</b> шт.
                                    <button class="quantity-btn" onclick="plus(2)">+</button>
                                </div>
                            </td>
                            <td align="center"><b id="cenap_2">0</b> руб.</td>
                        </tr>
                        
                        <tr>
                            <td align="center">Bluetooth-модуль</td>
                            <td align="center"><b id="cena_3">200</b> руб.</td>
                            <td align="center">
                                <div class="quantity-control">
                                    <button class="quantity-btn minus" onclick="minus(3)">-</button>
                                    <b id="col_3">0</b> шт.
                                    <button class="quantity-btn" onclick="plus(3)">+</button>
                                </div>
                            </td>
                            <td align="center"><b id="cenap_3">0</b> руб.</td>
                        </tr>
                        
                        <tr>
                            <td align="center">Дополнительная страховка</td>
                            <td align="center"><b id="cena_4">1000</b> руб.</td>
                            <td align="center">
                                <div class="quantity-control">
                                    <button class="quantity-btn minus" onclick="minus(4)">-</button>
                                    <b id="col_4">0</b> шт.
                                    <button class="quantity-btn" onclick="plus(4)">+</button>
                                </div>
                            </td>
                            <td align="center"><b id="cenap_4">0</b> руб.</td>
                        </tr>
                    </table>
                    
                    <div class="total-section">
                        ИТОГО: <b id="itog">0</b> руб.
                    </div>
                </div>
                
                <div class="section">
                    <h2>Как заказать аксессуары</h2>
                    <p>Выберите нужные аксессуары, укажите количество и перейдите к оформлению заказа. Все выбранные аксессуары будут подготовлены к вашему приезду.</p>
                    
                    <!-- Измененная кнопка - теперь форма -->
                    <form action="https://www.google.com/search" method="get" target="_blank">
                        <input type="hidden" name="q" value="Аренда автомобилей с аксессуарами">
                        <input type="hidden" name="form_type" value="accessories_booking">
                        
                        <!-- Скрытые поля для передачи данных об аксессуарах -->
                        <input type="hidden" id="hidden_child_seat" name="child_seat" value="1">
                        <input type="hidden" id="hidden_dvr" name="dvr" value="1">
                        <input type="hidden" id="hidden_bluetooth" name="bluetooth" value="1">
                        <input type="hidden" id="hidden_insurance" name="insurance" value="1">
                        <input type="hidden" id="hidden_total" name="total" value="2700">
                        
                        <button type="submit" class="btn">Выбрать</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <!-- Страница условий аренды -->
    <div id="terms" class="page">
        <div class="container">
            <div class="section">
                <h1>Условия аренды</h1>

                <div id="requirements">
                    <h2> Требования к арендатору</h2>
                    <div class="nested-list">
                        <ol>
                            <li>Основные требования
                                <ul>
                                    <li>Возрастные ограничения
                                        <ul>
                                            <li>Минимальный возраст: 21 год</li>
                                            <li>Для премиум-класса: от 25 лет</li>
                                            <li>Максимальный возраст: 70 лет</li>
                                        </ul>
                                    </li>
                                    <li>Водительский стаж
                                        <ul>
                                            <li>Общий стаж: от 2 лет
                                                <ul>
                                                    <li>Для эконом-класса: от 1 года</li>
                                                    <li>Для премиум-класса: от 3 лет</li>
                                                </ul>
                                            </li>
                                            <li>Отсутствие серьезных нарушений ПДД</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ol>
                    </div>
                </div>

                <div id="documents">
                    <h2> Необходимые документы</h2>
                    <div class="nested-list">
                        <ul>
                            <li>Обязательные документы
                                <ul>
                                    <li>Паспорт гражданина РФ</li>
                                    <li>Водительское удостоверение
                                        <ul>
                                            <li>Действующее</li>
                                            <li>Соответствующей категории</li>
                                            <li>Срок действия не истек</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div id="insurance">
                    <h2> Страхование</h2>
                    <div class="nested-list">
                        <ul>
                            <li>Полная страховка включена в стоимость
                                <ul>
                                    <li>КАСКО - полное покрытие</li>
                                    <li>ОСАГО - обязательная страховка</li>
                                    <li>Дополнительная страховка - опционально</li>
                                </ul>
                            </li>
                            <li>Условия страхового покрытия
                                <ul>
                                    <li>Франшиза: 10 000 руб.</li>
                                    <li>Не покрывается ущерб от нарушения ПДД</li>
                                    <li>Полный перечень условий в договоре</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Страница контактов -->
    <div id="contacts" class="page">
        <div class="container">
            <div class="section">
                <h1>Контакты</h1>
                
                <div class="nested-list">
                    <h2>Наши офисы</h2>
                    <ul>
                        <li> Москва
                            <ul>
                                <li>Кетчерская улица, 9</li>
                                <li>Телефон: +7 (495) 780-79-09</li>
                                <li>Часы работы: 9:00 - 21:00</li>
                            </ul>
                        </li>
                        <li> Санкт-Петербург
                            <ul>
                                <li>Лиговский пр., 153</li>
                                <li>Телефон: +7 (911) 925-92-64</li>
                                <li>Часы работы: 9:00 - 21:00</li>
                            </ul>
                        </li>
                        <li> Казань
                            <ul>
                                <li>ул. Космонавтов, 73</li>
                                <li>Телефон: +7 (843) 210-36-01</li>
                                <li>Часы работы: 9:00 - 19:00</li>
                            </ul>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    </div>

    <footer>
        <div class="container">
            <p>&copy; 2025 CarGo. Все права защищены.</p>
        </div>
    </footer>

    <script src="project2.js"></script>
</body>
</html>
