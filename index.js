// Code your solution in this file!
const scuberHQ = 42;
function distanceFromHqInBlocks(location){
  if (location >= scuberHQ) {
    let distance = location - scuberHQ;
         return distance; 
         } 
         else { let distance = scuberHQ - location ;
            return distance;
                   }
};
    distanceFromHqInBlocks(50);
    distanceFromHqInBlocks(43);
    distanceFromHqInBlocks(50);
    distanceFromHqInBlocks(34);

  function distanceFromHqInFeet(location) { 
     return distanceFromHqInBlocks(location) * 264;
    }
     distanceFromHqInFeet(43);

  function distanceTravelledInFeet(start, destination) {
    if (destination > start) {
        return (destination - start) * 264; 
    } else { return (start - destination) * 264; 
     }
    };
     distanceFromHqInFeet(43, 48);

  function calculatesFarePrice(start, destination) {
     let distance = distanceTravelledInFeet(start, destination); 
      if (distance <= 400) {
        return 0; 
         } else if (distance < 2000) {
             return (distance - 400) * 0.02; 
             } else if (distance >= 2000 && distance < 2500) { 
                return 25; 
                } else if (distance >= 2500) {
                     return "cannot travel that far";
                     }
                    }
                    calculatesFarePrice(43, 44);
                    calculatesFarePrice(50, 58);
                    calculatesFarePrice(34, 24);
