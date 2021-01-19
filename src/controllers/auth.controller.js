const { default: axios } = require("axios");

const authCtrl = {};
const client_id = process.env.client_id;
const redirect_uri = process.env.redirect_uri;
const scope = process.env.scope;

//Controlador para redireccionamiento a portal de autenticacion
authCtrl.auth = (req, res) => {
  res.redirect(
    `https://www4c.sii.cl/claveunicaauthui/#/login?response_type=code&client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}&state=002`
  );
};

//Controlador para callback de autorizacion
authCtrl.callBack = async (req, res) => {
  const { code } = req.query;
  const client_secret = process.env.client_secret;
  const params = new URLSearchParams();
  params.append("grant_type", "authorization_code");
  params.append("code", code);
  params.append("client_id", client_id);
  params.append("client_secret", client_secret);
  params.append("redirect_uri", redirect_uri);

  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  const result = await axios.post(
    "https://ws2.sii.cl:9093/APPRSOASIICERT/services/getAccessToken",
    params,
    config
  );
  console.log(result);

  const { token_type, expires_in, access_token, refresh_token } = result.data;

  res.redirect(`/?token=${access_token}`);
};

module.exports = authCtrl;
