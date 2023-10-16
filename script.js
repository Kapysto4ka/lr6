const startButton = document.querySelector("button");
var allText = document.getElementById("paragraph")
if (startButton) {
    startButton.addEventListener("click", function() {
        const headers = document.querySelectorAll("h2");
        const paragraphs = document.querySelectorAll("p");

        const table = document.querySelector("table");
        const cells = table.getElementsByTagName("td");

        if (headers.length >= 3 && paragraphs.length >= 3 && cells.length >= 9) {
            cells[0].innerText = headers[0].textContent;
            cells[3].innerText = headers[1].textContent;
            cells[6].innerText = headers[2].textContent;

            cells[1].innerText = paragraphs[0].textContent;
            cells[4].innerText = paragraphs[1].textContent;
            cells[7].innerText = paragraphs[2].textContent;
            allText.remove();
        }
        else {
            console.log("Помилка");
        }
    });
}