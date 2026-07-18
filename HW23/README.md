# HW23 — Введення в Docker для тестування

## Завдання

1. Якщо у користувача встановлений Windows 10/11, то встановити й налаштувати WSL 2

2. Встановити Docker. 
 
3. Налаштувати Docker контейнер для проєкту AhmedShaykh/Expense-Tracker-App-With-React.JS та написати кілька простих UI-тестів на нього.

4. Підняти в Docker ReportPortal згідно з офіційною інструкцією (див. попереднє заняття).

### Запуск тестів локально
```bash
npm run test:headed
```

### Запуск через Docker Compose

Піднімає застосунок (`webapp`, порт 3000) і після його готовності (healthcheck) запускає тести (`tests`):

```bash
docker compose up --build
```

Результати тестів виводяться прямо в консоль. 

Зупинити всі контейнери:

```bash
docker compose down
```

Перезапустити лише тести без перебілду застосунку:

```bash
docker compose up --build tests
```
