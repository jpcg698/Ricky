class Exatec {
  constructor({name, semester, major}) {
    this.name = name;
    this.semester = semester;
    this.major = major;
  }
}
const students = [
  {
    name: "Ricardo",
    semester: "9",
    major: "ISC",
    isGraduated: true
  },
  {
    name: "Gera",
    semester: "1",
    major: "IBT",
    isGraduated: false
  },
  {
    name: "Emmanuel",
    semester: "9",
    major: "ISC",
    isGraduated: true
  }
];

let exatecsArray = students
  .filter((a) => a.isGraduated === true)
  .map(({ ...a}) => {
    delete a.isGraduated;
    return new Exatec({...a});
  });

let message = [...students]
  .filter(({ ...a }) => a.isGraduated === true)
  .reduce((a, b) => {
    return `${a} ${b.name} from ${b.major} and`;
  }, "This years exatecs are:");

console.log({ exatecsArray });
console.log({ message });
// Expected Output
// [
//     { name: 'Ricardo', semester: '9', major: 'ISC'  },
//     { name: 'Emmanuel', semester: '9', major: 'ISC' }
//   ]
//   This years exatecs are: Ricardo from ISC and Emmanuel from ISC and


// PRO tip: use map and reduce
