import SignItem from './SignItem';
import { images } from './SignLanguageImages';
const SignList = () => {
  //shghehhnhhsbhahhhphihuhhkhhhh
  const strArray = 'hswheghhkhhshghehhnhhsbha';
  const stringArray = strArray.split('');
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
