var questions = [
    {
        questionText: 'Quaid e azam was the?',
        option1: 'Part For pti member',
        option2: 'Pm Of Pakistan',
        option3: 'Leader of Pakistan ',
        option4: 'i dont know',
        correctOption: 'Leader of Pakistan ',
    },

    {
        questionText: 'Who is the Currunt PM In Pakistan',
        option1: 'Imran Khan',
        option2: 'Quaid e Azam',
        option3: 'Arshad Magsi',
        option4: 'shahbaz Sharif',
        correctOption: 'shahbaz Sharif',
    },

    {
        questionText: 'Who Is Muhammad Ali Mughal',
        option1: 'CEO Of Jawan Pakistan',
        option2: 'Member Of Jawan pakistan ',
        option3: 'He Is owner Of Adam jee ',
        option4: 'he is Facebook Owner',
        correctOption: 'CEO Of Jawan Pakistan',
    },




    {
        questionText: 'Who is the Currunt TM In Pakistan',
        option1: 'Khan',
        option2: 'Quaid e Azam',
        option3: 'Arshad Magsi',
        option4: 'shahbaz Sharif',
        correctOption: 'Khan',
    }
];

function checkResult() {
    correctQuestion = 0;
    for (var i = 0; i < questions.length; i++) {
        radios = document.getElementsByName('option'+i);
        radios.forEach(element => {
            if(element.checked && element.value == questions[i].correctOption ) {
                 correctQuestion++;
            }
        });
    }
    document.getElementById('quiz-area').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('correctQuestion').innerHTML = correctQuestion;
}

for (var i = 0; i < questions.length; i++) {
    document.write('<br><br>');
    document.write(questions[i].questionText + '<br>');
    document.write(`
      <input type="radio" name="option${i}"  value="${questions[i].option1}"  />${questions[i].option1}
    `);
    document.write(`
      <input type="radio" name="option${i}"  value="${questions[i].option2}"  />${questions[i].option2}
    `);
    document.write(`
      <input type="radio" name="option${i}"  value="${questions[i].option3}"  />${questions[i].option3}
    `);
    document.write(`
      <input type="radio" name="option${i}"  value="${questions[i].option4}"  />${questions[i].option4}
    `);
}