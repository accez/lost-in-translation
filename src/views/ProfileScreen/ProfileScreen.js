import { useEffect, useState } from 'react';
import './ProfileScreen.css';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../helpers/UserContext';

const ProfileScreen = () => {
  let navigate = useNavigate();
  const { username, userId } = useContext(UserContext);
  const [translations, SetTranslations] = useState([]);
  let clicked = false;

  useEffect(async () => {
    const response = await fetch(
      'https://spa-lb-experis-assignment.herokuapp.com/translations/' + userId[0]
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
    console.log(addProp);
    console.log(activeTranslations);
    SetTranslations(activeTranslations.slice(-10));
  }, [clicked]);

  async function DeleteTranslation(translation) {
    const response = await fetch(
      'https://spa-lb-experis-assignment.herokuapp.com/translations/' + userId[0]
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
    console.log(json.translations);
    fetch(`${apiURL}/translations/${userId[0]}`, {
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

    window.location.reload(false);
  }

  function LogOut() {
    localStorage.removeItem('user');

    navigate('/');
  }
  return (
    <div className="profile-screen-body">
      <h1 className="logged-in-user">{username}</h1>
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
        onClick={() => {
          LogOut();

          if (!clicked) {
            clicked = true;
          } else {
            clicked = false;
          }
        }}>
        Log out
      </button>
    </div>
  );
};

export default ProfileScreen;
