import './SignLanguageCard.css';
import SignList from './SignList';
const SignLanguageCard = () => {
  return (
    <div className="box-container">
      <div className="card">
        <div className="output-area">
          <div className="sign-content">
            <SignList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignLanguageCard;
