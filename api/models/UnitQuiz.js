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
      q1_correct: { //the correct answer to the first question
        type: 'string',
        required: true,
      },
      q1_ans1: { //the answer to the first question
        type: 'string',
        required: true,
      },
      q1_ans2: { //the second answer to the first question
        type: 'string',
        required: true,
      },
      q1_ans3: { //the third answer to the first question
        type: 'string',
        required: true,
      },
      q1_ans4: { //the fourth answer to the first question
        type: 'string',
        required: true,
      },
      q2: { //the second question
        type: 'string',
        required: true,
      },
      q2_correct: { //the correct answer to the second question
        type: 'string',
        required: true,
      },
      q2_ans1: { //the first answer to the second question
        type: 'string',
        required: true,
      },
      q2_ans2: { //the second answer to the second question
        type: 'string',
        required: true,
      },
      q2_ans3: { //the third answer to the second question
        type: 'string',
        required: true,
      },
      q2_ans4: { //the fourth answer to the second question
        type: 'string',
        required: true,
      },
      q3: { //the third question
        type: 'string',
        required: true,
      },
      q3_correct: { //the correct answer to the third question
        type: 'string',
        required: true,
      },
      q3_ans1: { //the answer to the third question
        type: 'string',
        required: true,
      },
      q3_ans2: { //the answer to the third question
        type: 'string',
        required: true,
      },
      q3_ans3: { //the answer to the third question
        type: 'string',
        required: true,
      },
      q3_ans4: { //the answer to the third question
        type: 'string',
        required: true,
      },
      q4: { //the fourth question
        type: 'string',
        required: true,
      },
      q4_correct: { //the correct answer to the fourth question
        type: 'string',
        required: true,
      },
      q4_ans1: { //the answer to the fourth question
        type: 'string',
        required: true,
      },
      q4_ans2: { //the answer to the fourth question
        type: 'string',
        required: true,
      },
      q4_ans3: { //the answer to the fourth question
        type: 'string',
        required: true,
      },
      q4_ans4: { //the answer to the fourth question
        type: 'string',
        required: true,
      },
      q5: { //the fifth question
        type: 'string',
        required: true,
      },
      q5_correct: { //the correct answer to the fifth question
        type: 'string',
        required: true,
      },
      q5_ans1: { //the first answer to the fifth question
        type: 'string',
        required: true,
      },
      q5_ans2: { //the second answer to the fifth question
        type: 'string',
        required: true,
      },
      q5_ans3: { //the third answer to the fifth question
        type: 'string',
        required: true,
      },
      q5_ans4: { //the fourth answer to the fifth question
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