# React useEffect Shallow Comparison Bug

This example demonstrates a common issue in React applications where the `useEffect` hook's dependency array isn't properly handling object comparisons, leading to unexpected behavior.

The `MyComponent` uses `useEffect` to log a message whenever the `props.data` object changes. However, it incorrectly uses a direct comparison (`!==`) which only checks for reference equality.  If `props.data` is updated with a new object that has the same properties, the `useEffect` hook won't trigger as expected because the reference is different.

## Solution

The solution is to use a deep comparison library or custom function to compare the object properties instead of simply checking the reference.