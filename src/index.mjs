import "./styles.css";

const onClickAdd = (element) => {
  //alert();
  const inputText = document.getElementById("add-text").value;
  //textbotを空にする
  document.getElementById("add-text").value = "";

  //li生成
  const li = document.createElement("li");
  console.log("----");
  console.log(li);
};

// addEventListener <-イベントを読み取る
document.getElementById("add-button").addEventListener("click", onClickAdd);
