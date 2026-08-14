export function renderHeader(activeMenu = '') {
    const isHome = activeMenu === 'beranda';

    const desktopLinkClass = (menu) => `
        relative px-3 py-2 rounded-lg text-sm font-semibold transition-colors
        ${activeMenu === menu
            ? 'bg-white/15 text-white'
            : 'text-blue-50 hover:bg-white/10 hover:text-white'}
    `;

    const mobileLinkClass = (menu) => `
        block px-4 py-3 rounded-xl text-sm font-semibold transition-colors
        ${activeMenu === menu
            ? 'bg-white text-blue-700'
            : 'text-white hover:bg-white/10'}
    `;

    return `
    <style>
        .site-header {
            transition: background-color 250ms ease, box-shadow 250ms ease, backdrop-filter 250ms ease;
        }

        .home-header {
            background-color: transparent;
            box-shadow: none;
        }

        .home-header.is-scrolled,
        .home-header.menu-open {
            background-color: rgba(29, 78, 216, 0.96);
            box-shadow: 0 10px 30px rgba(15, 23, 42, 0.16);
            -webkit-backdrop-filter: blur(14px);
            backdrop-filter: blur(14px);
        }

        #profile-menu-wrapper.profile-open #profile-menu {
            visibility: visible;
            opacity: 1;
            transform: translateY(0);
        }

        #profile-menu-wrapper.profile-open #profile-menu-chevron {
            transform: rotate(180deg);
        }

        @media (prefers-reduced-motion: reduce) {
            .site-header { transition: none; }
        }
    </style>

    <header
        id="site-header"
        data-home="${isHome}"
        class="site-header ${isHome ? 'home-header fixed' : 'sticky bg-blue-700 shadow-md'} top-0 left-0 right-0 z-50 w-full text-white px-4"
    >
        <div class="max-w-6xl mx-auto h-[72px] flex justify-between items-center gap-6">
            <a href="index.html" class="flex items-center gap-3 min-w-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/70" aria-label="Beranda Arsip Desa Manik Maraja">
                <span class="w-10 h-10 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center shrink-0 backdrop-blur-sm" aria-hidden="true">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6M8 10h.01M12 10h.01M16 10h.01"></path>
                    </svg>
                </span>
                <span class="min-w-0">
                    <span class="block text-base sm:text-lg font-extrabold leading-tight truncate">Manik Maraja</span>
                    <span class="hidden sm:block text-[11px] uppercase tracking-[0.16em] text-blue-100 leading-tight mt-0.5">Portal Informasi Desa</span>
                </span>
            </a>

            <nav class="hidden lg:flex items-center gap-1" aria-label="Navigasi utama">
                <a href="index.html" class="${desktopLinkClass('beranda')}" ${activeMenu === 'beranda' ? 'aria-current="page"' : ''}>
                    Beranda
                </a>

                <div id="profile-menu-wrapper" class="relative group">
                    <button
                        id="profile-menu-button"
                        type="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                        aria-controls="profile-menu"
                        class="${desktopLinkClass('profil')} flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-white/60"
                    >
                        <span>Profil Desa</span>
                        <svg id="profile-menu-chevron" class="w-4 h-4 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div
                        id="profile-menu"
                        class="invisible opacity-0 translate-y-2 absolute left-0 top-full pt-2 w-56 transition-all duration-200"
                    >
                        <div class="bg-white text-gray-700 rounded-2xl shadow-xl p-2 border border-gray-100">
                            <a href="sejarah.html" class="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-blue-50 hover:text-blue-700 text-sm font-medium transition-colors">
                                <span class="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center" aria-hidden="true">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 2M5.05 5.05a10 10 0 110 13.9"></path></svg>
                                </span>
                                Sejarah Desa
                            </a>
                            <a href="visi-misi.html" class="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-blue-50 hover:text-blue-700 text-sm font-medium transition-colors">
                                <span class="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center" aria-hidden="true">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                                </span>
                                Visi dan Misi
                            </a>
                            <a href="status-desa.html" class="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-blue-50 hover:text-blue-700 text-sm font-medium transition-colors">
                                <span class="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center" aria-hidden="true">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6M9 8h2m-5 13h12a2 2 0 002-2V5a2 2 0 00-2-2H6a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                                </span>
                                Status Desa
                            </a>
                        </div>
                    </div>
                </div>

                <a href="peta.html" class="${desktopLinkClass('peta')}" ${activeMenu === 'peta' ? 'aria-current="page"' : ''}>
                    Peta
                </a>
                <a href="umkm.html" class="${desktopLinkClass('umkm')}" ${activeMenu === 'umkm' ? 'aria-current="page"' : ''}>
                    UMKM Desa
                </a>
                <a href="galeri-kkn.html" class="${desktopLinkClass('kkn')}" ${activeMenu === 'kkn' ? 'aria-current="page"' : ''}>
                    Galeri KKN
                </a>
            </nav>

            <button
                id="btn-menu-mobile"
                type="button"
                class="lg:hidden w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center shrink-0 transition-colors focus:outline-none focus:ring-2 focus:ring-white/70"
                aria-label="Buka menu navigasi"
                aria-controls="menu-mobile"
                aria-expanded="false"
            >
                <svg id="icon-menu-open" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
                <svg id="icon-menu-close" class="hidden w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
        </div>

        <div id="menu-mobile" class="hidden lg:hidden absolute top-full left-4 right-4 mt-2 max-h-[calc(100vh-96px)] overflow-y-auto bg-blue-800/95 backdrop-blur-xl rounded-2xl border border-white/15 shadow-2xl p-3">
            <nav class="space-y-1" aria-label="Navigasi seluler">
                <a href="index.html" class="${mobileLinkClass('beranda')}" ${activeMenu === 'beranda' ? 'aria-current="page"' : ''}>Beranda</a>

                <div class="px-2 pt-3 pb-1">
                    <span class="block px-2 text-[11px] text-blue-200 font-bold uppercase tracking-[0.16em]">Profil Desa</span>
                    <div class="mt-2 pl-2 border-l border-blue-500 space-y-1">
                        <a href="sejarah.html" class="block px-3 py-2.5 rounded-lg text-sm ${activeMenu === 'profil' ? 'text-white font-semibold' : 'text-blue-50'} hover:bg-white/10">Sejarah Desa</a>
                        <a href="visi-misi.html" class="block px-3 py-2.5 rounded-lg text-sm ${activeMenu === 'profil' ? 'text-white font-semibold' : 'text-blue-50'} hover:bg-white/10">Visi dan Misi</a>
                        <a href="status-desa.html" class="block px-3 py-2.5 rounded-lg text-sm ${activeMenu === 'profil' ? 'text-white font-semibold' : 'text-blue-50'} hover:bg-white/10">Status Desa</a>
                    </div>
                </div>

                <a href="peta.html" class="${mobileLinkClass('peta')}" ${activeMenu === 'peta' ? 'aria-current="page"' : ''}>Peta</a>
                <a href="umkm.html" class="${mobileLinkClass('umkm')}" ${activeMenu === 'umkm' ? 'aria-current="page"' : ''}>UMKM Desa</a>
                <a href="galeri-kkn.html" class="${mobileLinkClass('kkn')}" ${activeMenu === 'kkn' ? 'aria-current="page"' : ''}>Galeri KKN</a>
            </nav>
        </div>
    </header>
    `;
}

