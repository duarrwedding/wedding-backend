<template>
  <div class="section-7">
    <div
      class="content-7 d-flex justify-content-center flex-column align-items-center"
    >
      <p class="title-7">
        Suatu kebahagiaan dapat melihat Bapak/Ibu/ Saudara/i dapat hadir di
        acara pernikahan kami
      </p>
      <form class="form-7">
        <label for="form-name">Nama</label><br />
        <input
          type="text"
          class="form-name"
          name="form-name"
          placeholder="Isi nama..."
          maxlength="140"
        /><br />
        <label for="form-relation">Hubungan dengan mempelai</label><br />
        <input
          type="text"
          class="form-relation"
          name="form-relation"
          placeholder="Isi ..."
          maxlength="140"
        />
        <div class="kehadiran-form">
          <p class="kehadiran-6">Kehadiran</p>
          <div class="the-option">
            <input
              type="radio"
              id="option-one"
              class="option-radio"
              name="option-kehadiran"
              value="option-one"
            />
            <label class="option-label" for="option-one">Hadir, 1 orang</label>
          </div>
          <div class="the-option">
            <input
              type="radio"
              id="option-two"
              class="option-radio"
              name="option-kehadiran"
              value="option-two"
            />
            <label class="option-label" for="option-two">Hadir, 2 orang</label>
          </div>
          <div class="the-option">
            <input
              type="radio"
              id="option-three"
              class="option-radio"
              name="option-kehadiran"
              value="option-three"
            />
            <label class="option-label" for="option-three">Tidak Hadir</label>
          </div>
        </div>
        <label class="ucapan-doa" for="form-doa">Ucapan & Doa</label><br />
        <textarea
          id="form-doa"
          name="form-doa"
          rows="4"
          cols="50"
          maxlength="140"
          placeholder="Isi doa ..."
        />
      </form>
      <div class="button-send">
        <button class="form-kirim">KIRIM</button>
      </div>
    </div>
  </div>
</template>

<style>
.section-7 {
  background-color: transparent;
  color: #333333;
  margin: 0 10.86vw;
  font-family: "CaviarDreamsBold";
  text-align: justify;
  position: relative;
  z-index: 9999;
}

.foto-undangan {
  width: 33vh;
}

.title-7 {
  font-size: 12px;
  line-height: 2.5vh;
  margin-bottom: 4.46vh;
}

label {
  font-size: 10px;
  margin-left: 0.5vh;
}

form {
  text-align: left;
}

input.form-name,
input.form-relation {
  background-color: #4f4f4f;
  padding: 1.45vh;
  border-radius: 25vh;
  outline: none;
  margin: 0.5vh 0 1.9vh 0;
  width: 70.5vw;
  color: white;
  font-size: 10px;
}

textarea {
  background-color: #4f4f4f;
  padding: 1.75vh;
  border-radius: 3vh;
  outline: none;
  margin: 0.5vh 0 1.78vh 0;
  width: 70.5vw;
  height: 15.17hw;
  color: white;
  font-size: 10px;
}

textarea:focus,
input[type="text"]:focus {
  color: white;
  font-size: 10px;
}

::placeholder {
  color: white;
  opacity: 0.75;
  font-size: 10px;
}

.kehadiran-6 {
  margin: 0 0 1.56vh 0.5vh;
  font-size: 10px;
}

input[type="radio"]:after {
  width: 13px;
  height: 13px;
  border-radius: 15px;
  top: -2px;
  left: -5px;
  position: relative;
  background-color: white;
  content: "";
  display: inline-block;
  visibility: visible;
  border: 4px solid #4f4f4f;
  font-size: 10px;
}

input[type="radio"]:checked:after {
  width: 13px;
  height: 13px;
  border-radius: 15px;
  top: -2px;
  left: -4px;
  position: relative;
  background-color: #4f4f4f;
  content: "";
  display: inline-block;
  visibility: visible;
  border: 4px solid #4f4f4f;
  font-size: 10px;
}

.option-label {
  margin-right: 1vh;
  font-size: 10px;
}

.kehadiran-form {
  margin-bottom: 3vh;
}

.form-kirim {
  font-family: "CaviarDreams";
  background-color: #4f4f4f;
  color: #e5d8d8;
  border-radius: 100vh;
  padding: 0.89vh 8.45vw;
  letter-spacing: 0.5vh;
  outline: none;
  margin-bottom: 5vh;
}

.button-send {
  max-width: 100%;
  text-align: end;
}

.the-option {
  margin-bottom: 1.56vh;
}
</style>
