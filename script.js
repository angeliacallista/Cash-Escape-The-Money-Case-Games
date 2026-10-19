const MASTER_LEVEL_DATA = [
    {
        level: 1, title: "Lantai 1: Ruang Kasir (Tantangan 1 — The Missing Money)",
        npcRole: "Rani (Kasir)",
        clues: [
            {
                type: "BOOK", name: "Barang Bukti #1",
                situation: "Rani menerima kas awal Rp1.500.000. Selama hari itu terjadi pembelian ATK Rp100.000, penerimaan pelanggan Rp500.000, pembayaran transportasi Rp50.000, dan pembelian air minum Rp100.000. Rani lupa mencatat transaksi pembelian air minum.",
                data: "Kas awal Rp1.500.000; pembelian ATK Rp100.000; penerimaan pelanggan Rp500.000; transportasi Rp50.000; air minum Rp100.000; kas fisik Rp1.750.000; saldo buku kas Rp1.850.000.",
                hint: "Bandingkan saldo buku dengan kas fisik. Cari pengeluaran yang mengurangi uang nyata tetapi belum masuk catatan.",
                question: "Mengapa saldo kas menurut buku berbeda Rp100.000 dengan uang kas sebenarnya?",
                options: [
                    { txt: "Pembelian air minum Rp100.000 belum dicatat", isCorrect: true },
                    { txt: "Kasir kehilangan uang Rp100.000", isCorrect: false },
                    { txt: "Penerimaan pelanggan salah dicatat", isCorrect: false },
                    { txt: "Kas awal salah dihitung", isCorrect: false }
                ],
                score: 100, fbCorrect: "Clue ditemukan! Pembelian air minum sudah mengurangi kas fisik, tetapi belum dicatat dalam buku kas.", fbWrong: "Clue terlewat! Periksa kembali transaksi yang belum masuk ke buku kas."
            },
            {
                type: "CALCULATOR", name: "Barang Bukti #2",
                situation: "Rani memiliki kas awal Rp2.000.000. Selama hari itu terjadi penjualan tunai Rp700.000, pembelian ATK Rp200.000, dan pembayaran listrik Rp300.000. Rani lupa mencatat pembayaran listrik.",
                data: "Kas awal Rp2.000.000; penjualan tunai Rp700.000; pembelian ATK Rp200.000; pembayaran listrik Rp300.000; kas fisik Rp2.200.000; saldo buku kas Rp2.500.000.",
                hint: "Selisihnya Rp300.000. Cari transaksi pengeluaran sebesar itu yang belum dicatat.",
                question: "Mengapa saldo buku kas lebih besar Rp300.000 daripada kas fisik?",
                options: [
                    { txt: "Penjualan tunai belum dicatat", isCorrect: false },
                    { txt: "Pembelian ATK salah dicatat", isCorrect: false },
                    { txt: "Kas awal salah dihitung", isCorrect: false },
                    { txt: "Pembayaran listrik belum dicatat", isCorrect: true }
                ],
                score: 100, fbCorrect: "Clue ditemukan! Pembayaran listrik sudah mengurangi kas fisik, tetapi belum dicatat dalam buku kas.", fbWrong: "Clue terlewat! Periksa kembali transaksi pengeluaran yang belum dicatat."
            },
            {
                type: "REGISTER", name: "Barang Bukti #3",
                situation: "Kas awal Rani Rp1.800.000. Hari itu Rani menerima uang dari pelanggan Rp600.000 dan membayar biaya transportasi Rp150.000. Rani lupa mencatat pembayaran transportasi.",
                data: "Kas awal Rp1.800.000; penerimaan pelanggan Rp600.000; transportasi Rp150.000; kas fisik Rp2.250.000; saldo buku kas Rp2.400.000.",
                hint: "Selisih Rp150.000 sama dengan salah satu transaksi. Periksa pengeluaran yang lupa dicatat.",
                question: "Transaksi manakah yang menyebabkan selisih Rp150.000?",
                options: [
                    { txt: "Kas awal", isCorrect: false },
                    { txt: "Penerimaan pelanggan", isCorrect: false },
                    { txt: "Tidak ada transaksi yang salah", isCorrect: false },
                    { txt: "Pembayaran transportasi", isCorrect: true }
                ],
                score: 100, fbCorrect: "Selisih ditemukan! Pembayaran transportasi Rp150.000 belum dicatat.", fbWrong: "Clue terlewat! Cocokkan kembali transaksi pengeluaran dengan saldo kas fisik."
            },
            {
                type: "ENVELOPE", name: "Barang Bukti #4",
                situation: "Kas awal Rani Rp2.000.000. Hari itu Rani menerima uang dari pelanggan Rp600.000, membayar biaya kebersihan Rp100.000, dan membeli perlengkapan Rp200.000. Rani lupa mencatat pembayaran biaya kebersihan.",
                data: "Kas awal Rp2.000.000; penerimaan pelanggan Rp600.000; biaya kebersihan Rp100.000; perlengkapan Rp200.000; biaya kebersihan sudah dibayar tetapi lupa dicatat.",
                hint: "Perhatikan dua pengeluaran dan tandai transaksi yang sudah dibayar tetapi tidak dicatat.",
                question: "Mengapa saldo buku kas berbeda dengan kas fisik?",
                options: [
                    { txt: "Penerimaan pelanggan belum dicatat", isCorrect: false },
                    { txt: "Pembelian perlengkapan belum dicatat", isCorrect: false },
                    { txt: "Pembayaran biaya kebersihan belum dicatat", isCorrect: true },
                    { txt: "Kas awal salah dihitung", isCorrect: false }
                ],
                score: 100, fbCorrect: "Clue ditemukan! Pembayaran biaya kebersihan Rp100.000 belum dicatat.", fbWrong: "Clue terlewat! Perhatikan transaksi pengeluaran yang belum dicatat."
            }
        ]
    },
    {
        level: 2, title: "Lantai 2: Ruang Arsip Dokumen (Tantangan 2 — The Missing Receipt)",
        npcRole: "Arsiparis",
        clues: [
            {
                type: "ENVELOPE", name: "Dokumen Arsip A",
                situation: "Accounting menemukan lima bukti transaksi dan mencocokkannya dengan buku kas. Empat bukti sudah tercatat, sedangkan satu bukti belum ditemukan pencatatannya.",
                data: "Bukti A: ATK Rp350.000 (sudah tercatat); B: listrik Rp500.000 (sudah); C: penjualan tunai Rp1.200.000 (sudah); D: perlengkapan Rp450.000 (belum); E: penerimaan piutang Rp800.000 (sudah).",
                hint: "Cari satu-satunya bukti berstatus 'belum tercatat'.",
                question: "Bukti transaksi manakah yang belum tercatat?",
                options: [
                    { txt: "Bukti A", isCorrect: false },
                    { txt: "Bukti D", isCorrect: true },
                    { txt: "Bukti B", isCorrect: false },
                    { txt: "Bukti E", isCorrect: false }
                ],
                score: 150, fbCorrect: "Bukti ditemukan! Bukti D merupakan transaksi pembelian perlengkapan yang belum tercatat.", fbWrong: "Evidence terlewat! Periksa status setiap bukti."
            },
            {
                type: "BOOK", name: "Dokumen Arsip B",
                situation: "Accounting menemukan transaksi pembayaran Rp600.000 di buku kas, tetapi perlu mencocokkannya dengan bukti transaksi yang tersedia.",
                data: "Transaksi di buku kas adalah pembayaran Rp600.000. Bukti A: ATK Rp300.000; B: listrik Rp450.000; C: perlengkapan Rp600.000; D: penerimaan pelanggan Rp800.000.",
                hint: "Cocokkan nominal pembayaran di buku kas dengan nominal setiap bukti.",
                question: "Bukti mana yang memiliki nominal yang sama dengan transaksi pembayaran tersebut?",
                options: [
                    { txt: "Bukti A", isCorrect: false },
                    { txt: "Bukti C", isCorrect: true },
                    { txt: "Bukti B", isCorrect: false },
                    { txt: "Bukti D", isCorrect: false }
                ],
                score: 150, fbCorrect: "Transaksi berhasil dicocokkan! Bukti C memiliki nominal Rp600.000.", fbWrong: "Evidence terlewat! Cocokkan nominal transaksi."
            },
            {
                type: "REGISTER", name: "Dokumen Arsip C",
                situation: "Accounting memeriksa lima bukti transaksi. Empat bukti sudah dicatat dalam buku kas, sedangkan satu bukti belum dicatat.",
                data: "Bukti A: perlengkapan Rp500.000 (sudah); B: penerimaan pelanggan Rp1.000.000 (sudah); C: air Rp200.000 (sudah); D: ATK Rp350.000 (sudah); E: internet Rp450.000 (belum).",
                hint: "Cari bukti dengan status 'belum dicatat'.",
                question: "Bukti manakah yang belum tercatat?",
                options: [
                    { txt: "Bukti A", isCorrect: false },
                    { txt: "Bukti B", isCorrect: false },
                    { txt: "Bukti D", isCorrect: false },
                    { txt: "Bukti E", isCorrect: true }
                ],
                score: 150, fbCorrect: "Bukti ditemukan! Pembayaran internet Rp450.000 belum dicatat.", fbWrong: "Evidence terlewat! Periksa status pencatatan."
            },
            {
                type: "ENVELOPE", name: "Dokumen Arsip D",
                situation: "Accounting memeriksa lima bukti transaksi. Empat bukti sudah tercatat dalam buku kas, sedangkan satu bukti belum dicatat.",
                data: "Bukti A: penjualan tunai Rp800.000 (sudah); B: ATK Rp300.000 (sudah); C: listrik Rp450.000 (belum); D: penerimaan piutang Rp700.000 (sudah); E: perlengkapan Rp600.000 (sudah).",
                hint: "Cari bukti yang statusnya belum tercatat, bukan yang sudah masuk buku kas.",
                question: "Bukti transaksi manakah yang belum tercatat dalam buku kas?",
                options: [
                    { txt: "Bukti A", isCorrect: false },
                    { txt: "Bukti C", isCorrect: true },
                    { txt: "Bukti B", isCorrect: false },
                    { txt: "Bukti E", isCorrect: false }
                ],
                score: 150, fbCorrect: "Bukti ditemukan! Pembayaran listrik Rp450.000 belum masuk buku kas.", fbWrong: "Evidence terlewat! Periksa kembali bukti transaksi."
            }
        ]
    },
    {
        level: 3, title: "Lantai 3: Meja Accounting (Tantangan 3 — The Wrong Entry)",
        npcRole: "Staf Accounting",
        clues: [
            {
                type: "JOURNAL", name: "Berkas Transaksi A",
                situation: "Perusahaan membeli perlengkapan kantor secara tunai sebesar Rp2.000.000. Accounting membuat jurnal yang salah.",
                data: "Pembelian perlengkapan kantor tunai Rp2.000.000. Perlengkapan bertambah = Debit; kas berkurang = Kredit.",
                hint: "Akun yang bertambah didebit, sedangkan akun yang berkurang dikredit.",
                question: "Apa jurnal yang benar?",
                options: [
                    { txt: "Debit Cash; Kredit Expense", isCorrect: false },
                    { txt: "Debit Expense; Kredit Supplies", isCorrect: false },
                    { txt: "Debit Supplies; Kredit Cash", isCorrect: true },
                    { txt: "Debit Cash; Kredit Supplies", isCorrect: false }
                ],
                score: 200, fbCorrect: "Error ditemukan! Perlengkapan bertambah (Debit), Kas berkurang (Kredit).", fbWrong: "Error belum ditemukan! Perhatikan posisi debit dan kredit."
            },
            {
                type: "JOURNAL", name: "Berkas Transaksi B",
                situation: "Perusahaan menerima uang tunai dari pelanggan sebesar Rp1.500.000 untuk melunasi piutang.",
                data: "Pelanggan membayar tunai Rp1.500.000 untuk melunasi piutang. Kas bertambah = Debit; piutang berkurang = Kredit.",
                hint: "Pelunasan piutang menambah kas dan mengurangi piutang.",
                question: "Bagaimana jurnal yang benar?",
                options: [
                    { txt: "Debit Accounts Receivable; Kredit Cash", isCorrect: false },
                    { txt: "Debit Cash; Kredit Sales", isCorrect: false },
                    { txt: "Debit Expense; Kredit Cash", isCorrect: false },
                    { txt: "Debit Cash; Kredit Accounts Receivable", isCorrect: true }
                ],
                score: 200, fbCorrect: "Error ditemukan! Kas bertambah (Debit), Piutang berkurang (Kredit).", fbWrong: "Error belum ditemukan! Periksa pelunasan piutang."
            },
            {
                type: "JOURNAL", name: "Berkas Transaksi C",
                situation: "Perusahaan membayar biaya listrik secara tunai sebesar Rp500.000.",
                data: "Pembayaran biaya listrik tunai Rp500.000. Beban listrik bertambah = Debit; kas berkurang = Kredit.",
                hint: "Pembayaran tunai menambah beban dan mengurangi kas.",
                question: "Bagaimana jurnal yang benar?",
                options: [
                    { txt: "Debit Supplies; Kredit Cash", isCorrect: false },
                    { txt: "Debit Electricity Expense; Kredit Cash", isCorrect: true },
                    { txt: "Debit Cash; Kredit Electricity Expense", isCorrect: false },
                    { txt: "Debit Supplies; Kredit Expense", isCorrect: false }
                ],
                score: 200, fbCorrect: "Error ditemukan! Beban listrik bertambah (Debit), Kas berkurang (Kredit).", fbWrong: "Error belum ditemukan! Pembayaran listrik menambah beban."
            },
            {
                type: "JOURNAL", name: "Berkas Transaksi D",
                situation: "Perusahaan membayar biaya sewa kantor secara tunai sebesar Rp1.000.000.",
                data: "Pembayaran biaya sewa kantor tunai Rp1.000.000. Beban sewa bertambah = Debit; kas berkurang = Kredit.",
                hint: "Saat membayar sewa tunai, beban bertambah dan kas berkurang.",
                question: "Bagaimana jurnal yang benar?",
                options: [
                    { txt: "Debit Rent Expense; Kredit Cash", isCorrect: true },
                    { txt: "Debit Cash; Kredit Rent Expense", isCorrect: false },
                    { txt: "Debit Supplies; Kredit Cash", isCorrect: false },
                    { txt: "Debit Rent Expense; Kredit Supplies", isCorrect: false }
                ],
                score: 200, fbCorrect: "Error ditemukan! Beban sewa bertambah (Debit), Kas berkurang (Kredit).", fbWrong: "Error belum ditemukan! Periksa posisi sewa kantor."
            }
        ]
    },
    {
        level: 4, title: "Lantai 4: Ruang Supervisor (Tantangan 4 — The Unauthorized Payment)",
        npcRole: "Supervisor",
        clues: [
            {
                type: "ENVELOPE", name: "Berkas Audit 1",
                situation: "Accounting menemukan pembayaran kepada Supplier B sebesar Rp6.000.000.",
                data: "Invoice Supplier B Rp6.000.000 ada; bukti transfer ada; PO tidak ada; bukti penerimaan barang tidak ada; persetujuan supervisor tidak ada; gudang tidak punya catatan penerimaan barang.",
                hint: "Invoice dan transfer saja belum cukup. Periksa PO, penerimaan barang, dan persetujuan.",
                question: "Apa yang membuat pembayaran tersebut belum dapat dianggap memenuhi prosedur perusahaan?",
                options: [
                    { txt: "Invoice terlalu besar", isCorrect: false },
                    { txt: "Pembayaran dilakukan melalui bank", isCorrect: false },
                    { txt: "Supplier B bukan pemasok perusahaan", isCorrect: false },
                    { txt: "Tidak terdapat PO, bukti penerimaan barang, dan persetujuan supervisor", isCorrect: true }
                ],
                score: 250, fbCorrect: "Investigation berhasil! Kelengkapan PO dan persetujuan mutlak diperlukan.", fbWrong: "Investigation belum selesai! Periksa dokumen pendukung."
            },
            {
                type: "ENVELOPE", name: "Berkas Audit 2",
                situation: "Accounting menemukan pembayaran kepada Supplier A sebesar Rp4.000.000.",
                data: "Invoice Supplier A Rp4.000.000 ada; bukti transfer ada; PO tidak ada; bukti penerimaan barang tidak ada; persetujuan supervisor ada.",
                hint: "Periksa dokumen pemesanan dan penerimaan barang yang tidak ditemukan.",
                question: "Apa yang menyebabkan pembayaran tersebut belum dapat dianggap memenuhi prosedur perusahaan?",
                options: [
                    { txt: "Tidak terdapat PO dan bukti penerimaan barang", isCorrect: true },
                    { txt: "Invoice terlalu kecil", isCorrect: false },
                    { txt: "Pembayaran melalui bank", isCorrect: false },
                    { txt: "Persetujuan supervisor sudah ada", isCorrect: false }
                ],
                score: 250, fbCorrect: "Investigation berhasil! Dokumen pemesanan barang tidak ditemukan.", fbWrong: "Investigation belum selesai! Periksa bukti transaksi."
            },
            {
                type: "ENVELOPE", name: "Berkas Audit 3",
                situation: "Perusahaan akan membayar pembelian perlengkapan sebesar Rp8.000.000.",
                data: "Pembelian perlengkapan Rp8.000.000; invoice ada; PO ada; bukti penerimaan barang ada; persetujuan supervisor tidak ada.",
                hint: "Dokumen lain lengkap, tetapi persetujuan supervisor belum ada.",
                question: "Apa tindakan yang paling tepat sebelum pembayaran dilakukan?",
                options: [
                    { txt: "Langsung melakukan pembayaran", isCorrect: false },
                    { txt: "Menghapus invoice", isCorrect: false },
                    { txt: "Mengubah nominal pembayaran", isCorrect: false },
                    { txt: "Meminta persetujuan supervisor terlebih dahulu", isCorrect: true }
                ],
                score: 250, fbCorrect: "Investigation berhasil! Harus meminta persetujuan supervisor.", fbWrong: "Investigation belum selesai! Ikuti prosedur persetujuan."
            },
            {
                type: "ENVELOPE", name: "Berkas Audit 4",
                situation: "Perusahaan akan membayar Supplier D sebesar Rp3.500.000.",
                data: "Supplier D Rp3.500.000; invoice, PO, dan bukti penerimaan barang ada; persetujuan supervisor tidak ada.",
                hint: "Jangan proses pembayaran sebelum otorisasi yang diperlukan diperoleh.",
                question: "Apa tindakan yang paling tepat sebelum pembayaran dilakukan?",
                options: [
                    { txt: "Langsung membayar supplier", isCorrect: false },
                    { txt: "Meminta persetujuan supervisor terlebih dahulu", isCorrect: true },
                    { txt: "Menghapus transaksi dari buku kas", isCorrect: false },
                    { txt: "Mengubah nominal pembayaran", isCorrect: false }
                ],
                score: 250, fbCorrect: "Investigation berhasil! Persetujuan supervisor wajib diperoleh.", fbWrong: "Investigation belum selesai! Periksa kembali alur otorisasi."
            }
        ]
    },
    {
        level: 5, title: "Lantai 5: Ruang Utama Keuangan (Tantangan 5 — The Final Cash Mystery)",
        npcRole: "Chief Financial Officer (CFO)",
        clues: [
            {
                type: "REGISTER", name: "Bukti Kas Akhir #1",
                situation: "Terjadi penjualan tunai Rp4.000.000 pada 3 Oktober, tetapi baru dicatat oleh accounting pada 6 Oktober.",
                data: "3 Oktober 09.00 penjualan terjadi; 09.05 pelanggan membayar Rp4.000.000; 09.10 nota dibuat; 16.00 uang diserahkan ke keuangan; 4 Oktober disetor ke bank; 6 Oktober baru dicatat accounting.",
                hint: "Gunakan tanggal transaksi benar-benar terjadi, bukan tanggal setoran atau input accounting.",
                question: "Tanggal berapakah yang seharusnya digunakan sebagai tanggal pencatatan transaksi penjualan tersebut?",
                options: [
                    { txt: "4 Oktober", isCorrect: false },
                    { txt: "5 Oktober", isCorrect: false },
                    { txt: "3 Oktober", isCorrect: true },
                    { txt: "6 Oktober", isCorrect: false }
                ],
                score: 300, fbCorrect: "Timeline berhasil dipecahkan! Tanggal pencatatan mengikuti hari transaksi (3 Oktober).", fbWrong: "Timeline belum terpecahkan! Perhatikan tanggal terjadinya transaksi."
            },
            {
                type: "REGISTER", name: "Bukti Kas Akhir #2",
                situation: "Terjadi pembayaran biaya operasional Rp2.000.000 pada 5 November, tetapi transaksi baru dicatat oleh accounting pada 8 November.",
                data: "5 November 10.00 biaya operasional Rp2.000.000 dibayar; 10.05 bukti dibuat; 10.30 diserahkan ke keuangan; 8 November baru dicatat accounting.",
                hint: "Tanggal pembayaran terjadi lebih awal daripada tanggal pencatatan. Gunakan tanggal pembayaran.",
                question: "Tanggal berapakah yang seharusnya digunakan untuk mencatat transaksi tersebut?",
                options: [
                    { txt: "6 November", isCorrect: false },
                    { txt: "7 November", isCorrect: false },
                    { txt: "8 November", isCorrect: false },
                    { txt: "5 November", isCorrect: true }
                ],
                score: 300, fbCorrect: "Timeline berhasil dipecahkan! Dicatat pada tanggal 5 November.", fbWrong: "Timeline belum terpecahkan! Tanggal pencatatan mengikuti hari transaksi."
            },
            {
                type: "REGISTER", name: "Bukti Kas Akhir #3",
                situation: "Penjualan tunai Rp3.500.000 terjadi pada 12 November. Uang disetorkan ke bank pada 13 November dan dicatat oleh accounting pada 14 November.",
                data: "12 November penjualan tunai Rp3.500.000 dan pelanggan membayar; 13 November uang disetor ke bank; 14 November baru dicatat accounting.",
                hint: "Penyetoran bank dan pencatatan terlambat tidak mengubah tanggal penjualan terjadi.",
                question: "Kapan transaksi penjualan tersebut seharusnya dicatat?",
                options: [
                    { txt: "13 November", isCorrect: false },
                    { txt: "14 November", isCorrect: false },
                    { txt: "12 November", isCorrect: true },
                    { txt: "Setelah uang masuk bank", isCorrect: false }
                ],
                score: 300, fbCorrect: "Timeline berhasil dipecahkan! Transaksi dicatat pada 12 November.", fbWrong: "Timeline belum terpecahkan! Jangan terkecoh tanggal setoran bank."
            },
            {
                type: "REGISTER", name: "Bukti Kas Akhir #4",
                situation: "Pada 15 Desember, perusahaan membayar biaya internet Rp400.000. Bukti dibuat 15 Des, tetapi accounting baru mencatat transaksi pada 18 Desember.",
                data: "15 Desember biaya internet Rp400.000 dibayar dan bukti dibuat; 16 Desember bukti diserahkan ke keuangan; 18 Desember baru dicatat accounting.",
                hint: "Gunakan tanggal saat pembayaran benar-benar dilakukan.",
                question: "Kapan transaksi pembayaran tersebut seharusnya dicatat?",
                options: [
                    { txt: "16 Desember", isCorrect: false },
                    { txt: "15 Desember", isCorrect: true },
                    { txt: "17 Desember", isCorrect: false },
                    { txt: "18 Desember", isCorrect: false }
                ],
                score: 300, fbCorrect: "Timeline berhasil dipecahkan! Transaksi dicatat tanggal 15 Desember.", fbWrong: "Timeline belum terpecahkan! Gunakan tanggal terjadinya pembayaran."
            }
        ]
    }
];

