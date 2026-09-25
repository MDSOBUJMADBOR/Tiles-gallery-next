````md
# 🏠 TileGallery

A modern, responsive, and visually polished tile showcase platform built with **Next.js**, **React**, **Tailwind CSS**, **HeroUI**, **Framer Motion**, and **Better Auth**.

TileGallery allows users to explore premium tile collections, search and browse products, view detailed tile information, and manage their profile through a clean and responsive interface.

---

## ✨ Live Project

🔗 **Live Website:**  
https://tiles-gallery-next.vercel.app/

---

## 📌 Project Overview

**TileGallery** is a modern tile collection platform designed to provide users with an elegant and user-friendly browsing experience.

The platform focuses on:

- 🧱 Premium tile collections
- 🔍 Easy tile searching
- 📱 Fully responsive design
- 🎨 Modern UI/UX
- ⚡ Fast page navigation
- 🔐 User authentication
- 👤 User profile management
- ✨ Smooth animations
- 📦 Tile details and availability
- 🎯 Professional product presentation

---

# 🚀 Features

## 🏠 Home Page

The homepage includes several modern sections designed to create a professional product showcase experience.

### Hero Banner

- Auto-changing hero banners
- Smooth Framer Motion animations
- Premium tile imagery
- Call-to-action buttons
- Responsive layout
- Modern gradient overlays

### Shop by Category

Users can explore tiles by different categories.

Examples:

- Ceramic
- Marble
- Stone
- Wood
- Mosaic
- Outdoor
- Modern
- Luxury

### Featured Tiles

Displays a curated collection of featured tiles.

Each tile includes:

- Tile image
- Tile name
- Price
- Category
- Availability
- View Details button

### Why Choose Us

Highlights the main benefits of the platform.

Examples:

- Premium Quality
- Modern Designs
- Trusted Collection
- Easy Shopping

### Modern Collection

Showcases modern and stylish tile designs with premium visual presentation.

### How It Works

Simple step-by-step explanation of how users can explore the tile collection.

### Trending Tiles

Displays popular and trending tile designs.

### Interior Inspiration

Provides visual inspiration for different interior spaces.

### Customer Testimonials

Includes:

- Multiple customer reviews
- Customer avatars
- 5-star ratings
- Automatic right-to-left marquee
- Pause on hover
- Smooth animations

### Statistics

Displays important project/platform statistics.

### FAQ

Interactive FAQ section with:

- Smooth open/close animation
- Chevron rotation
- Clean card-based design

### Final CTA

A final call-to-action section encouraging users to explore the tile collection.

---

# 🧱 All Tiles

The All Tiles page provides a complete tile collection.

### Features

- 🔍 Search tiles by title
- 📄 Pagination
- 📊 Result count
- ⏳ Loading skeleton
- ❌ Empty search state
- 📱 Responsive grid
- Smooth page scrolling

The page displays **8 tiles per page**.

---

# 🔎 Search System

Users can search tiles using the search field.

Example:

