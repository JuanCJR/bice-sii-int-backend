const callbackCtrl = {};
const axios = require('axios');

const client_id = process.env.client_id;
const redirect_uri = process.env.redirect_uri;

//Controlador para callback de autorizacion
callbackCtrl.callback = async (req, res) => {

  const { code } = req.query;
  console.log(code);
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


  try{
    const result = await axios.post(
      "https://ws2.sii.cl:9093/APPRSOASIICERT/services/getAccessToken",
      params,
      config
    );
  }catch(error){

    console.log(error);

    
  }


  // const { token_type, expires_in, access_token, refresh_token } = result.data;

  // console.log(access_token);

  // res.redirect(`/?token=${access_token}`);

};

module.exports = callbackCtrl;