const POSSIBLE_SPOTS = [
    { x: 120, y: 220 }, { x: 300, y: 180 }, { x: 350, y: 380 },
    { x: 550, y: 240 }, { x: 650, y: 390 }, { x: 750, y: 280 }, { x: 880, y: 380 }
];

function shuffleArray(array) {
    let arr = JSON.parse(JSON.stringify(array));
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

let LEVEL_DATA = [];

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const ROOM_BACKGROUNDS = [1,2,3,4,5].map(n => {
    const img = new Image();
    img.src = `assets/room${n}.jpg`;
    return img;
});
const OFFICE_BACKGROUND = new Image();
OFFICE_BACKGROUND.src = "assets/office.jpg";


let gameState = "WELCOME";
let currentLevelIdx = 0;
let maxUnlockedLevel = 0;
let lives = 3;
let score = 0;
let answeredClues = [false, false, false, false];
let activeClueIdx = null;

let introZoom = 1.0;
let introTextIdx = 0;
const INTRO_TEXTS = [
    "Selamat datang di Kantor Pusat Keuangan.",
    "Laporan keuangan perusahaan mengalami ketidakseimbangan parah...",
    "Sebagai Detektif Akuntansi, tugasmu adalah memeriksa seluruh bukti transaksi!",
    "Mari masuk ke Ruang Kasir Lantai 1 dan mulai investigasi."
];

let peer = null;
let conn = null;
let isHost = false;
let isMultiplayer = false;
let roomPassword = "";

const localPlayer = {
    x: 100, y: 380, speed: 4.5, facing: "right", animFrame: 0, animTimer: 0, jumpHeight: 0, jumpVelocity: 0, onGround: true,
    name: "Detektif 1", color: "#1e1b4b"
};

const remotePlayer = {
    x: 140, y: 380, facing: "right", animFrame: 0,
    name: "Detektif 2", color: "#0284c7", active: false
};

const elevatorX = 900;
const elevatorY = 320;
const keys = {};

let audioCtx = null;
let isAudioPlaying = false;

function initAudioBGM() {
    if (isAudioPlaying) return;
    try {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        isAudioPlaying = true;
        playAmbientLoop();
    } catch(e){}
}

function playAmbientLoop() {
    if (!isAudioPlaying) return;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(220, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.03, audioCtx.currentTime);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 3);
    setTimeout(playAmbientLoop, 4000);
}

