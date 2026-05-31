const items = document.querySelectorAll('.item');
const visorImg = document.getElementById('imagenVisor');
const infoVisor = document.getElementById('infoVisor');

let imagenActual = "";

// visor-metadata-m-intial
infoVisor.textContent = "Seleccione una imagen de la lista para mostrarla...";
//get-f-click
items.forEach(item => {
  item.addEventListener('click', () => {
    const ruta = item.getAttribute('data-real');
    imagenActual = ruta;
    visorImg.src = ruta;

    // res
    const imgTemp = new Image();
    imgTemp.onload = () => {
      const w = imgTemp.naturalWidth;
      const h = imgTemp.naturalHeight;

      // tamano en kb
      fetch(ruta)
        .then(r => r.blob())
        .then(b => {
          const kb = (b.size / 1024).toFixed(1);
          infoVisor.textContent = `${kb} KB - ${w} x ${h}`;
        })
        .catch(() => {
          infoVisor.textContent = `${w} x ${h}`;
        });
    };
    imgTemp.src = ruta;
  });
});

//reset visor
function resetVisor() {
  imagenActual = "";
  visorImg.src = "";
  infoVisor.textContent = "Seleccione una imagen de la lista para mostrarla...";
}



  //================================buttons-img-panel================================
  //download
  document.getElementById('btnSave').addEventListener('click', () => {
    if (!imagenActual) return;
    const a = document.createElement('a');
    a.href = imagenActual;
    a.download = imagenActual.split('/').pop();
    a.click();
  });

 //open
  document.getElementById('btnOpen').addEventListener('click', () => {
    if (!imagenActual) return;
    window.open(imagenActual, '_blank');
  });
  //================================buttons-img-panel================================


  //visor-metadata-refresh
  setInterval(() => {
  document.getElementById("visor").style.height =
    document.getElementById("panel").offsetHeight + "px";
}, 100);

//=================discord boutoon==================

//open-discord-and-copy
function openDiscordAndCopy() {
    navigator.clipboard.writeText("markm4");
    window.location.href = "discord://";
    showToast("Usuario de Discord copiado al portapapeles");
}

//toast-notification
function showToast(msg) {
  const t = document.createElement("div");
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
