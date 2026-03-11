# 📝 Zadanie 1 – ToDo Lista

W ramach pierwszego zadania stworzyłem prostą **ToDo listę** w Angularze.  
Projekt pozwala dodawać, usuwać oraz oznaczać zadania jako wykonane.

---

## 🎨 Użyte technologie i funkcje

### 🧩 Angular – Data Binding

- **\*ngFor** – do wyświetlania listy zadań  
- **\*ngIf** – do warunkowego renderowania elementów  
- **[ngClass]** – do dynamicznego nadawania klas (np. styl dla ukończonego zadania)

### 🧩 Angular – Komunikacja między komponentami (Dekoratory)

- **@Input()** – przekazywanie danych z komponentu nadrzędnego do dziecka  
- **@Output()** – wysyłanie zdarzeń z komponentu dziecka do nadrzędnego

### 🧩 Angular – Dependency Injection

- Wstrzykiwanie zależności w konstruktorze  
- Tworzenie i używanie serwisów do logiki biznesowej oraz zarządzania danymi

### 🧩 Angular – Subskrypcje i Lifecycle Hooks

- Służące do reagowania na zmiany listy zadań, dzięki temu automatycznie aktualizuje się widok, gdy dane ulegną zmianie.
- onOnInit() - w której zasubskrybowałem todoChanged z serwisu.
- onOnDestroy() - odsubskybowuję, by uniknąć wycieku pamięci.

### 🧩 Angular – Nawigacja + Wyświetlanie szczegółów zadań

- **ActivatedRoute** — do pobierania parametru `id` z URL
- **Router** — do przechodzenia do kolejnego zadania
- **Location** — do powrotu na poprzednią stronę
- **Subskrypcję paramMap** — aby reagować na zmianę parametru w adresie

### 🧩 Angular – HTTP Client + serwer testowy **json-server**

- get() - pobranie wszystkich zadań z testowego serwera,
- post() - dodanie nowego zadania do testowego serwera,
- patch() - aktualizuje status zadania,
- delete() - usuwa zadanie po id.

---

## 💅 Stylowanie

Do stylów użyłem **Bootstrap**, dzięki czemu aplikacja wygląda estetycznie i jest responsywna.

---

## ▶️ Uruchomienie projektu Aby uruchomić projekt lokalnie: 
1. Zainstaluj zależności: 
```bash 
npm install
```
2. Uruchom serwer deweloperski: 
```bash 
ng serve
```
1. Owtórz aplikację pod adresem: 
```bash 
http://localhost:4200
```

## 🚀 Podsumowanie

To zadanie pozwoliło mi przećwiczyć podstawy Angulara, takie jak:
- praca z komponentami,
- data binding,
- dekoratory,
- DI - Dependency Injection,
- dynamiczne style,
- integracja z Bootstrapem,
- lifecycle hooks,
- subskrypcje,
- nawigacja,
- http client.

Kolejne zadania będą pojawiać się w następnych branchach.

---
---

# 📝 Task 1 – ToDo List

For the first task, I created a simple **ToDo list** in Angular.  
The project allows you to add, delete, and mark tasks as completed.

---

## 🎨 Technologies and Features Used

### 🧩 Angular – Data Binding

- **\*ngFor** – to display the list of tasks  
- **\*ngIf** – for conditional rendering of elements  
- **[ngClass]** – to dynamically apply classes (e.g., styling for a completed task)

### 🧩 Angular – Component Communication (Decorators)

- **@Input()** – passing data from a parent component to a child  
- **@Output()** – emitting events from a child component to a parent

### 🧩 Angular – Dependency Injection

- Injecting dependencies via the constructor  
- Creating and using services for business logic and data management

### 🧩 Angular – Subscriptions and Lifecycle Hooks

- Used to react to changes in the task list, ensuring the view updates automatically when data changes.
- **ngOnInit()** - where I subscribed to `todoChanged` from the service.
- **ngOnDestroy()** - unsubscribing to prevent memory leaks.

### 🧩 Angular – Navigation + Displaying Task Details

- **ActivatedRoute** — to retrieve the `id` parameter from the URL
- **Router** — to navigate to the next task
- **Location** — to go back to the previous page
- **Subscribing to paramMap** — to react to parameter changes in the URL

### 🧩 Angular – HTTP Client + mock server **json-server**

- **get()** - fetching all tasks from the mock server
- **post()** - adding a new task to the mock server
- **patch()** - updating the task status
- **delete()** - deleting a task by its ID

---

## 💅 Styling

I used **Bootstrap** for styling, making the application look aesthetic and responsive.

---

## ▶️ Running the Project

To run the project locally: 

1. Install dependencies: 
```bash 
npm install
```

2. Start the development server:
```bash
ng serve
```

3. Open the application at:
```bash
http://localhost:4200
```

## 🚀 Summary
This task allowed me to practice Angular fundamentals, such as:
- working with components,
- data binding,
- decorators,
- DI - Dependency Injection,
- dynamic styling,
- integrating with Bootstrap,
- lifecycle hooks,
- subscriptions,
- navigation,
- HTTP Client.

Future tasks will be added in upcoming branches.

