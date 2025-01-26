```javascript
import { useEffect, useState } from 'react';
import isEqual from 'lodash.isequal'; // Or a custom deep comparison function

function MyComponent(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: Use a deep comparison library
    if (!isEqual(props.data, prevProps.data)) {
      console.log('Data changed!');
    }
  }, [props.data]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```