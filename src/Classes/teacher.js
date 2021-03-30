import { Person } from "./person";

class Teacher extends Person {
    constructor(name, degree) {
        super(name);
        this.degree = degree;
    }
      // Spread Operator
      concatArray(){
        const first = [1, 2, 3];
        const secund = [4, 5, 6];
        const combined = first.concat(secund);
        const combinedOne = [...first,'A', ...secund,'B'];
        console.log('One',combined);
        console.log('Two', combinedOne);
 
        const firstName = { name:'Cesar' };
        const lastName = { lastName: 'Bermudez' };
        const combinedName = {...firstName, ...lastName,location: 'Australia'};
        console.log(combinedName);
      //Classes
        const teacher = new Teacher('Cesar','CBM');
        teacher.walk();
     }
}
export default Teacher;