

export default function App(){

  const addUser = async () => {
    
    try {
      const response =  await fetch("http://localhost:3000/users", 
        {
          method : "POST",
          headers : {"Content-Type":"application/json"},
          body: JSON.stringify(
            {
            "name":"Felipe Augusto",
            "email":"lipe.augusto@gmail.com"
          }
          )
        }
      )
      
      const data = await response.json();
      console.log("Usuario Criado!");

    } catch (error) {

      console.error("ERROR: Erro ao adicionar", error);

    }
    
  }

  return <button  onClick={addUser}>Adicionar</button>
}