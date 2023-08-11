import { useEffect, useState } from "react"
import useSound from "use-sound";
// import play from "../assets/src_sound_play.mp3"
// import correct from "../assets/src_sound_correct.mp3"
// import wrong from "../assets/src_sound_wrong.mp3"
export default function Trivia({
    data,
    setStop,
    questionNumber,
    SetQuestionNumber,
}) {
    const[question,SetQuestion]= useState(null);
    const[SelectedAnswer,SetSelectedAnswer]= useState(null);
    const [className,setClassName]= useState("answer");
    // const[letsPlay]=useSound(play)
    // const[correctAnswer]=useSound(correct)
    // const[wrongAnswer]=useSound(wrong)
 
    // useEffect(() =>{
    //     letsPlay();
    // },[letsPlay]);

    // useEffect
    useEffect(() =>{
        SetQuestion(data[questionNumber -1]);
    },[data , questionNumber]);

    const delay = (duration , callback) => {
        setTimeout(()=>{
            callback();
            },duration);
        };
        
    

    const handleClick = (a) => {
    SetSelectedAnswer(a);
    setClassName("answer active" );
    delay(3000,()=>
    setClassName(a.correct ? "answer correct" : "answer wrong")
    );
    delay(6000,()=>
   {
       if(a.correct){
        SetQuestionNumber((prev) =>prev+1);
        SetSelectedAnswer(null);
       } else {
        setStop(true);
       }
   });
    
    };
  return (
    <div className="trivia">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((a)=>(
        <div className={SelectedAnswer === a ? className:"answer"} onClick={()=>handleClick(a) }>
            {a.text}
        </div>
        ))}
      </div>
    </div>
  )
}
