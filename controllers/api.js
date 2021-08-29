const router = require('express').Router();
const Workout = require('../models/workout');

router.post("/workouts", ({ body }, res) => {
    Workout.create(body)
    .then((workoutDB) => {
        res.json(workoutDB)
    })
    .catch((err) => {
        res.json(err)
    })
})

router.put("/workouts/:id", ({ body, params }, res) => {
    const workout = body;
    Workout.findByIdAndUpdate(
        {
            _id: `${params.id}` 
        },
        {
            $push: { exercises: workout }
        }
    )
    .then((data) => {
        res.json(data)
    })
    .catch((err) => {
        res.json(err)
    })
})

router.get("/workouts", (req, res) => {
    Workout.find({})
    .then(workoutDB => {
        res.json(workoutDB)
    })
    .catch((err) => {
        res.json(err)
    })
})

router.get("/workouts/range", (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                durationTotal: {
                    $sum: '$exercises.duration'
                }
            }
        }
    ])
    .then((workoutDB) => {
        res.json(workoutDB)
    })
    .catch((err) => {
        res.json(err)
    })
})

module.exports = router;
