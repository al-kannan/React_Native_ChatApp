# Mobile App Development Options
## Mobile Applications can be developed in three different methods. 
	1) Using Native languages such as iOS Swift (varient of Objective-C) or Android (Java)
	2) Progressive Web Application Framework such as React JS or Angular JS 
	3) Using Cross Platform Language like React Native

There are advantages and disadvantages on each method, native languages will provide native UI elements that will give same look and feel of the respective platform and will be able to access all hardware capabilities directly which will provide better runtime performance. Negative points include maintaining multiple platoforms, two teams, more expensive development, testing and deployment, all efforts get doubled. 

Progressive Web Application Framework are powerful solutions for a use case where we have a strong need for application to run on both web and mobile platform. Native look and feel and mobile runtime performance is also compromized. 

Cross Platform React Native address the above two problems, one codebase, one team, native UI elements are used, easy to develop and maintain. Negative side of it is a bit of performance is compromized while controlling mobile hardware and executing business rules since these portion of the code will run on a virtual machine as a intermediary. 

Cross Platform React Native is more appealing given the fact that same App need to run on multiple OS platforms. 

# React Native is a Javascript based solution
It is developed by Facebook and made it as Open Source. It is an offshoot from Node.js. Development can be fast since it is an interpreter based, simulators gets refreshed upon save. 

# Development
Ideal to develop from a Mac PC or Laptop since Mac has both iOS and Android simulators. Expo libraries can be leveraged while development which enabled testing on both virtual and physical phone devices. 

# How to get started
## Install VS Code
Search online and follow the installation

## Install Brew
Open a terminal window

ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

## Installing node
brew install node

## Install expo-cli
npm install -g expo-cli

## Install the following on vscode extentions
You should be able to do this with vscode Extensions icon on the left

vim 

React Native Tools

Babel JavaScript

Flow Language Support 

ESLint 

Prettier

## Install Android Studio
search online for instructions

## Install xcode from apps store 
This will take a long time

## Install React Navigation components for this project 
npm install @react-navigation/material-top-tabs

npm install react-native-tab-view

npm install react-native-reanimated

## Create a project
expo init ChatApp

Choose Tabs Typescript

..This will install Javascript dependency

# Project File Contents
Expo init will create a bunch of files, below are the explanation

- App.tsx is the main file, this is the starting point
- app.json is the configuration file for the application
- package.json is the file that contains React Native packages that are installed part of this project
- package-lock.json locks in a verion for each package to maintain consistence in app behaviour
- tsconfig.json is the TypeScript configuration
- types.tsx is the file which will contain TypeScript types which will be used throughtout the code
- screens folder will contain different screens of the App
- navigation folder will contain navigation related components
- hooks folder will contain shared hooks components
- constants folder will contain App constants
- components folder will contain sub-folders for reusable components with its style and data related components
- assets folder will contain fonts and images used by the App
- There other .gitignore, .vscode and .expo are maintained by tools

# How Expo Works
when we run "npm start" it actually start expo.

Expo comes with browser DevTools and Metro bundler

Expo Start will start a listener at port 19000 at your local PC/Laptop

Expo DevTools allows you to launch iOS simulator and Android emulator and run the App. Besides console log will be captured by DevTools and shown on stdout and on the browser

MetroBundler is the one that talks to virtual/physical device



For physical device run, we need to download Expo app from the app store and then scan the QR code that is shown on the stdout from npm start command

On the Vscode if we change code and save, Expo will refresh the app on virtual/physical device

# Program Logic
### The entry point is the App.tsx
- export default function App() is basically the main function
- import statubar, react, safeareaprovider components
- import Navigation component from custom navigation_index file
- send the jsx content that comes out of the Navigation component
- Navigation component will wrap landing screen and then all subsequent screen and data

### Navigation_index file
- Import NavigationContainer, createStackNavigator, icons
- Import re-usable custom components like MainTabNavigator
- Import branch out screens
- Navigation function
- - Wrap with NavigationContainer jsx that comes out of RootNavigator
- RootNavigator
- - This function will send back jsx lines with 
- - Stack.Navigator is the wrapper with color, header, layout, Stack.Screens
- - Stack Screens include MainTabNavigator, ChatRoomScreen, ContactScreen and NotFound screen

### MainTabNavigator
- This is the one that displays the top level menu for navigation
- Navigation bar title, icons on the right and menu items beneath, each one will have a link to screens

### ChatScreen
- Import chatRoom data from components/data folder
- Using FlatList list them up
- Use ChatListItem sub component to list each one of them with similar alignment

### ChatListItem Helper function
- This is created to call for each item and diplay consistantly, FlatList will make the call
- Key point here is for each line item upon clicking the navigation.navigate will be called with props
- Basically batch out to the respective ChatRoom Screen

### ChatRoom Screen
- Import chatRoomData from components/data folder
- Using FlagList list the chat messages, use a helper module to display the messages

### ChatMessage helper function
- Basically jsx to display message, timing, left/right justification, your message versus other's message etc., 

### InputBox component
- This is part of the ChatRoom Message screen, after listing past messages InputBox will appear at the end
- This will contain the jsx View to display TextInput component, displaying smile icon in the left
- Displaying attachment icon, camera and finally the micro phone icon, all having TouchableOpacity (i.e., onPress) function calls
- on-Press local function will be created to send data back to back-end as well as maintaining a State object locally


