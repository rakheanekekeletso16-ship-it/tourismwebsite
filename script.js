


const themeButton = document.getElementById("themeButton");


if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}

if (themeButton) {

    themeButton.textContent =
        document.body.classList.contains("dark-mode")
        ? "Light Mode"
        : "Dark Mode";

    themeButton.addEventListener("click", function() {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            themeButton.textContent = "Light Mode";
        } else {
            localStorage.setItem("theme", "light");
            themeButton.textContent = "Dark Mode";
        }

    });
}

const searchInput = document.getElementById("searchDestination");

if (searchInput) {

    searchInput.addEventListener("input", function() {

        const searchValue = searchInput.value.toLowerCase();
        const destinations = document.querySelectorAll(".destination-item");

        let found = 0;

        destinations.forEach(function(destination) {

            const name = destination.textContent.toLowerCase();

            if (name.includes(searchValue)) {
                destination.style.display = "";
                found++;
            } else {
                destination.style.display = "none";
            }

        });

        const noResults = document.getElementById("noResults");

        if (noResults) {
            noResults.style.display = found === 0 ? "block" : "none";
        }

    });

}

function showImage(imageSource) {

    const previewImage = document.getElementById("previewImage");
    const modalElement = document.getElementById("imageModal");

    if (previewImage && modalElement) {

        previewImage.src = imageSource;

        const imageModal = new bootstrap.Modal(modalElement);

        imageModal.show();

    }

}

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("contactName").value.trim();
        const email = document.getElementById("contactEmail").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        const result = document.getElementById("contactMessage");

        if (!name || !email || !subject || !message) {

            result.textContent = "Please fill in all fields.";
            result.style.color = "red";

        } else {

            result.textContent = "Your message has been submitted successfully!";
            result.style.color = "green";

            contactForm.reset();

        }

    });

}

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

    bookingForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("visitorName").value.trim();
        const email = document.getElementById("visitorEmail").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const date = document.getElementById("visitDate").value;
        const destination = document.getElementById("destination").value;
        const visitors = Number(document.getElementById("visitors").value);

        const result = document.getElementById("bookingMessage");

        if (!name || !email || !phone || !date || !destination || !visitors) {

            result.textContent = "Please complete all booking fields.";
            result.style.color = "red";

        } else if (new Date(date + "T00:00:00") < new Date(new Date().toDateString())) {

            result.textContent = "Please select a future visit date.";
            result.style.color = "red";

        } else if (!Number.isInteger(visitors) || visitors < 1 || visitors > 50) {

            result.textContent = "Visitors must be between 1 and 50.";
            result.style.color = "red";

        } else {

            result.textContent = "Your booking request has been submitted successfully!";
            result.style.color = "green";

            bookingForm.reset();

        }

    });

}

const calculateButton = document.getElementById("calculateButton");

if (calculateButton) {

    calculateButton.addEventListener("click", function() {

        const packagePrice = Number(document.getElementById("package").value);
        const people = Number(document.getElementById("people").value);

        const total = packagePrice * people;

        const result = document.getElementById("totalCost");

        if (!Number.isInteger(people) || people < 1 || people > 50) {

            result.textContent = "Please enter between 1 and 50 people.";

        } else {

            result.textContent = "Estimated Total: M" + total;

        }

    });

}