```text
Search tiles by title...
````

The search system:

1. Takes the user's search input
2. Converts it to lowercase
3. Filters the tile collection
4. Updates the result count
5. Resets pagination
6. Displays matching products

---

# 📄 Pagination

The All Tiles page includes pagination.

Example:

```text
Previous  1  2  3  4  Next
```

With:

```js
ITEMS_PER_PAGE = 8;
```

If there are 32 tiles:

```text
32 / 8 = 4 pages
```

---

# 🧱 Tile Details

Each tile has its own details page.

Example:

```text
/all-tiles/tile_001
```

The details page includes:

* Large product image
* Tile title
* Description
* Price
* Category
* Material
* Dimensions
* Availability
* Add to Cart button
* Save button
* Trust information
* Responsive layout

---

# 👤 Authentication

TileGallery uses **Better Auth** for authentication.

Users can:

* Register
* Login
* Logout
* View profile
* Update profile
* Manage account information

---

# 👤 User Profile

The profile page allows authenticated users to view and update their information.

Profile features include:

* User name
* Email
* Profile image
* Account information
* Update profile modal
* Professional responsive UI

---

# 🧭 Navigation

The navbar includes:

* Home
* All Tiles
* My Profile
* Login
* Register

After authentication, users can access their account menu.

---

# 📢 News Marquee

The website includes a modern announcement marquee.

Example announcements:

```text
✨ Elevate Your Space with Luxury Tiles
⭐ Fresh & Modern Tile Designs Just Landed
🎯 Crafted for Modern Living
```

Features:

* Continuous scrolling
* Pause on hover
* Responsive design
* Blue premium theme
* Smooth animation
* Latest Updates badge

---

# 🎨 404 Not Found Page

TileGallery includes a custom professional 404 page.

Features:

* Large animated 404
* Search icon
* Background glow
* Gradient typography
* Back to Home button
* Explore All Tiles button
* Responsive layout

---

# ⏳ Loading Page

A custom loading page is included with:

* Animated tile icon
* Loading text
* Progress animation
* Animated dots
* Background glow
* Responsive design

---

# 📱 Responsive Design

TileGallery is designed to work across different screen sizes.

Supported layouts:

| Device            | Support |
| ----------------- | ------- |
| 📱 Mobile         | ✅       |
| 📱 Tablet         | ✅       |
| 💻 Laptop         | ✅       |
| 🖥️ Desktop       | ✅       |
| 🖥️ Large Screens | ✅       |

The interface uses responsive Tailwind CSS utilities such as:

```text
sm:
md:
lg:
xl:
```

---

# 🛠️ Tech Stack

## Frontend

* Next.js
* React
* JavaScript
* Tailwind CSS
* HeroUI
* Framer Motion
* Lucide React
* React Icons

## Authentication

* Better Auth

## Data

* JSON-based tile dataset
* REST-style data fetching

## Deployment

* Vercel

---

# 📦 Dependencies

Main dependencies used in this project include:

```json
{
  "next": "Next.js",
  "react": "React",
  "react-dom": "React DOM",
  "@heroui/react": "HeroUI",
  "better-auth": "Better Auth",
  "framer-motion": "Framer Motion",
  "lucide-react": "Lucide React",
  "react-icons": "React Icons",
  "react-fast-marquee": "React Fast Marquee"
}
```

---

# 📁 Project Structure

```text
Tiles-gallery-next/
│
├── public/
│   ├── images/
│   └── ...
│
├── src/
│   │
│   ├── app/
│   │   ├── all-tiles/
│   │   │   ├── [id]/
│   │   │   │   └── page.jsx
│   │   │   └── page.jsx
│   │   │
│   │   ├── profile/
│   │   │   └── page.jsx
│   │   │
│   │   ├── login/
│   │   │   └── page.jsx
│   │   │
│   │   ├── register/
│   │   │   └── page.jsx
│   │   │
│   │   ├── loading.jsx
│   │   ├── not-found.jsx
│   │   ├── page.jsx
│   │   ├── layout.jsx
│   │   └── globals.css
│   │
│   ├── components/
│   │   ├── Banner.jsx
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── TilesCard.jsx
│   │   ├── Testimonials.jsx
│   │   ├── StatsSection.jsx
│   │   ├── FAQ.jsx
│   │   ├── FinalCTA.jsx
│   │   ├── ShopByCategory.jsx
│   │   ├── FeaturedTiles.jsx
│   │   ├── TrendingTiles.jsx
│   │   ├── ModernCollection.jsx
│   │   ├── WhyChooseUs.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── InteriorInspiration.jsx
│   │   └── MarqueePage.jsx
│   │
│   └── lib/
│       ├── auth-client.js
│       └── ...
│
├── data.json
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── jsconfig.json
├── eslint.config.mjs
└── README.md
```

---

# ⚙️ Installation

## 1. Clone the Repository

```bash
git clone https://github.com/MDSOBUJMADBOR/Tiles-gallery-next.git
```

---

## 2. Go to the Project Directory

```bash
cd Tiles-gallery-next
```

---

## 3. Install Dependencies

Using npm:

```bash
npm install
```

Or using yarn:

```bash
yarn install
```

Or using pnpm:

```bash
pnpm install
```

---

# 🔐 Environment Variables

Create a `.env.local` file in the root directory.

Example:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
BETTER_AUTH_SECRET=your_secret_here
BETTER_AUTH_URL=http://localhost:3000
```

If your authentication system requires additional variables, add them according to your Better Auth configuration.