document.addEventListener('DOMContentLoaded', () => {
    const btnSolo = document.getElementById('btn-start-solo');
    if (btnSolo) {
        btnSolo.addEventListener('click', (e) => {
            e.preventDefault();
            initAudioBGM();
            isMultiplayer = false;
            startIntroCutscene();
        });
    }

    const btnCreate = document.getElementById('btn-create-room');
    if (btnCreate) btnCreate.addEventListener('click', createRoomWithPassword);

    const btnJoin = document.getElementById('btn-join-room');
    if (btnJoin) btnJoin.addEventListener('click', joinRoomWithPassword);

    const btnSkip = document.getElementById('btn-skip-intro');
    if (btnSkip) btnSkip.addEventListener('click', advanceIntro);

    const btnShare = document.getElementById('btn-share-life');
    if (btnShare) btnShare.addEventListener('click', shareLifeToPartner);

    const btnHint = document.getElementById('btn-show-hint');
    if (btnHint) btnHint.addEventListener('click', () => {
        const box = document.getElementById('quiz-hint');
        if (!box) return;
        const hidden = box.classList.toggle('hidden');
        btnHint.textContent = hidden ? '💡 Tampilkan petunjuk' : '🙈 Sembunyikan petunjuk';
    });

    const btnNext = document.getElementById('btn-next-quiz');
    if (btnNext) btnNext.addEventListener('click', closeFeedback);

    const btnRestart = document.getElementById('btn-restart');
    if (btnRestart) btnRestart.addEventListener('click', restartGame);
});

