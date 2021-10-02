import ReactDOM from 'react-dom';
import Pet from './Pet';

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
      <Pet name="Sidney" animal="Snake" breed="Corn Snake" />
      <Pet name="Muka Muka" animal="Lizard" breed="Argentine Tegu" />
      <Pet name="Winston" animal="Dog" breed="Shiba Inu" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
