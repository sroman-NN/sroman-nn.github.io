//mini func to copy code to clipboard
function copyCode() {
    const code = document.getElementById("code-block").innerText;
    navigator.clipboard.writeText(code);
    showToast("Code copied to clipboard!");

}
//toast-notification
function showToast(msg) {
  const t = document.createElement("toast-noti");
   t.innerText = msg;
 t.style.position = "fixed";
    t.style.bottom = "20px";
  t.style.left = "50%";
    t.style.transform = "translateX(-50%)";
  t.style.background = "#333";
  t.style.color = "#fff";
    t.style.padding = "12px 20px";
    t.style.fontSize = "14px";
    t.style.zIndex = "9999";

    document.body.appendChild(t);

    setTimeout(() => t.remove(), 5000);
}




