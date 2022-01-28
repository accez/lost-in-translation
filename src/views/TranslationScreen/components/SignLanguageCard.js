import './SignLanguageCard.css';
import SignList from './SignList';
// eslint-disable-next-line react/prop-types
const SignLanguageCard = ({ input }) => {
  return (
    <div className="box-container">
      <div className="card">
        <div className="output-area">
          <div className="sign-content">{input !== '' && <SignList input={input} />}</div>
        </div>
      </div>
    </div>
  );
};
export default SignLanguageCard;
