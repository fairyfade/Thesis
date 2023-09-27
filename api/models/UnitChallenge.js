/**
 * UnitChallenge.js
 *
 * A table holding unit challenge information.
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
      complete: { //true if the unit's completion rate is 100%
        type: 'boolean',
        required:true,
      },
      attempts: { //number of attempts 
        type: 'string',
        required: true,
      },
      url: { //the video explanation url
        type: 'string',
        required: false,
      },
    }
  };