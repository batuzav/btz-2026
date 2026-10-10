export default function Home() {
  return (
    <main className="sheet">
      {/* DATELINE */}
      <header className="dateline">
        <span>Número 01</span>
        <span className="mid">Portafolio — Selección</span>
        <span>Otoño 2026</span>
      </header>

      {/* MASTHEAD */}
      <section className="masthead" aria-label="Pedro Valdez">
        <span className="line1 reveal">PEDRO</span>
        <span className="line2 reveal">VALDEZ</span>
        <span className="role">
          ingeniero backend · node · nestjs · python · cloud
        </span>
      </section>

      {/* LEAD */}
      <section className="lead">
        <p className="lead-statement">
          Seis años construyendo el backend que no se ve: APIs, microservicios y
          datos a escala.
        </p>

        <div className="bio" lang="es">
          <span className="kicker">Lo esencial</span>
          <p>
            Ingeniero de software backend y full-stack con más de seis años
            desarrollando APIs REST, microservicios y sistemas web escalables en
            la nube.
          </p>
          <p>
            Especializado en Node.js, NestJS y Python, con experiencia en
            arquitectura de software, bases de datos SQL y NoSQL, y despliegues
            en GCP y AWS. Construye soluciones eficientes, mantenibles y
            orientadas a negocio.
          </p>
          <p>
            Su experiencia abarca plataformas SaaS de retail, sistemas de
            competencias musicales, herramientas corporativas y automatización
            de datos con IA, de la arquitectura al despliegue.
          </p>
        </div>
      </section>

      {/* IMPACTO (números reales del CV) */}
      <section className="impact" aria-label="Impacto">
        <div className="impact-head">
          <span>Impacto</span>
          <span className="n">En producción</span>
        </div>
        <div className="figs">
          <div className="fig">
            <div className="num">+50K</div>
            <div className="cap">
              productos procesados al día en ETL con IA, de BigQuery a PostgreSQL
            </div>
          </div>
          <div className="fig">
            <div className="num">{"<1s"}</div>
            <div className="cap">
              10,000 consultas a MongoDB optimizadas a menos de un segundo de
              respuesta
            </div>
          </div>
          <div className="fig">
            <div className="num">2s</div>
            <div className="cap">
              50,000 productos servidos desde BigQuery con caché en ClickHouse,
              formato .arrow
            </div>
          </div>
        </div>
      </section>

      {/* TRABAJOS */}
      <section className="work" aria-label="Trabajos seleccionados">
        <div className="work-head">
          <span>Trabajos seleccionados</span>
          <span className="n">Tres</span>
        </div>

        <article className="entry">
          <span className="idx">01</span>
          <div>
            <h3 className="title">
              <a href="https://shelftia.com" target="_blank" rel="noopener noreferrer">
                Shelftia
              </a>
            </h3>
            <p className="desc">
              SaaS de monitoreo de retail en tiempo real. Backend y servicios
              distribuidos para cobertura en múltiples supermercados y apps de
              entrega.
            </p>
          </div>
          <div className="meta">
            Node · NestJS · FastAPI
            <br />
            PostgreSQL · BigQuery
            <br />
            GCP · 2022—
          </div>
        </article>

        <article className="entry">
          <span className="idx">02</span>
          <div>
            <h3 className="title">
              <a href="https://musicbattles.com" target="_blank" rel="noopener noreferrer">
                Music Battles
              </a>
            </h3>
            <p className="desc">
              Plataforma de competencias musicales. Servicios RESTful desde cero
              y gestión de archivos multimedia sobre almacenamiento en la nube.
            </p>
          </div>
          <div className="meta">
            LoopBack 4 · TypeScript
            <br />
            MongoDB · DynamoDB
            <br />
            AWS S3 · 2021
          </div>
        </article>

        <article className="entry">
          <span className="idx">03</span>
          <div>
            <h3 className="title">
              <a
                href="https://github.com/batuzav/vdl-btz"
                target="_blank"
                rel="noopener noreferrer"
              >
                vdl-btz
              </a>
              <span className="tag">Aprendiendo Ruby</span>
            </h3>
            <p className="desc">
              CLI en Ruby para descargar video y audio de TikTok, YouTube,
              Instagram y Facebook con un solo comando. Cero dependencias de
              gemas: solo la librería estándar. Instala yt-dlp y ffmpeg por sí
              misma y traduce los errores a sugerencias en español.
            </p>
          </div>
          <div className="meta">
            Ruby · CLI
            <br />
            Lib. estándar · MIT
            <br />
            Open source · 2026
          </div>
        </article>
      </section>

      {/* STRIPS */}
      <div className="strip" lang="es">
        <b>Stack</b> JavaScript · TypeScript · Python · Ruby · Node.js · NestJS ·
        FastAPI · LoopBack 4 · Laravel · PostgreSQL · MongoDB · DynamoDB ·
        BigQuery · ClickHouse · GCP · AWS · Docker · Linux
      </div>
      <div className="strip" lang="es">
        <b>Trayectoria</b> Atlantia.IA 2022—hoy · Music Battles 2021 · Bodylogic
        2020 · HopperCat 2019
      </div>

      {/* MANIFIESTO (homenaje Six; destilado del perfil real) */}
      <section className="manifesto" aria-label="Declaración">
        <p className="jp" lang="ja">
          効率的で保守しやすく、ビジネスに向き合うコードを。六年間、本番環境で複雑な問題を解き続けてきた。
        </p>
        <p className="en" lang="es">
          <span>código eficiente,</span>
          <span>mantenible,</span>
          <span>orientado a negocio.</span>
          <span>seis años resolviendo</span>
          <span>problemas complejos</span>
          <span>en producción.</span>
        </p>
        <p className="sig">— pedro valdez</p>
      </section>

      {/* COLOPHON (contacto real) */}
      <footer className="colophon">
        <div className="wordmark">PEDRO&nbsp;VALDEZ</div>
        <div className="contact">
          <a href="mailto:batuza.belmont@gmail.com">batuza.belmont@gmail.com</a>
          <br />
          <a href="https://batuzav.com" target="_blank" rel="noopener noreferrer">
            batuzav.com
          </a>
          <br />
          <a
            href="https://www.linkedin.com/in/batuzav/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/batuzav
          </a>
          <br />
          <a href="https://github.com/batuzav" target="_blank" rel="noopener noreferrer">
            github.com/batuzav
          </a>
          <br />
          <span className="place">
            Tuxtla Gutiérrez, MX · Ing. en Informática, UPSIN · N°01 · 2026
          </span>
        </div>
      </footer>
    </main>
  );
}
