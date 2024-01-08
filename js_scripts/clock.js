function updateDateTime() {
    var dateTimeElement = document.getElementById('system-clock');
    var currentDate = new Date();

    var options = {
        // weekday: 'long',
        // year: 'numeric',
        // month: 'long',
        // day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        // timeZoneName: 'short'
    };

    var formattedDate = currentDate.toLocaleDateString('en-US', options);
        dateTimeElement.textContent = formattedDate
}

setInterval(updateDateTime, 1000);
updateDateTime();