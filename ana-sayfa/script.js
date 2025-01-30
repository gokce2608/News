// Resimlerin kaynaklarını bir dizi içinde tanımlıyoruz
const images = [
    "6_şubat.jpg", // ilk resim
    "kartalkaya.webp",   // ikinci resim
    "narin-guran.webp",  // üçüncü resim
    // Diğer resimler eklenebilir
];

let currentIndex = 0;  // Başlangıçtaki resim indexi

// Kartlar ve sayılar
const cards = document.querySelectorAll('.haber-card');
const numbers = document.querySelectorAll('.number');

// Resimlerin sırasıyla değişmesini sağlayacak fonksiyon
function changeImage() {
    const imageElement = document.querySelector('.haber-card .image');
    imageElement.style.opacity = 0;  // Resmi geçici olarak gizler

    // Resim değiştirme işlemi tamamlandığında
    setTimeout(() => {
        imageElement.src = images[currentIndex];  // Yeni resim kaynağını atar
        imageElement.style.opacity = 1;  // Yeni resmi gösterir
    }, 500);  // Geçiş efekti için kısa bir süre bekler



    // Sayıyı aktif hale getir
    numbers.forEach(number => number.classList.remove('active'));  // Tüm sayılardan 'active' sınıfını kaldır
    numbers[currentIndex].classList.add('active');  // Aktif sayıya 'active' sınıfını ekle



    // Resim indexini günceller, dizinin sonuna gelirse başa döner
    currentIndex = (currentIndex + 1) % images.length;
}

// İlk resim ile başla ve her 3 saniyede bir değişmesini sağla
setInterval(changeImage, 3000);  // Her 3 saniyede bir resmi değiştir



// Başlangıçta ilk sayıyı aktif yap
numbers[currentIndex].classList.add('active');

