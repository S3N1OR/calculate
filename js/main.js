const container = document.getElementById('container');

function roundUpToNearestTen(num) {
  return Math.ceil(num / 10) * 10;
}

function roundUpToNearestThousand(num) {
  return (num / 10) * 10;
}

function roundToNearestTen(num) {
  return Math.round(num / 10) * 10;
}

window.onload = function() {
    loadSavedRoomCount();
    loadSavedRooms();
    const rooms = document.querySelectorAll('.room');
    rooms.forEach(room => {
        const roomClass = room.classList[1];
        const inputs = room.querySelectorAll('input[type="number"]');
        inputs.forEach(input => {
            input.addEventListener('change', () => {
                updateResponses(roomClass);
            });
        });
    });
};

function updateResponses(roomClass) {
  const room = document.querySelector('.' + roomClass);
  const inputs = room.querySelectorAll('input[type="number"]');
  const response = room.querySelector('.response');

  const long = parseFloat(inputs[0].value);
  const width = parseFloat(inputs[1].value);
  const height = parseFloat(inputs[2].value);
  const karkas = parseFloat(inputs[3].value);
  const balka = parseFloat(inputs[4].value);

  const listLong = long / 2.5;
  const listWidth = width / 1.2;

  const ostList = (width - Math.floor(listWidth) * 1.2).toFixed(1);
  const ostList2 = (long - Math.floor(listLong) * 2.5).toFixed(1);

  const P = ((long + width) * 2).toFixed(1);
  const S = (long * width).toFixed(1);
  const M3 = (long * width * height).toFixed(1);
  
  const k = karkas / 100;
  const list = Math.ceil(listLong * listWidth);
  const NP = Math.ceil(P / 3);
  const PP = Math.ceil((((width / k) - 1) * (long / 3)) + (S / 9));
  const podves = Math.ceil(((width / k) - 1) * balka);
  const krab = ostList2;
  const soed = Math.ceil((width / k - 1) * (Math.ceil(long / 3 - 1)));

  const mungo = NP * 7;

  const shurup6_ka_pcs = podves * 3;
  const shurup6_ka_kg = (shurup6_ka_pcs * 4 / 1000).toFixed(1);

  const shurup_pcs = list * 75;
  const shurup_kg = (shurup_pcs * 1.2 / 1000).toFixed(1);
  const shurup_pack = Math.ceil(shurup_pcs / 1000);

  const emem_pcs = podves * 4;
  const emem_kg = (emem_pcs * 0.001).toFixed(1);
  const emem_pack = Math.ceil(emem_pcs / 1000);

  response.innerHTML = `
      <div>Периметр = ${P} m</div>
      <div>Площадь = ${S} m<sup>2</sup></div>
      <div>Объем = ${M3} m<sup>3</sup></div>
      <div>ГКЛ - ${list} шт</div>
      <div>НП - ${NP} шт</div>
      <div>ПП - ${PP} шт</div>
      <div>Подвес - ${podves} шт</div>
      <div>Краб - ${krab} шт</div>
      <div>Соединитель - ${soed} шт</div>
      <div>Дюбель мунго- ${mungo} шт</div>
      <div>
        Шуруп 6-ка:
        <div> - ${shurup6_ka_pcs} шт</div>
        <div> - ${shurup6_ka_kg} кг</div>
      </div>
      <div>
        Шуруп 25:
        <div> - ${shurup_pcs} шт</div>
        <div> - ${shurup_kg} кг</div>
        <div> - ${shurup_pack} пач.</div>
      </div>
      <div>
        Шуруп ММ:
        <div> - ${emem_pcs} шт</div>
        <div> - ${emem_kg} кг</div>
        <div> - ${emem_pack} пач.</div>
      </div>
  `;

  const resultCol = document.querySelector('.result-col');
  let totalSum = list;

  resultCol.textContent = 'Сумма всех материалов: ' + totalSum;
}

