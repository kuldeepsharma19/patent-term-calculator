function expirationDate() {
  let date = new Date(
    document.getElementById("earliest-effective-filing-date").value
  );
  let pta = document.getElementById("patent-term-adjustment").value;
  let resultColor = document.querySelector("#result-text");
  if (pta === "") {
    let newDate = new Date(date.setFullYear(date.getFullYear() + 20));

    document.querySelector("#result-text").innerText =
      "Expiration Date: " + newDate.toLocaleDateString();

    if (newDate >= new Date()) {
      resultColor.style.color = "green";
    } else {
      resultColor.style.color = "red";
    }
  } else {
    let ptaDate = new Date(date.setDate(date.getDate() + parseInt(pta)));
    let finalDate = new Date(ptaDate.setFullYear(ptaDate.getFullYear() + 20));
    document.querySelector("#result-text").innerText =
      "Expiration Date: " + finalDate.toLocaleDateString();
    if (finalDate >= new Date()) {
      resultColor.style.color = "green";
    } else {
      resultColor.style.color = "red";
    }
  }
}
