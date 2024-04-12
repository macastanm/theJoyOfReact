import React from 'react';

import Banner from "../Banner";
function BannerWon({numOfGuesses}) {
  return <Banner status="happy">
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>
          {numOfGuesses === 1
            ? '1 guess' : `${numOfGuesses} guesses`
          }
        </strong>
        .
      </p>
  </Banner>;
}

export default BannerWon;
