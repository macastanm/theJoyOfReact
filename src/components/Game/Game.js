import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import BannerWon from "../BannerWon";
import BannerLose from "../BannerLose";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
    const [gameStatus, setGameStatus] = React.useState('running');
    const [guesses, setGuesses] = React.useState([]);

    function handleSubirGuess(tentativeGuess){
        const nextGuess = [...guesses, tentativeGuess];
        setGuesses(nextGuess);

        if (tentativeGuess.toUpperCase() === answer) {
            setGameStatus('won');
        }
        else if (nextGuess.length >= NUM_OF_GUESSES_ALLOWED){
            setGameStatus('lost');
        }
    }

    return <>
      <GuessResults guesses={guesses} answer={answer}/>
      <GuessInput gameStatus={gameStatus} handleSubirGuess={handleSubirGuess}/>
        {gameStatus === 'won' && (
            <BannerWon
                numOfGuesses={guesses.length}
            />
        )}
        {gameStatus === 'lost' && (
            <BannerLose
                answer={answer}
            />
        )}
  </>;
}

export default Game;
