function nextPage() {
    window.location.href = "AiNextPage.html"; // Tukar dengan URL halaman seterusnya
}

document.getElementById('pinForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let pin = '';
    pin += document.getElementById('pin1').value;
    pin += document.getElementById('pin2').value;
    pin += document.getElementById('pin3').value;
    pin += document.getElementById('pin4').value;

    if (pin === '5204') {
        alert('PIN betul! Anda dibenarkan masuk.');
        window.location.href = 'AiNextPage2.html'; // Contoh redirect ke halaman lain
    } else {
        alert('PIN salah. Sila cuba lagi.');
    }
});

document.querySelectorAll('.imageInput').forEach((input, index) => {
    input.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const img = document.querySelectorAll('.preview')[index];
                img.src = e.target.result;
                img.style.display = 'block';
            }
            reader.readAsDataURL(file);
        }
    });
});
function nextPage() {
    window.location.href = 'AiNextPage3.html'; // Uncomment untuk navigation sebenar
}