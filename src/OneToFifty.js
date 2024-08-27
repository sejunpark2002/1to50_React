import React, { useState,useRef,useEffect} from "react";
import OuterBoard from "./OuterBoard"
import Timer from "./Timer"
import ScoreBoard from "./ScoreBoard";
import clickSound from './sound/carrot_pull.mp3';
import bgSound from './sound/bg.mp3';
import winSound from './sound/game_win.mp3';
import bugSound from './sound/bug_pull.mp3';
import "./style.css"
import BuyMeACoffeeButton from './BuyMeACoffeeButton';




let array =[];
for (let i=1; i <= 25 ; i++) {
    array.push(i)
;}

const shuffleArray = array => {
    for (let i = array.length - 1; i>0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}

shuffleArray(array);


function OneToFifty() {
    
   
    const [numbers, setNumbers] = useState(array);
    const [gameFlag,setGameFlag] = useState(false);
    const [soundOn, setSoundOn] = useState(true);
    const [result, setResult] = useState("");
    const [gameOver,setGameOver] = useState(false);
    const [current,setCurrent] = useState(1);
    const audioRef = useRef(null);
    const bgRef = useRef(null);
    const winRef = useRef(null);
    const bugRef = useRef(null);

    // useEffect(() => {
    //   const storedRecords = JSON.parse(localStorage.getItem('gameRecords'));
    //   if (storedRecords) {
    //     setGameRecords(storedRecords);
    //   }
    // }, []);

    const handleClick = num => {
      
        if (num === current ) {
            audioRef.current.play(); 
            if (num === 50 ) {
                endGame();
             }


        const index = numbers.indexOf(num)
        
        setNumbers(numbers => [
              ...numbers.slice(0,index) ,
             
              num < 26 ? num + 25 : 0,
              ...numbers.slice(index + 1),
       ]);
            
       setCurrent(current + 1)
          
           
        }  if (num !== current) {
            bugRef.current.play();
            
        } else if (num === 1) {
            startGame()
            
        } 
     };

    const stopSound = () => {
    
        setSoundOn(false)
        
            bgRef.current.pause();
            bugRef.current.pause();
            audioRef.current.pause()
        
      };

 const reStart = () => {
    window.location.reload(false);
 }
    const endGame = () => {
       winRef.current.play();
        setGameFlag(false)
      
        setGameOver(true)
        bgRef.current.pause();
      };

    const startGame = () => {
       
        setGameFlag(true)

     
        if (soundOn) { bgRef.current.play();}
        };

    const recordResult = (result) => {
        setResult(result);
        console.log(result)
    } 
    

  

    
  

return (
    
        <div className={gameOver? 'OneToFifty-Container-Overlay' : 'OneToFifty-Container'} >
            
            <audio ref={bgRef} src={bgSound}></audio>
            <audio ref={audioRef} src={clickSound}></audio>
            <audio ref={winRef} src={winSound}></audio>
            <audio ref={bugRef} src={bugSound}></audio>
          
         <div className='Game-Container'>
            <h1 className={gameOver? 'btn-overlay ' : 'title'}>1to50</h1>     
            <Timer gameOver={gameOver} gameFlag={gameFlag} recordResult={recordResult}  />
            <button  className={gameOver? 'btn-overlay ' : 'btn'} onClick={stopSound}>STOP MUSIC</button>
            <button className={gameOver? 'btn-overlay ' : 'btn'} onClick={reStart}>NEW GAME</button>

            <OuterBoard numbers={numbers} handleClick={handleClick} gameOver={gameOver} > </OuterBoard>
            {gameOver ? (
        <ScoreBoard currentresult={result} />
      ) : (
        null
      )}
        </div>
        <BuyMeACoffeeButton/>
        
      </div>
    )
}

export default OneToFifty





