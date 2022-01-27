import './SignItem.css';
// eslint-disable-next-line react/prop-types
const SignItem = ({ signImage }) => {
  console.log('sign item');

  return (
    <div>
      <img src={signImage} />
    </div>
  );
};

export default SignItem;
