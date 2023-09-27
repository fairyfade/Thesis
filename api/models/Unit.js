/**
 * Unit.js
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
        type: 'string',
        required: true,
      },
      topic: { //the unit's topic explanation
        type: 'string',
        required: true,
      },
      total_num_lessons: { //the total number of lessons in the unit
        type: 'string',
        required: true,
      },
      completion_rate: { // the percentage of overall lessons completed in the unit
        type: 'string',
        required: true,
      },
      complete: { //true if the unit's completion rate is 100%
        type: 'boolean',
        required:true,
      },
    }
  };