window.addEventListener('keydown', (e) => {
    if (['arrowleft','arrowright','arrowup','arrowdown',' '].includes(e.key.toLowerCase())) e.preventDefault();
    initAudioBGM();
    const k = e.key.toLowerCase();
    keys[k] = true;

    if (k === ' ' && gameState === "INTRO_OUTSIDE") {
        advanceIntro();
    } else if ((k === ' ' || k === 'j' || k === 'w' || k === 'arrowup') && gameState === 'PLAYING') {
        jumpPlayer();
    }
    if (k === 'e' && gameState === "PLAYING") {
        handleInteraction();
    }
});

window.addEventListener('keyup', (e) => { keys[e.key.toLowerCase()] = false; });

const setupMobileControl = (id, keyName) => {
    const btn = document.getElementById(id);
    if (!btn) return;
    const down = (e) => { e.preventDefault(); initAudioBGM(); keys[keyName] = true; };
    const up = (e) => { e.preventDefault(); keys[keyName] = false; };
    btn.addEventListener('pointerdown', down);
    btn.addEventListener('pointerup', up);
    btn.addEventListener('pointercancel', up);
    btn.addEventListener('pointerleave', up);
};

setupMobileControl('btn-left', 'a');
setupMobileControl('btn-right', 'd');
setupMobileControl('btn-up', 'w');
setupMobileControl('btn-down', 's');
const jumpButton = document.getElementById('btn-jump');
if (jumpButton) jumpButton.addEventListener('pointerdown', (e) => { e.preventDefault(); initAudioBGM(); jumpPlayer(); });

const btnAction = document.getElementById('btn-action');
if (btnAction) {
    btnAction.addEventListener('touchstart', (e) => {
        e.preventDefault();
        if (gameState === "PLAYING") handleInteraction();
    });
}

function generateRandomizedGameData() {
    LEVEL_DATA = MASTER_LEVEL_DATA.map(lvl => {
        let shuffledClues = shuffleArray(lvl.clues);
        let shuffledSpots = shuffleArray(POSSIBLE_SPOTS);

        shuffledClues = shuffledClues.map((clue, idx) => {
            let shuffledOpts = shuffleArray(clue.options);
            let formattedOpts = shuffledOpts.map((opt, oIdx) => {
                const prefix = String.fromCharCode(65 + oIdx) + ". ";
                return {
                    txt: prefix + opt.txt.replace(/^[A-D]\.\s*/, ''),
                    isCorrect: opt.isCorrect
                };
            });

            return {
                ...clue,
                x: shuffledSpots[idx].x,
                y: shuffledSpots[idx].y,
                options: formattedOpts
            };
        });

        return {
            ...lvl,
            clues: shuffledClues
        };
    });
}

function createRoomWithPassword() {
    const roomName = document.getElementById('room-name-input').value.trim().toLowerCase();
    const pass = document.getElementById('room-pass-input').value.trim();
    if (!roomName || !pass) return alert("Isi Nama Room dan Password!");

    roomPassword = pass;
    peer = new Peer("cashescape-" + roomName.replace(/\s+/g, ''));

    peer.on('open', () => {
        document.getElementById('lobby-options').classList.add('hidden');
        document.getElementById('room-info').classList.remove('hidden');
        document.getElementById('display-room-name').innerText = `Room: ${roomName.toUpperCase()}`;
        isHost = true;
    });

    peer.on('error', () => alert("Nama Room sudah dipakai atau eror koneksi."));

    peer.on('connection', (c) => {
        conn = c;
        conn.on('data', (data) => {
            if (data.type === 'auth') {
                if (data.password === roomPassword) {
                    conn.send({ type: 'auth_ok' });
                    setupConnection();
                    isMultiplayer = true;
                    remotePlayer.active = true;
                    startIntroCutscene();
                } else {
                    conn.send({ type: 'auth_fail' });
                }
            } else {
                handleNetworkMessage(data);
            }
        });
    });
}

function joinRoomWithPassword() {
    const roomName = document.getElementById('room-name-input').value.trim().toLowerCase();
    const pass = document.getElementById('room-pass-input').value.trim();
    if (!roomName || !pass) return alert("Isi Nama Room dan Password!");

    peer = new Peer();
    peer.on('open', () => {
        conn = peer.connect("cashescape-" + roomName.replace(/\s+/g, ''));
        conn.on('open', () => conn.send({ type: 'auth', password: pass }));
        conn.on('data', (data) => {
            if (data.type === 'auth_ok') {
                setupConnection();
                isHost = false;
                isMultiplayer = true;
                remotePlayer.active = true;
                localPlayer.name = "Detektif 2";
                remotePlayer.name = "Detektif 1";
                startIntroCutscene();
            } else if (data.type === 'auth_fail') alert("Password Salah!");
            else handleNetworkMessage(data);
        });
    });
}

