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

  //button(完了)createElement
  const compleatButton = document.createElement("button");
  compleatButton.innerText = "完了";
  compleatButton.addEventListener("click", () => {
    alert();
  });

  //button(削除)
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    alert();
  });

  // 階層構造の実現
  div.appendChild(p);
  div.appendChild(compleatButton);
  div.appendChild(deleteButton);
  li.appendChild(div);
  document.getElementById("incomplete-list").appendChild(li);

  console.log(compleatButton);
};

// addEventListener <-イベントを読み取る
document.getElementById("add-button").addEventListener("click", onClickAdd);
