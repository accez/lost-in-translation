import './SignItem.css';
// eslint-disable-next-line react/prop-types
const SignItem = ({ signImage }) => {
  console.log('sign item');

  return (
    <>
      <img src={signImage} />
    </>
  );
};

export default SignItem;