function setupConnection() {
    document.getElementById('multiplayer-status').innerText = "🌐 MULTIPLAYER ONLINE";
    document.getElementById('btn-share-life').classList.remove('hidden');
}

function handleNetworkMessage(data) {
    if (data.type === 'pos') {
        remotePlayer.x = data.x; remotePlayer.y = data.y;
        remotePlayer.facing = data.facing; remotePlayer.animFrame = data.animFrame;
    } else if (data.type === 'quiz_sync') {
        score = data.score; lives = data.lives; answeredClues = data.answeredClues;
        updateHUD();
    } else if (data.type === 'level_change') {
        loadLevel(data.levelIdx);
    } else if (data.type === 'revive_life') {
        lives++;
        updateHUD();
        alert("Rekan detektifmu membagikan 1 Hati! ❤️");
    }
}

function sendNetworkData(data) { if (conn && conn.open) conn.send(data); }

function shareLifeToPartner() {
    if (!isMultiplayer) return;
    if (lives <= 1) return alert("Hatimu tinggal 1! Tidak bisa berbagi.");
    lives--;
    updateHUD();
    sendNetworkData({ type: 'revive_life' });
    alert("Kamu berhasil membagikan 1 Hati ke rekan timmu!");
}

function startIntroCutscene() {
    generateRandomizedGameData();
    document.getElementById('welcome-screen').classList.add('hidden');
    document.getElementById('intro-dialogue').classList.remove('hidden');
    gameState = "INTRO_OUTSIDE";
    introZoom = 1.0; introTextIdx = 0; introCharacterX = 90;
    document.getElementById('intro-text').innerText = INTRO_TEXTS[0];
    requestAnimationFrame(gameLoop);
}

function advanceIntro() {
    introTextIdx++;
    if (introTextIdx < INTRO_TEXTS.length) {
        document.getElementById('intro-text').innerText = INTRO_TEXTS[introTextIdx];
    } else {
        document.getElementById('intro-dialogue').classList.add('hidden');
        startGame();
    }
}

function startGame() {
    document.getElementById('hud').classList.remove('hidden');
    currentLevelIdx = 0; lives = 3; score = 0;
    loadLevel(0);
    gameState = "PLAYING";
}

function loadLevel(idx) {
    currentLevelIdx = idx;
    answeredClues = [false, false, false, false];
    localPlayer.x = 100; localPlayer.y = 380; localPlayer.jumpHeight = 0; localPlayer.jumpVelocity = 0; localPlayer.onGround = true;
    updateHUD();
}

function updateHUD() {
    document.getElementById('lives-display').innerText = "❤️ ".repeat(lives);
    document.getElementById('level-title').innerText = LEVEL_DATA[currentLevelIdx].title;
    document.getElementById('score-display').innerText = `Skor: ${score}`;
}

function gameLoop() {
    if (gameState === "INTRO_OUTSIDE") {
        if (introZoom < 1.45) introZoom += 0.0015;
        renderIntroOutside();
    } else if (gameState === "PLAYING") {
        updateMovement();
        render();
    } else {
        render();
    }

    if (gameState !== "VICTORY") {
        requestAnimationFrame(gameLoop);
    }
}

function jumpPlayer() {
    if (gameState !== 'PLAYING' || !localPlayer.onGround) return;
    localPlayer.jumpVelocity = -11;
    localPlayer.onGround = false;
}

function updateMovement() {
    let moveX = 0, moveY = 0;
    if (keys['a'] || keys['arrowleft']) { moveX -= localPlayer.speed; localPlayer.facing = "left"; }
    if (keys['d'] || keys['arrowright']) { moveX += localPlayer.speed; localPlayer.facing = "right"; }
    if (keys['w'] || keys['arrowup']) { moveY -= localPlayer.speed; }
    if (keys['s'] || keys['arrowdown']) { moveY += localPlayer.speed; }

    // Gerakan horizontal tetap bebas di semua level, termasuk Level 2.
    localPlayer.x += moveX; localPlayer.y += moveY;
    if (!localPlayer.onGround) {
        localPlayer.jumpHeight += localPlayer.jumpVelocity;
        localPlayer.jumpVelocity += 0.55;
        if (localPlayer.jumpHeight >= 0) { localPlayer.jumpHeight = 0; localPlayer.jumpVelocity = 0; localPlayer.onGround = true; }
    }

    if (localPlayer.x < 30) localPlayer.x = 30;
    if (localPlayer.x > canvas.width - 40) localPlayer.x = canvas.width - 40;
    if (localPlayer.y < 160) localPlayer.y = 160;
    if (localPlayer.y > canvas.height - 40) localPlayer.y = canvas.height - 40;

    if (moveX !== 0 || moveY !== 0) {
        localPlayer.animTimer++;
        if (localPlayer.animTimer % 7 === 0) localPlayer.animFrame = (localPlayer.animFrame + 1) % 4;
    } else localPlayer.animFrame = 0;

    if (isMultiplayer) {
        sendNetworkData({
            type: 'pos', x: localPlayer.x, y: localPlayer.y,
            facing: localPlayer.facing, animFrame: localPlayer.animFrame
        });
    }
}

let introCharacterX = 90;
let introLastTick = 0;
function renderIntroOutside() {
    ctx.save();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.translate(canvas.width/2, canvas.height/2);
    ctx.scale(introZoom, introZoom);
    ctx.translate(-canvas.width/2, -canvas.height/2);
    if (OFFICE_BACKGROUND.complete && OFFICE_BACKGROUND.naturalWidth) {
        ctx.drawImage(OFFICE_BACKGROUND, 0, 0, canvas.width, canvas.height);
        ctx.fillStyle="rgba(7,15,30,.28)"; ctx.fillRect(0,0,canvas.width,canvas.height);
    } else {
        const sky=ctx.createLinearGradient(0,0,0,canvas.height);
        sky.addColorStop(0,"#07152e");sky.addColorStop(1,"#233b5e");
        ctx.fillStyle=sky;ctx.fillRect(0,0,canvas.width,canvas.height);
        ctx.fillStyle="#14243a";ctx.fillRect(270,65,420,400);
        ctx.fillStyle="#38bdf8";for(let r=0;r<6;r++)for(let c=0;c<5;c++)ctx.fillRect(300+c*72,95+r*48,35,28);
        ctx.fillStyle="#0b1220";ctx.fillRect(405,330,120,130);
        ctx.fillStyle="#e2e8f0";ctx.font="bold 26px sans-serif";ctx.textAlign="center";ctx.fillText("FINANCE HQ",465,300);
    }
    ctx.fillStyle="rgba(10,20,35,.55)";ctx.beginPath();ctx.moveTo(360,420);ctx.lineTo(570,420);ctx.lineTo(760,540);ctx.lineTo(180,540);ctx.closePath();ctx.fill();
    introCharacterX += introCharacterX < 420 ? 0.8 : 0;
    const walk=Math.floor(Date.now()/130)%2;
    ctx.save();ctx.translate(introCharacterX,485);
    ctx.fillStyle="rgba(0,0,0,.3)";ctx.beginPath();ctx.ellipse(0,5,20,6,0,0,Math.PI*2);ctx.fill();
    ctx.fillStyle="#80512f";ctx.beginPath();ctx.moveTo(-12,-37);ctx.lineTo(12,-37);ctx.lineTo(16,-8);ctx.lineTo(-16,-8);ctx.closePath();ctx.fill();
    ctx.fillStyle="#b98552";ctx.fillRect(-12,-32,24,5);ctx.fillRect(-8,-25,16,4);
    ctx.fillStyle="#f1c7a4";ctx.beginPath();ctx.arc(0,-47,10,0,Math.PI*2);ctx.fill();
    ctx.fillStyle="#4b2d20";ctx.beginPath();ctx.arc(0,-51,11,Math.PI,Math.PI*2);ctx.fill();ctx.fillRect(-10,-52,4,13);
    ctx.fillStyle="#7b4c2b";ctx.beginPath();ctx.ellipse(0,-56,15,5,0,0,Math.PI*2);ctx.fill();ctx.fillRect(-9,-65,18,10);
    ctx.strokeStyle="#f1c7a4";ctx.lineWidth=5;ctx.beginPath();ctx.moveTo(-10,-31);ctx.lineTo(-16,-20);ctx.moveTo(10,-31);ctx.lineTo(15,-21);ctx.stroke();
    ctx.strokeStyle="#30251e";ctx.lineWidth=6;ctx.beginPath();ctx.moveTo(-6,-8);ctx.lineTo(walk?-12:-5,2);ctx.moveTo(6,-8);ctx.lineTo(walk?5:12,2);ctx.stroke();
    ctx.strokeStyle="#e5e7eb";ctx.lineWidth=2;ctx.beginPath();ctx.arc(18,-27,7,0,Math.PI*2);ctx.stroke();ctx.beginPath();ctx.moveTo(23,-22);ctx.lineTo(28,-16);ctx.stroke();
    ctx.restore();ctx.restore();
    ctx.textAlign="center";ctx.shadowColor="#38bdf8";ctx.shadowBlur=18;
    ctx.fillStyle="#e0f7ff";ctx.font="bold 27px sans-serif";ctx.fillText("CASH ESCAPE",480,42);
    ctx.shadowBlur=0;ctx.restore();
}
function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawRoomByLevel(currentLevelIdx);

    LEVEL_DATA[currentLevelIdx].clues.forEach((clue, idx) => {
        drawClueObject(clue, answeredClues[idx]);
    });

    const isLevelFinished = answeredClues.every(Boolean);
    drawElevator(isLevelFinished);
    drawNPCCharacter(LEVEL_DATA[currentLevelIdx].npcRole);

    if (remotePlayer.active) drawFemaleDetective(remotePlayer);
    drawFemaleDetective(localPlayer);

    if (gameState === "PLAYING") {
        let nearClue = getNearbyClue(localPlayer);
        if (nearClue !== null && !answeredClues[nearClue]) {
            drawPrompt(localPlayer.x, localPlayer.y - 75, "Tekan [E] Periksa");
        }
        if (Math.abs(localPlayer.x - elevatorX) < 60 && Math.abs(localPlayer.y - elevatorY) < 80 && isLevelFinished) {
            drawPrompt(localPlayer.x, localPlayer.y - 75, "[E] Masuk Lift");
        }
    }
}

