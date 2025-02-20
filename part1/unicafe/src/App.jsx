import { useState } from "react";

const StatisticLine = (props) => {
  return (
    <p>
      {props.text} {props.value}
    </p>
  );
};

const Statistics = (props) => {
  const total = props.good + props.neutral + props.bad;
  const avg = (props.good - props.bad) / total;
  const positive = (props.good / total) * 100;

  return (
    <div>
      <h1>statistics</h1>

      {total === 0 ? (
        <p>No feedback given</p>
      ) : (
        <>
          <StatisticLine text="good" value={props.good} />
          <StatisticLine text="neutral" value={props.neutral} />
          <StatisticLine text="bad" value={props.bad} />
          <StatisticLine text="all" value={total} />
          <StatisticLine text="average" value={avg} />
          <StatisticLine text="positive" value={positive + "%"} />
        </>
      )}
    </div>
  );
};

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <div>
        <h1>give feedback</h1>
        <div>
          <button onClick={() => setGood((prev) => prev + 1)}>good</button>
          <button onClick={() => setNeutral((prev) => prev + 1)}>
            neutral
          </button>
          <button onClick={() => setBad((prev) => prev + 1)}>bad</button>
        </div>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    </div>
  );
};

export default App;
