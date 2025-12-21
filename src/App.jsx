import React from 'react'
import { ThemeContext } from './theme';

const App = () => {
  const [theme, toggleTheme] = React.useContext(ThemeContext);
  console.log(theme,toggleTheme);
  return (
    <div style={{ ...theme, minHeight: "100vh", width: "100%", padding: "0px", margin: "0px" }}>
      <h1 style={theme}>Welcome to All About React</h1>
      <button onClick={toggleTheme}>toggle</button>
    </div>
  )
}

export default App
