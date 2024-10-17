let displayTable = document.getElementById("displayTable");
let resultSearch = document.getElementById("resultSearch");

let searchDatas = [
  {
    userName: "Adigun",
    phoneNum: 2347013887234,
  },
  {
    userName: "Seun",
    phoneNum: 2349167676008,
  },
  {
    userName: "Abiodun",
    phoneNum: 2348168236307,
  },
  {
    userName: "Tayo",
    phoneNum: 2348168236725,
  },
  {
    userName: "Olumide",
    phoneNum: 2348112345678,
  },
  {
    userName: "Anthony",
    phoneNum: 2347013887345,
  },
  {
    userName: 'Kayode',
    phoneNum: 2348945398336
  }
];

// function searchInput() {
//   let search = document.getElementById("searchIt").value.trim();

//   displayTable.innerHTML = "";

//   searchDatas.forEach((searchData, i) => {
//     if (
//       searchData.userName.toLowerCase().includes(search.toLowerCase().trim())
//     ) {
//       displayTable.innerHTML += ` <tr>
//         <td style='background-color : green;'>${i + 1}</td>
//         <td style='background-color : green;'>${searchData.userName}</td>
//         <td style='background-color : green;'>${searchData.phoneNum}</td>
//         </tr>`;
//     } else {
//       displayTable.innerHTML += `<tr>
//          <td>${i + 1}</td>
//          <td>${searchData.userName}</td>
//          <td>${searchData.phoneNum}</td>
//         </tr>`;
//     }
//   });
// }

function searchInput() {
  let search = document.getElementById("searchIt").value.trim();

  let searchingData = searchDatas.filter((searchData) => {
    return (
      searchData.userName.toLowerCase().includes(search.toLowerCase().trim()) ||
      searchData.phoneNum + "".toLowerCase() == search.toLowerCase().trim()
    );
  });

  display(searchingData);
}

function display(dataToShow) {

  const result = searchIt.value.trim();

  if (result == "") {
    displayTable.innerHTML = `PLEASE, INPUT A TEXT/NUMBER`;
  } else if (dataToShow.length == false) {
    displayTable.innerHTML = "PROFILE NOT FOUND";
  } else {
    displayTable.innerHTML = "";

    searchDatas.forEach((element, i) => {

        let find = dataToShow.find((searchData)=>element == searchData)
      displayTable.innerHTML += `
        <tr>
        <td ${find?"class='bg-success'":''}>${i + 1}</td>
        <td ${find?"class='bg-success'":''}>${element.userName}</td>
        <td ${find?"class='bg-success'":''}>${element.phoneNum}</td>
        </tr>
        `;
    });
  } 
}
