const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h3", {}, props.animal),
    React.createElement("h3", {}, props.breed),
  ])
}

const App = () => {
  return React.createElement(
    "div",
    {},
    [
      React.createElement("h1", { id: "my-brand"}, "Adopt Me!"),
      React.createElement(Pet, { name: "Sidney", animal: "Snake", breed: "Corn Snake" }),
      React.createElement(Pet, { name: "Muka Muka", animal: "Lizard", breed: "Argentine Tegu" }),
      React.createElement(Pet, { name: "Winston", animal: "Dog", breed: "Shiba Inu" }),
    ]
  );
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));
