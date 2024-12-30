// Number of rows and columns in the cinema hall
const numRows = 5;
const numCols = 10;

// Function to generate seats
function generateSeats() {
    const seatsDiv = document.querySelector('.seats');
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            const seat = document.createElement('div');
            seat.classList.add('seat');
            seat.setAttribute('data-row', i + 1);
            seat.setAttribute('data-col', j + 1);
            seat.addEventListener('click', toggleSeat);
            seatsDiv.appendChild(seat);
        }
        seatsDiv.appendChild(document.createElement('br')); // New line for each row
    }
}

// Function to toggle seat selection
function toggleSeat(event) {
    const seat = event.target;
    seat.classList.toggle('selected');
}

// Function to book selected seats
function bookSeats() {
    const selectedSeats = document.querySelectorAll('.seat.selected');
    if (selectedSeats.length === 0) {
        alert('Please select at least one seat.');
    } else {
        const seatNumbers = Array.from(selectedSeats).map(seat => {
            return `[Row ${seat.getAttribute('data-row')}, Seat ${seat.getAttribute('data-col')}]`;
        }).join(', ');
        alert(`You have booked the following seats: ${seatNumbers}`);
    }
}

// Generate seats when the page loads
window.addEventListener('DOMContentLoaded', generateSeats);