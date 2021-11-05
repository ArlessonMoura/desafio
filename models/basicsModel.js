const { ObjectId } = require('mongodb');
const connection = require('./connection');

const allSchedules = async () => connection()
.then((db) => db.collection('basics').find().toArray())
 .then((list) => list);

//  const allSchedulesNoId = async () => connection()
//  .then((db) => db.collection('basics').find({  }, { _id: false } ).toArray())
//   .then((list) => list);

// const scheduleByEmploye = async (id) => connection()
// .then((db) => db.collection('basics').findOne({ _id: ObjectId(id) }))
//  .then((list) => list);

const createSchedule = async (employeSchedule) => {
  const inserted = await connection().then((db) => db.collection('basics').insertOne(employeSchedule));
  return {
    _id: inserted.insertedId,
    ...employeSchedule
  }
};

const updateSchedule = async (employeSchedule, id) => {
  const updated = await connection()
  .then((db) => db.collection('basics').updateOne({ _id: ObjectId(id) },
    { $set: employeSchedule }));
};

const deleteEmployee = async (id) => {
  await connection()
  .then((db) => db.collection('basics').deleteOne({ _id: ObjectId(id) }));
};

module.exports = {
  allSchedules,
  createSchedule,
  updateSchedule,
  deleteEmployee,
  // allSchedulesNoId,
};
