# 🧱 Tiles Gallery

## 📌 Project Overview

**Tiles Gallery** is a modern and responsive web application that showcases a collection of aesthetic and high-quality tiles. Users can browse different tile categories, search for specific products, and view detailed information about each tile through an intuitive and user-friendly interface.

---

## 🎯 Project Purpose

* Build a full-stack web application using **Next.js (App Router)**.
* Implement a secure user authentication system.
* Create a modern, responsive, and user-friendly UI.
* Work with JSON data and REST APIs.
* Protect private routes and manage user access.


---

## 🌐 Live URL
👉  https://tiles-gallery-next.vercel.app

---

## 🚀 Key Features

### 🧱 Layout & Navigation
- Responsive Navbar (Logo, Home, All Tiles, My Profile)
- Login / Logout system
- Custom Footer (Social Links + Contact)

---

### 🏠 Home Page
- Banner: "Discover Your Perfect Aesthetic"
- Marquee text (New Arrivals, Weekly Feature)
- Featured Tiles (Top 4 tiles)
- View Details button

---

### 🔐 Authentication
- Email & Password Login
- Google Login
- Register system:
  - Name
  - Email
  - Photo URL
  - Password
- Error handling (toast/message)
- সফল হলে Home page redirect

---

### 🖼️ All Tiles Page
- Search bar (tile title দিয়ে search)
- Tile Cards:
  - Image
  - Title
  - Details button

---

### 🔍 Tile Details Page (Private)
- Large image preview
- Tile details:
  - Title
  - Description
  - Category
  - Price
  - Tags

---

### 👤 My Profile (Private)
- User information display
- Update feature (Name + Image)

---

### ✏️ Update Profile
- Separate update page
- Input:
  - Name
  - Image URL
- Update button

---

## 🛠️ Technologies Used

- Next.js (App Router)
- React.js
- MongoDB
- BetterAuth
- Tailwind CSS
- DaisyUI / HeroUI

---

## 📦 NPM Packages
- animate.css / swiper.js
- react-icons
- axios / fetch

---

## 📁 JSON Data Example

```json
{
  "id": "tile_001",
  "title": "Ceramic Blue Tile",
  "description": "Premium ceramic tile with blue glaze finish",
  "image": "/images/tiles/tile_001.jpg",
  "category": "ceramic",
  "price": 45.99,
  "currency": "USD",
  "dimensions": "60x60 cm",
  "material": "Ceramic",
  "inStock": true
}
