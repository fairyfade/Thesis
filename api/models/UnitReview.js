/**
 * UnitReview.js
 *
 * A table holding unit review information.
 */


module.exports = {
    attributes: {
      userID: {
        model: 'student',
        required: false,
      },
      unit_number: { 
        model: 'unit',
        required: true,
      },
      topic: { //the unit review's topic explanation
        type: 'string',
        required: true,
      },
      unit_info: { //review information to display 
        type: 'string',
        required: true,
      },
      complete: {
        type: 'boolean',
        required:true,
      },
    }
  };