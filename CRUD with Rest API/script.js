
let people;
let data;

const table = document.querySelector("table");

const pagination = document.querySelector(".pagination");


const getUsers = (page = 1) => {
  fetch(`https://reqres.in/api/users?page=${page}`)
    .then((res) => res.json())
    .then((data) => {
      people = data.data;
      data = data;
      renderPages(data.total_pages);
      renderUsers();
    });
};

getUsers();

const renderPages = (pages) => {
  for (let i = 1; i <= pages; i++) {
    const page = document.createElement("li");
    page.innerHTML = `<button id=${i}>${i}</button>`;
    pagination.appendChild(page);
  }
};

const renderUsers = () => {
  people.map((user) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${user.first_name}</td><td>${user.last_name}</td>
    <td>${user.email}</td><td><button class='edit-btn'>Edit</button>
    <button class='delete-btn'>Delete</button></td>`;
    tr.setAttribute("userId", user.id);
    table.appendChild(tr);
  });
};

pagination.addEventListener("click", (e) => {
  table.innerText = "";
  pagination.innerText = "";
  getUsers(e.target.id);
});




