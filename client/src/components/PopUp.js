import TextInput from './TextInput';

import '../styles/PopUp.css';

export default function PopUp({ message, answer, setAnswer, handleConfirm }) {  
  function checkEmpty() {
    if (answer === "") {
      alert('Response can\'t be empty');
      return false;
    }
    return true;
  }

  return (
    <div className="PopUp">
      <div className="PopUpMessage">
        <p>{message}</p>
      </div>
      <div className="PopUpControls">
        <TextInput
        content={answer}
        setContent={setAnswer}
        />
        <button onClick={() => {if (checkEmpty()) handleConfirm();}}>
          OK
        </button>
      </div>
    </div>
  );
}