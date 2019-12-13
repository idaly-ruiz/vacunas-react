import React from 'react';
import vacunas from '../../assets/js/vacunas';
import anterior from '../../assets/img/arrow-left.svg';
import siguiente from '../../assets/img/arrow-right.svg';

function Main() {
    return (
<main>
        <article className="datos">
            <section className="breadcrum">
                Inicio /{vacunas.seccion} {/*vacunas[1].seccion*/} / {/*vacunas[1].submenus[0].nombreVacuna*/}
            </section>
            <section className="nombre-vacuna active">
            {/*vacunas[1].submenus[0].nombreVacuna*/}
            </section>
            <section className="enfermedades-previene">
                <div className="titulo">
                    ENFERMEDADES QUE PREVIENE
                </div>
                <div className="texto">
                {/*vacunas[1].submenus[0].enfermedadesPreviene*/}
                </div>
            </section>
            <section className="dosis-aplicacion">
                <div className="dosis">
                    <div>Dosis</div>
                    <div>
                        <p>1</p><small>Dosis</small>
                    </div>
                    <div>
                        <p>2</p><small>Dosis</small>
                    </div>
                    <div>
                        <p>3</p><small>Dosis</small>
                    </div>
                    <div>
                        <p>4</p><small>Dosis</small>
                    </div>
                    <div>
                        <p>5</p><small>Refuerzo</small>
                    </div>
                </div>
                <div className="aplicacion">
                    <div>Aplicacion</div>
                    <div className="active">
                        <i className="demo-icon icon-jeringa"></i>
                    </div>
                    <div>
                        <i className="demo-icon icon-jeringa"></i>
                    </div>
                    <div>
                        <i className="demo-icon icon-jeringa"></i>
                    </div>
                    <div>
                        <i className="demo-icon icon-jeringa"></i>
                    </div>
                    <div>
                        <i className="demo-icon icon-jeringa"></i>
                    </div>
                </div>
            </section>
            <section className="reacciones-secundarias">
                <div className="titulo">
                    REACCIONES SECUNDARIAS
                </div>
                <div className="texto">
                    Cabe destacar que las reacciones secundarías casi nunca suceden, son como de .4 de 10% los que
                    podrían pasar por este pedo.
                </div>
                <div className="reacciones">
                    <div>
                        <div className="circle"></div> Mareos
                    </div>
                    <div>
                        <div className="circle"></div> Mareos
                    </div>
                    <div>
                        <div className="circle"></div> Mareos
                    </div>
                    <div>
                        <div className="circle"></div> Mareos
                    </div>
                    <div>
                        <div className="circle"></div> Mareos
                    </div>
                    <div>
                        <div className="circle"></div> Mareos
                    </div>
                    <div>
                        <div className="circle"></div> Mareos
                    </div>
                    <div>
                        <div className="circle"></div> Mareos
                    </div>

                </div>
            </section>
        </article>
        <article className="info">
            <section className="control">
                <div><img src={anterior} alt="" />Anterior</div>
                <div>1/3</div>
                <div><img src={siguiente} alt="" />Siguiente</div>
            </section>
            <section className="descripcion">
                <p>La tuberculosis es una enfermedad infecciosa producida por una bacteria (el bacilo Mycobacterium
                    tuberculosis), que ataca inicialmente sobre todo a los pulmones, aunque puede extenderse a otras
                    muchas partes del cuerpo. Es causa de importante mortalidad, principalmente en los países pobres,
                    pero está extendida por todo el mundo.
                    Se contagia, sobre todo, por el contacto con enfermos que diseminan el microbio (enfermos
                    bacilíferos) a través de la tos.
                    Las personas que han tenido contacto con esta bacteria o que están afectadas por la enfermedad
                    muestran un resultado positivo en la prueba cutánea de la tuberculina, también llamada PPD o
                    Mantoux.</p>
            </section>
            <section className="animacion"></section>
        </article>
    </main>



    );
}

export default Main;