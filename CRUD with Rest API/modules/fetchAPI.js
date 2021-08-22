const fetchApi = (url, method, data) => {
    fetch(url, {
      method: method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  
  export default fetchApi;