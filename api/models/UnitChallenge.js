/**
 * UnitChallenge.js
 *
 * A table holding unit challenge information.
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
      total_units: { //total number of units
        type: 'string',
        required: true,
      },
      topic: { //the unit's topic explanation
        type: 'string',
        required: true,
      },
      instructions: { //unit challenge instructions
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
      trinket_url: {
        type: 'string',
        required: true,
      },
    }
  };