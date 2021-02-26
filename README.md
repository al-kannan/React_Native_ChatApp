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

## Create a project
expo init ChatApp

Choose Tabs Typescript

..This will install Javascript dependency

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
