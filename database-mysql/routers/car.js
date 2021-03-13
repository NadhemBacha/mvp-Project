const express = require('express');
const router = express.Router();
const car = require('../controllers/car.js');



router.get('/', car.selectAllCars);
router.get('/:id', car.getCar);

router.post('/', car.addCar);

router.delete('/:id', car.deleteCar);
router.delete('/', car.deleteAll);

router.put('/:id', car.updateCar);


module.exports = router;