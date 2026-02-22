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
- nawigacja.

Kolejne zadania będą pojawiać się w następnych branchach.
