// Fungsi untuk menghitung deret Fibonacci
function generateFibonacci() {
    const input = document.getElementById("fibonacci-input").value;
    const result = document.getElementById("fibonacci-result");

    if (input <= 0) {
        result.textContent = "Masukkan jumlah elemen yang valid";
        return;
    }
    const fibSeries = [0, 1];
    while (fibSeries.length < input) {
        const nextNum = fibSeries[fibSeries.length - 1] + fibSeries[fibSeries.length - 2];
        fibSeries.push(nextNum);
    }
    result.textContent = "Deret Fibonacci: " + fibSeries.join(", ");
}

// Fungsi untuk menghitung volume bangun ruang (balok, kubus, dan bola)
function calculateVolume() {
    const shape = document.getElementById("shape").value;
    const result = document.getElementById("volume-result");

    if (shape === "balok") {
        const length = parseFloat(document.getElementById("length").value);
        const width = parseFloat(document.getElementById("width").value);
        const height = parseFloat(document.getElementById("height").value);

        if (isNaN(length) || isNaN(width) || isNaN(height)) {
            result.textContent = "Masukkan dimensi yang valid";
            return;
        }

        const volume = length * width * height;

        result.textContent = "Volume Balok: " + volume;
    } else if (shape === "kubus") {
        const side = parseFloat(document.getElementById("side").value);

        if (isNaN(side)) {
            result.textContent = "Masukkan panjang sisi yang valid";
            return;
        }
        const volume = Math.pow(side, 3);
        result.textContent = "Volume Kubus: " + volume;
    } else if (shape === "bola") {
        const radius = parseFloat(document.getElementById("radius").value);

        if (isNaN(radius)) {
            result.textContent = "Masukkan jari-jari yang valid";
            return;
        }
        const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
        result.textContent = "Volume Bola: " + volume.toFixed(2); // Menggunakan toFixed(2) untuk membulatkan ke 2 desimal
    }
}