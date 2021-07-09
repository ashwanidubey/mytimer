import logo from './logo.svg';
import './App.css';
import { useState ,useEffect } from 'react';

function App() {
  var white={color: "white"  , background:"black" }
  var black={color: "black"  , background:"white" }
  var d = new Date(); 
  var h=d.getHours(); 
  var m=d.getMinutes();
  var s=d.getSeconds();
  var t=h+" : "+m+" : "+s
  const [time, settime] = useState(t)
  const [value, setvalue]=useState({})
  
  useEffect(() => {
    //console.log("hook 1")
   h=d.getHours(); 
   m=d.getMinutes();
   if(m<10)
    m="0"+m
   s=d.getSeconds();
   if(s<10)
    s="0"+s
   t=h+" : "+m+" : "+s
    //setvalue(t)
    if(s%2==1)
     setvalue(black)
    else 
     setvalue(white) 
    settime(t)
  }, [])
  useEffect(() => {
    //console.log("hook 2")
    h=d.getHours(); 
   m=d.getMinutes();
   if(m<10)
    m="0"+m
   s=d.getSeconds();
   if(s<10)
    s="0"+s
   t=h+" : "+m+" : "+s
   if(s%2==1)
     setvalue(black)
    else 
     setvalue(white) 
    //setvalue(t)
    settime(t)
  }, [value])
  return (
    <div className="App" style={value}>
      <h1 id="timer">{time}</h1>
    </div>
  );
}

export default App;
