function App(){
const[task,setTask] = useState(
    [
        {
            id: 1,
            title:"Estudar programação"
            description: "Estudar programação para se tornar um desenvolvefor full stack ",
isCompleted:false

        }
        {
            id: 2,
            title:"Estudar em inglês ",
            description:"para se tornar fluente",
            isCompleted: false
        }
        {
id: 3,
title:"Estudar matemática",
description:"Estudar matemática para melhorar minha lógica",
isCompleted: false

        }

    ]);

return (
    <h1>Gerenciando tarefas</h1>
);
}
export default App;




































/*import { useState } from "react";
function App() {
const[message, setMessage] = useState('olá mundo');
return(
    <div>
        <h1>{message}</h1>
<button onClick={
    ()=>{setMessage('olá fui clicado');}
}></button>


    </div>
)

}
export default App
