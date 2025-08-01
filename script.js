document.getElementById("myBtn").addEventListener("click", () => {
  // ボタンがクリックされたときに背景色をランダムに変更
  document.body.style.backgroundColor = getRandomColor();
});

function getRandomColor() {
  const r = Math.floor(Math.random() * 256); // 0〜255
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
