document.querySelectorAll(".detail-info-container").forEach(d => {
    d.onmouseover = () => {
        document.querySelector('.info').style.display = "block";
    }
    d.onmouseout = () => {
        document.querySelector('.info').style.display = "none";
        }
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").onsubmit = () => {
      const tarefa = document.querySelector("#tarefa");
  
      const li = document.createElement('li');
      li.innerHTML = tarefa.value;
      document.querySelector('#tarefas').append(li);
  
      return false;
    };
  });
  