/**
 * Unit.js
 *
 * A table holding unit information.
 */


module.exports = {
    attributes: {
      studentId: {
        model: 'student',
        required: false,
      },
      unit_number: { 
        type: 'string',
        required: true,
      },
      topic: { //the unit's topic explanation
        type: 'string',
        required: true,
      },
      syntax_link: { //link to the syntax sheet for this unit
        type: 'string',
        required: false,
      },
      introduction_text: {
        //what the unit is about (brief summary/overview)
        type: 'string',
        required: true,
      },
      lesson_journey: {
        //what will the lessons in this unit be about (brief overview)
        type: 'string',
        required: true,
      },
      learning_goals: {//what are the learning goals for this unit
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