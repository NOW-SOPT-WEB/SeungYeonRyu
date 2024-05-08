import { GlobalStyles } from "./GlobalStyles";
import CardGame from "./pages/CardGame";
import Theme from "./Theme";
function App() {
  return (
    <>
      <Theme>
        <GlobalStyles />
        <CardGame />
      </Theme>
    </>
  );
}

export default App;
