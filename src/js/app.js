import GameSavingLoader from "./gameSaving";

(async () => {
  try{
    const data = await GameSavingLoader.load()
    console.log(data);  
  }catch{
    console.log(err);
  }
})()



