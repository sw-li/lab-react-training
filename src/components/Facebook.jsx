import IdCard from './IdCard';
import people from '../data/berlin.json';

function Facebook() {
  return (
    <div>
      {people.map((person) => (
        <IdCard person={person}></IdCard>
      ))}
    </div>
  );
}

export default Facebook;
