// Data produk lokal LokalPick (Simulasi database dari data yang Anda berikan)
const allProducts = [
    // Pastikan Anda telah membuat folder 'assets' dan nama file sesuai di bawah ini
    
    // --- HIJAB ---
    { id: 1, name: "Napocut Collection", brand: "Napocut", category: "hijab", gender: "wanita", minPrice: 75000, maxPrice: 325000, shopeeLink: "https://shopee.co.id/napocutofficial", image: "napocut.jpg" },
    { id: 2, name: "Lozy Hijab Basic", brand: "Lozy Hijab", category: "hijab", gender: "wanita", minPrice: 30000, maxPrice: 199000, shopeeLink: "https://shopee.co.id/lozy_official", image: "lozy1.jpg" },
    { id: 3, name: "Sattka Scarf", brand: "Sattka", category: "hijab", gender: "wanita", minPrice: 40000, maxPrice: 199000, shopeeLink: "https://shopee.co.id/sattka.official", image: "sattka.jpg" },

    // --- BAJU & CELANA ---
    { id: 4, name: "The Executive Formal Wear", brand: "The Executive", category: "baju/celana", gender: "unisex", minPrice: 49999, maxPrice: 1169910, shopeeLink: "https://shopee.co.id/theexecutiveid", image: "theexecutive.png" },
    { id: 5, name: "Thenblank Daily Outfit", brand: "Thenblank", category: "baju/celana", gender: "unisex", minPrice: 101400, maxPrice: 426550, shopeeLink: "https://shopee.co.id/thenblank", image: "thenblank.jpg" },
    { id: 6, name: "Benang Jarum Premium Dress", brand: "Benang Jarum", category: "baju/celana", gender: "wanita", minPrice: 67500, maxPrice: 2875000, shopeeLink: "https://shopee.co.id/benangjarumofficial", image: "benangjarum.png" },
    { id: 7, name: "CottonInk Casual Tee", brand: "CottonInk", category: "baju/celana", gender: "wanita", minPrice: 79000, maxPrice: 649000, shopeeLink: "https://shopee.co.id/cottonink.official", image: "cottonink.png" },
    { id: 8, name: "Dama Kara Apparel", brand: "Dama Kara", category: "baju/celana", gender: "pria/wanita", minPrice: 53000, maxPrice: 499000, shopeeLink: "https://shopee.co.id/damakara", image: "damakara.png" },
    { id: 9, name: "Joy Basic Tunic", brand: "Joy Basic", category: "baju", gender: "wanita", minPrice: 46000, maxPrice: 269000, shopeeLink: "https://shopee.co.id/joybasic.id", image: "joybasic.png" },
    { id: 10, name: "ManZone Formal Shirt", brand: "ManZone", category: "baju/celana", gender: "pria", minPrice: 39900, maxPrice: 509003, shopeeLink: "https://shopee.co.id/manzoneofficial", image: "manzone.jpg" },

    // --- SEPATU/SANDAL ---
    { id: 11, name: "Brodo Boots", brand: "Brodo", category: "sepatu", gender: "pria", minPrice: 91800, maxPrice: 1499000, shopeeLink: "https://shopee.co.id/brodoofficialstore", image: "brodo.png" },
    { id: 12, name: "Cekhas Heels", brand: "Cekhas", category: "sepatu", gender: "wanita", minPrice: 199999, maxPrice: 614000, shopeeLink: "https://shopee.co.id/cekhas.id", image: "cekhas.jpg" },
    { id: 13, name: "Dianable Flatshoes", brand: "Dianable", category: "sepatu", gender: "wanita", minPrice: 216000, maxPrice: 465000, shopeeLink: "https://shopee.co.id/dianable_store", image: "dianable.png" },
    { id: 14, name: "Hijack Sandals", brand: "Hijack", category: "sepatu", gender: "unisex", minPrice: 265000, maxPrice: 750000, shopeeLink: "https://shopee.co.id/hijacksandals", image: "hijack.png" },
    { id: 15, name: "Nineten Running Shoes", brand: "Nineten", category: "sepatu", gender: "unisex", minPrice: 386910, maxPrice: 1395000, shopeeLink: "https://shopee.co.id/910sportswear", image: "nineten.jpg" },

    // --- TAS ---
    { id: 16, name: "Asthe Leather Bag", brand: "Asthe", category: "tas", gender: "wanita", minPrice: 365000, maxPrice: 1150000, shopeeLink: "https://shopee.co.id/asthe.official", image: "asthe.jpg" },
    { id: 17, name: "Holdrey Sling Bag", brand: "Holdrey", category: "tas", gender: "wanita", minPrice: 349000, maxPrice: 620000, shopeeLink: "https://shopee.co.id/holdrey", image: "holdrey.png" },
    { id: 18, name: "Urban State Backpack", brand: "Urban State", category: "tas", gender: "pria", minPrice: 349600, maxPrice: 843700, shopeeLink: "https://shopee.co.id/urbanstate", image: "urbanstate.png" }
];

