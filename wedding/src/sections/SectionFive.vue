<template>
  <div class="section-6">
    <div
      class="content-6 d-flex justify-content-center flex-column align-items-center"
    >
      <p class="title-6">AKAD</p>
      <div class="title-description-6">
        <p class="description-6">Sabtu, 21 Mei 2022</p>
        <p class="description-6">09.00 - 12.00</p>
        <p class="description-6">Paviliun Sunda Resto</p>
        <p class="description-6">
          Jl. LLRE Martadinata St No.97, Citarum, Bandung Wetan,
        </p>
        <p class="description-6">Bandung City, West Java 40115</p>
      </div>
      <div class="button-content-6">
        <button class="btn-google-maps-6">GOOGLE MAPS</button><br />
        <button class="btn-google-calendar-6">GOOGLE CALENDAR</button>
      </div>
      <div class="photo-description-6">
        <img
          class="foto-akad"
          src="../assets/images/foto-akad.jpg"
          alt="Rasta & Reyhan Wedding"
        />
      </div>
      <img
        class="bunga-mempelai-akad"
        src="../assets/images/bunga-mempelai.png"
        alt="Rasta & Reyhan Wedding"
      />
    </div>
  </div>
</template>

<style>
.section-6 {
  background-color: white;
  height: 100vh;
  color: #212121;
  font-family: "CaviarDreamsBold";
}

.title-6 {
  font-family: "CaviarDreamsBold";
  font-size: 28px;
  letter-spacing: 3px;
}

.description-6 {
  font-size: 15px;
  margin: 1vh;
}

.btn-google-maps-6 {
  font-family: "CaviarDreamsBold";
  font-size: 15px;
  background-color: #e5d8d8;
  color: #212121;
  border-radius: 100vh;
  padding: 2vh 3vh;
  margin-top: 3vh;
  letter-spacing: 0.5vh;
  outline: none;
}

.btn-google-calendar-6 {
  font-family: "CaviarDreamsBold";
  font-size: 15px;
  background-color: #212121;
  color: #e5d8d8;
  border-radius: 100vh;
  padding: 2vh 3vh;
  margin-top: 3vh;
  letter-spacing: 0.5vh;
  outline: none;
}

.foto-akad {
  margin-top: 5vh;
  width: 32vh;
  z-index: 29;
  position: relative;
}

.bunga-mempelai-akad {
  position: relative;
  top: -25vh;
  right: -22vh;
  width: 25vh;
  z-index: 0;
  transform: scaleX(-1);
  z-index: 1;
}
</style>
