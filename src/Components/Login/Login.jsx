import "./Login.css";

export const Login = ({ setInputEmail, setInputPassword,letMeIn }) => {
    
  return (
    <div className="container mainMain">
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="login-form bg-light mt-4 p-4 mainCont">
            <form action="" method="">
              <h4 className="text-center">Login</h4>
              <div className="col-12 row g-3 nasaKlasa">
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  placeholder="email"
                  onChange={(event) => { setInputEmail(event.target.value) } }
                  />
              </div>
              <div className="col-12 row g-3 nasaKlasa">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="password"
                  onChange={(event) => { setInputPassword(event.target.value) } }
                  />
              </div>
              <div className="col-12 row g-3 nasaKlasa">
                <button type="submit" className="btn btn-dark " onClick={letMeIn} >
                  Login
                </button>
              </div>
              <div className="col-12 row g-3 nasaKlasa">
                <button type="reset" className="btn btn-dark ">
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
