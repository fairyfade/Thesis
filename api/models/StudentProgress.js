/**
 * StudentProgress.js
 *
 * A table holding  student progress information.
 */


module.exports = {
    userID: {
        model: 'users',
        required: true,
      },
    studentID: {
        model: 'student',
        required: true,

    },

    unit_num:{
        type: 'string',
        required: true,
    },
    lesson_num:{
        type: 'string',
        required: true,
    },
    activity_num: {
        type: 'string',
        required: true,
    },
    code: {
        type: 'string',
        required: true,
    },
    codeRuns: {  //true if the students code successfully runs 
        type: 'boolean',
        required: true,
    }
}