function drawRoomByLevel(lvl) {
    const photo = ROOM_BACKGROUNDS[lvl];
    if (photo && photo.complete && photo.naturalWidth) {
        ctx.drawImage(photo, 0, 0, canvas.width, canvas.height);
        const shade = ctx.createLinearGradient(0, 0, 0, canvas.height);
        shade.addColorStop(0, "rgba(8,18,32,.10)");
        shade.addColorStop(.72, "rgba(8,18,32,.02)");
        shade.addColorStop(1, "rgba(8,18,32,.48)");
        ctx.fillStyle = shade; ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "rgba(14,25,42,.78)"; ctx.fillRect(12, 12, 260, 28);
        ctx.fillStyle = "#f8fafc"; ctx.font = "bold 13px sans-serif";
        ctx.fillText(["LEVEL 1 • RUANG KASIR","LEVEL 2 • RUANG ARSIP","LEVEL 3 • ACCOUNTING","LEVEL 4 • SUPERVISOR","LEVEL 5 • CFO"][lvl] || "OFFICE", 22, 31);
        return;
    }
    const palettes = [
        {wall:"#14243a", floor:"#34445a", trim:"#4cc9f0", accent:"#f4a261"},
        {wall:"#dce7ee", floor:"#9aa9b8", trim:"#526b83", accent:"#8b5e34"},
        {wall:"#182b40", floor:"#566b7d", trim:"#7dd3fc", accent:"#d4a373"},
        {wall:"#3b2525", floor:"#6b5146", trim:"#e7c9a5", accent:"#38bdf8"},
        {wall:"#101a2b", floor:"#27384c", trim:"#fbbf24", accent:"#34d399"}
    ];
    const p=palettes[lvl]||palettes[0];
    const wall=ctx.createLinearGradient(0,0,0,390); wall.addColorStop(0,p.wall); wall.addColorStop(1,p.trim);
    ctx.fillStyle=wall; ctx.fillRect(0,0,canvas.width,canvas.height);
    // Panel dinding, garis perspektif dan lantai 3D
    ctx.fillStyle="rgba(4,10,22,.35)"; ctx.fillRect(0,0,canvas.width,135);
    ctx.strokeStyle=p.trim; ctx.globalAlpha=.35; ctx.lineWidth=2;
    for(let x=0;x<=canvas.width;x+=120){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,390);ctx.stroke();}
    ctx.globalAlpha=1;
    ctx.fillStyle=p.floor; ctx.beginPath();ctx.moveTo(0,350);ctx.lineTo(canvas.width,350);ctx.lineTo(canvas.width,540);ctx.lineTo(0,540);ctx.closePath();ctx.fill();
    ctx.strokeStyle="rgba(255,255,255,.14)";ctx.lineWidth=1;
    for(let i=0;i<7;i++){let y=365+i*i*4;ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(canvas.width,y);ctx.stroke();}
    for(let x=-500;x<1400;x+=150){ctx.beginPath();ctx.moveTo(480,350);ctx.lineTo(x,540);ctx.stroke();}
    // Jendela belakang dengan cahaya / pemandangan
    ctx.fillStyle="#0b1728";ctx.fillRect(55,42,190,112);
    const win=ctx.createLinearGradient(55,42,245,154);win.addColorStop(0,"#102b4b");win.addColorStop(1,"#3d7188");
    ctx.fillStyle=win;ctx.fillRect(62,49,176,98);
    for(let i=0;i<10;i++){ctx.fillStyle=i%3===0?"#fbbf24":"#7dd3fc";ctx.globalAlpha=.5;ctx.fillRect(70+i*16,65+(i%4)*15,7,7);}ctx.globalAlpha=1;
    ctx.fillStyle=p.trim;ctx.fillRect(55,154,190,5);
    // Furniture changes by floor, drawn with top faces and shadows for a faux-3D look
    function desk(x,y,w,h,color=p.accent){
        ctx.fillStyle="rgba(0,0,0,.28)";ctx.beginPath();ctx.ellipse(x+w/2,y+h+20,w*.62,16,0,0,Math.PI*2);ctx.fill();
        ctx.fillStyle="#202c3a";ctx.fillRect(x+12,y+h-2,12,55);ctx.fillRect(x+w-24,y+h-2,12,55);
        ctx.fillStyle=color;ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x+18,y-14);ctx.lineTo(x+w+18,y-14);ctx.lineTo(x+w,y);ctx.closePath();ctx.fill();
        ctx.fillStyle=color;ctx.fillRect(x,y,w,h);
        ctx.fillStyle="rgba(255,255,255,.2)";ctx.fillRect(x,y,w,5);
    }
    function cabinet(x,y,w,h){
        ctx.fillStyle="#111827";ctx.fillRect(x+7,y+7,w,h);
        ctx.fillStyle=p.accent;ctx.fillRect(x,y,w,h);
        ctx.fillStyle="rgba(255,255,255,.16)";ctx.fillRect(x+5,y+5,w-10,5);
        for(let yy=y+20;yy<y+h-8;yy+=34){ctx.strokeStyle="rgba(20,20,20,.45)";ctx.strokeRect(x+7,yy,w-14,25);ctx.fillStyle="#e5e7eb";ctx.fillRect(x+w/2-3,yy+9,6,3);}
    }
    if(lvl===0){ // kasir: loket, mesin kasir, antrean
        desk(280,245,300,75,"#8b5e34"); desk(650,270,120,50,"#475569");
        ctx.fillStyle="#111827";ctx.fillRect(390,195,95,48);ctx.fillStyle="#22d3ee";ctx.fillRect(398,202,79,30);
        ctx.fillStyle="#fbbf24";ctx.fillRect(330,215,45,25);ctx.fillStyle="#fff";ctx.font="bold 12px sans-serif";ctx.fillText("CASHIER",340,232);
        cabinet(65,190,90,130);
    } else if(lvl===1){ // arsip: lemari tinggi dan tumpukan dokumen
        cabinet(275,155,95,190);cabinet(395,145,95,200);cabinet(515,160,95,185);desk(655,265,150,60,"#64748b");
        for(let i=0;i<5;i++){ctx.fillStyle=["#fca5a5","#fde68a","#93c5fd","#a7f3d0","#ddd6fe"][i];ctx.fillRect(680+i*18,235-i*3,16,27);}
    } else if(lvl===2){ // accounting: meja kerja dan monitor
        desk(275,250,330,65,"#64748b");desk(650,270,135,48,"#8b5e34");
        ctx.fillStyle="#111827";ctx.fillRect(365,175,110,72);ctx.fillStyle="#38bdf8";ctx.fillRect(373,183,94,54);
        ctx.fillStyle="#334155";ctx.fillRect(410,247,20,13);ctx.fillRect(390,260,60,6);
        ctx.fillStyle="#f8fafc";ctx.fillRect(500,225,55,38);ctx.strokeStyle="#94a3b8";ctx.strokeRect(500,225,55,38);
    } else if(lvl===3){ // supervisor: meja rapat dan papan approval
        desk(270,255,350,70,"#8b5e34");desk(670,265,130,50,"#475569");
        ctx.fillStyle="#0f172a";ctx.fillRect(470,45,280,100);ctx.strokeStyle=p.trim;ctx.strokeRect(470,45,280,100);
        ctx.fillStyle="#fca5a5";ctx.fillRect(495,68,65,48);ctx.fillStyle="#fde68a";ctx.fillRect(580,68,65,48);ctx.fillStyle="#a7f3d0";ctx.fillRect(665,68,65,48);
    } else { // CFO: ruang eksekutif, meja besar, lampu dan jendela
        desk(250,245,390,75,"#26394f");desk(680,265,120,50,"#8b5e34");
        ctx.fillStyle="#0b1220";ctx.fillRect(485,55,220,90);ctx.strokeStyle="#fbbf24";ctx.strokeRect(485,55,220,90);
        ctx.fillStyle="#fbbf24";ctx.font="bold 16px sans-serif";ctx.fillText("CFO",570,105);
        ctx.fillStyle="#fbbf24";ctx.beginPath();ctx.arc(760,180,17,0,Math.PI*2);ctx.fill();ctx.fillStyle="rgba(251,191,36,.15)";ctx.beginPath();ctx.arc(760,180,48,0,Math.PI*2);ctx.fill();
    }
    // Pintu ke ruang lain pada tiap lantai; visual memberi kesan kompleks kantor
    ctx.fillStyle="#111827";ctx.fillRect(820,165,72,190);ctx.fillStyle=p.trim;ctx.fillRect(827,172,58,176);
    ctx.fillStyle="#172033";ctx.fillRect(833,178,46,164);ctx.fillStyle="#fbbf24";ctx.beginPath();ctx.arc(869,265,4,0,Math.PI*2);ctx.fill();
    ctx.fillStyle="#e2e8f0";ctx.font="bold 11px sans-serif";ctx.fillText(["RUANG KASIR","ARSIP","ACCOUNTING","SUPERVISOR","CFO"][lvl]||"OFFICE",25,28);
}
function drawFemaleDetective(p) {
    ctx.save();ctx.translate(p.x,p.y + (p.jumpHeight || 0));
    if(p.facing==="left")ctx.scale(-1,1);
    const moving=p.animFrame>0, bounce=moving?Math.sin(Date.now()/75)*2:Math.sin(Date.now()/500);
    ctx.fillStyle="rgba(0,0,0,.28)";ctx.beginPath();ctx.ellipse(0,3,17,5,0,0,Math.PI*2);ctx.fill();
    ctx.fillStyle="#7c4a2a";ctx.beginPath();ctx.moveTo(-11,-39+bounce);ctx.lineTo(11,-39+bounce);ctx.lineTo(14,-8+bounce);ctx.lineTo(-14,-8+bounce);ctx.closePath();ctx.fill();
    ctx.fillStyle="#c18b5a";ctx.fillRect(-10,-34+bounce,20,4);ctx.fillRect(-7,-25+bounce,14,3);
    ctx.strokeStyle="#4b2d20";ctx.lineWidth=6;ctx.lineCap="round";ctx.beginPath();ctx.moveTo(-5,-8+bounce);ctx.lineTo(moving?-10:-5,3+bounce);ctx.moveTo(5,-8+bounce);ctx.lineTo(moving?10:5,3+bounce);ctx.stroke();
    ctx.fillStyle="#30251e";ctx.fillRect(moving?-15:-10,1+bounce,10,5);ctx.fillRect(moving?5:0,1+bounce,10,5);
    ctx.strokeStyle="#8b5a37";ctx.lineWidth=5;ctx.beginPath();ctx.moveTo(-10,-32+bounce);ctx.lineTo(-15,-19+bounce);ctx.moveTo(10,-32+bounce);ctx.lineTo(15,-20+bounce);ctx.stroke();
    ctx.fillStyle="#f1c7a4";ctx.beginPath();ctx.arc(0,-48+bounce,9,0,Math.PI*2);ctx.fill();
    ctx.fillStyle="#4a2b1d";ctx.beginPath();ctx.arc(0,-52+bounce,10,Math.PI,Math.PI*2);ctx.fill();ctx.fillRect(-9,-52+bounce,4,13);
    ctx.fillStyle="#80512f";ctx.beginPath();ctx.ellipse(0,-57+bounce,15,5,0,0,Math.PI*2);ctx.fill();ctx.fillRect(-9,-66+bounce,18,10);
    ctx.fillStyle="#d6a46e";ctx.fillRect(-8,-59+bounce,16,2);
    ctx.strokeStyle="#dbeafe";ctx.lineWidth=2;ctx.beginPath();ctx.arc(19,-25+bounce,6,0,Math.PI*2);ctx.stroke();ctx.beginPath();ctx.moveTo(23,-21+bounce);ctx.lineTo(28,-16+bounce);ctx.stroke();
    ctx.fillStyle="#3f2a20";ctx.fillRect(11,-19+bounce,8,12);
    ctx.save();ctx.scale(p.facing==="left"?-1:1,1);ctx.fillStyle="#0ea5e9";ctx.font="bold 10px sans-serif";ctx.textAlign="center";ctx.fillText(p.name,0,-75+bounce);ctx.restore();ctx.restore();
}
function drawNPCCharacter(role) {
    ctx.save();
    ctx.translate(440, 260);
    ctx.fillStyle = "#475569"; ctx.fillRect(-10, -28, 20, 28);
    ctx.fillStyle = "#fed7aa"; ctx.beginPath(); ctx.arc(0, -38, 9, 0, Math.PI*2); ctx.fill();
    ctx.fillStyle = "#ffb703"; ctx.font = "bold 10px sans-serif";
    ctx.fillText(role, -25, -55);
    ctx.restore();
}

