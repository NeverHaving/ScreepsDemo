// 2 Simple Move Begin

// import { getObjectsByPrototype } from 'game/utils';
// import { Creep } from 'game/prototypes';
// import { Flag } from 'game/prototypes';

// export function loop() {
//     var creeps = getObjectsByPrototype(Creep);
//     var flags = getObjectsByPrototype(Flag);

//     creeps.forEach(creep => {
//         creep.moveTo(flags[0]);
//     });
// }

// 2 Simple Move End



// 3 First Attack Begin

// import { getObjectsByPrototype } from 'game/utils';
// import { Creep } from 'game/prototypes';
// import { ERR_NOT_IN_RANGE } from 'game/constants';


// export function loop() {
//     var myCreep = getObjectsByPrototype(Creep).find(creep => creep.my);
//     var enemyCreep = getObjectsByPrototype(Creep).find(creep => !creep.my);

//     if(myCreep.attack(enemyCreep) == ERR_NOT_IN_RANGE) {
//         myCreep.moveTo(enemyCreep);
//     }
// }

// 3 First Attack End