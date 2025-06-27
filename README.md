# Food Ordering Web App

A simple, modern food ordering web application built with vanilla JavaScript and a RESTful backend (such as [json-server](https://github.com/typicode/json-server)). Users can sign up, log in, browse a menu, add items to a cart, and check out. Admin users can add new menu items.

## Table of Contents

- [Features](#features)
- [Usage](#usage)
- [Code Structure](#code-structure)
- [Security Notes](#security-notes)
- [Customization](#customization)
- [Troubleshooting](#troubleshooting)
- [License](#license)
- [Author](#author)

## Features

- **User Authentication**
  - Sign up and log in with a username and password.
  - Admin user detection (e.g., username `"Morris"`).
- **Menu Browsing**
  - Dynamic display of food items from the backend.
- **Cart Functionality**
  - Add, remove, and update quantities of menu items.
  - Real-time cart total updates.
- **Checkout**
  - Review cart items and select shipping options.
- **Admin Features**
  - Admins can add new food items to the menu.
- **Modern UI**
  - Modal dialogs, blur effects, and smooth transitions.


## Usage

1. **Sign up** for a new account or log in with an existing one.
2. **Browse the menu** and view food item details.
3. **Add items to your cart**.
4. **Edit your cart** (change quantities, remove items).
5. **Proceed to checkout** and select shipping.
6. If logged in as an admin, use the **"Add Food"** button to add new menu items.

## Code Structure

- **Authentication:** Handles sign up, login, and admin detection.
- **Menu Rendering:** Dynamically creates menu cards from `/listings`.
- **Cart Management:** Updates cart contents, quantities, and totals.
- **Checkout:** Lists cart items and calculates final price.
- **Admin Features:** Allows adding new food items via a form.
- **UI/UX:** Uses modals and blur effects for a modern feel.

## Security Notes

- **Usernames should be unique.** The app currently identifies admin by username `"Morris"`.
- **Passwords are stored in plain text** for demonstration. Do **not** use this approach in production.
- For real-world use, implement secure authentication and password hashing.

## Customization

- Change the admin username in the login check if needed.
- Add more fields to food items or users as desired.
- Style the app with your own CSS for branding.

## Troubleshooting

- Make sure your backend is running at `http://localhost:3000`.
- Check the browser console for errors.
- If images do not load, verify the image paths.

## License

Feel free to modify and use as needed.

## Author

Built by [Munene Morris]  

**Happy ordering!**
