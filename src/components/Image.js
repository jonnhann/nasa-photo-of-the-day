import React from 'react';

export default function Image(props) {

  return (
   <div>
     <h1>{props.apiData.title}</h1>
     <p>{props.apiData.date}</p>
     <img alt='pic_of_day' src={props.apiData.url}></img>
  <p>{props.apiData.explanation}</p>
   </div>
  );
}
