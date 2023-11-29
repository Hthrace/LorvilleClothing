# Lorville Clothing - E-commerce Platform

Lorville Clothing is a blend of industry standard technologies, carefully harnessed to create a compelling e-commerce platform. This project serves as a portfolio application, meticulously crafted to demonstrate my proficiency in a range of key technologies, including React, Redux, React Router, Firebase, Styled Components, and OAuth authentication.

## [Live Demo](https://keen-maamoul-18376d.netlify.app/)

This app is deployed on [Netlify](https://www.netlify.com) free tier. So please give the service time to spin up for the demo.

## Table of Contents

- [Technologies and Packages](#technologies-and-packages)
- [Features](#features)
- [Description](#description)
- [Deployment](#deployment)
- [License](#license)

## Technologies and Packages

### Core Technologies

- React: The foundation of our project, enabling the creation of dynamic and responsive user interfaces.
- React Router: Seamlessly navigates users through the application, ensuring a smooth user experience.
- Firebase: Powers the backend, providing robust authentication and data management services.
- Styled Components: Employs the concept of CSS-in-JS to produce maintainable and elegant styles, enhancing visual appeal.
- Vite: A fast development build tool that serves your code via native ES modules, enabling fast development and production builds.

### Authentication

- OAuth: A standardized and secure authentication method that safeguards user data and privacy.

## Features

Lorville Clothing offers a range of features that enhance the shopping experience:

- **Sign Up and Sign In**: Users can securely create accounts and log in using OAuth authentication, ensuring data privacy.

- **Log Out**: A user-friendly log-out option for secure session management.

- **Browse Clothing**: Explore a diverse range of clothing items, conveniently categorized for easy navigation.

- **Add to Cart**: Seamlessly add clothing items to your shopping cart with a single click.

- **Firebase Integration**: Firebase powers user management and clothing data, ensuring efficient data handling and retrieval.

## Description

Lorville Clothing, beyond its role as an e-commerce website, serves as a compelling showcase of my technical aptitude. By skillfully integrating these cutting-edge technologies.

## Deployment

To deploy Lorville Clothing and make it accessible online, you can follow these steps:

### 1. Clone the Repository

Start by cloning the Lorville Clothing repository to your local machine:

```bash
git clone https://github.com/Hthrace/LorvilleClothing.git
cd lorville-clothing
```

### 2. Install Dependencies

Navigate to the project's directory and install the necessary dependencies using npm or yarn:

```bash
npm install
# or
yarn install
```

### 3. Set Up Firebase

To configure Firebase for your Lorville Clothing project, follow these steps:

1. Visit the [Firebase Console](https://console.firebase.google.com/) and sign in with your Google account (or create a new one if you don't have one).

2. Click on "Add Project" and give your project a name, then follow the setup instructions. You can choose the settings that best suit your project.

3. After creating the project, click on the gear icon (Project settings) in the left sidebar.

4. Scroll down to the "Your apps" section and click on the web icon (</>).

5. Register your app by providing a nickname for your app (e.g., "Lorville Clothing") and click "Register App."

6. Firebase will provide you with a Firebase configuration object that includes your API keys. You'll use this information to set up Firebase in your project.

Now that you have obtained your Firebase configuration object, you can set up Firebase in your project without storing sensitive data in the `.env` file.

[Learn More About Firebase API Keys & Security Here](https://stackoverflow.com/questions/37482366/is-it-safe-to-expose-firebase-apikey-to-the-public)

```javascript
// In your project's Firebase configuration file (e.g., firebaseConfig.js)

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

export default firebaseConfig;
```

Replace the placeholder values in the `firebaseConfig` object with the actual values from your Firebase project.

### 4. Build the Project

Build the project to create a production-ready version:

```bash
npm run build
# or
yarn build
```

### 5. Deploy to Hosting Service

Choose a hosting service for deployment. We recommend Netlify due to its ease of use and compatibility with React applications:

- Sign up for a Netlify account if you don't have one.
- Create a new site on Netlify.
- Configure the deployment settings by specifying the build command as `npm run build` or `yarn build` and the publish directory as `build`.

### 6. Deploy to Netlify

Finally, deploy your project to Netlify by linking your GitHub repository. Whenever you push changes to your GitHub repository, Netlify will automatically rebuild and deploy your project.

For more detailed instructions on deploying a React project to Netlify, please refer to [Netlify's documentation](https://docs.netlify.com/).

Your Lorville Clothing project is now deployed and accessible to users online.

## Contribution

This project is a personal portfolio app, and I currently do not accept contributions. However, you are free to fork the repository and modify it to suit your needs. If you have any suggestions or find issues, feel free to create an issue in the repository.

## License

This project is licensed under the [MIT License](LICENSE).

---