> ⚠️ Never commit `.env.local` to GitHub.

Make sure `.gitignore` contains:

```gitignore
.env
.env.local
.env.production
.env.development
```

---

# ▶️ Run the Development Server

Start the development server:

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

---

# 🏗️ Build for Production

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

---

# 🧹 Lint

Run ESLint:

```bash
npm run lint
```

---

# 🌐 Deployment

TileGallery can be deployed easily using Vercel.

### Step 1

Push the project to GitHub.

```bash
git add .
git commit -m "Add TileGallery project"
git push origin main
```

### Step 2

Open Vercel and import the GitHub repository.

### Step 3

Configure environment variables.

### Step 4

Deploy the application.

After deployment, Vercel will provide a production URL.

---

# 🖼️ Image Configuration

The project uses external images from services such as:

```text
images.unsplash.com
i.pravatar.cc
```

These domains need to be configured in:

```text
next.config.mjs
```

Example:

```js
/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
    ],
  },
};

export default nextConfig;
```

---

# 🎨 UI & Design System

TileGallery uses a professional blue-based visual system.

### Primary Blue

```text
#0f4ea6
```

### Dark Blue

```text
#0c3e85
```

### Main Background

```text
#ffffff
```

### Secondary Background

```text
#f8fafc
```

The design focuses on:

* Clean spacing
* Rounded cards
* Soft shadows
* Subtle gradients
* Smooth animations
* Consistent typography
* Responsive layouts

---

# ✨ Animation

Framer Motion is used for:

* Hero animations
* Section entrance animations
* Card hover effects
* FAQ transitions
* Loading animations
* Testimonial marquee effects
* Background image transitions

Example:

```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>
  Content
</motion.div>
```

---

# 🧩 Main Routes

| Route             | Description         |
| ----------------- | ------------------- |
| `/`               | Homepage            |
| `/all-tiles`      | All tile collection |
| `/all-tiles/[id]` | Tile details        |
| `/login`          | Login page          |
| `/register`       | Registration page   |
| `/profile`        | User profile        |
| `/not-found`      | 404 page            |

---

# 🧱 Tile Data Structure

Each tile follows a structure similar to:

```json
{
  "id": "tile_001",
  "title": "Ceramic Blue Tile",
  "description": "Elegant blue ceramic tile...",
  "image": "https://images.unsplash.com/...",
  "category": "Ceramic",
  "price": 45.99,
  "currency": "USD",
  "dimensions": "60x60 cm",
  "material": "Ceramic",
  "inStock": true
}
```

---

# 🔍 Search Example

The tile search is performed on the client side.

```js
const filteredTiles = tiles.filter((tile) =>
  tile.title?.toLowerCase().includes(
    search.trim().toLowerCase()
  )
);
```

---

# 📄 Pagination Example

The application uses:

```js
const ITEMS_PER_PAGE = 8;
```

Current page data:

```js
const startIndex =
  (currentPage - 1) * ITEMS_PER_PAGE;

const currentTiles =
  filteredTiles.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );
```

---

# 🔐 Authentication Flow

The authentication flow uses Better Auth.

Basic flow:

```text
User
  ↓
Register / Login
  ↓
Better Auth
  ↓
Session Created
  ↓
Authenticated User
  ↓
Profile / Protected Features
```

---

# 👤 Profile Update

Users can update profile information through the profile modal.

Example fields:

```text
Name
Email
Profile Image
```

The update interface includes:

* Form validation
* Loading state
* Error handling
* Success feedback
* Responsive modal

---

# 📊 Current Project Highlights

```text
Modern Homepage             ✅
Responsive Navbar           ✅
Hero Banner                 ✅
Auto Changing Banner        ✅
Tile Categories             ✅
Featured Tiles              ✅
All Tiles Page              ✅
Search                      ✅
Pagination                  ✅
Tile Details                ✅
Testimonials                ✅
Testimonial Marquee         ✅
FAQ                         ✅
FAQ Animation               ✅
Statistics Section          ✅
Final CTA                   ✅
Professional Footer         ✅
News Marquee                ✅
404 Page                    ✅
Loading Page                ✅
Authentication              ✅
Profile                     ✅
Responsive Design           ✅
```

---

# 🔮 Future Improvements

