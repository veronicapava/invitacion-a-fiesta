function fiesta() {
    let age = document.getElementById("age").value;
    if (age >= 18 && age <= 35) {
        document.getElementById('print').innerHTML = "Puedes asistir a la fiesta. La dirección es: Calle 1 #40sur-10. Hora: 10:00pm. Día: 10-05-2000"
    } else {
        document.getElementById('print').innerHTML = "No puedes asitir"
    }
}
