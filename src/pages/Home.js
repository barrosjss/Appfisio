import React from 'react'

function home() {
  const card = {
    padding: 10,
    marginBottom: 10,
  }

  return (
    <div className="container" style={{ marginTop: 20, }}>
      <div className="card first-section" style={card}>
        <h5 class="card-title">Deficiencias funcionales corporales</h5>
        <p>Seleccione los enunciados con los que tenga dificultad:</p>
      </div>

      <div className="card second-section" style={card}>
        <h5 class="card-title">Deficiencias estructurales corporales</h5>
        <p>Seleccione los enunciados con los que tenga una deficiencia estructural</p>
      </div>

      <div className="card third-section" style={card}>
        <h5 class="card-title">Limitaciones en las actividades</h5>
        <p>Seleccione que actividades no puede realizar con normalidad</p>
      </div>
    </div>
  );
}

export default home;