const serviceProducts = require('../services/basicsService');

// const productId = async (req, res) => {
//   const { id } = req.params;
//   const response = await serviceProducts.productId(id);
//   if (!response) {
//     return res.status(422).json({
//       err: {
//         code: 'invalid_data',
//         message: 'Wrong id format',
//       },
//     });
//   }
//   return res.status(200).json(response);
// };

const allSchedules = async (_req, res) => {
  const response = await serviceBasics.allSchedules();
  return res.status(200).json({ allSchedules: response });
};

const createSchedule = async (req, res) => {
  const employeSchedule = req.body;
  const response = await serviceBasics.createSchedule(employeSchedule);
  if (!response) {
    return res.status(422).json({
      err: {
        code: 'invalid_data',
        message: 'Erro ao fazer está solicitação',
      } });
  }
  return res.status(201).json(response);
};

const updateSchedule = async (req, res) => {
  const employeSchedule = req.body;
  const { id } = req.params;
  const response = await serviceBasics.updateSchedule(employeSchedule, id);
  if (!response) {
    return res.status(422).json({
      err: {
        code: 'invalid_data',
        message: 'Erro ao fazer está solicitação',
      } });
  }
  return res.status(201).json(response);
};

const deleteEmployee = async (req, res) => {
  const { id } = req.params;
  const response = await serviceBasics.deleteEmployee(id);
  if (!response) {
    return res.status(422).json({
      err: {
        code: 'invalid_data',
        message: 'Wrong id format',
      } });
  }
  return res.status(200).json(response);
};

module.exports = {
  allSchedules,
  createSchedule,
  updateSchedule,
  deleteEmployee,
};
