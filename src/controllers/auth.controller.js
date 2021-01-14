const authCtrl ={};

//Controlador para redireccionamiento a portal de autenticacion
authCtrl.auth = (req,res)=>{
    console.log('auth request');
    res.status(200).json({message:"auth"});
};

//Controlador para callback de autorizacion
authCtrl.oauth = (req,res)=>{};

module.exports = authCtrl;