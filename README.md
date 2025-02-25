# Dragon News

Dragon News is a dynamic news platform built with React that provides category-wise news updates. It integrates Firebase authentication, React Router for navigation, and Tailwind CSS for a modern UI.

## Features

- **Three-Column Layout**:
  - **Left**: News categories for easy navigation.
  - **Middle**: Displays category-wise news.
  - **Right**: Google and GitHub login options, along with social media links.
- **Authentication**: Firebase authentication with Google and GitHub login.
- **Responsive UI**: Styled using Tailwind CSS for a seamless experience across devices.
- **React Router**: Enables smooth navigation between different sections.
- **Live News Updates**: Fetches news from an external News API.
- **React Marquee**: Adds a scrolling news ticker for breaking news.
- **Moment.js**: Formats timestamps for better readability.

## Technologies Used

- **React**: Component-based UI library.
- **React Router**: Handles navigation.
- **React Icons**: Provides various icons.
- **React Marquee**: Displays a scrolling text effect.
- **Moment.js**: Formats dates and times.
- **Firebase**: Handles authentication (Google & GitHub login).
- **Tailwind CSS**: Provides a responsive and modern UI.
- **News API**: Fetches real-time news updates.

## Live Link: [Dragon News](https://dragon-news-e5189.web.app/category/01)

## Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- **Node.js**: Install from [nodejs.org](https://nodejs.org/).
- **Firebase Account**: Set up a Firebase project on [Firebase Console](https://console.firebase.google.com/).

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/Suprio-Das/dragon-news.git
   cd dragon-news
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Set Up Firebase**:
   - Create a Firebase project.
   - Enable **Google & GitHub authentication** in Firebase Authentication.
   - Add your Firebase configuration in the project.

4. **Start the Application**:

   ```bash
   npm run dev
   ```

   The application will run on `http://localhost:3000`.

## Project Structure

```
dragon-news/
│── src/
│   ├── components/         # Reusable React components
│   ├── pages/              # Different page components
│   ├── routes/             # React Router setup
│   ├── firebase.js         # Firebase configuration
│   ├── App.js              # Main application file
│── public/                 # Static assets
│── index.html              # HTML file
│── package.json            # Project dependencies
```

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.


## Acknowledgements

- [React](https://reactjs.org/)
- [Firebase](https://firebase.google.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [Moment.js](https://momentjs.com/)
- [News API](https://newsapi.org/)
