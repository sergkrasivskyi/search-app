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
  let sheetsList = ref({ rows: [], cols: [] });
  async function getData() {
    await fetch(FULL_URL)
      .then((res) => res.text())
      .then((rep) => {
        let data = JSON.parse(rep.substring(47).slice(0, -2));
        // console.log('data:', data.table);
        // sheetsList.cols = [...data.table.cols];
        for (const id in data.table.rows) {
            // console.log("data.table.rows[id]", data.table.rows[id].c);
            // sheetsList.value.rows.push(data.table.rows[id].c);
            // }
              let flat = {
                flatId,
                price,
                isFavorite,
                views,
                title,
                crmNumber,
                square,
                rooms,
                district
              } = data.table.rows[id];
              console.log(flat);
              // sheetsList.value.rows.push(flat);
              // const element = data.table.cols[key];
        }
        // sheetsList.rows = [...data.table.rows];
        console.log("sheetsList:", sheetsList);
        console.log("sheetsList.rows:", sheetsList.value.rows);
        console.log("sheetsList.cols:", sheetsList.cols);
        // зробити обєкт з даними у зручному форматі 
        const result = [];
        for (let row in sheetsList.rows) {
          console.log("flat:", Object.keys(row));
          console.log(typeof row);
          // console.log("flat.c", flat.c);
          for (field in row.c) {
            console.log("field:", field.v);
            result.push(field.v);
          }
        }
      });
    console.log("type of sheetsList.rows", typeof sheetsList.rows);
  }
<<<<<<< Updated upstream
  // let flatsSheetList = computed(() => {
  //   const result = [];
  //   for (flat in sheetsList.rows) {
  //     console.log(typeof flat);
  // for (let field in flat.c) {
  //   result.push(field.v);
  //   console.log("field:", flat.v);
  // }
  // }
  // return result;
  // });
  return {
    getData,
    sheetsList,
    // flatsSheetList
  };
=======
  const flatsSheetList = computed(() => {
    let result = [];
    for (let flat in sheetsList.rows) {
      console.log("flat:", flat.c);
      // result.push(flat.c);
    }
    return result;
  });
  const flatsSheetListArray = computed(() => {
    let result = [];
    // console.log("sheetsList.rows.length:", sheetsList.rows.length);
    // for (let i = 0; i < sheetsList.rows.length; i++) {
      // console.log(`sheetsList.rows[${i}].c:`, sheetsList.rows[i].c);
      // if (Object.hasOwnProperty.call(sheetsList.rows, flat)) {
      // result.push(sheetsList.rows[i].c);
      // }
    // }
    return result;
  });

  return { getData, sheetsList, flatsSheetList, flatsSheetListArray };
>>>>>>> Stashed changes
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
