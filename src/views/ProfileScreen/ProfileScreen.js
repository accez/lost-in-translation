import { useEffect, useState } from 'react';
import './ProfileScreen.css';
import { useNavigate } from 'react-router-dom';

const ProfileScreen = () => {
  let navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  const [translations, SetTranslations] = useState([]);
  //const [deletedTranslation, SetDeletedTranslation] = useState(0);
  useEffect(async () => {
    const response = await fetch(
      'https://spa-lb-experis-assignment.herokuapp.com/translations/' + user.id
    );
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
    SetTranslations(activeTranslations.slice(-10));
  });

  async function DeleteTranslation(translation) {
    const response = await fetch(
      'https://spa-lb-experis-assignment.herokuapp.com/translations/' + user.id
    );
    const json = await response.json();

    json.translations.forEach((element, index) => {
      if (element === translation) {
        json.translations[index] = {
          translation: translation,
          deleted: true
        };
      }
    });

    const apiURL = 'https://spa-lb-experis-assignment.herokuapp.com';
    const apiKey = 'X9dHGcSU9kuwKyxz2/p+TA==';

    fetch(`${apiURL}/translations/${user.id}`, {
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
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  }

  function LogOut() {
    localStorage.removeItem('user');

    navigate('/');
  }

  return (
    <div className="profile-screen-body">
      <h1 className="logged-in-user">{user.username}</h1>
      <h2 className="translations-header">Translations</h2>
      {translations.map((translation, index) => (
        <li key={index}>
          {translation}
          <button
            onClick={() => {
              DeleteTranslation(translation);
            }}>
            Delete
          </button>
        </li>
      ))}

      <button
        className="logout"
        onClick={() => {
          LogOut();
        }}>
        Log out
      </button>
    </div>
  );
};

export default ProfileScreen;
