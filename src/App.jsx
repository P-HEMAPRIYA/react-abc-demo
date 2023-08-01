import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

export default function App() {
  <Movie />
// //   const [count, setCount] = useState(0)

// //   return (
// //     <>
// //       <div>
// //         <a href="https://vitejs.dev" target="_blank">
// //           <img src={viteLogo} className="logo" alt="Vite logo" />
// //         </a>
// //         <a href="https://react.dev" target="_blank">
// //           <img src={reactLogo} className="logo react" alt="React logo" />
// //         </a>
// //       </div>
// //       <h1>Vite + React</h1>
// //       <div className="card">
// //         <button onClick={() => setCount((count) => count + 1)}>
// //           count is {count}
// //         </button>
// //         <p>
// //           Edit <code>src/App.jsx</code> and save to test HMR
// //         </p>
// //       </div>
// //       <p className="read-the-docs">
// //         Click on the Vite and React logos to learn more
// //       </p>
// //     </>
// //   )
}

// // export default App

// import { useState } from "react";
// import "./App.css";
// export default function App() {
//   const profiles = [
//     {
//       Name: "hemapriya",
//       image:
//         "https://i.pinimg.com/236x/e0/b9/07/e0b9075059d92d90835e49cae5212944.jpg",
//     },
//     {
//       Name: "Madhu",
//       image:
//         "https://img.freepik.com/premium-vector/hand-drawn-beautiful-young-woman-sunglasses-stylish-girl-with-bow-her-head-fashion-woman-look_260869-4.jpg?w=2000",
//     },
//     {
//       Name: "Priya",
//       image:
//         "https://i.pinimg.com/236x/3a/6f/ef/3a6fefb32822e267200f1a940dc665c2.jpg",
//     },
//   ];

//   return (
//     <div className="App">
//       {profiles.map((profile) => (
//         <Profile name={profile.Name} image={profile.image} />

//         //<Profile name={Name} image={image} />
//       ))}
//       <Colorgame />
//     </div>
//   );
// }

// function Counter() {
//   // let like = 10;
//   const [like, setLike] = useState(0);
//   const [dislike, setDislike] = useState(0);
//   var diff = like - dislike;
//   return (
//     <div>
//       <button
//         onClick={() => {
//           setLike(like + 1);
//         }}
//       >
//         👍{like}
//       </button>
//       <button
//         onClick={() => {
//           setDislike(dislike + 1);
//         }}
//       >
//         👎{dislike}
//       </button>
//       {diff >= 10 ? <h1>Awesome</h1> : " "};
//     </div>
//   );
// }

// function Colorgame() {
//   const [bg, setbgcol] = useState("value=red");
//   const styles = {
//     background: bg,
//   };
//   const INITIAL_color_list = ["red", "orange", "pink", "crimson"];
//   const new=[...INITIAL_color_list]
//   const [colorlist, setcolorlist] = useState(INITIAL_color_list);
//   return (
//     <div>
//       <input
//         style={styles} ///property binding
//         onChange={(event) => setbgcol(event.target.value)}
//         type="text"
//         placeholder="please"
//       />

//       <button>Addcolor</button>
//       {colorlist.map((color) => (
//         <colorBox clr={color} />
//       ))}
//     </div>
//   );
// }
// function colorBox({clr}){
//   const style={
//     height="25px"

//   }
// }
// function Profile({ Name, image }) {
//   return (
//     <div className="profile">
//       <img className="pic" src={image} />
//       <h2>hello {Name}</h2>
//       <Counter />
//       <Colorgame />
//     </div>
//   );
// }

export default function Movie() {
  const Movies = [
    {
      name: "Vikram",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
      rating: 8.4,
      summary:
        "Members of a black ops team must track and eliminate a gang of masked murderers.",
    },
    {
      name: "RRR",
      poster:
        "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
      rating: 8.8,
      summary:
        "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
    },
    {
      name: "Iron man 2",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
      rating: 7,
      summary:
        "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
    },
    {
      name: "No Country for Old Men",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
      rating: 8.1,
      summary:
        "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
    },
    {
      name: "Jai Bhim",
      poster:
        "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
      summary:
        "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
      rating: 8.8,
    },
    {
      name: "The Avengers",
      rating: 8,
      summary:
        "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
      poster:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
    },
    {
      name: "Interstellar",
      poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
      rating: 8.6,
      summary:
        "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
    },
    {
      name: "Baahubali",
      poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
      rating: 8,
      summary:
        "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
    },
    {
      name: "Ratatouille",
      poster:
        "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
      rating: 8,
      summary:
        "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
    },
    {
      name: "PS2",
      poster:
        "https://m.media-amazon.com/images/M/MV5BYjFjMTQzY2EtZjQ5MC00NGUyLWJiYWMtZDI3MTQ1MGU4OGY2XkEyXkFqcGdeQXVyNDExMjcyMzA@._V1_.jpg",
      summary:
        "Ponniyin Selvan: I is an upcoming Indian Tamil-language epic period action film directed by Mani Ratnam, who co-wrote it with Elango Kumaravel and B. Jeyamohan",
      rating: 8,
    },
    {
      name: "Thor: Ragnarok",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg",
      summary:
        "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\\n of researchers, to find a new planet for humans.",
      rating: 8.8,
    },
  ];
  return (
    <div className="Movie">
      {Movies.map((Movie) => (
        <Movie
          name={Movie.name}
          poster={Movie.poster}
          summary={Movie.summary}
          rating={Movie.rating}
        />
      ))}
      <Movies />
    </div>
  );
}
