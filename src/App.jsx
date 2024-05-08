import ColorList from "./ColorList";
import Form from "./Form";

const App = () => {
  return (
    <div>
      <div className="container">
        <Form />
      </div>
      <div className="colors">
        <ColorList />
      </div>
    </div>
  )};
export default App;
