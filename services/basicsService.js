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
  // const list = await modelBasics.allSchedules();
  // const validate = list.find((employee) => employee === employeSchedule);
  // if (validate) {
  //   return null;
  // }
  const insertReq = await modelBasics.createSchedule(employeSchedule);
  console.log(insertReq);
  return insertReq;
};

const updateSchedule = async (employeSchedule, id) => {
  const testId = ObjectId.isValid(id);
  if (testId === false) {
    return null;
  }
  const updatReq = await modelBasics.updateSchedule(employeSchedule, id);
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