/**
 * StudentProgress.js
 *
 * A table holding  student progress information.
 */


module.exports = {
    attributes: {
    userID: {
        model: 'users',
        required: true,
      },
    studentID: {
        model: 'student',
        required: false,

    },

    unit_number:{
        type: 'string',
        required: false,
    },
    lesson_number:{
        type: 'string',
        required: true,
    },
    sublesson_number:{
        type: 'string',
        required: true,
    },
    activity_number: {
        type: 'string',
        required: true,
    },
    type_curriculum:{
        type: 'string',
        required: true,
    },
    topic: {
        type: 'string',
        required: true,
    },
    grade: { //this will hold quiz grades and placeholder grades for the other activities that don't have autograders
        type: 'string',
        required: true,
    },
}

};