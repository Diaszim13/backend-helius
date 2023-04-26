const {PdfGenerator} =  require("./pdf-generator.ts");
const cors = require('cors');
const $express = require('express');
const user = require('./models/User.model')
const db = require('./db/db.config')
const app = $express();
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user.routes');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get('/', (req:any, res:any) => {
  
});

app.use('/user',userRoutes);
app.get('/generate-pdf', async (req:any, res:any) => {
  const buffer = await PdfGenerator.generatePdf(req, res);
  const filename = 'pdf-generator.pdf';
    // Envia o arquivo PDF para download
    res.set('Content-disposition', `attachment; filename=${filename}`);
    res.set('Content-type', 'application/pdf');
    res.send(buffer);
  
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
