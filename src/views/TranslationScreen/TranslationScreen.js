import './TranslationScreen.css';
import SignLanguageCard from './components/SignLanguageCard';
import InputComponent from '../../components/InputComponent/InputComponent';
const TranslationScreen = () => {
  return (
    <div className="translation-screen-body">
      <div className="input">
        <InputComponent placeholder="Translate to sign language" />
      </div>
      <SignLanguageCard />
    </div>
  );
};

export default TranslationScreen;