export function initHeaderEvents() {
    const header = document.getElementById('site-header');
    const btnMobile = document.getElementById('btn-menu-mobile');
    const menuMobile = document.getElementById('menu-mobile');
    const iconOpen = document.getElementById('icon-menu-open');
    const iconClose = document.getElementById('icon-menu-close');
    const profileButton = document.getElementById('profile-menu-button');
    const profileWrapper = document.getElementById('profile-menu-wrapper');
    const profileMenu = document.getElementById('profile-menu');
    const profileMenuChevron = document.getElementById('profile-menu-chevron');

    if (!header) return;

    const isHome = header.dataset.home === 'true';

    function updateHomeHeader() {
        if (!isHome) return;
        header.classList.toggle('is-scrolled', window.scrollY > 24);
    }

    function setMobileMenu(open) {
        if (!btnMobile || !menuMobile) return;

        menuMobile.classList.toggle('hidden', !open);
        iconOpen?.classList.toggle('hidden', open);
        iconClose?.classList.toggle('hidden', !open);
        btnMobile.setAttribute('aria-expanded', String(open));
        btnMobile.setAttribute('aria-label', open ? 'Tutup menu navigasi' : 'Buka menu navigasi');
        header.classList.toggle('menu-open', open);
        updateHomeHeader();
    }

    function setProfileMenuState(open) {
        profileButton?.setAttribute('aria-expanded', String(open));
        profileWrapper?.classList.toggle('profile-open', open);
        if (profileMenu) {
            profileMenu.style.visibility = open ? 'visible' : 'hidden';
            profileMenu.style.opacity = open ? '1' : '0';
            profileMenu.style.transform = open ? 'translateY(0)' : 'translateY(0.5rem)';
        }
        if (profileMenuChevron) {
            profileMenuChevron.style.transform = open ? 'rotate(180deg)' : 'rotate(0deg)';
        }
    }

    updateHomeHeader();
    window.addEventListener('scroll', updateHomeHeader, { passive: true });

    btnMobile?.addEventListener('click', () => {
        setMobileMenu(btnMobile.getAttribute('aria-expanded') !== 'true');
    });

    profileButton?.addEventListener('click', () => {
        setProfileMenuState(true);
    });

    profileWrapper?.addEventListener('mouseenter', () => setProfileMenuState(true));
    profileWrapper?.addEventListener('mouseleave', () => setProfileMenuState(false));
    profileWrapper?.addEventListener('focusin', () => setProfileMenuState(true));
    profileWrapper?.addEventListener('focusout', () => {
        window.setTimeout(() => {
            setProfileMenuState(profileWrapper.contains(document.activeElement));
        }, 0);
    });

    document.addEventListener('keydown', (event) => {
        if (event.key !== 'Escape') return;
        setMobileMenu(false);
        setProfileMenuState(false);
        profileButton?.blur();
    });

    document.addEventListener('click', (event) => {
        if (!header.contains(event.target)) {
            setMobileMenu(false);
            setProfileMenuState(false);
            profileButton?.blur();
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 1024) {
            setMobileMenu(false);
        }
    });
}
