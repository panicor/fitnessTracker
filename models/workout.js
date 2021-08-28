const mongoose = require('mongoose');

const workoutSchema = new workoutSchema ({
    day: {

    },
    excercises: {

    }
})

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;