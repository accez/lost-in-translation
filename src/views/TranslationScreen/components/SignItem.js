import './SignItem.css';
// eslint-disable-next-line react/prop-types
const SignItem = ({ signImage }) => {
  return (
    <>
      <img className="sign-item-img" src={signImage} />
    </>
  );
};

export default SignItem;
