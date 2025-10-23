# 💰 Investment Calculator – React Practice Project

- A **React-based Investment Calculator** that enables users to calculate future investment values based on customizable parameters.  
    This project is designed to help practice essential React concepts — including component architecture, state management, list rendering, and conditional content display — in a hands-on way.

---

## 🚀 Features

- 📊 **Dynamic Investment Calculations** – Calculates future values using a pre-built utility function.  
- 🧩 **Reusable Components** – Modular component structure for clean and maintainable code.  
- 🪄 **State Management** – Real-time calculation updates based on user input.  
- 🎨 **Pre-styled UI** – Includes pre-written CSS for a polished look without writing custom styles.  
- 🧮 **Formatted Output** – Results displayed in an easy-to-read currency format.

---

## 🧠 Core Concepts Practiced

- React components & props  
- `useState` hook for managing state  
- Rendering lists & conditional content  
- Component-driven architecture  
- Importing & using utility functions  
- Clean, readable code organization

---

## 🗂️ Project Structure

```bash
src/
│
├── assets/                # Contains the logo/image assets
├── components/            # Your custom React components (e.g., InputForm, ResultsTable, etc.)
├── util/
│   ├── investment.js      # Pre-built investment calculation logic
│   └── formatter.js       # Utility for currency formatting
├── index.css              # Pre-written CSS styles
├── App.jsx
└── main.jsx
```

## ⚡ Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/investment-calculator.git
2. Install Dependencies
bash
Copy code
cd investment-calculator
npm install
3. Run the Development Server
bash
Copy code
npm run dev
This will start the app locally and provide a development URL (usually http://localhost:5173/).
```
##🧰 Technologies Used
-⚛️ React

-🪄 JavaScript (ES6+)

-🖌️ CSS (pre-written, included in the starter project)

-🧮 Utility functions for calculations & formatting

##🧮 How It Works
- Users input investment parameters such as:

- Initial investment amount

- Annual contribution

- Expected return

- Duration (years)

- The app uses the calculateInvestmentResults function provided in util/investment.js to compute future values.

- The results are rendered in a table with currency formatting via the formatter utility.

- If no data is entered, a fallback or placeholder message is shown.

## 🧱 Suggested Components
- Header.jsx – For the app title/logo

- UserInput.jsx – To collect investment parameters

- ResultsTable.jsx – To display the calculation results

- App.jsx – To manage state and logic

## 💡 These are suggestions only — structure can vary.

## 🌱 Learning Goals
- Reinforce fundamental React concepts

- Build a fully functional, interactive UI

- Learn how to break a project into smaller components

- Understand how to manage state & props in a real-world use case

##🧑‍💻 Author
###Eshrak Raman
- GitHub • LinkedIn

## 📜 License
- This project is licensed under the MIT License — see the LICENSE file for details.

## 💡 Additional Notes
- The project includes pre-written CSS — focus your effort on React logic, not styling.

- There are multiple valid solutions. Build it your way!

- This is a practice project, so experimentation is encouraged.