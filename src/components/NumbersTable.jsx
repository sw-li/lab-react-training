

function NumbersTable({ limit }) {
  // create an array of 1 to limit
  const arrInteger = [...Array(+limit).keys()].map((index) => index + 1);

  return (
    <div className="numbersTable">
      {arrInteger.map((number) => (
        <h1
          className="square"
          style={{ backgroundColor: number % 2 === 0 ? 'red' : 'white' }}>
          {number}
        </h1>
      ))}
    </div>
  );
}

export default NumbersTable;
