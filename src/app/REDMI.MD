# 🧱 Tiles Gallery

## 📌 Project Overview
Tiles Gallery একটি modern ও responsive web application যেখানে বিভিন্ন ধরনের aesthetic tiles showcase করা হয়। ব্যবহারকারী tiles browse করতে পারে, search করতে পারে এবং বিস্তারিত তথ্য দেখতে পারে।

---

## 🎯 Project Purpose
- Next.js (App Router) দিয়ে full-stack project তৈরি করা
- Authentication system implement করা
- Responsive UI design করা
- JSON data ও API নিয়ে কাজ করা
- Protected route handle করা

---

## 🌐 Live URL
👉 https://your-live-site-link.vercel.app

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


