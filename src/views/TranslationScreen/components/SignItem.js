//import { images } from './SignLanguageImages';
// eslint-disable-next-line react/prop-types
const SignItem = ({ signImage }) => {
  console.log('sign item');

  return (
    <div>
      <p>item</p>
      <img src={signImage} />
    </div>
  );
};

export default SignItem;
