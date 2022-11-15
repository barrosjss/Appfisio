import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function Home() {
  const resultados = {
    display: "flex",
    justifyContent: "center",
  }

  const button = {
    marginLeft: 50,
    marginRight: 50,
    marginTop: 20,
    marginBottom: 20,
    width: 200,
    height: 50,
  }

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  function refreshPage() {
    window.location.reload(false);
  }

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

      <div className="p-5 mb-4 bg-light rounded-3 border">
        <h2 className="display-5 fw-bold">Facilitadores</h2>
        <p className="col-md-8 fs-4">Seleccione cuales de estos facilitadores tiene a su disposicion: </p>

        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
          <label className="form-check-label" for="flexCheckDefault">
            Conocidos, compañeros, colegas, vecinos y miembros de la comunidad
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
          <label className="form-check-label" for="flexCheckDefault">
            Productos y tecnologia de asistencia para el empleo
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
          <label className="form-check-label" for="flexCheckDefault">
            Productos y tecnologia para la movilidad y el transporte personal
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
        <h2 className="display-5 fw-bold">Barreras</h2>
        <p className="col-md-8 fs-4">Seleccione cual de estas barreras presenta:</p>

        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
          <label className="form-check-label" for="flexCheckDefault">
            Productos y tecnologia de asistencia para el empleo
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
          <label className="form-check-label" for="flexCheckDefault">
            Productos y tecnologia para el empleo
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
          <label className="form-check-label" for="flexCheckDefault">
            Conducir
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
          <label className="form-check-label" for="flexCheckDefault">
            Ninguna de las anteriores
          </label>
        </div>
      </div>

      <div style={resultados}>
        <button type="button" class="btn btn-primary" variant="primary" onClick={handleShow} style={button}>Diagnostico</button>
        <button type="button" class="btn btn-primary" onClick={refreshPage} style={button}>Volver</button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Diagnostico</Modal.Title>
        </Modal.Header>
        <Modal.Body>Busititis en el hombro y epicondilitis</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Home;