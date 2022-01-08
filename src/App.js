import "./App.css";
import UseCallback from "./UseCallback";
import UseEffectEx from "./UseEffect";
import UseEffect from "./UseEffect";
import UseEffectuseLayout from "./UseEffect-useLayout";
import ContextRoot from "./Context-Api/ContextRoot";
import Error from "./ErrorBoundary/Error";
import Parent from "./Performance/Parent";
import UseCallback1 from "./UseCallback1";
import UseMemo from "./UseMemo";
function App() {
  return (
    <div>
      {/*
      <UseEffectEx />
    <UseCallback />*/}

      {/**ERROR BOUNDARY COMPONENT
      if any of the child components of Error has any error it will be catched UI will be updated
      */}
      {/* <Error>
        <ContextRoot />
     </Error>*
     <Parent />
     <UseCallback1 />
      */}
      <UseMemo />
    </div>
  );
}

export default App;
