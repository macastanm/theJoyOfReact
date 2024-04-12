import React from 'react';

function GuessInput({ gameStatus, handleSubirGuess }){
  const [tentativeGuess, setTentativeGuess] = React.useState('');

  function  handleSubmit(event){
    event.preventDefault();

    if (tentativeGuess.length !== 5){
      window.alert('Please your word must have exactly 5 characters :)');
      return;
    }

    handleSubirGuess(tentativeGuess);

    setTentativeGuess('');
    }

  return <>
    <form className="guess-input-wrapper"
          onSubmit={handleSubmit}
    >
      <label htmlFor="guess-input">
        Enter guess:
      </label>
      <input
          required
          disabled={gameStatus !== 'running'}
          minLength={5}
          maxLength={5}
          id="guess-input"
          type="text"
          value={tentativeGuess}
          onChange={event => {
            setTentativeGuess(event.target.value.toUpperCase());
          }}
      />
    </form>
  </>;
}

export default GuessInput;
