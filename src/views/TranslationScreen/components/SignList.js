import SignItem from './SignItem';
import { images } from './SignLanguageImages';
const SignList = () => {
  const stringArray = ['h', 'j'];
  console.log(stringArray);

  return (
    <div>
      {stringArray.map((char, index) => (
        <SignItem signImage={images[char]} key={index} />
      ))}
    </div>
  );
};

export default SignList;