Planned improvements may include:

* 🛒 Shopping cart
* ❤️ Wishlist
* 💳 Online payment
* 📦 Order management
* 🔔 Notifications
* ⭐ Product reviews
* 🔎 Advanced filtering
* 🏷️ Discount system
* 📊 Admin dashboard
* 🧾 Order history
* 🗄️ MongoDB product management
* 👨‍💼 Admin product management
* 📈 Sales analytics
* 📱 Mobile optimization improvements

---

# 🧪 Testing Checklist

Before deployment, check:

```text
[ ] Homepage loads correctly
[ ] Navbar links work
[ ] Login works
[ ] Registration works
[ ] Logout works
[ ] Profile works
[ ] Search works
[ ] Pagination works
[ ] Tile details work
[ ] Images load correctly
[ ] 404 page works
[ ] Loading page works
[ ] FAQ animation works
[ ] Marquee works
[ ] Mobile responsive layout works
[ ] Tablet layout works
[ ] Desktop layout works
[ ] Production build succeeds
[ ] ESLint passes
```

Run:

```bash
npm run lint
npm run build
```

---

# 🐛 Troubleshooting

## Images Not Loading

Check:

```text
next.config.mjs
```

Make sure external image domains are configured.

---

## Build Error

Delete the Next.js cache:

```bash
rm -rf .next
```

Windows PowerShell:

```powershell
Remove-Item -Recurse -Force .next
```

Then:

```bash
npm run dev
```

---

## Dependency Problem

Remove `node_modules` and reinstall:

```bash
rm -rf node_modules
npm install
```

Windows PowerShell:

```powershell
Remove-Item -Recurse -Force node_modules
npm install
```

---

# 📸 Screenshots

Add project screenshots here.

Example:

```md
## Homepage

![TileGallery Homepage](./screenshots/homepage.png)

## All Tiles

![All Tiles Page](./screenshots/all-tiles.png)

## Tile Details

![Tile Details](./screenshots/tile-details.png)

## Profile

![Profile Page](./screenshots/profile.png)
```

Recommended folder:

```text
screenshots/
├── homepage.png
├── all-tiles.png
├── tile-details.png
└── profile.png
```

---

# 📈 Performance & UX

The project focuses on:

* Responsive layouts
* Optimized Next.js images
* Lazy loading
* Loading skeletons
* Smooth transitions
* Accessible buttons
* Semantic HTML
* Clean component architecture
* Reusable UI components

---

# 🔒 Security Notes

Do not expose sensitive credentials inside client-side code.

Never commit:

```text
.env
.env.local
.env.production
```

Never expose:

```text
API secrets
Database credentials
Authentication secrets
Private keys
```

Use environment variables for sensitive configuration.

---

# 🤝 Contributing

Contributions are welcome.

### 1. Fork the repository

```bash
git clone https://github.com/MDSOBUJMADBOR/Tiles-gallery-next.git
```

### 2. Create a new branch

```bash
git checkout -b feature/new-feature
```

### 3. Make your changes

```bash
git add .
```

### 4. Commit

```bash
git commit -m "Add new feature"
```

### 5. Push

```bash
git push origin feature/new-feature
```

### 6. Create a Pull Request

Open a Pull Request on GitHub.

---

# 📝 Commit Convention

Recommended commit messages:

```text
feat: add tile search
feat: add testimonials marquee
feat: add authentication
fix: fix pagination issue
fix: fix image loading
style: improve navbar design
style: improve tile card
refactor: restructure components
docs: update README
```

---

# 👨‍💻 Author

## Sobuj Madbor

Frontend Developer

### GitHub

https://github.com/MDSOBUJMADBOR

### LinkedIn

https://www.linkedin.com/in/md-sobuj-madbor

### Facebook

https://www.facebook.com/sobuj.madbor.735717

### Email

[sobujmadbor660@gmail.com](mailto:sobujmadbor660@gmail.com)

### Phone

+88 01826140440

---

# 📄 License

This project is created for educational and portfolio purposes.

You may modify and extend the project for learning and personal use.

---

# ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.

---

<div align="center">

### 🧱 TileGallery

**Beautiful Tiles. Better Spaces.**

Made with ❤️ using Next.js and React.

</div>
```
