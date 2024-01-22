import React from 'react';

const RandomPhrase = ({quote}) => {

    console.log(quote)

    const {author, phrase} = quote;

  return (
    <div className='phraseAuthor'>
        <p>{phrase}</p>
        <p>{author}</p>
    </div>
  )
}

export default RandomPhrase;