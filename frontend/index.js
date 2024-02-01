const fun = async () => {
  const response = await fetch("http://localhost:3000/getdata", {
    method: "GET",
  });

  const data = await response.json();
  console.log(data);
  const elements = data.map((entity, index) => {
    return `<div class="row">
    <div class="col c1">${index + 1}</div>
    <div class="col c2">${entity.Name}</div>
    <div class="col c3">${'₹ '+entity.last}</div>
    <div class="col c4">${'₹ '+entity.Buy}</div>
    <div class="col c5">${'₹ '+entity.Sell}</div>
    <div class="col c6">${entity.Volume}</div>
    <div class="col c7">${entity.Base_unit}</div>
  </div>`;
  });
//   console.log(elements)
  document.getElementsByClassName("mainrow")[0].innerHTML += elements;
};
fun();

// setInterval(fun, 60 * 1000);
