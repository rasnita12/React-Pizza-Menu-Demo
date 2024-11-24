import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
//header
function Header() {
  const style = {};
  // const style = {color: "red",fontSize: "48px", textTransform: "uppercase"}
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>;
    </header>
  );
}

//menu
function Menu() {
  const pizzas = pizzaData;
  const pizzaNum = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {pizzaNum > 0 ? (
        <>
        
        <p>Authentic dishes only in our restaurant. All from our oven, all organic and all delicious</p>
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizza={pizza} key={pizza.name} />
          ))}
          {/* {pizzaData.map((pizza) => <Pizza name={pizza.name} 
        ingredients={pizza.ingredients} photoName={pizza.photoName} price={pizza.price}/>)} */}
        </ul>
        </>

      ) : <p>We're still working on our menu. Please come back later!</p>}

      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />

      <Pizza
        name="Pizza Prosciutto"
        ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
        photoName="pizzas/prosciutto.jpg"
        price={20}
      /> */}
    </main>
  );
}

// pizza
function Pizza({pizza}) {
  return (
    <li className={`pizza ${pizza.soldOut ? "sold-out" : ""}`}>
      <img src={pizza.photoName} alt="img" />
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span>{pizza.soldOut ? "Sold Out" : pizza.price + 3}</span>
      </div>
    </li>
  );
}

//footer
function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  // if(hour >= openHour && hour <= closeHour)
  // {
  //   alert("We're currently open!");
  // }else{
  //   alert("Sorry, We're closed!")
  // }

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour}></Order>
      ) : <p>We're happy to welcome you between {openHour}:00 and {closeHour}:00</p>}
    </footer>
  );
}

function Order(props)
{
  return <div className="order">
  <p>We're open until {props.closeHour}:00. Come visit us or order online</p>
  <button className="btn">Order</button>
</div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
