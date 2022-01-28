import SignItem from './SignItem';
import { images } from './SignLanguageImages';
const SignList = () => {
  //shghehhnhhsbhahhhphihuhhkhhhh
  const input = 'hswh345egh2hkhhsh3gheh4hnhh4s - bhashgheh5  "hnhhsbhahhhph , ihuhhkhhhh';
  const strippedInput = input.replace(/[^a-zA-Z]+/g, '');
  const inputChars = strippedInput.split('');
  console.log(inputChars);
  return (
    <>
      {inputChars.map((char, index) => (
        <SignItem signImage={images[char]} key={index} />
      ))}
    </>
  );
};

export default SignList;
