import Button from './Button';

import '../styles/OkButton.css';

export default function OkButton({ handleClick }) {
  return (
    <Button classes="OkButton" handleClick={handleClick}>
      OK
    </Button>
  )
}