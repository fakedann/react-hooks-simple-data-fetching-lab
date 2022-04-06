// create your App component here
import react, { useEffect, useState } from "react";

function App(){

  const [dogImg, setDogImg] = useState(null)

  useEffect( () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then( data => data.json() )
      .then( dog => setDogImg(dog.message))
  }, [])

  if(!dogImg){
    return <p>Loading...</p>
  }
  return <img src={dogImg} alt="A Random Dog"/>

}

export default App