function drawClueObject(clue, isDone) {
    ctx.save();
    ctx.translate(clue.x, clue.y);
    if (isDone) {
        ctx.fillStyle = "#22c55e"; ctx.beginPath(); ctx.arc(0, 0, 12, 0, Math.PI*2); ctx.fill();
        ctx.fillStyle = "#fff"; ctx.font = "bold 12px sans-serif"; ctx.fillText("✓", -4, 4);
    } else {
        ctx.shadowColor = "#ffb703"; ctx.shadowBlur = 12;
        ctx.fillStyle = "#d97706"; ctx.fillRect(-12, -10, 24, 20);
    }
    ctx.restore();
}

function drawElevator(isOpen) {
    ctx.save();
    ctx.translate(elevatorX, elevatorY);
    ctx.fillStyle = "#1e293b"; ctx.fillRect(-10, -10, 60, 120);
    if (isOpen) {
        ctx.shadowColor = "#34d399"; ctx.shadowBlur = 15;
        ctx.fillStyle = "#34d399"; ctx.fillRect(0, 0, 40, 110);
    } else {
        ctx.fillStyle = "#64748b"; ctx.fillRect(0, 0, 18, 110); ctx.fillRect(22, 0, 18, 110);
    }
    ctx.fillStyle = "#38bdf8"; ctx.font = "bold 10px sans-serif"; ctx.fillText("LIFT", 8, -15);
    ctx.restore();
}

