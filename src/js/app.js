export default function attackInfoExtractor({ special: listOfAttacks }) {
    const finalList = [];
    for (const attack of listOfAttacks) {
        if (!attack.description) {  
          attack.desciption = "Описание недоступно";
        } 
        finalList.push(attack);
      }
    return finalList;
  }
