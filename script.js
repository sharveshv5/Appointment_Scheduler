let appointments = [];
document.getElementById('booking-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const service = document.getElementById('service').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const appointment = { service, date, time };
    appointments.push(appointment);
    alert('Appointment is Scheduled Successfully');
    localStorage.setItem('appointments', JSON.stringify(appointments));
    displayAppointments();
});
function displayAppointments() {
    const appointmentsDiv = document.getElementById('appointments');
    if (appointmentsDiv) {
        appointmentsDiv.innerHTML = '';
        const storedAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
        if (storedAppointments.length === 0) {
            appointmentsDiv.innerHTML = '<p>No appointments found.</p>';
        } else {
            storedAppointments.forEach(appointment => {
                const appointmentElement = document.createElement('div');
                appointmentElement.className = 'appointment';
                appointmentElement.innerHTML = `
                    <p>Service: ${appointment.service}</p>
                    <p>Date: ${appointment.date}</p>
                    <p>Time: ${appointment.time}</p>
                `;
                appointmentsDiv.appendChild(appointmentElement);
            });
        }
    }
}
if (window.location.pathname.includes('manage.html')) {
    displayAppointments();
}
