import TextInput from './TextInput';

import '../styles/PopUp.css';

export default function PopUp({ message, answer, setAnswer }) {  
  return (
    <div className="PopUp">
      <div className="PopUpMessage">
        <p>{message}</p>
      </div>
      <div className="PopUpControls">
        <TextInput
        content={answer}
        setContent={setAnswer}
        placeholder="Write your new username" 
        />
        <button>
          OK
        </button>
      </div>
    </div>
  );
}