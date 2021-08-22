import fetchAPI from "./fetchAPI.js";
const form = document.querySelector("form");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#eMail");
const tables = document.querySelector("table");

form.addEventListener("submit", (e) => {
  if (form.getAttribute("submit-type") === "new-user") {
    e.preventDefault();
    const newUser = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
    };
  

    fetchAPI("https://reqres.in/api/users", "POST", newUser)
    .then((res) => res.json())
    .then((data) => {
alert(JSON.stringify(data))
    });
  }
});

form.addEventListener('submit',(e)=>{
    if (firstName.value == "")
    {
        console.log('Empty')
        alert("Please Enter first name")
        return false;
    }
    });

form.addEventListener('submit',(e)=>{
    if (lastName.value == "")
    {
        console.log('Empty')
        alert("Please Enter last name")
        return false;
    }
    });

form.addEventListener('submit',(e)=>{
    if (email.value == "")
    {
        console.log('Empty')
        alert("Please Enter email")
        return false;
    }
    });


tables.addEventListener("click", (e) => {
  if (e.target.classList[0] === "edit-btn") {
    const id = e.target.parentElement.parentElement.getAttribute("userid");
    editUser(id);
  } else if (e.target.classList[0] === "delete-btn") {
    const id = e.target.parentElement.parentElement.getAttribute("userid");
    deleteUser(id);
  }
});

const editUser = (id) => {
  fetch(`https://reqres.in/api/users/${id}`)
    .then((res) => res.json())
    .then(({ data }) => {
      firstName.value = data.first_name;
      lastName.value = data.last_name;
      email.value = data.email;
      form.setAttribute("submit-type", "edit-user");
    });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newUser = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
    };
    if (form.getAttribute("submit-type") === "edit-user") {
      fetchAPI(`https://reqres.in/api/users/${id}`, "PUT", newUser);
    }
  });
};

const deleteUser = (id) => {
    console.log(id);
    fetch(`https://reqres.in/api/users/${id}`, { method: "DELETE" })
      .then((res) => JSON.stringify(res))
      .then((res) => console.log(res));
  };


