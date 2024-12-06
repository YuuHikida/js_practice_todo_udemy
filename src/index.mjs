import "./styles.css";

const onClickAdd = (element) => {
  //  alert();
  const inputText = document.getElementById("add-text").value;
  //textbotを空にする
  document.getElementById("add-text").value = "";
  //未完了リストに追加
  createIcomplteTodo(inputText);
};

//渡された引数をもとに未完了のTODOを作成する関数
const createIcomplteTodo = (todo) => {
  //li生成
  const li = document.createElement("li");

  //div
  const div = document.createElement("div");
  div.className = "list-row";

  // /p tag
  const p = document.createElement("p");
  p.className = "todo-item";
  p.innerText = todo;

  //button(完了)createElement
  const compleatButton = document.createElement("button");
  compleatButton.innerText = "完了";
  compleatButton.addEventListener("click", () => {
    //押された完了ボタンの親にあるlitagは以下の完了ボタンと削除ボタンを削除
    const moveTarget = compleatButton.closest("li");
    compleatButton.nextElementSibling.remove();
    compleatButton.remove();

    // 戻すボタンを生成してdicタグは以下に設定
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    // 戻す実装
    backButton.addEventListener("click", () => {});

    moveTarget.firstElementChild.appendChild(backButton);

    //完了リストに移動
    document.getElementById("complete-list").appendChild(moveTarget);
  });

  //button(削除)
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親にあるlitagを未完了リストから削除
    const deleteTarget = deleteButton.closest("li"); //deleteButtonの親を探しに行き、liを見つけ、閉じる
    document.getElementById("incomplete-list").removeChild(deleteTarget);
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
