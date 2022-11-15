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
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Opciones</th>
              <th>Código cif</th>
              <th>Calificador</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                <label className="form-check-label" for="flexCheckDefault">
                  Movilidad de varias articulaciones
                </label>
              </div>
              </td>
              <td>b7101</td>
              <td>3</td>
            </tr>
            <tr>
              <td>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                  <label className="form-check-label" for="flexCheckDefault">
                    Funciones de la presion arterial
                  </label>
                </div>
              </td>
              <td>b420</td>
              <td>2</td>
            </tr>
            <tr>
              <td>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                  <label className="form-check-label" for="flexCheckDefault">
                    Funciones relacionadas con la fuerza muscular
                  </label>
                </div>
              </td>
              <td>b730</td>
              <td>4</td>
            </tr>
            <tr>
              <td>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                  <label className="form-check-label" for="flexCheckDefault">
                    Fuerza de musculos aislados y grupos musculares
                  </label>
                </div>
              </td>
              <td>b7300</td>
              <td>3</td>
            </tr>
            <tr>
              <td>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                  <label className="form-check-label" for="flexCheckDefault">
                    Funciones relacionadas con la resistencia
                  </label>
                </div>
              </td>
              <td>b740</td>
              <td>2</td>
            </tr>
            <tr>
              <td>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                  <label className="form-check-label" for="flexCheckDefault">
                    Resistencia de grupos musculares
                  </label>
                </div>
              </td>
              <td>b7401</td>
              <td>2</td>
            </tr>
            <tr>
              <td>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                  <label className="form-check-label" for="flexCheckDefault">
                    Ninguna de las anteriores
                  </label>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="p-5 mb-4 bg-light rounded-3 border">
        <h2 className="display-5 fw-bold">Deficiencias estructurales corporales</h2>
        <p className="col-md-8 fs-4">Seleccione los enunciados con los que tenga una deficiencia estructural</p>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Opciones</th>
              <th>Código cif</th>
              <th>Calificador</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                  <label className="form-check-label" for="flexCheckDefault">
                    Huesos de la region del hombro
                  </label>
                </div>
              </td>
              <td>s7200</td>
              <td>4</td>
            </tr>
            <tr>
              <td>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                  <label className="form-check-label" for="flexCheckDefault">
                    Articulaciones de la region del hombro
                  </label>
                </div>
              </td>
              <td>s7201</td>
              <td>3</td>
            </tr>
            <tr>
              <td>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                  <label className="form-check-label" for="flexCheckDefault">
                    Musculos de la region del hombro
                  </label>
                </div>
              </td>
              <td>s7202</td>
              <td>3</td>
            </tr>
            <tr>
              <td>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                  <label className="form-check-label" for="flexCheckDefault">
                    Ligamentos y fascias de la region del hombro
                  </label>
                </div>
              </td>
              <td>s7203</td>
              <td>4</td>
            </tr>
            <tr>
              <td>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                  <label className="form-check-label" for="flexCheckDefault">
                    Articulacion del codo
                  </label>
                </div>
              </td>
              <td>s730</td>
              <td>3</td>
            </tr>
            <tr>
              <td>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                  <label className="form-check-label" for="flexCheckDefault">
                    Ninguna de las anteriores
                  </label>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="p-5 mb-4 bg-light rounded-3 border">
        <h2 className="display-5 fw-bold">Limitaciones en las actividades</h2>
        <p className="col-md-8 fs-4">Seleccione que actividades no puede realizar con normalidad</p>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Opciones</th>
              <th>Código cif</th>
              <th>Calificador</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                  <label className="form-check-label" for="flexCheckDefault">
                    Vestirse
                  </label>
                </div>
              </td>
              <td>d540</td>
              <td>3</td>
            </tr>
            <tr>
              <td>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                  <label className="form-check-label" for="flexCheckDefault">
                    Comer
                  </label>
                </div>
              </td>
              <td>d550</td>
              <td>2</td>
            </tr>
            <tr>
              <td>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                  <label className="form-check-label" for="flexCheckDefault">
                    Ponerse el calzado
                  </label>
                </div>
              </td>
              <td>d5402</td>
              <td>1</td>
            </tr>
            <tr>
              <td>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                  <label className="form-check-label" for="flexCheckDefault">
                    Quitarse el calzado
                  </label>
                </div>
              </td>
              <td>d5403</td>
              <td>1</td>
            </tr>
            <tr>
              <td>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                  <label className="form-check-label" for="flexCheckDefault">
                    Cepillarse los dientes
                  </label>
                </div>
              </td>
              <td>d5201</td>
              <td>3</td>
            </tr>
            <tr>
              <td>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                  <label className="form-check-label" for="flexCheckDefault">
                    Peinarse
                  </label>
                </div>
              </td>
              <td>d5202</td>
              <td>2</td>
            </tr>
            <tr>
              <td>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                  <label className="form-check-label" for="flexCheckDefault">
                    Higiene personal - procesos de excresion
                  </label>
                </div>
              </td>
              <td>d530</td>
              <td>1</td>
            </tr>
            <tr>
              <td>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                  <label className="form-check-label" for="flexCheckDefault">
                    Ninguna de las anteriores
                  </label>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      

      <div className="p-5 mb-4 bg-light rounded-3 border">
        <h2 className="display-5 fw-bold">Restricciones en la participacion</h2>
        <p className="col-md-8 fs-4">Seleccione que actividades no puede realizar con normalidad</p>

        <table class="table">
          <thead>
            <tr>
              <th scope="col">Opciones</th>
              <th>Código cif</th>
              <th>Calificador</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                  <label className="form-check-label" for="flexCheckDefault">
                    Relaciones familiares
                  </label>
                </div>
              </td>
              <td>d760</td>
              <td>0</td>
            </tr>
            <tr>
              <td>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                  <label className="form-check-label" for="flexCheckDefault">
                    Mantener el trabajo
                  </label>
                </div>
              </td>
              <td>d51</td>
              <td>4</td>
            </tr>
            <tr>
              <td>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                  <label className="form-check-label" for="flexCheckDefault">
                    Tiempo libre y ocio
                  </label>
                </div>
              </td>
              <td>d920</td>
              <td>0</td>
            </tr>
            <tr>
              <td>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                  <label className="form-check-label" for="flexCheckDefault">
                    Ninguna de las anteriores
                  </label>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="p-5 mb-4 bg-light rounded-3 border">
        <h2 className="display-5 fw-bold">Facilitadores</h2>
        <p className="col-md-8 fs-4">Seleccione cuales de estos facilitadores tiene a su disposicion: </p>
        
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Opciones</th>
              <th>Código cif</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                  <label className="form-check-label" for="flexCheckDefault">
                    Conocidos, compañeros, colegas, vecinos y miembros de la comunidad
                  </label>
                </div>
              </td>
              <td>e32</td>
            </tr>
            <tr>
              <td>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                  <label className="form-check-label" for="flexCheckDefault">
                    Productos y tecnologia de asistencia para el empleo
                  </label>
                </div>
              </td>
              <td>e1351+1</td>
            </tr>
            <tr>
              <td>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                  <label className="form-check-label" for="flexCheckDefault">
                    Productos y tecnologia para la movilidad y el transporte personal
                  </label>
                </div>
              </td>
              <td>e120</td>
            </tr>
            <tr>
              <td>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                  <label className="form-check-label" for="flexCheckDefault">
                    Ninguna de las anteriores
                  </label>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="p-5 mb-4 bg-light rounded-3 border">
        <h2 className="display-5 fw-bold">Barreras</h2>
        <p className="col-md-8 fs-4">Seleccione cual de estas barreras presenta:</p>

        <table class="table">
          <thead>
            <tr>
              <th scope="col">Opciones</th>
              <th>Código cif</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                  <label className="form-check-label" for="flexCheckDefault">
                    Productos y tecnologia de asistencia para el empleo
                  </label>
                </div>
              </td>
              <td>.1e1351</td>
            </tr>
            <tr>
              <td>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                  <label className="form-check-label" for="flexCheckDefault">
                    Productos y tecnologia para el empleo
                  </label>
                </div>
              </td>
              <td>e140</td>
            </tr>
            <tr>
              <td>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                  <label className="form-check-label" for="flexCheckDefault">
                    Conducir
                  </label>
                </div>
              </td>
              <td>d8451</td>
            </tr>
            <tr>
              <td>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                  <label className="form-check-label" for="flexCheckDefault">
                    Ninguna de las anteriores
                  </label>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
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