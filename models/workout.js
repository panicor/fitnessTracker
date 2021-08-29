const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema ({
    day: {
        type: Date,
        default: Date.now,
    },
    excercises: {
        type: Array,
    },
    name: {
        type: String,
    },
    duration: {
        type: Number,
    },
    reps: {
        type: Number,
    },
    weight: {
        type: Number,
    },
    distance: {
        type: Number,
    },
    type: {
        type: String
    },
    sets: {
        type: Number
    },
})

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;