let button = document.querySelector(".but");
let response = document.querySelector(".response");
let notification = document.querySelector(".notification");

let namebox = document.getElementById("name");
let companybox = document.getElementById("company");

namebox.addEventListener("input", function () {
  console.log("c");
  notification.style.display = "none";
  response.style.display = "none";
});

button.addEventListener("click", function () {
  notification.innerHTML = "";

  let varone = document.getElementById("name").value;
  let vartwo = document.getElementById("company").value;

  varone = capitalizeFirstLetter(varone);

  let result =
    varone +
    ", quick question - if my team found, vetted and coached an army of content creators who'll be posting daily optimized TikToks on behalf of " +
    vartwo +
    ", would that be of interest?";

  response.style.display = "block";
  response.innerHTML = result;

  navigator.clipboard.writeText(result);

  notification.style.display = "block";
  notification.innerHTML = "Succesfully copied to clipboard";
});

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
