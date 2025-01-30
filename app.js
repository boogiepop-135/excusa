/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];
  //console.log("Hello Rigo from the console!");

  let whoExcusa = who[Math.floor(Math.random() * who.length)];
  let actionExcusa = action[Math.floor(Math.random() * action.length)];
  let whatExcusa = what[Math.floor(Math.random() * what.length)];
  let WhenExcusa = when[Math.floor(Math.random() * when.length)];
  let excusa = whoExcusa + actionExcusa + whatExcusa + WhenExcusa;
  //console.log(excusa);
  document.getElementById("excusa").innerText = excusa;

  console.log(excusa);
};
