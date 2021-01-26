import "./App.css";
import Card from "./Card";
import Header from "./Header";
function App() {
  return (
    <div className="app">
      <div className="app__header">
        <Header />
      </div>
      <div className="app__body">
        <div className="app__container">
          {" "}
          <Card
            country="Italy"
            accomodation="200 accomodations"
            image="https://images.unsplash.com/photo-1569416078500-3857b00616f8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=376&q=80"
          ></Card>
          <Card
            country="Italy"
            accomodation="200 accomodations"
            image="https://images.unsplash.com/photo-1569416078500-3857b00616f8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=376&q=80"
          ></Card>
          <Card
            country="Italy"
            accomodation="200 accomodations"
            image="https://images.unsplash.com/photo-1569416078500-3857b00616f8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=376&q=80"
          ></Card>
          <Card
            country="Italy"
            accomodation="200 accomodations"
            image="https://images.unsplash.com/photo-1569416078500-3857b00616f8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=376&q=80"
          ></Card>
          <Card
            country="Italy"
            accomodation="200 accomodations"
            image="https://images.unsplash.com/photo-1569416078500-3857b00616f8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=376&q=80"
          ></Card>
        </div>
      </div>
    </div>
  );
}

export default App;
