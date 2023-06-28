# 911 DISPATCHER
[![Project Header](https://i.ibb.co/1LKL8kd/f0bb51f2d3280eae4fc1edaeda449b0ac6fddf2b0394f2fa8c06f5e84585f04e.jpg)](#)
This is a web application for providing information and guidance on handling various emergency situations. It allows users to select the type of emergency and provides relevant articles with instructions and tips for handling specific emergencies.

## Features

- Select the type of emergency from a dropdown menu.
- Based on the selected emergency type, dynamically populate another dropdown menu with specific emergency options.
- Once both the emergency type and specific emergency are selected, display the corresponding article with instructions and tips.
- The application is built using HTML, CSS, and JavaScript.
- The server-side framework Flask is used to handle routing and serve the application.

## Project Structure

The project has the following structure:

- `articles/`: Contains HTML files for each specific emergency. Articles are stored in this folder with filenames corresponding to the specific emergency names (e.g., earthquakes.html, floodings.html, etc.).
- `static/`: Contains static files such as CSS and JavaScript.
  - `script.js`: Handles the dynamic behavior of the application, including populating dropdown menus and loading articles.
  - `styles.css`: Contains the styles for the web application.
- `templates/`: Contains the HTML templates for the web pages.
  - `index.html`: The main HTML template that displays the emergency type and specific emergency dropdowns, as well as the article container.
