# LazyDrobe

LazyDrobe is a full-stack web application that provides users with personalized fashion recommendations and outfit suggestions based on their wardrobe. The application consists of a frontend built with React and a backend powered by FastAPI. This README provides setup instructions for both the frontend and backend along with project architecture details.

## Project Overview

LazyDrobe-Online is designed to help users create outfits, track their fashion trends, and suggest clothing combinations based on their wardrobe. The backend (written in Python) handles all the logic, including fetching fashion trends, generating outfit suggestions, and interacting with the database. The frontend (written in JavaScript with React) allows users to interact with the system, manage their wardrobe, and view suggestions.

### Project Structure

# LazyDrobe Project Structure

This document outlines the structure of the LazyDrobe project.

```plaintext
lazyDrobe/
├── README.md
├── backend/
│   ├── Dockerfile
│   ├── README.md
│   ├── database_setup.sql
│   ├── main.py
│   ├── package.json
│   ├── ETHICS.md
│   ├── alembic/
│   ├── fashion_trends.py
│   ├── models.py
│   ├── requirements.txt
│   ├── LICENSE
│   ├── alembic.ini
│   ├── fetch_ebay_data.py
│   ├── outfit_suggester.py
│   ├── run_fashion_trends.py
│   ├── Postman_Tests.txt
│   ├── constants.py
│   ├── flux.py
│   ├── package-lock.json
│   └── schema.png
├── docker-compose.yml
└── frontend/
    ├── Dockerfile
    ├── build/
    ├── nginx.conf
    ├── package.json
    ├── README.md
    ├── docker-compose.yml
    ├── package-lock.json
    ├── public/
    ├── src/
    └── wireframe.png
```

## Technologies Used

- **Frontend**: React.js, Axios, Webpack, CSS
- **Backend**: Python, FastAPI, Uvicorn, SQLAlchemy
- **Database**: PostgreSQL
- **Containerization**: Docker
- **Authentication**: JWT (JSON Web Tokens) for session management
- **Version Control**: Git, GitHub

---

## Features

- **User Authentication**: Sign up, login, and manage user profiles.
- **Wardrobe Management**: Add, update, and remove clothing items from your wardrobe.
- **Outfit Suggestions**: Generate outfit combinations based on your wardrobe items.
- **Fashion Trends**: Track and view the latest fashion trends.
- **Responsive UI**: Built to work seamlessly on both desktop and mobile devices.

---

## Setup Instructions

### Prerequisites

Before running the project, ensure you have the following installed:

- **Docker**: For containerized development environment
- **Docker Compose**: For managing multi-container Docker applications
- **Python 3.x**: For backend development and running the FastAPI server
- **Node.js**: For frontend development and building the React app
- **Git**: For version control

### Step 1: Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/abd-abdur/lazydrobe_app.git
cd lazydrobe_app
```
Note: Replace username with your GitHub username if you forked the repository.

### Step 2: Backend Setup

1. **Navigate to the backend directory:**

   ```bash
   cd backend
   ```
2. (Optional) Set Up a Virtual Environment
Recommended to use a virtual environment to isolate project dependencies
```
python -m venv .venv
```
On Windows: 
```
.\.venv\Scripts\activate
```
On macOS/Linux: source 
```
.venv/bin/activate
```

3. **Install Python dependencies:**

    ```bash
    pip install -r requirements.txt
    python -m spacy download en_core_web_sm
   ```

4. **Database Setup:**

- Make sure to set up a PostgreSQL database and configure the connection string in `backend/config.py` (if required).
- Alternatively, you can use Docker to spin up a PostgreSQL container as part of the `docker-compose.yml` setup.

5. **Run the Backend**
You can start the FastAPI backend using Uvicorn:
    ```bash
    uvicorn main:app --reload
   ```
This will run the backend on [http://localhost:8000](http://localhost:8000).


### Step 3: Frontend Setup

1. **(In another terminal) Navigate to the Frontend directory:**

   ```bash
   cd frontend
   ```

2. **Install Python dependencies:**

    ```bash
   npm install
   ```
3. **Run the Frontend**
You can start the FastAPI backend using Uvicorn:
    ```bash
    npm start
   ```
This will run the backend on [http://localhost:3000](http://localhost:3000).


### Step 4: Using Docker (Optional but Recommended)

If you prefer using Docker to manage both frontend and backend together, follow these steps:

1. **Build and Start Containers:**
   
From the root directory of the project, run:

   ```bash
   docker-compose up --build

   ```
This will build and start both the frontend and backend containers.

2. **Install Python dependencies:**

    ```bash
   npm install
   ```
3. **Access the Application:**
- **Frontend:** Access it at [http://localhost:80](http://localhost:80).
- **Backend:** The backend API is available at [http://localhost:8000](http://localhost:8000).

### Database Setup

The backend uses PostgreSQL for database management. To set up the database:

1. Ensure your PostgreSQL database is running (via Docker or locally).

2. Run the database migrations to apply the schema:

   ```bash
   alembic upgrade head
   ```
