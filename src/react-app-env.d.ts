/// <reference types="react-scripts" />

// Not sure why needed
declare module 'react/jsx-runtime' {
  const content: string
  export default content
}