function drawPrompt(x, y, text) {
    ctx.fillStyle = "#0284c7"; ctx.fillRect(x - 45, y - 12, 90, 20);
    ctx.fillStyle = "#fff"; ctx.font = "bold 10px sans-serif"; ctx.fillText(text, x - 38, y + 2);
}

function getNearbyClue(p) {
    const level = LEVEL_DATA[currentLevelIdx];
    for (let i = 0; i < level.clues.length; i++) {
        const clue = level.clues[i];
        if (Math.abs(p.x - clue.x) < 45 && Math.abs(p.y - clue.y) < 45) return i;
    }
    return null;
}

function handleInteraction() {
    let clueIdx = getNearbyClue(localPlayer);
    if (clueIdx !== null && !answeredClues[clueIdx]) {
        activeClueIdx = clueIdx;
        showQuizModal(clueIdx);
        return;
    }
    if (Math.abs(localPlayer.x - elevatorX) < 60 && Math.abs(localPlayer.y - elevatorY) < 80 && answeredClues.every(Boolean)) {
        openLiftPanel();
    }
}

function showQuizModal(clueIdx) {
    gameState = "QUIZ";
    const clue = LEVEL_DATA[currentLevelIdx].clues[clueIdx];

    document.getElementById('clue-item-name').innerText = clue.name;
    document.getElementById('quiz-question-num').innerText = `Pertanyaan ${clueIdx + 1}/4`;
    document.getElementById('quiz-scenario').innerText = clue.situation + "\n\nPETUNJUK / DATA:\n" + (clue.data || "Gunakan informasi yang tertulis pada situasi soal.");
    document.getElementById('quiz-question').innerText = clue.question;
    const hintBox = document.getElementById('quiz-hint');
    const hintButton = document.getElementById('btn-show-hint');
    if (hintBox && hintButton) {
        hintBox.textContent = clue.hint || "Baca kembali data yang tersedia dan cocokkan dengan pertanyaan.";
        hintBox.classList.add('hidden');
        hintButton.textContent = '💡 Tampilkan petunjuk';
    }

    const optsContainer = document.getElementById('quiz-options');
    optsContainer.innerHTML = "";

    clue.options.forEach((optObj) => {
        const btn = document.createElement('button');
        btn.className = "option-btn";
        btn.innerText = optObj.txt;
        btn.onclick = () => submitAnswer(optObj.isCorrect);
        optsContainer.appendChild(btn);
    });

    document.getElementById('quiz-modal').classList.remove('hidden');
}

function submitAnswer(isCorrect) {
    document.getElementById('quiz-modal').classList.add('hidden');
    const clue = LEVEL_DATA[currentLevelIdx].clues[activeClueIdx];

    if (isCorrect) {
        score += clue.score;
        answeredClues[activeClueIdx] = true;
        showFeedback(true, clue.fbCorrect);
    } else {
        lives--;
        showFeedback(false, clue.fbWrong);
    }
    updateHUD();

    if (isMultiplayer) {
        sendNetworkData({
            type: 'quiz_sync', score: score, lives: lives, answeredClues: answeredClues
        });
    }
}

function showFeedback(isCorrect, message) {
    gameState = "FEEDBACK";
    document.getElementById('feedback-icon').innerText = isCorrect ? "🎉" : "❌";
    document.getElementById('feedback-status').innerText = isCorrect ? "Jawaban Benar!" : "Jawaban Salah!";
    document.getElementById('feedback-status').style.color = isCorrect ? "#22c55e" : "#ef4444";
    document.getElementById('feedback-text').innerText = message;
    document.getElementById('feedback-modal').classList.remove('hidden');
}

function closeFeedback() {
    document.getElementById('feedback-modal').classList.add('hidden');

    if (lives <= 0) {
        document.getElementById('lift-modal').classList.add('hidden');
        document.getElementById('hud').classList.add('hidden');
        document.getElementById('victory-screen').classList.remove('hidden');
        document.querySelector('.pixel-main-title').innerText = "GAME OVER";
        document.querySelector('.pixel-sub-banner').innerText = "INVESTIGASI TERHENTI";
        document.querySelector('.victory-header-tag').innerText = "HASIL INVESTIGASI";
        document.querySelector('.victory-dialogue-box p').innerText = "Nyawa detektif habis. Coba lagi dan teliti setiap bukti transaksi.";
        document.getElementById('final-lives').innerText = lives;
        document.getElementById('final-score').innerText = score;
        gameState = "VICTORY";
        return;
    }

    if (answeredClues.every(Boolean)) {
        if (currentLevelIdx + 1 > maxUnlockedLevel) {
            maxUnlockedLevel = currentLevelIdx + 1;
        }
    }

    gameState = "PLAYING";
}

function openLiftPanel() {
    gameState = "LIFT";
    document.getElementById('current-floor-indicator').innerText = currentLevelIdx + 1;

    const btnContainer = document.getElementById('lift-buttons-container');
    btnContainer.innerHTML = "";

    // Pilihan Tab Lift Khusus Kemenangan
    for (let i = 0; i < LEVEL_DATA.length; i++) {
        const tabBtn = document.createElement('button');
        const isUnlocked = i <= maxUnlockedLevel;

        tabBtn.className = `lift-tab-btn ${isUnlocked ? 'unlocked' : ''}`;
        tabBtn.innerHTML = `
            <span>TAB LANTAI ${i + 1}: ${LEVEL_DATA[i].title.split(':')[1]}</span>
            <span>${isUnlocked ? '🔓 TERBUKA' : '🔒 TERKUNCI'}</span>
        `;

        if (isUnlocked) {
            tabBtn.onclick = () => selectLiftFloor(i);
        }

        btnContainer.appendChild(tabBtn);
    }

    // Opsi tombol khusus untuk tamat jika di Lantai 5 dan semua soal selesai
    if (currentLevelIdx === 4 && answeredClues.every(Boolean)) {
        const finishBtn = document.createElement('button');
        finishBtn.className = "lift-tab-btn unlocked";
        finishBtn.style.background = "linear-gradient(135deg, #10b981, #059669)";
        finishBtn.style.borderColor = "#34d399";
        finishBtn.style.marginTop = "10px";
        finishBtn.innerHTML = `<span>🏆 SELESAIKAN INVESTIGASI & KELUAR</span> <span>➔</span>`;
        finishBtn.onclick = () => showVictoryScreen();
        btnContainer.appendChild(finishBtn);
    }

    document.getElementById('lift-modal').classList.remove('hidden');
}

function selectLiftFloor(targetFloorIdx) {
    document.getElementById('lift-modal').classList.add('hidden');
    loadLevel(targetFloorIdx);
    gameState = "PLAYING";
    if (isMultiplayer) {
        sendNetworkData({ type: 'level_change', levelIdx: targetFloorIdx });
    }
}

function showVictoryScreen() {
    document.getElementById('lift-modal').classList.add('hidden');
    document.querySelector('.pixel-main-title').innerText = "MISI SELESAI!";
    document.querySelector('.pixel-sub-banner').innerText = "SKANDAL KEUANGAN TERBONGKAR!";
    document.querySelector('.victory-header-tag').innerText = "PETUALANGAN SELESAI";
    document.querySelector('.victory-dialogue-box p').innerText = "Kamu berhasil membawa transparansi dan kejujuran kembali ke perusahaan!";
    gameState = "VICTORY";
    document.getElementById('hud').classList.add('hidden');
    document.getElementById('final-lives').innerText = lives;
    document.getElementById('final-score').innerText = score;
    document.getElementById('victory-screen').classList.remove('hidden');
}

function restartGame() {
    lives = 3; score = 0; currentLevelIdx = 0; maxUnlockedLevel = 0;
    answeredClues = [false, false, false, false];
    if (peer) { try { peer.destroy(); } catch(e) {} }
    peer = null; conn = null; isMultiplayer = false; isHost = false;
    document.getElementById('victory-screen').classList.add('hidden');
    document.getElementById('welcome-screen').classList.remove('hidden');
    document.getElementById('hud').classList.add('hidden');
    gameState = "WELCOME";
}