# 🚀 CryptoTrack

CryptoTrack is a **React-based cryptocurrency tracking application** that allows users to view real-time crypto market data, coin details, and price trends using the **CoinGecko API**. The project is built as a **portfolio-ready frontend application** with clean architecture, environment-based configuration, and modern React practices.

---

🔗 **Live Demo:** [CryptoTrack](https://cryptotrack-4nn7.onrender.com)


## 📌 Features

* 📊 View real-time cryptocurrency prices
* 🔍 Detailed coin information (market rank, price, market cap, 24h high/low)
* 📈 Interactive price charts (historical data)
* 🌍 Currency support (USD and more)
* ⚡ Fast and responsive UI
* 🧠 Centralized state management using React Context

---

## 🛠️ Tech Stack

* **Frontend:** React.js, Vite
* **State Management:** React Context API
* **Routing:** React Router DOM
* **Charts:** Custom Line Chart component
* **API:** CoinGecko Demo API
* **Styling:** CSS
* **Version Control:** Git & GitHub

---

## 📂 Project Structure

```
CryptoTrack/
├── src/
│   ├── components/        # Reusable UI components
│   ├── context/           # Global state (CoinContext)
│   ├── pages/             # Pages like Coin details
│   ├── App.jsx
│   └── main.jsx
├── public/
├── .gitignore
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started (Local Setup)

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Varshithagajula/CryptoTrack.git
cd CryptoTrack
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Add environment variables

Create a `.env` file in the project root:

```env
VITE_COINGECKO_API_KEY=-your-api-key
```

### 4️⃣ Run the application

```bash
npm run dev
```

## 🎯 Learning Outcomes

* Hands-on experience with real-world APIs
* Proper API key management in frontend projects
* React Context for global state
* Dynamic routing with React Router
* Environment-based configuration using Vite


## 📌 Future Enhancements

* 🔄 Support for multiple cryptocurrencies
* 💱 More currency options
* ⭐ Watchlist / favorites
* 📱 Improved mobile responsiveness

