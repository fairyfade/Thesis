/**
 * UnitQuiz.js
 *
 * A table holding unit information.
 */


module.exports = {
    attributes: {
      userID: {
        model: 'student',
        required: true,
      },
      unit_number: { 
        model: 'unit',
        required: true,
      },
      topic: { //the unit's topic explanation
        type: 'string',
        required: true,
      },
      quiz: { //the unit's quiz
        type: 'string',
        required: true,
      },
      correctness: { //the quiz score
        type: 'string',
        required: false,
      },
      complete: { //true if the unit's completion rate is 100%
        type: 'boolean',
        required:true,
      },
    }
  };