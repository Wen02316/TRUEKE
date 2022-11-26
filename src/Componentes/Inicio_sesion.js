import React, { Component } from "react";

class Inicio_sesion extends Component {
  constructor(props) {
    super(props);
    this.state = {
        usuario:"",
        cont:""
    }
    this.cambio = this.cambio.bind(this);
  }
  
  cambio(e){
    this.setState({
        [e.target.name]:e.target.value
    })
    }
  
  render() {
    return (
      <div className = "text-center">
        <main className="form-signin w-50 m-auto card bg-dark border-white mt-4 p-4">
          <form>
            <img
              className="mb-4"
              src= {process.env.PUBLIC_URL+"./Recursos/logo_trueke.png"}
              alt=""
              width="180"
              height="auto"
            />
            <h1 className="h3 mb-3 fw-normal">Iniciar Sesión</h1>

            <div className="form-floating text-dark">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                name="usuario" onChange = {this.cambio}
              />
              <label for="floatingInput">Correo</label>
            </div>
            <div className="form-floating text-dark">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password" 
                name="cont" onChange = {this.cambio}
              />
              <label for="floatingPassword">Contraseña</label>
            </div>

            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Recuerdame
              </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Sign in
            </button>
            <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
          </form>
        </main>
      </div>
    );
  }
}

export default Inicio_sesion;
