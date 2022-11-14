import React from 'react'
import './Home.css'

function home() {
  return (
    <div className="container">
      <div className="p-5 mb-4 bg-light rounded-3 border">
        <h2 className="display-5 fw-bold">Deficiencias funcionales corporales</h2>
        <p className="col-md-8 fs-4">Seleccione los enunciados con los que tenga dificultad:</p>

        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
          <label className="form-check-label" for="flexCheckDefault">
            Movilidad de varias articulaciones
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
          <label className="form-check-label" for="flexCheckDefault">
            Funciones de la presion arterial
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
          <label className="form-check-label" for="flexCheckDefault">
            Funciones relacionadas con la fuerza muscular
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
          <label className="form-check-label" for="flexCheckDefault">
            Fuerza de musculos aislados y grupos musculares
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
          <label className="form-check-label" for="flexCheckDefault">
            Funciones relacionadas con la resistencia
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
          <label className="form-check-label" for="flexCheckDefault">
            Resistencia de grupos musculares
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
          <label className="form-check-label" for="flexCheckDefault">
            Ninguna de las anteriores
          </label>
        </div>
      </div>

      <div className="p-5 mb-4 bg-light rounded-3 border">
        <h2 className="display-5 fw-bold">Deficiencias estructurales corporales</h2>
        <p className="col-md-8 fs-4">Seleccione los enunciados con los que tenga una deficiencia estructural</p>

        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
          <label className="form-check-label" for="flexCheckDefault">
            Huesos de la region del hombro
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
          <label className="form-check-label" for="flexCheckDefault">
            Articulaciones de la region del hombro
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
          <label className="form-check-label" for="flexCheckDefault">
            Musculos de la region del hombro
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
          <label className="form-check-label" for="flexCheckDefault">
            Ligamentos y fascias de la region del hombro
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
          <label className="form-check-label" for="flexCheckDefault">
            Articulacion del codo
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
          <label className="form-check-label" for="flexCheckDefault">
            Ninguna de las anteriores
          </label>
        </div>
      </div>

      <div className="p-5 mb-4 bg-light rounded-3 border">
        <h2 className="display-5 fw-bold">Limitaciones en las actividades</h2>
        <p className="col-md-8 fs-4">Seleccione que actividades no puede realizar con normalidad</p>

        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
          <label className="form-check-label" for="flexCheckDefault">
            Vestirse
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
          <label className="form-check-label" for="flexCheckDefault">
            Comer
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
          <label className="form-check-label" for="flexCheckDefault">
            Ponerse el calzado
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
          <label className="form-check-label" for="flexCheckDefault">
            Quitarse el calzado
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
          <label className="form-check-label" for="flexCheckDefault">
            Cepillarse los dientes
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
          <label className="form-check-label" for="flexCheckDefault">
            Peinarse
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
          <label className="form-check-label" for="flexCheckDefault">
            Higiene personal - procesos de excresion
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
          <label className="form-check-label" for="flexCheckDefault">
            Ninguna de las anteriores
          </label>
        </div>
      </div>

      <div className="p-5 mb-4 bg-light rounded-3 border">
        <h2 className="display-5 fw-bold">Restricciones en la participacion</h2>
        <p className="col-md-8 fs-4">Seleccione que actividades no puede realizar con normalidad</p>

        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
          <label className="form-check-label" for="flexCheckDefault">
            Relaciones familiares
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
          <label className="form-check-label" for="flexCheckDefault">
            Mantener el trabajo
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
          <label className="form-check-label" for="flexCheckDefault">
            Tiempo libre y ocio
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
          <label className="form-check-label" for="flexCheckDefault">
            Ninguna de las anteriores
          </label>
        </div>
      </div>
      <div className='resultados'>
        <button type="button" class="btn btn-primary">Diagnostico</button>
        <button type="button" class="btn btn-primary">Volver</button>
      </div>
    </div>
  );
}

export default home;