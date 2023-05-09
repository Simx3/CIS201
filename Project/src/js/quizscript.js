let questions = [
     {
      id: 1,
      question: "What cookie is served as a dessert in Chinese restaurants?",
      answer: "Fortune Cookie",
      options: [
         "Chocolate Cookie",
         "Fortune Cookie",
         "Sugar Cookie",
         "Macaroons"
      ]
    },
    {
      id:2,
      question: "What is the main flavor in a traditional tiramisu cake?",
      answer: "Coffee",
      options: [
        "Vanilla",
        "Biscuit",
        "Coffee",
        "Chocolate"
      ]
    },
    {
      id:3,
      question: "Which country did cheesecake originate in?",
      answer: "France",
      options: [
        "France",
        "Italy",
        "Sweden",
        "England"
      ]
    },
    {
      id:4,
      question: "Macarons are usually flavored with what?",
      answer: "Almond Powder",
      options: [
        "Cinnamon",
        "Pecans",
        "Almond Powder",
        "Vanilla"
      ]
    },
    {
      id:5,
      question: "Where did chocolate cake originate from?",
      answer: "America",
      options: [
        "Spain",
        "Switzerland",
        "Belgium",
        "America"
      ]
    },
  ];

  let question_count = 0;
  let points = 0;

  window.onload = function(){
    show(question_count);
  };

  function show(count){
    let question = document.getElementById("questions");
    let[first, second, third, fourth] = questions[count].options;

    question.innerHTML = `<h2 style='color: #936529;'>Q${count + 1}. ${questions[count].question}</h2>
      <ul class="option_group">
      <li class="option">${first}</li>
      <li class="option">${second}</li>
      <li class="option">${third}</li>
      <li class="option">${fourth}</li>         
      </ul>`;
      toggleActive();
  }

  function toggleActive(){
    let option = document.querySelectorAll("li.option");
    for(let i=0; i<option.length; i++){
      option[i].onclick = function(){
        for(let i=0; i<option.length; i++){
           if(option[i].classList.contains("active")){
               option[i].classList.remove("active");
         }
        }
    option[i].classList.add("active");
      }
    }
  }



function next(){
  if(question_count == questions.length -1){
    location.href = "last.html";
  }
  console.log(question_count);


  let user_answer = document.querySelector("li.option.active").innerHTML;

  if(user_answer == questions[question_count].answer){
    points +=10;
    sessionStorage.setItem("points",points);
  }
  console.log(points);

  question_count++;
  show(question_count);
}