function totalResult(){
    console.clear();
    const roomsContainer = document.querySelector('.rooms');
    const roomCount = roomsContainer.querySelectorAll('.room').length;

    let allListCount = 0;
    let allNPCount = 0;
    let allPPCount = 0;
    let allPodvesCount = 0;
    let allKrabCount = 0;
    let allSoedCount = 0;
    let allmungoCount = 0;

    let allShurup6_ka_pcsCount = 0;
    let allShurup6_ka_kgCount = 0;

    let allShurup_pcsCount = 0;
    let allShurup_kgCount = 0;

    let allEmem_pcsCount = 0;
    let allEmem_kgCount = 0;


    for (let i = 0; i < roomCount; i++) {
        const response = document.querySelectorAll('.response')[i];

        const responseList = response.children[3];
        const responseNP = response.children[4];
        const responsePP = response.children[5];
        const responsePodves = response.children[6];
        const responseKrab = response.children[7];
        const responseSoed = response.children[8];
        const responsemungo = response.children[9];
        
        const responseShurup6_ka_pcs = response.children[10];
        const responseShurup6_ka_kg = response.children[10];
        
        const responseShurup_pcs = response.children[11];
        const responseShurup_kg = response.children[11];
        const responseShurup_pack = response.children[11];

        const responseEmem_pcs = response.children[12];
        const responseEmem_kg = response.children[12];
        const responseEmem_pack = response.children[12];

        if (responseList){
            const allList = parseInt(responseList.textContent.slice(0, -3).substr(5));
            allListCount += allList;
        }

        if (responseNP){
            const allNP = parseInt(responseNP.textContent.slice(0, -3).substr(4));
            allNPCount += allNP;
        }

        if (responsePP){
            const allPP = parseInt(responsePP.textContent.slice(0, -3).substr(4));
            allPPCount += allPP;
        }

        if (responsePodves){
            const allPodves = parseInt(responsePodves.textContent.slice(0, -3).substr(8));
            allPodvesCount += allPodves;
        }

        if (responseKrab){
            const allKrab = parseInt(responseKrab.textContent.slice(0, -3).substr(6));
            allKrabCount += allKrab;
        }

        if (responseSoed){
            const allSoed = parseInt(responseSoed.textContent.slice(0, -3).substr(13));
            allSoedCount += allSoed;
        }

        if (responsemungo){
            const allmungo = parseInt(responsemungo.textContent.slice(0, -3).substr(13));
            allmungoCount += allmungo;
        }

        if (responseShurup6_ka_pcs){
            const allShurup6_ka_pcs = parseInt(responseShurup6_ka_pcs.children[0].textContent.replace(/[^0-9]/g,""));
            allShurup6_ka_pcsCount += allShurup6_ka_pcs;
        }

        if (responseShurup6_ka_kg){
            const allShurup6_ka_kg = parseFloat(responseShurup6_ka_kg.children[1].textContent.replace(/[^0-9]/g,""));
            allShurup6_ka_kgCount += allShurup6_ka_kg;
        }

        if (responseShurup_pcs){
            const allShurup_pcs = parseInt(responseShurup_pcs.children[0].textContent.replace(/[^0-9]/g,""));
            allShurup_pcsCount += allShurup_pcs;
        }

        if (responseShurup_kg){
            const allShurup_kg = parseFloat(responseShurup_kg.children[1].textContent.replace(/[^0-9]/g,""));
            allShurup_kgCount += allShurup_kg;
        }

        if (responseShurup_pack){
            const allShurup_pack = parseInt(responseShurup_pcs.children[2].textContent);
        }

        if (responseEmem_pcs){
            const allEmem_pcs = parseInt(responseEmem_pcs.children[0].textContent.replace(/[^0-9]/g,""));
            allEmem_pcsCount += allEmem_pcs;
        }

        if (responseEmem_kg){
            const allEmem_kg = parseFloat(responseEmem_kg.children[1].textContent.replace(/[^0-9]/g,""));
            allEmem_kgCount += allEmem_kg;
        }

        if (responseEmem_pack){
            const allEmem_pack = parseInt(responseEmem_pcs.children[2].textContent);
        }
    }

    const resultCol = document.querySelector('.result-col');

    resultCol.innerHTML = `
      <div class="result-item">
        <div class="result-index">1</div>
        <div>ГКЛ - ${allListCount} шт \n</div>
      </div>
      <div class="result-item">
        <div class="result-index">2</div>
        <div>НП - ${allNPCount} шт\n</div>
      </div>
      <div class="result-item">
        <div class="result-index">3</div>
        <div>ПП - ${allPPCount} шт\n</div>
      </div>
      <div class="result-item">
        <div class="result-index">4</div>
        <div>Подвес - ${allPodvesCount} шт\n</div>
      </div>
      <div class="result-item">
        <div class="result-index">5</div>
        <div>Краб - ${allKrabCount} шт\n</div>
      </div>
      <div class="result-item">
        <div class="result-index">6</div>
        <div>Соединитель - ${allSoedCount} шт\n</div>
      </div>
      <div class="result-item">
        <div class="result-index">7</div>
        <div>Дюбель мунго - \n${allmungoCount} шт\n</div>
      </div>
      <div class="result-item">
        <div class="result-index">8</div>
        <div>Шуруп 6-ка - ${(allShurup6_ka_kgCount / 10).toFixed(1)} кг</div>
      </div>
      <div class="result-item">
        <div class="result-index">9</div>
        <div>Шуруп 25: <br> &nbsp;- ${allShurup_pcsCount} шт<br> &nbsp;- ${(allShurup_kgCount / 10).toFixed(1)} кг<br> &nbsp;- ${Math.ceil(allShurup_pcsCount / 1000)} пач.</div>
      </div>
      <div class="result-item">
        <div class="result-index">10</div>
        <div>Шуруп ММ: <br> &nbsp;- ${allEmem_pcsCount} шт<br> &nbsp;- ${(allEmem_kgCount / 10).toFixed(1)} кг<br> &nbsp;- ${Math.ceil(allEmem_pcsCount / 1000)} пач.</div>
      </div>
      `;
}

