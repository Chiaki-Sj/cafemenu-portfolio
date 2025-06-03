let currentOrder = "";

// 注文ボタンを押したときの処理
function order(itemName) {
  currentOrder = itemName;
  document.getElementById("modal-text").textContent = `${itemName} を注文しますか？`;
  document.getElementById("modal").classList.remove("hidden");
}

function confirmOrder() {
  closeModal();
  showThankyou(); // 追加！
}

// 「はい」ボタンを押したときの処理
// function confirmOrder() {
//   // alert(`${currentOrder} を注文しました！ありがとうございます ☕`);
//   closeModal();
// }

// 「いいえ」ボタン or キャンセル時の処理
function closeModal() {
  document.getElementById("modal").classList.add("hidden");
  currentOrder = "";
}

function closeThankyou() {
  document.getElementById("thankyou-modal").classList.add("hidden");
  currentOrder = "";
}

function showThankyou() {
  const modal = document.getElementById("thankyou-modal");
  const text = document.getElementById("thankyou-text");

  

  text.innerHTML = `
    <p>${currentOrder} を注文しました！ありがとうございます 💖</p>
    <img src="maid.png" alt="メイド" style="width: 80px; margin-top: 1rem;">
  `;

  modal.classList.remove("hidden");
}

