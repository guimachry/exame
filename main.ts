import  express, { request, response }  from "express";

const app = express();
app.use(express.json());

app.get('/mensagem', (request, response) =>{
  response.json({mensagem: "Essa é minha API REST"})  
});

app.post('/soma',(request, response) =>{
    const  {numero1 , numero2} = request.body
    const resultado = numero1 + numero2

    response.json({
        numero1,
        numero2,
        resultado
    });

})

app.post('/inverter_texto', (request,  response) =>{
   const {texto} = request.body
   const texto_invertido = texto.split('').reverse().join('');
    response.json({texto_invertido})
});

app.listen(3000, () => {
    console.log('servidor iniciado na porta 3000')}
);