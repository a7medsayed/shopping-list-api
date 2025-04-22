const { v4: uuidv4 } = require('uuid');

let promoCodes = [];

const getAll = () => promoCodes;

const getByName = (name) => {
  return promoCodes.find(p => p.name === name.toUpperCase());
};

const getById = (id) => promoCodes.find(p => p.id === id);

const add = ({ name, percentage }) => {
  const newPromo = {
    id: uuidv4(),
    name: name.toUpperCase(),
    percentage
  };
  promoCodes.push(newPromo);
  return newPromo;
};

const remove = (id) => {
  const index = promoCodes.findIndex(p => p.id === id);
  if (index !== -1) {
    promoCodes.splice(index, 1);
    return true;
  }
  return false;
};

const exists = (name) => {
    return promoCodes.some(n => n.name === name);
};

module.exports = {
  getAll,
  getByName,
  getById,
  add,
  remove,
  exists
};
