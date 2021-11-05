const router = require('express').Router();
// const validates = require('../middleware');
const controllerBasics = require('../controllers/basicsController');

// const {  } = validates;
const { createSchedule, allSchedules, updateSchedule, deleteEmployee } = controllerBasics;

router.post('/', createSchedule);
router.get('/', allSchedules);
router.put('/:id', updateSchedule);
router.delete('/:id', deleteEmployee);

module.exports = router;
