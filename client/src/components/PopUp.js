import TextInput from './TextInput';
import OkButton from './OkButton';
import DataValidation from '../utilities/DataValidation';

import '../styles/PopUp.css';

export default function PopUp({ message, answer, setAnswer, confirm }) {  
  const dataValidation = new DataValidation(
    {
      cantBeEmpty: true,
      cantBeWhitespace: true
    },
    answer
  );

  function closePopUp() {
    if (dataValidation.check()) {
      confirm();
    } else {
      alert("The data you entered is not valid. Try again.");
    }
  }
  
  return (
    <div className="PopUp">
      <div className="PopUpMessage">
        <p>{message}</p>
      </div>
      <div 
      className="PopUpControls"
      style={
        answer === undefined ? {
          justifyContent: "center"
        } : {}
      }
      >
        { answer !== undefined &&
          <TextInput
          value={answer}
          setValue={setAnswer}
          action={closePopUp}
          />
        }
        <OkButton handleClick={closePopUp}>
          OK
        </OkButton>
      </div>
    </div>
  );
}