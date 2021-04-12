import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

function Dika() {
  return (
    <motion.main
      initial={{ opacity: 0, translateY: 100 }}
      animate={{ opacity: 1, translateY: 0, transition: { duration: 1.2 } }}
    >
      <h1 id="hai">Hai!</h1>
      <p>
        Saya{" "}
        <u>
          {" "}
          <a href="#dika">Dika</a>
        </u>
        , {/* <br /> */}
        pengrajin pengalaman interaktif untuk web.
      </p>
      <p>
        Ini situs web pribadi saya. Sungguh{" "}
        <u>
          <Link href="/lab">
            <a>bukan situs portofolio</a>
          </Link>
        </u>
        , melainkan sekedar pojokan sempitku di internet untuk{" "}
        <u>
          <Link href="/">
            <a>bereksperimen</a>
          </Link>
        </u>{" "}
        (<em>main-main?</em>) dengan teknologi antarmuka web dan juga pengalaman
        interaktif di <em>browser</em>.
      </p>
      <p>Selamat datang!</p>

      {/* TODO: styling */}
      <br />
      {/* <- sengaja pakai `br` sementara wkwk, sebelum bikin styling. */}

      {/* <h2 id="situs">Tentang situs ini</h2> */}
      <p id="intro-situs">
        Omong-omong, karena sudah di sini kurasa kamu mau coba eksperimen
        terbaru saya di halaman{" "}
        <u>
          <Link href="/">
            <a>&larr;Depan</a>
          </Link>
        </u>
        . Sedangkan koleksi eksperimen-eksperimen yang terdahulu masih bisa
        diakses {/*, yang kukumpulkan di halaman{" "} */}
        lewat halaman{" "}
        <u>
          <Link href="/lab">
            <a>Eksperimen&rarr;</a>
          </Link>
        </u>{" "}
        di sebelah &mdash;barangkali penasaran.
      </p>
      <p>
        Setiap halaman dan interaksi-interaksi mikronya dibuat dengan penuh
        ketelitian dan kasih sayang :p demi menciptakan sedikit kesenangan[*]
        selama main-main di tempat ini ...kuharap :D
      </p>
      <p>
        Kalau kamu suka karya buatan saya, boleh lah sapa-sapa lewat{" "}
        <u>
          <a href="#sosial">kontak di bawah</a>
        </u>
        . Dengan senang hati, nanti saya balas sapanya.
      </p>
      <p>Semoga suka :))</p>

      <p>
        [*] Saya sadar desain visualnya jelek, mohon maaf. Semoga tidak
        mengurangi kesenangannya, ya.
      </p>

      <br />

      <p>***</p>

      <br />

      <h2 id="dika">Lebih banyak tentang Dika</h2>
      <p>Konten yang awesome, ye kan?</p>

      <h2 id="sakitkepala">Tentang `sakitkepala`</h2>
      <p>Konten yang awesome, ye kan?</p>

      <h2 id="sosial">Kirim sapa</h2>
      <p>
        Saya tetap bisa dikontak di internet lewat beberapa layanan berikut
        (meski bukan termasuk aktif sebagai warganet media sosial):
      </p>
      <ul>
        <li>Email</li>
        <li>LinkedIn</li>
        <li>GitHub</li>
        <li>Gitlab</li>
      </ul>
      <p>Bagaimanapun, terima kasih sudah menyempatkan waktu.</p>

      <br />

      <p>:coffee:</p>
    </motion.main>
  );
}

export default Dika;
