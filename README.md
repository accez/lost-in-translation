# Lost in translation (Noroff assignment)

**Instructions:** Build an online sign language translator as a Single Page Application using the React framework.The application will have one main feature: to act as a “translator” from regular text to sign language. The application must be able to translate English words and short sentences to American sign language and displaying it as pictures.

**Goal:** On completion of this assignment, you will be able to:

- Create React applications using React's CRA (create-react-app)
- Use React components to build an application
- Use the React Router to navigate between components
- Use Redux to manage state globally in a React application
- Communicate with an API using React

### Startup page - Login screen

- The user must be able to enter their name.
- Save the username to the Translation API.
- Users that are already logged in may automatically be redirected to the Translation page.

### Translation page - Page where user types in phrase to be translated into sign-language

- A user may only view this page if they are currently logged into the app.
- The user types in the input box at the top of the page. The user must click on the “translate” button to the right of the input box to trigger the translation.
- Translations must be stored using an API.

### Profile page - Page that shows translation history

- The profile page must display the last 10 translations for the current user. You only need to display the text of the translation.
- There must also be a button to clear the translations. This should “delete” in your API and no longer display on the profile page. To simplify things, you may simply delete the records, but you should NEVER delete data from a database.
- The Logout button should clear all the storage and return to the start page.

[Application Demo](https://still-peak-37738.herokuapp.com/)

## Component Tree

![Screenshot](component-tree.png)

## Development

```bash
# Clone project
git clone https://github.com/accez/lost-in-translation

# Install dependencies
npm install

# Run local dev server
npm start
```

## Maintainers

[@Simon Palmgren](https://github.com/accez)

[@Love Beiling](https://github.com/mikaellove)

## License

[MIT](https://choosealicense.com/licenses/mit/)
