const tabs = document.querySelectorAll('.iconf'); // Barcha tablarni olish
const all_content = document.querySelectorAll('.hotel'); // Barcha kontentlarni olish



tabs.forEach((tab, index) => {
    tab.addEventListener('click', (e) => {
        // Hamma tab va kontentlardan 'active' klassini olib tashlash
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });
        all_content.forEach(hotel => {
            hotel.classList.remove('active');
            hotel.style.display = 'none'; // Kontentni yashirish
        });

        // Hozirgi tab va kontentga 'active' klassini qo'shish
        tab.classList.add('active');
        all_content[index].classList.add('active');
        all_content[index].style.display = 'flex'; // Ko'rinishni faollashtirish
    });
});






// Modalni olish


// Tugma bosilganda modalni ko'rsatish

// Modalni yoping
const modal = document.getElementById("bookingModal");
const closeModal = document.getElementById("closeModal");
const bookNowButtons = document.querySelectorAll(".now");

bookNowButtons.forEach(button => {
    button.addEventListener("click", function () {
        // Modalda ko'rsatiladigan matnni yangilash
        modal.querySelector("h1").textContent = `Information`;
        modal.querySelector("p").textContent = `This city is a symbol of love and beauty. Strolling through its streets, <br> you’ll witness breathtaking views and remarkable works of art. <br> Enjoying the cuisine at its many cafes and restaurants will leave you in awe <br> of the delightful flavors. Additionally, this city <br> is renowned for its historical landmarks and modern architecture. <br> Every corner holds a new discovery, and <br> its natural beauty and vibrant energy captivate visitors. <br> With lively festivals and rich culture, this city offers <br> unforgettable experiences for travelers. A unique <br> and charming atmosphere fills every nook and cranny, <br> where music and dance breathe life into the surroundings. This city truly captures the heart!`;

        // Modalni ko'rsatish
        modal.style.display = "block";
    });
});

// Modalni yopish
closeModal.onclick = function () {
    modal.style.display = "none";
}

// Modal tashqarisiga bosilganda yopish
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}







