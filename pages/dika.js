import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { SiBitbucket, SiGithub, SiGitlab, SiLinkedin } from "react-icons/si";
import { IoMail } from "react-icons/io5";
import { NavLink } from "../components/nav-link";

import styles from "../styles/Dika.module.scss";

const listIcon = [
  { href: "mailto:andikapriyotamad@gmail.com", ikon: <IoMail size="64" /> },
  {
    href: "https://linkedin.com/in/andikapriyotama",
    ikon: <SiLinkedin size="64" />,
  },
  { href: "https://github.com/sakitkepala", ikon: <SiGithub size="64" /> },
  { href: "https://gitlab.com/andikapriyotama", ikon: <SiGitlab size="64" /> },
  {
    href: "https://bitbucket.org/andikapriyotama",
    ikon: <SiBitbucket size="64" />,
  },
];

const propsMotionTransisi = {
  initial: { opacity: 0, translateY: 2 },
  animate: { opacity: 1, translateY: 0, transition: { duration: 0.2 } },
};

export default function HalamanDika() {
  return (
    <>
      <Head>
        <title>"Hai!" dari pembuat sakitkepala.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.wadahHalaman}>
        <div className={styles.logo}>
          <NavLink href="/">
            andika
            <br />
            priyotama
            {/* <br />
            sakitkepala.dev&#47; */}
          </NavLink>
        </div>

        <nav className={styles.menuNav}>
          <Link href="/">
            <a className={styles.linkMenu}>Depan</a>
          </Link>
          <Link href="/lab">
            <a className={styles.linkMenu}>Lab</a>
          </Link>
          <Link href="/dika">
            <a className={styles.linkMenu}>Dika</a>
          </Link>
        </nav>

        <motion.main className={styles.main} {...propsMotionTransisi}>
          {/* konten */}
          <div className={styles.bagianHai}>
            <div className={styles.dalaman}>
              <h1 id="hai" className={styles.haiHeading}>
                Hai! <span className="emoji-lambai">👋</span> Saya{" "}
                <u>
                  <a href="#dika">Dika&#8601;</a>
                </u>
                , pengrajin pengalaman interaktif untuk web.
                <span className={styles.anotasi}>
                  &mdash;dan <a href="#dika">software developer&#8601;</a>
                </span>
              </h1>

              <div className={styles.haiTulisan}>
                <p>
                  Ini situs web pribadi saya. Sungguh{" "}
                  <u>
                    <NavLink href="/lab">bukan situs portofolio</NavLink>
                  </u>
                  , melainkan sekedar pojokan sempitku di internet untuk{" "}
                  <u>
                    <NavLink href="/">bereksperimen</NavLink>
                  </u>{" "}
                  (<em>bermain-main?</em>) dengan teknologi antarmuka web dan
                  juga pengalaman interaktif di <em>browser</em>.
                </p>

                <p>Selamat datang!</p>
              </div>
            </div>
          </div>

          <div className={styles.bagianDeskripsi}>
            <div className={styles.wadahTulisanPendek}>Tentang Situs Ini</div>
            <div className={styles.dalaman}>
              <p>
                Situs ini masih <em>work in progress</em> dan saya anggap akan{" "}
                &#42;selalu&#42; <em>work in progress</em>, dimana saya akan
                membuat antarmuka eksperimental untuk halaman-halaman situs ini
                sebagai projek yang berkelanjutan.
              </p>

              <p>
                Eksperimen web interaktif akan saya sajikan di halaman{" "}
                <u>
                  <NavLink href="/">&#8598;Depan</NavLink>
                </u>{" "}
                dan arsip eksperimen-eksperimen yang terdahulunya akan saya
                kumpulkan di halaman{" "}
                <u>
                  <NavLink href="/lab">Lab&#8599;</NavLink>
                </u>{" "}
                bersama projek-projek lainnya.
              </p>

              <p>
                Sambil menunggu apa yang akan saya buat di sini, silakan boleh
                sapa-sapa lewat{" "}
                <u>
                  <a href="#sosial">kontak di bagian bawah&#8600;</a>
                </u>
                .
              </p>

              <p>Dengan senang hati, nanti saya balas sapanya {":))"}</p>
            </div>
          </div>

          <div className={styles.bagianDeskripsi}>
            <div className={styles.wadahTulisanPendek}>Tentang Dika</div>
            <div className={styles.dalaman}>...</div>
          </div>

          <div className={styles.bagianDeskripsi}>
            <div className={styles.dalaman}>
              <div className={styles.wadahTulisanPendek}>Di Internet</div>

              <p>
                Bukan warganet media sosial yang aktif...
                <br />
                tapi saya tetap bisa ditemukan di internet lewat beberapa
                layanan berikut:
              </p>

              <ul className={styles.listIkon}>
                {listIcon.map(({ href, ikon }) => (
                  <li key={href}>
                    <div style={{ width: 64, height: 64 }}>
                      <NavLink href={href}>{ikon}</NavLink>
                    </div>
                  </li>
                ))}
              </ul>

              {/* <p style={{ textAlign: "center" }}>☕</p> */}
            </div>
          </div>
        </motion.main>

        <footer className={styles.footer}>
          <div className={styles.logoFooter}>
            <NavLink href="/">sakitkepala.dev&#47;</NavLink>
          </div>

          <div className={styles.hakCipta}>
            {new Date().getFullYear()} &copy; Andika Priyotama Dharminto
          </div>

          <div className={styles.emoji}>☕</div>
        </footer>
      </div>
    </>
  );
}
