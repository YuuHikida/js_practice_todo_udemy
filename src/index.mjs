import "./styles.css";

const onClickAdd = (element) => {
  //  alert();
  const inputText = document.getElementById("add-text").value;
  //textbotを空にする
  document.getElementById("add-text").value = "";

  //li生成
  const li = document.createElement("li");

  //div
  const div = document.createElement("div");
  div.className = "list-row";

  // /p tag
  const p = document.createElement("p");
  p.className = "todo-item";
  p.innerText = inputText;

  // 階層構造の実現
  div.appendChild(p);
  li.appendChild(div);

  console.log(li);

  document.getElementById("incomplete-list").appendChild(li);
};

// addEventListener <-イベントを読み取る
document.getElementById("add-button").addEventListener("click", onClickAdd);
