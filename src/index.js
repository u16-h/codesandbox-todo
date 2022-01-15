import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  addIncompleteList(inputText);
};

const deleteFromIncompleteList = (target) => {
  document.getElementById("imcomplete-list").removeChild(target);
};

const addIncompleteList = (text) => {
  const p = document.createElement("p");
  p.innerText = text;
  p.className = "todo-element";

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    const addTarget = completeButton.parentNode.parentNode;
    deleteFromIncompleteList(addTarget);
    const text = addTarget.firstElementChild.firstElementChild.innerText;
    addTarget.textContent = null;

    const p = document.createElement("p");
    p.innerText = text;
    p.className = "todo-element";

    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      const deleteTarget = backButton.parentNode.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      const text = deleteTarget.firstElementChild.firstElementChild.innerText;
      addIncompleteList(text);
    });

    const div = document.createElement("div");
    div.className = "list-row";
    div.appendChild(p);
    div.appendChild(backButton);

    addTarget.appendChild(div);

    document.getElementById("complete-list").appendChild(addTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.parentNode.parentNode);
  });

  const div = document.createElement("div");
  div.className = "list-row";
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  const li = document.createElement("li");
  li.appendChild(div);

  document.getElementById("imcomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
