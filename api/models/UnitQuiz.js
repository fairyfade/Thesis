/**
 * UnitQuiz.js
 *
 * A table holding unit information.
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
      topic: { //the unit's topic explanation
        type: 'string',
        required: true,
      },
      instructions: { //the quiz instructions
        type: 'string',
        required: true,
      },
      q1: { //the first question
        type: 'string',
        required: true,
      },
      q1_ans: { //the answer to the first question
        type: 'string',
        required: true,
      },
      q2: { //the second question
        type: 'string',
        required: true,
      },
      q2_ans: { //the answer to the second question
        type: 'string',
        required: true,
      },
      q3: { //the third question
        type: 'string',
        required: true,
      },
      q3_ans: { //the answer to the third question
        type: 'string',
        required: true,
      },
      q4: { //the fourth question
        type: 'string',
        required: true,
      },
      q4_ans: { //the answer to the fourth question
        type: 'string',
        required: true,
      },
      q5: { //the fifth question
        type: 'string',
        required: true,
      },
      q5_ans: { //the answer to the fifth question
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