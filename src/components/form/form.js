import './form.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/bootstrap-icons/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.js';

function Form() {
    return (
        <div className='container-fluid parent-form'>
            <form novalidate enctype="multipart/form-data">
                <div className="row">
                    <h1>Formulaire...</h1>
                <div className="col-12 item-form">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" > <i class="bi bi-person-fill"></i></span>
                            </div>
                            <input type="text" className="form-control" placeholder="Votre nom et prénoms" required />
                        </div>
                    </div>

                    <div className="col-12 item-form">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" ><i class="bi bi-envelope-fill"></i></span>
                            </div>
                            <input type="email" className="form-control" placeholder="Votre E-mail" required />
                        </div>
                    </div>

                    <div className="col-12 item-form">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" > <i class="bi bi-lock-fill"></i></span>
                            </div>
                            <input type="password" className="form-control" placeholder="Votre mot de passe" required />
                        </div>
                    </div>
                </div>
                <button className="btn btn-info form-control" type="submit">Envoyer</button>
            </form>
        </div>
    );
}

export default Form;
