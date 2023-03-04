import IdCard from './IdCard';
import peopleJson from '../data/berlin.json';
import { useState } from 'react';

function Facebook() {
  const [people, setPeople] = useState(peopleJson);
  const [filter, setFilter] = useState('');
  const allCountries = [...new Set(people.map((person) => person.country))];
  return (
    <div className="allIdCards">
      <div>
        {allCountries.map((country) => (
          <button
            onClick={() => {
              console.log(country);
              setFilter(country);
            }}
          >
            {country}
          </button>
        ))}
      </div>
      <div>
        {people.map((person) => (
          <IdCard
            person={person}
            filterClass={person.country === filter && 'selected'}
          ></IdCard>
        ))}
      </div>
    </div>
  );
}

export default Facebook;
