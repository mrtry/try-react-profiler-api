import React, { useState } from 'react';

const Context = React.createContext({ count: 0 })

export default () => {
  const [state, setState ] = useState(0);
  const increment = current => setState(current + 1)

  return (
    <React.Profiler id="App" onRender={onRenderCallback}>
      <div>
        <h1>count: {state}</h1>
        <button onClick={() => increment(state)}>Increment</button>
      </div>
    </React.Profiler>
  );
}

function onRenderCallback(
  id,
  phase,
  actualDuration,
  baseDuration,
  startTime,
  commitTime,
  interactions
) {
  //Logic to handle the profiling details
  console.log(`id: ${id},\nphase: ${phase},\nactualDuration: ${actualDuration},\nbaseDuration: ${baseDuration},\nstartTime: ${startTime},\ncommitTime: ${commitTime},\ninteractions: ${interactions}`);
  console.dir(interactions)
}