// Fungsi untuk format harga ke Rupiah
function formatRupiah(number) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(number);
}

// Fungsi untuk merender/menampilkan produk di HTML
function renderProducts(products) {
    const productListDiv = document.getElementById('product-list');
    productListDiv.innerHTML = ''; // Kosongkan daftar produk yang ada

    if (products.length === 0) {
        productListDiv.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; padding: 50px;">Tidak ada produk yang sesuai dengan filter. Coba ganti pilihan filter Anda.</p>';
        return;
    }

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        const displayCategory = product.category.includes('/') ? product.category.split('/').map(c => c.charAt(0).toUpperCase() + c.slice(1)).join(' & ') : product.category.charAt(0).toUpperCase() + product.category.slice(1);
        
        // Tentukan gender yang ditampilkan, handle kasus Pria/Wanita dan Unisex
        let displayGender = product.gender;
        if (product.gender === 'pria/wanita') {
            displayGender = 'Pria & Wanita';
        } else {
            displayGender = product.gender.charAt(0).toUpperCase() + product.gender.slice(1);
        }

        // Isi konten card produk
        productCard.innerHTML = `
            <div class="brand-logo-container">
                <img src="${product.image}" alt="Logo Brand ${product.brand}" class="brand-logo">
            </div>
            
            <div class="product-info">
                <h3>${product.brand}</h3>
                <p>${product.name}</p>
                <p><strong>Kategori:</strong> ${displayCategory}</p>
                <p><strong>Gender:</strong> ${displayGender}</p>
                <p class="brand-price">Rentang Harga: ${formatRupiah(product.minPrice)} - ${formatRupiah(product.maxPrice)}</p>
                <a href="${product.shopeeLink}" target="_blank" class="buy-button">Cek Toko di Shopee</a>
            </div>
        `;
        productListDiv.appendChild(productCard);
    });
}

// Fungsi untuk menerapkan filter
window.applyFilters = function() {
    const genderFilter = document.getElementById('gender-filter').value;
    const categoryFilter = document.getElementById('category-filter').value;
    const sortFilter = document.getElementById('sort-filter').value;

    let filteredProducts = [...allProducts]; // Buat salinan data

    // 1. Filter berdasarkan Gender
    if (genderFilter !== 'all') {
        filteredProducts = filteredProducts.filter(product => {
            // Logika untuk menangani produk unisex / pria/wanita
            if (product.gender === 'unisex' || product.gender.includes(genderFilter)) {
                return true;
            }
            return false;
        });
    }

    // 2. Filter berdasarkan Kategori
    if (categoryFilter !== 'all') {
        filteredProducts = filteredProducts.filter(product => {
            return product.category.includes(categoryFilter);
        });
    }
    
    // 3. Urutkan berdasarkan Harga (menggunakan minPrice sebagai patokan termurah/termahal brand)
    if (sortFilter === 'termurah') {
        filteredProducts.sort((a, b) => a.minPrice - b.minPrice);
    } else if (sortFilter === 'termahal') {
        filteredProducts.sort((a, b) => b.minPrice - a.minPrice);
    }

    renderProducts(filteredProducts);
}

// Fungsi untuk mereset filter
window.resetFilters = function() {
    document.getElementById('gender-filter').value = 'all';
    document.getElementById('category-filter').value = 'all';
    document.getElementById('sort-filter').value = 'none';
    renderProducts(allProducts); // Tampilkan semua produk
}


// Jalankan fungsi saat halaman dimuat pertama kali
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(allProducts);
});