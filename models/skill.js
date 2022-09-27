const skills = [
    {unit: 1, skill: 'HTML', learned: true},
    {unit: 1, skill: 'CSS', learned: true},
    {unit: 1, skill: 'Javascript', learned: true},
    {unit: 2, skill: 'Node.js', learned: false},
    {unit: 2, skill: 'Express', learned: false},
    {unit: 2, skill: 'MongoDB', learned: false}
  ];
  
  module.exports = {
    getAll
  };
  
  function getAll() {
    return skills;
  }
 