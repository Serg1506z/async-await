import GameSavingLoader from "./gameSavingLoader";

(async () => {
  try{
    const data = await GameSavingLoader.load()
    console.log(data);  
  }catch{
    console.log(err);
  }
})()



