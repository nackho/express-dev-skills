const skills = [
    {id: "HTML", skill: 'HTML', learned: true},
    {id: "CSS", skill: 'CSS', learned: true},
    {id: "JS", skill: 'Javascript', learned: true},
    {id: "Node.js", skill: 'Node.js', learned: false},
    {id: "Express", skill: 'Express', learned: false},
    {id: "MongoDB", skill: 'MongoDB', learned: false}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
  };
  
  function getAll() {
    return skills;
  }
 
  function getOne (id) {
    return skills.find(skill => skill.id === id);
  }

  function create (skill) {
    skill.id = skill.skill;
    skill.learned = false;
    skills.push(skill);
  }

  function deleteOne(id) {
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
  }