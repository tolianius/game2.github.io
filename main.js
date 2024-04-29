const getSignal = document.getElementById("get-signal");
const printSignal = document.getElementById("print-signal");
const loadingGif = document.getElementById("loadingGif");

function getRandomFloat(min, max, decimals) {
  const str = (Math.random() * (max - min) + min).toFixed(decimals);
  return parseFloat(str);
}

getSignal.onclick = function () {
  loadingGif.style.display = 'block';
  signalText.style.display = 'none'; 

  setTimeout(() => {
    let receivingSignal = getRandomFloat(1.00, 3.99, 2);

    receivingSignal = receivingSignal.toFixed(2);

    loadingGif.style.display = 'none';
    signalText.innerHTML = `${receivingSignal}x`;
    signalText.style.display = 'block'; 
  }, 2000);
};