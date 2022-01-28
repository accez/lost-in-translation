import SignItem from './SignItem';
import { images } from './SignLanguageImages';
// eslint-disable-next-line react/prop-types
const SignList = ({ input }) => {
  // eslint-disable-next-line react/prop-types
  const strippedInput = input.replace(/[^a-zA-Z]+/g, '');
  const inputChars = strippedInput.split('');

  return (
    <>
      {inputChars.map((char, index) => (
        <SignItem signImage={images[char]} key={index} />
      ))}
    </>
  );
};

export default SignList;
