import { images } from './SignLanguageImages';
const SignItem = () => {
  console.log('sign item');

  return (
    <div>
      <p>item</p>
      <img src={images.b} />
    </div>
  );
};

export default SignItem;
