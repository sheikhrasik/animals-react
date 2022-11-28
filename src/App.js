import {useState} from 'react';

function getRandomAnimal() {
 const animals = ['bird' , 'lion' , 'gator' , 'cow' , 'moose'];

 return animals[Math.floor(Math.random() * animals.length)];
}


function App() {
 const [animals, setAnimals] = useState([]);

 const handleClick = () => {
   setAnimals([...animals, getRandomAnimal()]);
 };

 return (
   <div>
     <button onClick={handleClick}>Add Animal</button>
     <div>{animals}</div>
   </div>
 );
}

export default App;