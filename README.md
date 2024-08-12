# FlashBITS

**FlashBITS** is a simple and modern Flashcard Learning Tool. The application allows users to flip through flashcards and is designed with a clean, minimal interface. The admin has the ability to create, update, and delete flashcards via a dedicated dashboard.

## Tech Stack

- **Frontend:** React.js, Tailwind CSS, DaisyUI, Vite
- **Backend:** Node.js, Express.js, MySQL, Sequelize ORM
- **Deployment:** 
  - **Frontend:** Vercel
  - **Backend:** Render
  - **Database:** Clever Cloud

## Features

- **Flashcards:**
  - Display flashcards with a question on the front and an answer on the back.
  - Click to flip the flashcard and reveal the answer.
  - Navigate through the flashcards with next/previous buttons.
  
- **Admin Dashboard:**
  - **Add Flashcards:** Insert new flashcards with a question and answer.
  - **Edit Flashcards:** Update existing flashcards.
  - **Delete Flashcards:** Remove flashcards from the collection.
  
- **User Authentication:**
  - Admin authentication for secure access to dashboard features.
  - Login and logout functionality.

## Deployment

### Frontend

The frontend is deployed on Vercel. You can access the live application [here](https://flashbits.vercel.app/).

### Backend

The backend is deployed on Render. The API is accessible at [https://flashbits.onrender.com](https://flashbits.onrender.com).

## Environment Variables

To run this project, you will need to add the following environment variables:

### Backend
- `PORT`: Port number
- `DB_HOST`: Database HOST .
- `DB_USER`: DB User username
- `DB_PASSWORD`: DB User password
- `DB_NAME`: DB Name
- `JWT_SECRET`: Secret key for JWT token generation.

### Frontend
- `VITE_API_BASE_URL`: Base URL of the backend API.


