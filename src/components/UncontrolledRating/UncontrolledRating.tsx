import React, {useState} from "react";

// type RatingPropsType = {
//   value: 0 | 1 | 2 | 3 | 4 | 5
// }

export function UncontrolledRating() {

  const [value, setValue] = useState(0)

  return (
    // <div>
    //   <Star score={1} value={value}/><button onClick={() => setValue(1)}>1</button>
    //   <Star score={2} value={value}/><button onClick={() => setValue(2)}>2</button>
    //   <Star score={3} value={value}/><button onClick={() => setValue(3)}>3</button>
    //   <Star score={4} value={value}/><button onClick={() => setValue(4)}>4</button>
    //   <Star score={5} value={value}/><button onClick={() => setValue(5)}>5</button>
    //   <div><button onClick={() => setValue(0)}>reset</button></div>
    // </div>
    <div>
      <Star selected={value > 0}/>
      <button onClick={() => setValue(1)}>1</button>
      <Star selected={value > 1}/>
      <button onClick={() => setValue(2)}>2</button>
      <Star selected={value > 2}/>
      <button onClick={() => setValue(3)}>3</button>
      <Star selected={value > 3}/>
      <button onClick={() => setValue(4)}>4</button>
      <Star selected={value > 4}/>
      <button onClick={() => setValue(5)}>5</button>
      <div>
        <button onClick={() => setValue(0)}>reset</button>
      </div>
    </div>
  );
}

type StarPropsType = {
  // value: number
  // score: number
  selected: boolean
}

function Star(props: StarPropsType) {
  // if (props.score <= props.value) {
  //   return <span><b>star</b> </span>;
  // } else {
  //   return (
  //     <span>star </span>
  //   );
  // }

  return props.selected
    ? <span><b>star</b> </span>
    : <span>star </span>
}