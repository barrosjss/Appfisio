function home(){
    return(
        <div class="container">
            <div>
                <h1>Bienvenido</h1>
            </div>
            <div class="first-form">
                <h2>Deficiencias funcionales corporales</h2>
                <p>Seleccione los enunciados con los que tenga dificultad:</p>
                <form>
                    <div>
                        <input type="checkbox" name="" id=""></input>
                        <label>Movilidad de varias articulaciones</label>
                    </div>
                    <div>
                        <input type="checkbox" name="" id=""></input>
                        <label>Funciones de la presion arterial</label>
                    </div>
                    <div>
                        <input type="checkbox" name="" id=""></input>
                        <label>Funciones relacionadas con la fuerza muscular</label>
                    </div>
                    <div>
                        <input type="checkbox" name="" id=""></input>
                        <label>Fuerza de musculos aislados o grupos musculares</label>
                    </div>
                    <div>
                        <input type="checkbox" name="" id=""></input>
                        <label>Funciones relacionadas con la resistencia muscular</label>
                    </div>
                    <div>
                        <input type="checkbox" name="" id=""></input>
                        <label>Resistencia de grupos musculares</label>
                    </div>
                    <div>
                        <input type="checkbox" name="" id=""></input>
                        <label>Ninguna de las anteriores</label>
                    </div>
                </form>
            </div>
            <div class="second-form">
                <h2>Deficiencias estructurales corporales</h2>
                <p>Seleccione los enunciados con los que tenga una deficiencia estructural</p>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="checkbox" name="" id=""></input>
                        <label>Huesos de la region del hombro</label>
                    </div>
                    <div>
                        <input type="checkbox" name="" id=""></input>
                        <label>Articulaciones de la region del hombro</label>
                    </div>
                    <div>
                        <input type="checkbox" name="" id=""></input>
                        <label>Musculos de la region del hombro</label>
                    </div>
                    <div>
                        <input type="checkbox" name="" id=""></input>
                        <label>Ligamentos y fascias del hombro derecho</label>
                    </div>
                    <div>
                        <input type="checkbox" name="" id=""></input>
                        <label>Articulaciones del codo</label>
                    </div>
                    <div>
                        <input type="checkbox" name="" id=""></input>
                        <label>Ninguna de las anteriores</label>
                    </div>
                </form>
            </div>
            <div class="third-form">
                <h2>Limitaciones en las actividades</h2>
                <p>Seleccione que actividades no puede realizar con normalidad</p>
                <div>
                    <input type="checkbox" name="" id=""></input>
                    <label for=""></label>
                </div>
                <div>
                    <input type="checkbox" name="" id=""></input>
                    <label for=""></label>
                </div>
                <div>
                    <input type="checkbox" name="" id=""></input>
                    <label for=""></label>
                </div>
                <div>
                    <input type="checkbox" name="" id=""></input>
                    <label for=""></label>
                </div>
                <div>
                    <input type="checkbox" name="" id=""></input>
                    <label for=""></label>
                </div>
                <div>
                    <input type="checkbox" name="" id=""></input>
                    <label for=""></label>
                </div>
                <div>
                    <input type="checkbox" name="" id=""></input>
                    <label for=""></label>
                </div>
                <div>
                    <input type="checkbox" name="" id=""></input>
                    <label>Ninguna de las anteriores</label>
                </div>
            </div>
        </div>
    );
}