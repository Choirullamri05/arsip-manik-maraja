export function renderHeader(activeMenu = '') {
    return `
    <header class="bg-blue-600 text-white p-4 shadow-md sticky top-0 z-50">
        <div class="max-w-6xl mx-auto flex justify-between items-center">
            <a href="index.html" class="text-xl font-bold flex items-center gap-2 hover:opacity-90">
                <span>Arsip Desa Manik Maraja</span>
            </a>

            <nav class="hidden md:flex items-center space-x-6">
                <a href="index.html" class="hover:underline ${activeMenu === 'beranda' ? 'font-bold underline' : ''}">
                    Beranda
                </a>

                <div class="relative group">
                    <button class="flex items-center gap-1 hover:underline focus:outline-none py-2 ${activeMenu === 'profil' ? 'font-bold underline' : ''}">
                        <span>Profil Desa</span>
                        <svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div class="absolute left-0 mt-0 w-48 bg-white text-gray-800 rounded-lg shadow-lg py-2 hidden group-hover:block transition-all border border-gray-100">
                        <a href="sejarah.html" class="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 text-sm">Sejarah Desa</a>
                        <a href="visi-misi.html" class="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 text-sm">Visi dan Misi</a>
                        <a href="status-desa.html" class="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 text-sm">Status Desa</a>
                    </div>
                </div>

                <a href="peta.html" class="hover:underline ${activeMenu === 'peta' ? 'font-bold underline' : ''}">
                    Peta
                </a>

                <a href="umkm.html" class="hover:underline ${activeMenu === 'umkm' ? 'font-bold underline' : ''}">
                    UMKM Desa
                </a>
            </nav>

            <button id="btn-menu-mobile" class="md:hidden p-1 focus:outline-none">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div>

        <div id="menu-mobile" class="hidden md:hidden mt-3 pt-3 border-t border-blue-500 flex flex-col space-y-2">
            <a href="index.html" class="py-1 hover:bg-blue-700 px-2 rounded">Beranda</a>
            <div class="pl-2 border-l-2 border-blue-400 my-1 space-y-1">
                <span class="text-xs text-blue-200 font-semibold block uppercase">Profil Desa</span>
                <a href="sejarah.html" class="block py-1 hover:bg-blue-700 px-2 rounded text-sm">Sejarah Desa</a>
                <a href="visi-misi.html" class="block py-1 hover:bg-blue-700 px-2 rounded text-sm">Visi dan Misi</a>
                <a href="status-desa.html" class="block py-1 hover:bg-blue-700 px-2 rounded text-sm">Status Desa</a>
            </div>
            <a href="peta.html" class="py-1 hover:bg-blue-700 px-2 rounded">Peta</a>
            <a href="umkm.html" class="py-1 hover:bg-blue-700 px-2 rounded">UMKM Desa</a>
        </div>
    </header>
    `;
}

// Fungsi event listener untuk tombol menu mobile (HP)
export function initHeaderEvents() {
    const btnMobile = document.getElementById('btn-menu-mobile');
    const menuMobile = document.getElementById('menu-mobile');

    if (btnMobile && menuMobile) {
        btnMobile.addEventListener('click', () => {
            menuMobile.classList.toggle('hidden');
        });
    }
}