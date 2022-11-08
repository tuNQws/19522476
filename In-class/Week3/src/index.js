import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MySection from "./MySection";
import MyButton from "./MyButton";
import MyComponent from './MyComponent';
import MyList from "./MyList";
import MyInput from './MyInput';
import AlertButton from './AlertButton';

const root = ReactDOM.createRoot(document.getElementById('root'));
// Ex 0

// root.render(
//   <p>
//     Hello, <strong>JXS</strong>
//   </p>
// );

// Ex 0.1

// root.render(
//   <div>
//     <button />
//     <code />
//     <input />
//     <label />
//     <p />
//     <pre />
//     <select />
//     <table />
//     <ul />
//   </div>
// );

// Ex 0.2

// root.render(
//   <section>
//     <header>
//       <h1>A Header</h1>
//     </header>
//     <nav>
//       <a href="item">Nav Item</a>
//     </nav>
//     <main>
//       <p>The main content...</p>
//     </main>
//     <footer>
//       <small>&coppy; 2021</small>
//     </footer>
//   </section>
// );

//Ex 0.3

// root.render(
//   <MySection>
//     <MyButton>My Button Text</MyButton>
//   </MySection>
// );

// Ex 0.4

// const array = ["First", "Second", "Third"];

// const object = {
//   first: 1,
//   second: 2,
//   third: 3,
// };
// root.render(
//   <section>
//     <h1>Array</h1>
//     <ul>
//       {array.map((i) => (
//         <li key={i}>{i}</li>
//       ))}
//     </ul>

//     <h1>Object</h1>
//     <ul>
//       {Object.keys(object).map((i) => (
//         <li key={i}>
//           <strong>(i): </strong>
//           {object[i]}
//         </li>
//       ))}
//     </ul>
//   </section>
// );

// Ex 1.0, Ex 1.1

// root.render(
//   <MyComponent />
// );

// Ex 1.2

// const appState = {
//   text: "My Button",
//   disable: true,
//   items: ["First", "Second", "Third"],
// };

// function render(props) {
//   root.render(
//     <main>
//       <MyButton text={props.text} disable={props.disable} />
//       <MyList items={props.items} />
//     </main>
//   );
// }

// render(appState);

// setTimeout(() => {
//   appState.disable = false;
//   appState.items.push("Fourth");

//   render(appState);
// }, 1000);

// Ex 1.3

// function render({ second }) {
//   root.render(
//     <main>
//       <MyButton />
//       <MyButton text={second.text} disble={second.disable} />
//     </main>
//   );
// }

// render({
//   second: {
//     text: "Second Button",
//     disable: true,
//   },
// });

// Ex 2.1, Ex 2.2, Ex 2.3

// root.render(
//   <App />
// );

// Ex 3

// root.render(
//   <MyInput />
// );

// Ex 4.1

// const element = (
//   <div style={{textAlign: 'center', fontSize: '15px', backgroundColor: '#d0f0c0'}}>Green is the prime color of the world</div>
// );

// ReactDOM.render(element, document.getElementById('root'));

// Ex 4.2

root.render(
  <AlertButton />
);

reportWebVitals();
