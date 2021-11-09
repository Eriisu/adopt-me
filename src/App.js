import { StrictMode } from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SearchParams from './SearchParams';
import Details from './Details';

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", { id: "my-brand" }, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Sidney",
//       animal: "Snake",
//       breed: "Corn Snake",
//     }),
//     React.createElement(Pet, {
//       name: "Muka Muka",
//       animal: "Lizard",
//       breed: "Argentine Tegu",
//     }),
//     React.createElement(Pet, {
//       name: "Winston",
//       animal: "Dog",
//       breed: "Shiba Inu",
//     }),
//   ]);
// };

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Router>
        <Route path="/details/:id">
          <Details />
        </Route>
        <Route path="/">
          <SearchParams />
        </Route>
      </Router>
    </div>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
