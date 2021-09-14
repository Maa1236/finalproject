import "./Login.css";

export const Login = ({ setInputEmail, setInputPassword, letMeIn }) => {
  return (
    <div class="newClassForCss" onclick="onclick">
      <div class="top"></div>
      <div class="bottom"></div>
      <div class="center">
        <h2>Please Sign In</h2>
        <input
          type="email"
          placeholder="email"
          onChange={(event) => {
            setInputEmail(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(event) => {
            setInputPassword(event.target.value);
          }}
        />
        <button type="submit" className="btn btn-dark " onClick={letMeIn}>
          Login
        </button>
      </div>
    </div>
  );
};

