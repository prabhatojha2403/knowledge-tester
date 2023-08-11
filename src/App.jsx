
import { useEffect, useMemo, useState } from "react";
import "./app.css";
import Trivia from "./components/Trivia";
import Timer from "./components/Timer";
import Start from "./components/Start";
function App() {
  const[username, setUsername]=useState(null)
  const[questionNumber , SetQuestionNumber]= useState(1);
  const [stop , setStop]=useState(false);
  const[earned,setEarned]=useState("$ 0");
  const data = [
    {
      id: 1,
      question: "The International Literacy Day is observed on",
      answers: [
        {
          text: "Sep 8",
          correct: true,
        },
        {
          text: "Nov 28",
          correct: false,
        },
        {
          text: "May 2",
          correct: false,
        },
        {
          text: "Sep 22",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "In which group of places the Kumbha Mela is held every twelve years?",
      answers: [
        {
          text: "Ujjain. Purl; Prayag. Haridwar",
          correct: false,
        },
        {
          text: "Prayag. Haridwar, Ujjain,. Nasik",
          correct:true,
        },
        {
          text: "Rameshwaram. Purl, Badrinath. Dwarika",
          correct:false,
        },
        {
          text: "Chittakoot, Ujjain, Prayag,'Haridwar",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "Garampani sanctuary is located at",
      answers: [
        {
          text: "Junagarh, Gujarat",
          correct: false,
        },
        {
          text: "Diphu, Assam",
          correct: true,
        },
        {
          text: "Kohima, Nagaland",
          correct: false,
        },
        {
          text: "Gangtok, Sikkim",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "The trident-shaped symbol of Buddhism does not represent",
      answers: [
        {
          text: "Nirvana",
          correct: true,
        },
        {
          text: "Sangha",
          correct: false,
        },
        {
          text: "Buddha",
          correct: false,
        },
        {
          text: "Dhamma",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "The lead character in the film 'The Bandit Queen' has been played by",
      answers: [
        {
          text: "Rupa Ganguly",
          correct: false,
        },
        {
          text: "Seema Biswas",
          correct: true,
        },
        {
          text: "Pratiba Sinha",
          correct: false,
        },
        {
          text: "Shabama Azmi",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "The great Victoria Desert is located in",
      answers: [
        {
          text: "Canada",
          correct: false,
        },
        {
          text: "West Africa",
          correct: false,
        },
        {
          text: "Australia",
          correct: true,
        },
        {
          text: "North America",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "Which scientist discovered the radioactive element radium?",
      answers: [
        {
          text: "Isaac Newton",
          correct: false,
        },
        {
          text: "Albert Einstein",
          correct: false,
        },
        {
          text: "Benjamin Franklin",
          correct: false,
        },
        {
          text: "Marie Curie",
          correct: true,
        },
      ],
    },
    {
      id: 9,
      question: "The power to decide an election petition is vested in the",
      answers: [
        {
          text: "Parliament",
          correct: false,
        },
        {
          text: "Supreme Court",
          correct: false,
        },
        {
          text: "High courts",
          correct: true,
        },
        {
          text: "Election Commission",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "In which decade with the first transatlantic radio broadcast occur?",
      answers: [
        {
          text: "1850s",
          correct: false,
        },
        {
          text: "1860s",
          correct: false,
        },
        {
          text: "1870s",
          correct: false,
        },
        {
          text: "1900s",
          correct:true,
        },
      ],
    },
    {
      id: 11,
      question: "Which of the following is not a chief organ of the United Nations Organisations?",
      answers: [
        {
          text: " International Labour Organisation",
          correct:true,
        },
        {
          text: "Security Council",
          correct: false,
        },
        {
          text: "International Court of Justice",
          correct: false,
        },
        {
          text: "General Assembly",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "Which county did Ravi Shastri play for?",
      answers: [
        {
          text: "Glamorgan",
          correct: true,
        },
        {
          text: "Leicestershire",
          correct: false,
        },
        {
          text: "Gloucestershire",
          correct: false,
        },
        {
          text: "Lancashire",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "What is common between Kutty, Shankar, Laxman and Sudhir Dar?",
      answers: [
        {
          text: "Film Direction",
          correct: false,
        },
        {
          text: "Drawing Cartoons",
          correct: true,
        },
        {
          text: "Instrumental Music",
          correct: false,
        },
        {
          text: "Classical Dance",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "Gilt-edged market means",
      answers: [
        {
          text: "bullion market",
          correct: false,
        },
        {
          text: "market of government securities",
          correct: true,
        },
        {
          text: "market of guns",
          correct: false,
        },
        {
          text: "market of pure metals",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "Eritrea, which became the 182nd member of the UN in 1993, is in the continent of",
      answers: [
        {
          text: "Asia",
          correct: false,
        },
        {
          text: "Africa",
          correct: true,
        },
        {
          text: "Europe",
          correct: false,
        },
        {
          text: "Australia",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
  
  [
    {id:1 , amount:"$ 100"},
    {id:2 , amount:"$ 200"},
    {id:3 , amount:"$ 300"},
    {id:4 , amount:"$ 500"},
    {id:5 , amount:"$ 1000"},
    {id:6 , amount:"$ 2000"},
    {id:7 , amount:"$ 4000"},
    {id:8 , amount:"$ 8000"},
    {id:9 , amount:"$ 16000"},
    {id:10 , amount:"$ 32000"},
    {id:11, amount:"$ 64000"},
    {id:12, amount:"$ 125000"},
    {id:13, amount:"$ 250000"},
    {id:14 , amount:"$ 500000"},
    {id:15 , amount:"$ 1000000"},
    
  
  ].reverse(),
[]
  );
   useEffect(()=> {
    questionNumber > 1 &&
    setEarned(moneyPyramid.find((m) => m.id ===questionNumber - 1).amount);
   },[moneyPyramid,questionNumber]);

  return (
    <div className="app">
      {username ? (
      <>
      <div className="main">
      {stop ?(
         <h1 className="endText">You earned: {earned} </h1>):( 
        <>
    <div className="top">
    <div className="timer">
    <Timer setStop = {setStop} 
     questionNumber={questionNumber}
        
      // setTimeOut={setTimeOut}
      // questionNumber={questionNumber}
                    />
    </div>
    </div>
    <div className="bottom">
      <Trivia
      data={data}
      setStop={setStop}
      questionNumber={questionNumber}
      SetQuestionNumber={SetQuestionNumber}
      />
      </div>
      </>
      )}
   </div>
   <div className="pyramid">
    <ul className="moneyList">
      {moneyPyramid.map((m)=> (
      <li className={questionNumber === m.id ? "moneyListItem active": "moneyListItem"}> 
      <span className="moneyListItemNumber">{m.id}</span>
      <span className="moneyListItemAmount">{m.amount}</span>
      </li>
      ))}
     </ul>
   </div>
   </>
   ):(
    <Start setUsername={setUsername}/>
   )}
  </div>
  );
   }
export default App;
