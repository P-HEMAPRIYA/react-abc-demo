// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App



import "./App.css";
export default function App() {
  const profiles = [
    {
      Name: "hemapriya",
      image:
        "https://i.pinimg.com/236x/e0/b9/07/e0b9075059d92d90835e49cae5212944.jpg"
    },
    {
      Name: "Madhu",
      image:
        "https://img.freepik.com/premium-vector/hand-drawn-beautiful-young-woman-sunglasses-stylish-girl-with-bow-her-head-fashion-woman-look_260869-4.jpg?w=2000"
    },
    {
      Name: "Priya",
      image:
        "https://i.pinimg.com/236x/3a/6f/ef/3a6fefb32822e267200f1a940dc665c2.jpg"
    }
  ];

  return (
    <div className="App">
      {profiles.map((profile) => (
        <Profile name={profile.Name} image={profile.image} />
        //<Profile name={Name} image={image} />
      ))}
    </div>
  );
}

function Profile({ Name, image }) {
  return (
    <div className="profile">
      <img className="pic" src={image} alt={Name} />
      <h2>hello {Name}</h2>
    </div>
  );
}
