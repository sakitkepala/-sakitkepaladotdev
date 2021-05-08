import Head from "next/head";
import { motion } from "framer-motion";
import { getSemuaSortir } from "../lib/api/eksperimen";
import { LogoHeader } from "../components/logo-header";
import { MenuNavigasi } from "../components/navigasi";
import { NavLink } from "../components/nav-link";

import name from "classnames";
import old from "../styles/Dika.module.scss";
import layout from "../styles/Layout.module.scss";

function ListItemEksperimen({ info }) {
  const { repo, tanggal, judul, source } = info;
  return (
    <article className={old["lab-artikel"]}>
      <NavLink href={`/lab/eksperimen/${repo}`}>
        <div className={old["lab-artikel__thumb"]}>
          <img />
        </div>
      </NavLink>

      <NavLink href={`/lab/eksperimen/${repo}`}>
        <h2 className={old["lab-artikel__judul"]}>{judul}</h2>
      </NavLink>
    </article>
  );
}

const propsMotionTransisi = {
  initial: { opacity: 0, translateY: 20 },
  animate: { opacity: 1, translateY: 0 },
};

export default function HalamanLab({ listInfo }) {
  return (
    <>
      <Head>
        <title>Arsip eksperimen dan projek di sakitkepala.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={old.halaman}>
        <header className={layout.header}>
          <LogoHeader />
          <MenuNavigasi />
        </header>

        <motion.main {...propsMotionTransisi}>
          <div className={old["bagian-lab"]}>
            <div
              className={name(
                old["bagian-lab__deskripsi"],
                old["bagian-lab__deskripsi--eksperimen"]
              )}
            >
              <h1
                className={old["bagian-lab__heading-deskripsi"]}
                style={{ color: "lightsteelblue" }}
              >
                Eksperimen
              </h1>

              <p className={old["bagian-lab__tulisan-deskripsi"]}>
                {/* TODO: */}
                <em style={{ color: "lightsteelblue" }}>...to be developed</em>
              </p>
            </div>

            <ul className={old["bagian-lab__list-eksperimen"]}>
              <li>
                {/* TODO: */}
                <article className={old["lab-artikel"]}>
                  {/* <NavLink href="/dika"> */}
                  <div
                    className={old["lab-artikel__thumb"]}
                    style={{
                      borderColor: "lightsteelblue",
                      backgroundColor: "transparent",
                    }}
                  >
                    <img />
                  </div>
                  {/* </NavLink> */}

                  {/* <NavLink href="/dika"> */}
                  <h2
                    className={old["lab-artikel__judul"]}
                    style={{ color: "lightsteelblue" }}
                  >
                    ...to be developed
                  </h2>
                  {/* </NavLink> */}
                </article>
              </li>
            </ul>

            <div
              className={name(
                old["bagian-lab__deskripsi"],
                old["bagian-lab__deskripsi--projek"]
              )}
            >
              <h1 className={old["bagian-lab__heading-deskripsi"]}>Projek</h1>

              <p className={old["bagian-lab__tulisan-deskripsi"]}>
                Projek-projek menarik yang mau kucoba.
              </p>
            </div>

            <ul className={old["bagian-lab__list-projek"]}>
              <li>
                <article className={old["lab-artikel"]}>
                  <NavLink href="https://www.github.com/sakitkepala/wkwkbudgetapp">
                    <div
                      className={old["lab-artikel__thumb"]}
                      style={{
                        backgroundImage: "url(/wkwkbudgetapp.jpg)",
                        backgroundSize: "cover",
                        backgroundPositionX: "center",
                        backgroundPositionY: "65%",
                      }}
                    />
                  </NavLink>

                  <h2 className={old["lab-artikel__judul"]}>
                    <NavLink href="https://www.github.com/sakitkepala/wkwkbudgetapp">
                      Budgeting App &#40;WIP&#41;
                    </NavLink>
                  </h2>
                </article>
              </li>
            </ul>
          </div>
        </motion.main>

        <footer className={layout.footer}>
          <div className={layout["footer__logo"]}>
            <NavLink href="/">&#47; Eksperimennya Dika</NavLink>
          </div>

          <div className={layout["footer__hak-cipta"]}>
            {new Date().getFullYear()}
            <span>☕&#10157;</span> Andika Priyotama D.
          </div>
        </footer>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      listInfo: getSemuaSortir(),
    },
  };
}
