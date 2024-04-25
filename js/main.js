const rooms = document.getElementById('rooms');
const roomCountInput = document.getElementById('room-count-input');

const roomInputLong = document.getElementById('room-input-long');
const roomInputWidth = document.getElementById('room-input-width');
// const roomInputHeight = document.getElementById('room-input-height');
const roomInputKarkas = document.getElementById('room-input-karkas');
const roomInputBalka = document.getElementById('room-input-balka');

const roomInputHeightCheckbox = document.querySelector('.room-input-height-checkbox');

const inputs = document.querySelectorAll('input[type="number"]');

inputs.forEach(input => {
  input.addEventListener('input', function() {
    if (this.value.length > 5) {
      this.value = this.value.slice(0, 5);
    }
  });
});

roomInputHeightCheckbox.addEventListener('change', function() {
  if (this.checked) {
    roomInputHeight.removeAttribute('disabled');
  } else {
    roomInputHeight.setAttribute('disabled', 'disabled');
  }
});

function MyRound10(val) {
  return Math.ceil(val / 10) * 10;
}

function MyRound1000(val) {
  return Math.ceil(val / 1000);
}

function MyRound0_5(val) {
  return Math.ceil(val / 1000);
}

function inputOnChange (){
  console.clear();

  long = parseFloat(roomInputLong.value);
  width = parseFloat(roomInputWidth.value);
  // height = parseFloat(roomInputHeight.value);
  karkas = parseFloat(roomInputKarkas.value);
  balka = parseFloat(roomInputBalka.value);

  P = ((long + width) * 2).toFixed(1);
  S = (long * width).toFixed(1);
  // M3 = (long * width * height).toFixed(1);

  k = karkas / 100;

  listLong = long / 2.5;
  listWidth = width / 1.2;
  list = Math.ceil(listLong * listWidth);

  NP = Math.ceil(P / 3);

  PP = Math.ceil((((width / k) - 1) * (long / 3)) + (S / 9));

  podves = Math.ceil(((width / k) - 1) * balka);

  krab = MyRound10(long * width);

  soed = Math.ceil((width / k -1) * (long / 3 - 1));

  shurup_mass = 1.2
  shurup_pcs = list * 75;
  shurup_kg = shurup_mass * shurup_pcs / 1000;
  shurup_pack = Math.ceil(shurup_pcs / 1000);
  
  emem_pcs = podves * 4;
  emem_kg = (emem_pcs / 1000).toFixed(1);
  emem_pack = MyRound1000(emem_pcs);
  
  mungo = NP*7;

  // console.log(`\n\nПериметр: ${P} m`);
  // console.log(`Площадь: ${S} кв`);
  // console.log(`м³: ${M3}\n\n\n\n`);

  // console.log(`Гипсакартон: ${list} шт`);
  // console.log(`НП: ${NP} шт`);
  // console.log(`ПП: ${PP} шт`);
  // console.log(`Подвес: ${podves} шт`);
  // console.log(`Краб: ${krab} шт`);
  // console.log(`Соединитель: ${soed} шт`);
  // console.log(`Шуруп 25мм:\n ${shurup_pcs} шт \n ${shurup_kg} кг \n ${shurup_pack} пачка`);
  // console.log(`Эмэм:\n ${emem_pcs} шт \n ${emem_kg} кг \n ${emem_pack} пачка`);
  // console.log(`Мунго: ${mungo} шт`);

  document.querySelector('.room-bottom').innerHTML = `
    <div class="room-bottom-block">Периметр: ${P} m</div>
    <div class="room-bottom-block">Площадь: ${S} кв</div>

    <div class="room-bottom-block">Гипсакартон: ${list} шт</div>
    <div class="room-bottom-block">НП: ${NP} шт</div>
    <div class="room-bottom-block">ПП: ${PP} шт</div>
    <div class="room-bottom-block">Подвес: ${podves} шт</div>
    <div class="room-bottom-block">Краб: ${krab} шт</div>
    <div class="room-bottom-block">Соединитель: ${soed} шт</div>
    <div class="room-bottom-block">Шуруп 25мм:<br>${shurup_pcs} шт <br> ${shurup_kg} кг <br> ${shurup_pack} пачка</div>
    <div class="room-bottom-block">Эмэм:<br>${emem_pcs} шт <br> ${emem_kg} кг <br> ${emem_pack} пачка</div>
    <div class="room-bottom-block">Мунго: ${mungo} шт</div>
  `;
  
}

let roomCount = 0;

function roomAdd(){
  roomCount++;
  rooms.innerHTML = rooms.innerHTML + `
    <div class="room room${roomCount}"><h1 class="room-title">Комната ${roomCount}</h1></div>
  `;
}

function roomRemove() {
  if (rooms.children.length > 0) {
    roomCount--;
    let lastChild = rooms.lastElementChild;
    
    rooms.removeChild(lastChild);
  }
}