function addRoom() {
  const roomsContainer = document.querySelector('.rooms');
  const roomCount = roomsContainer.querySelectorAll('.room').length;

  const newRoom = document.createElement('div');
  newRoom.classList.add('room');
  newRoom.classList.add('room' + (roomCount + 1));
  const roomId = 'room' + (roomCount + 1);
  
  document.querySelector('.all-count-room').innerHTML = `Всего комнат: ${roomCount + 1}`;

  newRoom.innerHTML = `
      <h1>Комната ${roomCount + 1}</h1>
      <div class="cols">
          <div class="col">
              <div class="inputs">
                  <div>
                      <h2>Длина (m)</h2>
                      <input data-persist="garlic" type="number" value="0" name="long${roomCount}" class="input" inputmode="decimal">
                  </div>
                  <div>
                      <h2>Ширина (m)</h2>
                      <input data-persist="garlic" type="number" value="0" name="width${roomCount}" class="input" inputmode="decimal">
                  </div>
                  <div>
                      <h2>Высота (m)</h2>
                      <input data-persist="garlic" type="number" value="0" name="height${roomCount}" class="input" inputmode="decimal">
                  </div>
                  <div>
                      <h2>Каркас (cm)</h2>
                      <input data-persist="garlic" type="number" value="40" name="karkas${roomCount}" class="input" inputmode="decimal">
                  </div>
                  <div>
                      <h2>Кол-во балок (шт)</h2>
                      <input data-persist="garlic" type="number" value="10" name="balka${roomCount}" class="input" inputmode="decimal">
                  </div>
              </div>
                  <button class="apply">Рассчитать</button>

                  <div class="response"></div>
                  <div class="titleroom">
                      <h3>Комната ${roomCount + 1}</h3>
                  </div>
          </div>
      </div>
  `;
  roomsContainer.appendChild(newRoom);
  
  const calculateBtn = newRoom.querySelector('.apply');
  calculateBtn.addEventListener('click', function() {
    updateResponses('room' + (roomCount + 1));
    totalResult();
  });

  localStorage.setItem('roomCount', roomCount + 1);
}

function removeRoom() {
    const roomsContainer = document.querySelector('.rooms');
    const roomCount = roomsContainer.querySelectorAll('.room').length;
 
    
    if (roomCount > 1) {
      document.querySelector('.all-count-room').innerHTML = `Всего комнат: ${roomCount - 1}`;
        const lastRoom = roomsContainer.querySelector('.room:last-child');
        roomsContainer.removeChild(lastRoom);
        localStorage.setItem('roomCount', roomCount - 1);
        localStorage.removeItem('room' + roomCount);
    }
}

function loadSavedRooms() {
    const savedRoomCount = localStorage.getItem('roomCount');
    if (savedRoomCount) {
        const roomsContainer = document.querySelector('.rooms');
        roomsContainer.innerHTML = '';
        for (let i = 1; i <= savedRoomCount; i++) {
            addRoom();
        }
    }
}

function loadSavedRoomCount() {
    const savedRoomCount = localStorage.getItem('roomCount');
    if (savedRoomCount) {
        const roomsContainer = document.querySelector('.rooms');
        while (roomsContainer.children.length < savedRoomCount) {
            addRoom();
        }
    }
}