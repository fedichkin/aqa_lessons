# e2e Tests 

https://www.clicars.com/

### Test Case 1: Зайти на головну сторінку, прийняти кукі та перевірити наявність логотипу

 - Переходимо на сторінку https://www.clicars.com/
 - Очікуємо елемент з селектором `#CybotCookiebotDialog`
 - Клікаємо на кнопку "Прийняти" з селектором `#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll`
 - Елемент з селектором `#CybotCookiebotDialog` має зникнути
 - Очікуємо елемент з селектором `img.logo` (логотип)

### Test Case 2: Перевірка наявності пункту меню "Продати авто" і полей форми для продажу авто

 - Переходимо на сторінку https://www.clicars.com/
 - Очікуємо елемент з селектором `.navigation-bar__menu a[href="/vender-coche"]` (кнопка "Продати авто")
 - Клікаємо на кнопку "Продати авто"
 - Очікуємо елемент з селектором `form#form-vender-auto` (форма для продажу авто)
 - Перевіряємо наявність полей форми: 
   - `[data-name="idMaker"]` (марка авто)
   - `[data-name="idModel"]` (модель авто)
   - `[data-name="year"]` (рік випуску)
   - `[data-name="idBody"]` (кузов авто)
 - Перевіряємо наявність кнопки "Продовжити" з селектором `sr-button[type="submit"]`

### Test Case 3: Перевірка наявності пункту меню "Купить авто" і трьох підпунктів меню

 - Переходимо на сторінку https://www.clicars.com/
 - Очікуємо елемент з xpath `//div[@class="navigation-bar__menu"]//li[contains(@class,"collapsible")]/span[text()="Comprar coche"]` (кнопка "Купить авто")
 - Клікаємо на кнопку "Купить авто"
 - Перевіряємо наявність трьох підпунктів меню (вони відображаються і клікабельні):
   - `//div[@class="navigation-bar__menu"]//a[text()="Coches segunda mano"]` (Б/у авто)
   - `//div[@class="navigation-bar__menu"]//a[text()="Coches Km0"]` (Нові авто)
   - `//div[@class="navigation-bar__menu"]//a[text()="Mis favoritos"]` (Улюблені авто)

### Test Case 4: Пошук авто за маркою та перевірка результатів пошуку

 - Переходимо на сторінку https://www.clicars.com/
 - Очікуємо елемент з xpath `//input[@id="autocomplete-1-input"]` (поле для пошуку авто)
 - Вводимо в поле "Toyota" і натискаємо Enter
 - Очікуємо що присутні елементи з xpath `//article[@class="sale-list__item"]` (результати пошуку)
 - Перевіряємо перший результат пошуку на наявність тексту "Toyota" в xpath `//article[@class="sale-list__item"][1]//div[contains(@class,"car-card-data")]//strong[contains(text(), "Toyota")]`