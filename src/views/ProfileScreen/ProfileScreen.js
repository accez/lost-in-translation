import { useEffect, useState } from 'react';
import './ProfileScreen.css';

function ProfileScreen() {
  const [translations, SetTranslations] = useState([]);
  const loggedInUser = 'logged in user';
  useEffect(async () => {
    const response = await fetch('https://spa-lb-experis-assignment.herokuapp.com/translations/1');
    const json = await response.json();
    const activeTranslations = json.translations.filter((translation) => {
      return translation.deleted !== true;
    });

    const addProp = [];
    json.translations.forEach((trans, index) => {
      addProp[index] = {
        translation: trans,
        deleted: false
      };
    });
    console.log(addProp);
    console.log(activeTranslations);
    SetTranslations(activeTranslations.slice(-10));
  }, []);

  async function DeleteTranslation(index) {
    const response = await fetch('https://spa-lb-experis-assignment.herokuapp.com/translations/1');
    const json = await response.json();

    json.translations[index] = {
      translation: json.translations[index],
      deleted: true
    };

    const apiURL = 'https://spa-lb-experis-assignment.herokuapp.com';
    const apiKey = 'X9dHGcSU9kuwKyxz2/p+TA==';
    const userId = 1; // Update user with id 1

    fetch(`${apiURL}/translations/${userId}`, {
      method: 'PATCH', // NB: Set method to PATCH
      headers: {
        'X-API-Key': apiKey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        // Provide new translations to add to user with id 1
        translations: json.translations
      })
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Could not update translations history');
        }
        return response.json();
      })
      .then((updatedUser) => {
        console.log(updatedUser);
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  }
  return (
    <div className="profile-screen-body">
      <h1 className="logged-in-user">{loggedInUser}</h1>
      {translations.map((translation, index) => (
        <li key={index}>
          {translation}
          <button
            onClick={() => {
              DeleteTranslation(index);
            }}>
            Delete
          </button>
        </li>
      ))}
    </div>
  );
}

export default ProfileScreen;
