
# React Native News App

## Project Summary![8q2b3s](https://github.com/talharizvi/SampleProject/assets/33376398/43d2dd55-42ef-420c-9172-dc0620d4afc4)

This is a simple news application built with React Native. It allows users to search for news articles based on a specific query and displays the results in a list. The application retrieves news data from the GNews API and provides a clean and user-friendly interface for browsing news articles.

## Code Walkthrough Details
The code is organized into functional components using React hooks. The main components include:
- App: The main component that handles state management and API calls.
- Button: A custom reusable button component.
- TextInput: A component for entering the search query.
- FlatList: Renders the list of news articles.
- Image: Displays the article image.
- ActivityIndicator: Shows a loading spinner while fetching data.

The code uses the useState and useEffect hooks to manage state and perform API calls. The fetch function is used to retrieve news data from the GNews API, and the response is parsed and displayed in the FlatList component.

## Installation
To run the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your/repository.git`
2. Navigate to the project directory: `cd project-directory`
3. Install dependencies: `npm install`
4. Start the metro server: `npm start`
5. Run the app on android device or emulator: `npx react-native run-android`
6. Run the app on ios device or simulator: `npx react-native run-ios`

Make sure you have the necessary software and tools installed (e.g., Node.js, npm, React Native CLI).

## Usage
1. Launch the app on an iOS or Android emulator or on a physical device.
2. Enter a search query in the provided text input.
3. Tap the "Search" button to fetch news articles related to the query.
4. The results will be displayed in a list.
5. To clear the results, tap the "Clear" button.

## Software and Tools
- React Native: Version 0.71.11
- Development IDE: [Visual Studio Code, Android Studio, XCode]

## Other Details
- The application is currently limited to retrieving news articles in English from the GNews API.
- Future improvements could include pagination, bookmarking articles, and adding more filters for search queries.
