import React, { useEffect } from "react";
import { Card, ScrollSections } from "../../components";
import { Main } from "../../Layouts";

import styles from "./styles.module.scss";

import mock from "../../mock/mock.json";

const Home = () => {
  return (
    <>
      <Main>
        <ScrollSections>
          <ScrollSections.Section id="WHAT">
            <div className={`${styles.Container} ${styles.Grid}`}>
              <div className={`${styles.Content}`}>
                <h3>/O que fazemos</h3>
                <h1>/Games</h1>

                <span>Desenvolvimento de games digitais.</span>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
              <div className={`${styles.Cards}`}>
                <Card
                  description={
                    <span>
                      A <strong>PlanXP</strong> tem uma equipe qulificada para o{" "}
                      <strong>desenvolvimento de jogos digitais</strong> para{" "}
                      <strong>dispositivos móveis</strong> (smartphones,tablets
                      e afins).
                    </span>
                  }
                />
                <Card description={<span>teste</span>} />
              </div>
            </div>
          </ScrollSections.Section>
          <ScrollSections.Section id="PLAN">
            <div className={`${styles.Container} ${styles.Grid}`}>
              <div className={`${styles.Content}`}>
                <h3>/O que fazemos</h3>
                <h1>/Games</h1>

                <span>Desenvolvimento de games digitais.</span>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
              <div className={`${styles.Cards}`}>
                <Card
                  description={
                    <span>
                      A <strong>PlanXP</strong> tem uma equipe qulificada para o{" "}
                      <strong>desenvolvimento de jogos digitais</strong> para{" "}
                      <strong>dispositivos móveis</strong> (smartphones,tablets
                      e afins).
                    </span>
                  }
                />
                <Card description={<span>teste</span>} />
              </div>
            </div>
          </ScrollSections.Section>
          <ScrollSections.Section id="CONTACT">
            <div className={`${styles.Container} ${styles.Grid}`}>
              <div className={`${styles.Content}`}>
                <h3>/O que fazemos</h3>
                <h1>/Games</h1>

                <span>Desenvolvimento de games digitais.</span>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
              <div className={`${styles.Cards}`}>
                <Card
                  description={
                    <span>
                      A <strong>PlanXP</strong> tem uma equipe qulificada para o{" "}
                      <strong>desenvolvimento de jogos digitais</strong> para{" "}
                      <strong>dispositivos móveis</strong> (smartphones,tablets
                      e afins).
                    </span>
                  }
                />
                <Card description={<span>teste</span>} />
              </div>
            </div>
          </ScrollSections.Section>
        </ScrollSections>
      </Main>
    </>
  );
};

export default Home;
