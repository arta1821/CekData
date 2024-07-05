function loadJSON(callback) {   
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'students.json', true); // Ganti 'data.json' dengan path file JSON Anda
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(JSON.parse(xobj.responseText));
        }
    };
    xobj.send(null);  
}

function checkData() {
    const studentNim = document.getElementById('studentNim').value;
    const studentNik = document.getElementById('studentNik').value;

    if (studentNim && studentNik) {
        loadJSON(function(response) {
            const studentData = response;
            const student = studentData.find(s => s.NIM === studentNim && s.NIK === studentNik);
            
            if (student) {
                // Simpan data mahasiswa dalam localStorage
                localStorage.setItem('studentData', JSON.stringify(student));
                window.location.href = 'result.html';
            } else {
                alert('NIM dan NIK tidak sesuai.');
            }
        });
    } else {
        alert('Silakan masukkan NIM dan NIK mahasiswa.');
    }
}

function enableCheckOnEnter() {
    const studentNim = document.getElementById('studentNim');
    const studentNik = document.getElementById('studentNik');

    function handleEnter(event) {
        if (event.key === 'Enter') {
            checkData();
        }
    }

    studentNim.addEventListener('keydown', handleEnter);
    studentNik.addEventListener('keydown', handleEnter);
}

document.addEventListener('DOMContentLoaded', enableCheckOnEnter);
