const { ObjectId } = require('mongodb');
const modelBasics = require('../models/basicsModel');

// const productId = async (id) => {
//   const testId = ObjectId.isValid(id);
//   if (testId === false) {
//     return null;
//   }
//   const product = await modelProducts.productId(id);
//   return product;
// };

const allSchedules = async () => {
  const list = await modelBasics.allSchedules();
  return list;
};


const createSchedule = async (employeSchedule) => {
  const list = await modelBasics.allSchedules();
  const validate = list.find((employee) => employee.name === employeSchedule.name);
  if (validate) {
    return null;
  }
  const insertReq = await modelBasics.createSchedule(employeSchedule);
  return insertReq;
};

const updateSchedule = async (employeSchedule, id) => {
  const testId = ObjectId.isValid(id);
  if (testId === false) {
    return null;
  }
  const updatReq = await modelProducts.update(employeSchedule, id);
  return updatReq;
};

const deleteEmployee = async (id) => {
  const testId = ObjectId.isValid(id);
  if (testId === false) {
    return null;
  }
  const deleteReq = await modelBasics.deleteEmployee(id);
  return deleteReq;
};

module.exports = {
  allSchedules,
  createSchedule,
  updateSchedule,
  deleteEmployee,
};