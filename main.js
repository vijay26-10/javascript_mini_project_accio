const employeeArray = [{ id: 1, name: "John", age: "18", profession: "Developer" }, { id: 2, name: "Jack", age: "20", profession: "Developer" }, { id: 3, name: "Karen", age: "19", profession: "Admin" }];


let htmlCode = ``;

employeeArray.forEach(function (employeeObjects) {

    htmlCode =
        htmlCode +
        `
            <article>
            <div class="card">
            <h3> ${employeeObjects.id}.</h3>
            <h3>Name : ${employeeObjects.name}</h3>
            <h3>Age : ${employeeObjects.age}</h3>
            <h3>Profession : ${employeeObjects.profession}</h3>

            </div>
            </article>
            `;



});
const profession_cards = document.querySelector(".profession-cards");
profession_cards.innerHTML = htmlCode;
const age = employeeArray.map(({ age }) => age);
const new_admin = { id: 4, name: "Lisa", age: "21", profession: "Admin" };
const new_developer = { id: 4, name: "Lisa", age: "21", profession: "Developer" };

const new_employee = [...new_admin, ...new_developer]
employeeArray.forEach((item, index) => {
    item.age = parseInt(item.age)
    if (item.name === 'john') {
        item.age = 19
    }
});



function filter_cards() {

    var selection_val = document.getElementById("profession");
    var selectedValue = selection_val.options[selection_val.selectedIndex].value;
    if (selectedValue == "profession") {
        let htmlCode = ``;


        employeeArray.forEach(function (employeeObjects) {

            htmlCode =
                htmlCode +
                `
    <article>
      <div class="card">
      <h3> ${employeeObjects.id}.</h3>
      <h3>Name : ${employeeObjects.name}</h3>
      <h3>Age : ${employeeObjects.age}</h3>
      <h3>Profession : ${employeeObjects.profession}</h3>

      </div>
    </article>
  `;



        });
        const profession_cards = document.querySelector(".profession-cards");
        profession_cards.innerHTML = htmlCode;

        alert("Please select a profession");
    }
    else {
        let htmlCode = ``;

        var text = selection_val.options[selection_val.selectedIndex].text;
        console.log(text);
        let employeeArray_filter = employeeArray.filter(function (employee) {
            return employee.profession == text;
        });

        // return text;
        employeeArray_filter.forEach(function (employeeObjects) {

            htmlCode =
                htmlCode +
                `
            <article>
              <div class="card">
              <h3> ${employeeObjects.id}.</h3>
              <h3>Name : ${employeeObjects.name}</h3>
              <h3>Age : ${employeeObjects.age}</h3>
              <h3>Profession : ${employeeObjects.profession}</h3>
        
              </div>
            </article>
          `;



        });
        const profession_cards = document.querySelector(".profession-cards");
        profession_cards.innerHTML = htmlCode;
    }



}





