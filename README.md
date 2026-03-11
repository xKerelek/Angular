# 📇 Mini CRM

Aplikacja do zarządzania kontaktami.

## 🚀 Główne funkcje

Ten projekt to w pełni funkcjonalna aplikacja typu Single Page Application (SPA), która zawiera:
* **Pełny CRUD:** Tworzenie, odczyt, aktualizacja i usuwanie kontaktów połączone z udawanym (mock) REST API.
* **Wyszukiwanie na żywo:** Filtrowanie kontaktów po imieniu lub nazwisku w czasie rzeczywistym, bez przeładowywania strony.
* **Edycja w locie (Inline Editing):** Płynna aktualizacja numeru telefonu, e-maila i statusu bezpośrednio na kafelku kontaktu.
* **Walidacja formularzy:** Kompleksowa walidacja po stronie frontendu (wymagane pola, min/max długość, format e-mail) z dynamicznymi komunikatami błędów i blokowaniem przycisku wysyłania.
* **Globalne powiadomienia (Toasty):** Niestandardowy system alertów oparty na serwisie i RxJS Subjects, zapewniający elegancki feedback po akcjach użytkownika.
* **Responsywny interfejs:** Czysty i nowoczesny UI zbudowany przy użyciu Tailwind CSS (siatki grid, eleganckie formularze, minimalistyczne przyciski).

## 🛠️ Technologie

* **Framework:** Angular 19 (Komponenty Standalone, nowoczesna składnia `inject()`)
* **Style:** Tailwind CSS
* **Zarządzanie stanem i reaktywność:** RxJS (Observables, Subjects)
* **Backend:** JSON Server (Mock REST API)

## 🏗️ Architektura

Aplikacja wykorzystuje nowoczesne podejście do architektury Angulara:
* **Komponenty Standalone:** Brak starego pliku `app.module.ts`, każdy komponent sam zarządza swoimi zależnościami.
* **Komunikacja oparta na serwisach:** `AlertService` pozwala na komunikację między niezależnymi komponentami w celu wywoływania globalnych powiadomień.
* **Wykrywanie zmian (Change Detection):** Świadome użycie `ChangeDetectorRef` do ręcznego odświeżania widoku przy zdarzeniach asynchronicznych (np. czyszczenie alertów przez `setTimeout`).

---
---

# 📇 Mini CRM 

Contact Management application.

## 🚀 Features

This project is a fully functional Single Page Application (SPA) that includes:
* **Full CRUD Operations:** Create, Read, Update, and Delete contacts connected to a mock REST API.
* **Live Search:** Real-time filtering of contacts by First or Last Name without reloading the page.
* **Inline Editing:** Seamlessly update a contact's phone number, e-mail, and status directly on the contact card.
* **Form Validation:** Comprehensive frontend validation (required fields, min/max length, e-mail format) with dynamic UI feedback and disabled submit buttons.
* **Global Notifications (Toasts):** A custom, service-based alert system using RxJS Subjects to provide non-intrusive feedback after user actions.
* **Responsive UI:** Clean and modern interface built with Tailwind CSS (Grid layouts, elegant forms, ghost buttons).

## 🛠️ Tech Stack

* **Framework:** Angular 19 (Standalone Components, modern `inject()` syntax)
* **Styling:** Tailwind CSS
* **State Management & Reactivity:** RxJS (Observables, Subjects)
* **Backend:** JSON Server (Mock REST API)

## 🏗️ Architecture Highlights

The application utilizes a modern Angular architecture:
* **Standalone Components:** No `app.module.ts` overhead.
* **Service-Driven Communication:** The `AlertService` handles communication between deeply nested or sibling components to trigger global UI toasts.
* **Smart Change Detection:** Usage of `ChangeDetectorRef` to manually trigger view updates for asynchronous events (like `setTimeout` in alerts).
