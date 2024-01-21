let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth() + 1; // Note: JavaScript months are zero-based

function showDatePopup(year, month, day) {
    const popup = document.getElementById("popup");
    const linkButton = document.getElementById("linkButton");

    linkButton.addEventListener("click", function() {
        window.location.href = `quiz.html?date=${year}-${month}-${day}`;
    });

    popup.style.display = "block";
}

function closePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
}

function createCalendar(year, month) {
    const calBody = document.createElement("div");
    calBody.classList.add("calendar");
    calBody.innerHTML = `<h2>${getMonthName(month)} ${year}</h2>`;
    
    const calTable = document.createElement("table");
    calTable.innerHTML = `
        <thead>
            <tr>
                <th>Sun</th>
                <th>Mon</th>
                <th>Tue</th>
                <th>Wed</th>
                <th>Thu</th>
                <th>Fri</th>
                <th>Sat</th>
            </tr>
        </thead>
        <tbody id="calendar-body-${month}"></tbody>
    `;

    calBody.appendChild(calTable);
    document.getElementById("calendars-container").innerHTML = "";
    document.getElementById("calendars-container").appendChild(calBody);

    createMonthCalendar(year, month);
}

function createMonthCalendar(year, month) {
    const calBody = document.getElementById(`calendar-body-${month}`);
    calBody.innerHTML = "";

    const cal = new Date(year, month - 1, 1);
    const lastDay = new Date(year, month, 0).getDate();

    let day = 1;
    for (let i = 0; i < 6; i++) {
        const row = document.createElement("tr");

        for (let j = 0; j < 7; j++) {
            const cell = document.createElement("td");

            if (i === 0 && j < cal.getDay()) {
                cell.appendChild(document.createTextNode(" "));
            } else if (day > lastDay) {
                break;
            } else {
                const button = document.createElement("button");
                button.innerText = day;
                button.addEventListener("click", () => showDatePopup(year, month, day));
                cell.appendChild(button);
                day++;
            }

            row.appendChild(cell);
        }

        calBody.appendChild(row);
    }
}

function getMonthName(month) {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return monthNames[month - 1];
}

function changeMonth(offset) {
    currentMonth += offset;

    if (currentMonth < 1) {
        currentMonth = 12;
        currentYear--;
    } else if (currentMonth > 12) {
        currentMonth = 1;
        currentYear++;
    }

    createCalendar(currentYear, currentMonth);
}

// Initial display
createCalendar(currentYear, currentMonth);
