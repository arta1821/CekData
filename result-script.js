document.addEventListener('DOMContentLoaded', function() {
    const studentData = JSON.parse(localStorage.getItem('studentData'));

    if (studentData) {
        const tableBody = document.getElementById('resultTable').querySelector('tbody');
        
        for (const key in studentData) {
            if (key !== 'No') {
            const row = document.createElement('tr');
            const keyCell = document.createElement('td');
            const valueCell = document.createElement('td');
            
            keyCell.textContent = key;
            valueCell.textContent = studentData[key];
            
            row.appendChild(keyCell);
            row.appendChild(valueCell);
            tableBody.appendChild(row);
        }
    }
    } else {
        alert('Tidak ada data yang ditemukan.');
        window.location.href = 'index.html';
    }
});
setTimeout(function() {
    window.location.href = 'index.html';
}, 60000);
