# 🎂 Mom's Magic — Cake Ordering Website

Mom's Magic is a responsive cake ordering website built with React that allows users to explore bestselling cakes, customize their cake, get dynamic price estimates, and place order requests through WhatsApp.

## 🌐 Live Demo

https://moms-magic-cake-website.vercel.app

## ✨ Features

- 🍰 Browse bestselling cakes with images, prices, and ratings
- 🎂 Interactive custom cake builder
- 💰 Dynamic price calculation based on flavour and cake size
- 🎉 Select occasions such as birthdays, anniversaries, and weddings
- ✍️ Add a personalized message for the cake
- 📱 WhatsApp-based cake ordering
- 🧩 Reusable React components
- 📱 Responsive design for desktop and mobile devices
- ⚡ Fast development and build setup using Vite
- 🚀 Deployed on Vercel

## 🛠️ Tech Stack

- React.js
- JavaScript (ES6+)
- HTML5
- CSS3
- React Hooks (`useState`)
- Vite
- Git
- GitHub
- Vercel

## 🧠 How It Works

Users can browse the available cakes and select a cake they are interested in.

The custom cake section allows users to select:

- Cake flavour
- Cake size
- Occasion
- Personalized cake message

React state is used to manage the user's selections.

The estimated cake price is dynamically calculated according to the selected flavour and cake size.

After configuring the cake, users can send their order details through WhatsApp.

## 💰 Dynamic Price Calculation

The application stores base prices for different cake flavours and applies a multiplier depending on the selected cake size.

For example:

```javascript
const flavourPrices = {
  "Chocolate Truffle": 699,
  "Red Velvet": 749,
  "Butterscotch": 649,
  "Vanilla": 599
};

const sizeMultiplier = {
  "0.5": 1,
  "1": 1.7,
  "1.5": 2.3,
  "2": 2.9
};

const estimatedPrice = Math.round(
  flavourPrices[flavour] * sizeMultiplier[size]
);
```

This allows the estimated price to update automatically whenever the user changes the cake configuration.

## 💻 Run Locally

Clone the repository:

```bash
git clone https://github.com/Akshatxsingh/moms-magic-cake-website.git
```

Move into the project directory:

```bash
cd moms-magic-cake-website/client
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in the terminal, typically:

```text
http://localhost:5173
```

## 📂 Project Structure

```text
moms-magic-cake-website/
│
└── client/
    ├── public/
    │
    ├── src/
    │   ├── assets/
    │   │   ├── hero-cake.jpg
    │   │   ├── chocolate.jpg
    │   │   ├── chocolate-truffle.jpg
    │   │   ├── red-velvet.jpg
    │   │   └── cake.jpg
    │   │
    │   ├── components/
    │   │   └── CakeCard.jsx
    │   │
    │   ├── App.jsx
    │   ├── App.css
    │   ├── index.css
    │   └── main.jsx
    │
    ├── package.json
    ├── package-lock.json
    └── vite.config.js
```

## 📱 Responsive Design

The website is designed to work across different screen sizes including:

- Desktop
- Laptop
- Tablet
- Mobile

CSS media queries are used to adapt the layout for smaller screens.

## 🚀 Deployment

The application is deployed using Vercel.

The GitHub repository is connected to Vercel, allowing new production deployments when updates are pushed to the main branch.

### Live Website

https://moms-magic-cake-website.vercel.app

## 🔮 Future Improvements

Future versions of the project could include:

- User authentication
- Shopping cart
- Online payment integration
- Backend API
- Database integration
- Order tracking
- Admin dashboard
- More cake categories and filters

## 👨‍💻 Author

**Akshat Singh**

Built as a React frontend project demonstrating component-based development, state management, responsive UI design, dynamic pricing, and deployment.

---

⭐ If you like this project, consider giving the repository a star!
