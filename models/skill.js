const skills = [
    {id: "HTML", skill: 'HTML', learned: true},
    {id: "CSS", skill: 'CSS', learned: true},
    {id: "JS", skill: 'Javascript', learned: true},
    {id: "Node.js", skill: 'Node.js', learned: false},
    {id: "Express", skill: 'Express', learned: false},
    {id: "MongoDB", skill: 'MongoDB', learned: false}
  ];
  
  module.exports = {
    getAll
  };
  
  function getAll() {
    return skills;
  }
 