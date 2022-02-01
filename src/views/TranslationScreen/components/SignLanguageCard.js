import './SignLanguageCard.css';
import SignList from './SignList';
const SignLanguageCard = ({ input }) => {
  return (
    <div className="sign-language-box-container">
      <div className="sign-language-card">
        <div className="output-area">
          <div className="sign-content">{input !== '' && <SignList input={input} />}</div>
        </div>
      </div>
    </div>
  );
};
export default SignLanguageCard;
