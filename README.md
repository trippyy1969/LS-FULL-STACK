# Food Ordering Hub

A responsive food ordering web application built using **React** and **Vite** as part of the **WnCC Full Stack Web Development Learners' Space – Week 2 Assignment**.

The application allows users to browse a menu, search for food items, add or remove items from the cart, and view a live order summary. It also includes features such as Dark Mode, a checkout confirmation popup, and a responsive user interface.

## Features

* Responsive food menu grid
* Search functionality
* Add items to cart
* Increase and decrease item quantity
* Automatic removal of items when quantity reaches zero
* Live total price calculation
* Live cart item counter
* Dark Mode / Light Mode toggle
* Clear Cart functionality
* Checkout confirmation popup
* Responsive design

## Technologies Used

* React
* JavaScript (ES6)
* CSS3
* Vite

## Project Structure

```text
food-ordering-hub/
├── public/
│   └── images/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── FoodCard.jsx
│   │   ├── MenuGrid.jsx
│   │   └── CartSidebar.jsx
│   ├── App.jsx
│   ├── data.js
│   ├── index.css
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

## React Concepts Used

* Functional Components
* Props
* useState
* useEffect
* Conditional Rendering
* Event Handling
* State Management
* Dynamic rendering using `map()`
* Array methods such as `find()`, `filter()`, `map()`, and `reduce()`

## Running the Project

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

## Future Improvements

* Store cart data using Local Storage
* Add food categories and filters
* Integrate a backend for order management
* Add user authentication

## Author

**Tripti Gupta**

Second Year Undergraduate

Indian Institute of Technology Bombay

---

Developed as part of the **WnCC Full Stack Web Development Learners' Space – Week 2 Assignment**.
