import { ref, computed, watch } from "vue";
import { defineStore } from "pinia";

export const useSheetsStore = defineStore("sheets", () => {
  const SHEET_ID = "1ZG-ztvd1TAbiRVE3s_efGRgNd6rVYTM_5E9UOeUCuoQ";
  const SHEET_TITLE = "flatList";
  // як визначити автоматично розмір діапазону?
  const SHEET_RANGE = "B1:J14"; // наразі розмір такий

  const FULL_URL =
    "https://docs.google.com/spreadsheets/d/" +
    SHEET_ID +
    "/gviz/tq?sheet=" +
    SHEET_TITLE +
    "&range=" +
    SHEET_RANGE;
  let sheetsList = {};
  async function getData() {
    await fetch(FULL_URL)
      .then((res) => res.text())
      .then((rep) => {
        let data = JSON.parse(rep.substring(47).slice(0, -2));
        // console.log('data:', data.table);
        sheetsList.cols = { ...data.table.cols };
        sheetsList.rows = { ...data.table.rows };
        console.log("sheetsList:", sheetsList);
        console.log("sheetsList.rows:", sheetsList.rows);
        console.log("sheetsList.cols:", sheetsList.cols);
      });
  }
  let flatsSheetList = computed(() => {
    let result = [];
    for (flat in sheetsList.rows) {
      // console.log("flat:", flat.c);
      result.push(flat.c);
    }
    return result;
  });
  return { getData, sheetsList, flatsSheetList };
});
// Зробити запрос у таблицю
// fetch(FULL_URL)
//   .then((res) => res.text())
//   .then((rep) => {
//     let data = JSON.parse(rep.substr(47).slice(0, -2));

//     let player_Name_title = document.getElementById("player_Name_title");
//     let player_Shoe_title = document.getElementById("player_Shoe_title");
//     let player_Name = document.getElementById("player_Name");
//     let player_Shoe = document.getElementById("player_Shoe");
//     let length = data.table.rows.length;

//     player_Name_title.innerHTML = data.table.rows[0].c[0].v;
//     player_Shoe_title.innerHTML = data.table.rows[0].c[1].v;
//     let selectOptionPlayer = document.createElement("select");
//     player_Name.append(selectOptionPlayer);

//     for (let i = 1; i < length; i++) {
//       let NewBoxPlayer = document.createElement("option");
//       NewBoxPlayer.id = "box" + i;
//       NewBoxPlayer.className = "Some_Style";
//       selectOptionPlayer.append(NewBoxPlayer);
//       NewBoxPlayer.innerHTML = data.table.rows[i].c[0].v;

//       let NewBoxShoe = document.createElement("div");
//       let space = document.createElement("hr");
//       let space2 = document.createElement("hr");
//       NewBoxShoe.id = "box" + i;
//       NewBoxShoe.className = "Some_Style";
//       player_Shoe.append(NewBoxShoe);
//       player_Shoe.append(space);
//       player_Shoe.append(space2);
//       NewBoxShoe.innerHTML = data.table.rows[i].c[1].v;
//     }
//   });
