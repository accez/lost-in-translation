import './SignItem.css';
// eslint-disable-next-line react/prop-types

const SignItem = ({ signImage }) => {
  // Displays the given image
  return (
    <>
      <img className="sign-item-img" src={signImage} alt="Image missing" />
    </>
  );
};

export default SignItem;
