# 🌟 Intern Dashboard Portal

A basic Full Stack Intern Dashboard built using [your tech stack name here, e.g., Node.js + Express + HTML/CSS/JS].

## 🔗 Features

### Frontend (inside `/frontend`)
- Dummy Login/Signup page
- Dashboard with:
  - Intern name (e.g., Kamini Prajapati)
  - Referral code (e.g., kamini2025)
  - Total donations raised (fetched from backend)
  - Rewards/unlockables (static display)

### Backend (inside `/backend`)
- REST API (or static JSON) that returns dummy intern data:
  - `name`, `referralCode`, `donations`

## 🚀 Run Locally

```bash
# Frontend


🗂️ Repository Structure

Fundraising-intern-portal/
├── assets/
│   ├── logo.png
│   └── ...
├── screenshots/
│   ├── homepage.png
│   ├── dashboard.png
│   └── login-form.png
├── index.html
├── style.css
├── script.js
├── README.md
└── .gitignore


⚙️ Setup Instructions
Clone the Repository

git clone https://github.com/Kamini8707/Fundraising-intern-portal.git
cd Fundraising-intern-portal
Open the Project

Just open index.html in any web browser.

Make sure all linked CSS and JS files are in the same directory or properly referenced.

(Optional) Run with Live Server

Install the Live Server extension in VS Code.

Right-click index.html → “Open with Live Server”.


cd frontend
open index.html

# Backend
cd backend
node server.js   # or python app.py / serve static JSON
