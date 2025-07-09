# Quote Generator Web App

A modern web app to generate and display random quotes by topic, built with FastAPI (Python) for the backend and Next.js (React) with ShadCN UI for the frontend.

---

## Features
- Enter or select a topic to get 3 random quotes
- Beautiful UI with ShadCN components
- Quote of the Day
- Responsive and mobile-friendly
- Powered by FastAPI backend
- Attribution: "Developed by starix" in the bottom right

---

## Project Structure

```
Assignment 1/
├── backend/           # FastAPI backend
│   ├── main.py
│   ├── quotes.json
│   └── requirements.txt
├── frontend/          # Next.js frontend
│   ├── src/
│   │   └── app/
│   │       └── page.js
│   └── ...
└── README.md
```

---

## Getting Started

### 1. Backend (FastAPI)

```sh
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```
- The backend will run at `http://127.0.0.1:8000`.
- Test with: `http://127.0.0.1:8000/quotes?topic=inspiration`

### 2. Frontend (Next.js + ShadCN UI)

```sh
cd frontend
npm install
npm run dev
```
- The frontend will run at `http://localhost:3000`.

---

## Usage
- Open [http://localhost:3000](http://localhost:3000)
- Select or type a topic (e.g., "inspiration", "life", "success", "motivation", "happiness")
- Click "Get Quotes" to see 3 random quotes
- Enjoy the Quote of the Day and the modern UI!

---

## Deployment
- **Frontend:** Deploy to [Vercel](https://vercel.com/) for best results with Next.js
- **Backend:** Deploy to [Render](https://render.com/), [Railway](https://railway.app/), or as a Vercel serverless function

---

## Credits
- UI: [ShadCN UI](https://ui.shadcn.com/)
- Backend: [FastAPI](https://fastapi.tiangolo.com/)
- Frontend: [Next.js](https://nextjs.org/)
- Developed by starix 