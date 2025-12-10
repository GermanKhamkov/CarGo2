function plus(n) {
    var cena = document.getElementById("cena_" + n);
    var col = document.getElementById("col_" + n);
    var cenap = document.getElementById("cenap_" + n);
    var itog = document.getElementById("itog");
    
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
