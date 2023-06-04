import data from "./dataset.json";
const music = localStorage.getItem("MUSIC");
const coding = localStorage.getItem("CODING");
const modern = localStorage.getItem("MODERN-ART");
const previous = document.getElementById("previous");
const next = document.getElementById("next");
const submit = document.getElementById("submit");
document.getElementById("submit").disabled = true;
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");
const input4 = document.getElementById("input4");

const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const label4 = document.getElementById("label4");

const question = document.getElementById("question");
next.innerText = "Next";
var start = true;
var id = 0;
let counter = 0;
const fetchQuestion = (param) => {
  question.innerHTML = param.question;

  label1.innerText = param.options[0];
  input1.setAttribute("value", param.options[0]);
  label2.innerText = param.options[1];
  input2.setAttribute("value", param.options[1]);
  label3.innerText = param.options[2];
  input3.setAttribute("value", param.options[2]);
  label4.innerText = param.options[3];
  input4.setAttribute("value", param.options[3]);
  counter += 1;
  document.querySelectorAll("input[name='question']").forEach((input) => {
    input.addEventListener("click", (e) => {
      ////console.log(e.target.value);
      window.localStorage.setItem(`DATA`, e.target.value);
    });
  });
};
const answers = [];
let result = 0;

const nextMusicOp = () => {
  try{
    start = false;
  previous.disabled = false;
  if (id < 11) {
    if (id == 0 && localStorage.getItem(`DATA`) === data.music[0].answer) {
      answers.push(true);
    } else if (localStorage.getItem(`DATA`) === data.music[id].answer) {
      answers.push(true);
    } else if (
      id == 10 &&
      localStorage.getItem(`DATA`) === data.music[10].answer
    ) {
      answers.push(true);
      next.innerText = "complete";
    } else {
      answers.push(false);
    }
    id++;
    fetchQuestion(data.music[id]);

    let ele = document.querySelectorAll("input[name='question']");
    for (let i = 0; i < ele.length; i++) {
      ele[i].checked = false;
    }
  }
  if (id == 9) {
    document.getElementById("next").innerText = "complete";
    document.getElementById("next").style.backgroundColor = "green";
    document.getElementById("submit").disabled = false;
  }
  }
  catch {
    alert(`You have completed the Quiz
Please click Submit to view result.`)
  }
};

const submitOp = () => {
  //console.log(answers);
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === true) {
      result++;
    }
  }
  localStorage.setItem("RESULT", result);
};

const previousMusicOp = () => {
  try{
    if (id < 11) {
      id--;
      //console.log(localStorage.getItem(`DATA${id + 1}`));
      fetchQuestion(data.music[id]);
      let ele = document.querySelectorAll("input[name='question']");
      for (let i = 0; i < ele.length; i++) {
        if (ele[i].value === localStorage.getItem(`DATA${id + 1}`)) {
          ele[i].checked = true;
        } else {
          ele[i].checked = false;
        }
      }
    }
  }
  catch{
    alert(`You have reached the starting question
please select Next to view next Question`)
  }
};

const nextCodingOp = () => {
  try{
    start = false;
  previous.disabled = false;
  if (id < 11) {
    if (id == 0 && localStorage.getItem(`DATA`) === data.coding[0].answer) {
      answers.push(true);
    } else if (localStorage.getItem(`DATA`) === data.coding[id].answer) {
      answers.push(true);
    } else if (
      id == 10 &&
      localStorage.getItem(`DATA`) === data.coding[10].answer
    ) {
      answers.push(true);
      next.innerText = "complete";
    } else {
      answers.push(false);
    }
    //console.log(answers);
    id++;

    //console.log(id);
    fetchQuestion(data.coding[id]);

    let ele = document.querySelectorAll("input[name='question']");
    for (let i = 0; i < ele.length; i++) {
      ele[i].checked = false;
    }
  }
  if (id == 9) {
    document.getElementById("next").innerText = "complete";
    document.getElementById("next").style.backgroundColor = "green";
    document.getElementById("submit").disabled = false;
  }
  }
  catch{
    alert(`You have completed the Quiz
Please click Submit to view result.`)
  }
};

const previousCodingOp = () => {
  try{
    if (id < 11) {
      id--;
      fetchQuestion(data.coding[id]);
      let ele = document.querySelectorAll("input[name='question']");
      for (let i = 0; i < ele.length; i++) {
        if (ele[i].value === localStorage.getItem(`DATA${id + 1}`)) {
          ele[i].checked = true;
        } else {
          ele[i].checked = false;
        }
      }
    }
  }
  catch{
    alert(`You have reached the starting question
please select Next to view next Question`)
  }
};

const nextModernOp = () => {
  try{
    start = false;
  previous.disabled = false;
  if (id < 11) {
    if (id == 0 && localStorage.getItem(`DATA`) === data.modernart[0].answer) {
      answers.push(true);
    } else if (localStorage.getItem(`DATA`) === data.modernart[id].answer) {
      answers.push(true);
    } else if (
      id == 10 &&
      localStorage.getItem(`DATA`) === data.modernart[10].answer
    ) {
      answers.push(true);
      next.innerText = "complete";
    } else {
      answers.push(false);
    }
    //console.log(answers);
    id++;

    //console.log(id);
    fetchQuestion(data.modernart[id]);

    let ele = document.querySelectorAll("input[name='question']");
    for (let i = 0; i < ele.length; i++) {
      ele[i].checked = false;
    }
  }
  if (id == 9) {
    document.getElementById("next").innerText = "complete";
    document.getElementById("next").style.backgroundColor = "green";
    document.getElementById("submit").disabled = false;
  }
  }
  catch{
    alert(`You have completed the Quiz
Please click Submit to view result.`)
  }
};

const previousModernOp = () => {
  try{
    if (id < 11) {
      id--;
      fetchQuestion(data.modernart[id]);
      let ele = document.querySelectorAll("input[name='question']");
      for (let i = 0; i < ele.length; i++) {
        if (ele[i].value === localStorage.getItem(`DATA${id + 1}`)) {
          ele[i].checked = true;
        } else {
          ele[i].checked = false;
        }
      }
    }
  }
  catch{
    alert(`You have reached the starting question
please select Next to view next Question`)
  }
};

window.addEventListener("load", () => {
  if (music !== null) {
    fetchQuestion(data.music[0]);
    previous.disabled = true;
    localStorage.removeItem("CODING");
    localStorage.removeItem("MODERN-ART");
    next.addEventListener("click", nextMusicOp);
    submit.addEventListener("click", submitOp);
    previous.addEventListener("click", previousMusicOp);
  }
  if (coding !== null) {
    fetchQuestion(data.coding[0]);
    previous.disabled = true;
    localStorage.removeItem("MUSIC");
    localStorage.removeItem("MODERN-ART");
    next.addEventListener("click", nextCodingOp);
    submit.addEventListener("click", submitOp);
    previous.addEventListener("click", previousCodingOp);
  }
  if (modern !== null) {
    fetchQuestion(data.modernart[0]);
    previous.disabled = true;
    localStorage.removeItem("MUSIC");
    localStorage.removeItem("CODING");
    next.addEventListener("click", nextModernOp);
    submit.addEventListener("click", submitOp);
    previous.addEventListener("click", previousModernOp);
  }
});
