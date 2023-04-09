
const pdfmake = require('pdfmake/build/pdfmake')
const pdfFonts = require('pdfmake/build/vfs_fonts')
const {createConnection} = require('mysql2/promise');
const {TDocumentDefinitions} = require('pdfmake/build/pdfmake');
pdfmake.vfs = pdfFonts.pdfMake.vfs;
const fs = require('fs');
const path = require('path');

class PdfGenerator {
    // private connection: Connection;

    constructor(dbconfig: any) {}

    static generatePdf(req:any, res:any) {

    if (fs.existsSync('../node_modules/roboto-font/fonts/Roboto/roboto-regular-webfont.ttf')) {
        console.log('O arquivo de fonte Roboto Regular foi encontrado!');
    } 
    const fonts = {
      Roboto: {
        normal: '../node_modules/roboto-font/fonts/Roboto/roboto-regular-webfont.ttf',
        bold: '../node_modules/pdfmake/build/roboto-bold-webfont.ttf',
        italics: '../node_modules/pdfmake/build/roboto-italic-webfont.ttf',
        bolditalics: '../node_modules/pdfmake/build/roboto-bolditalic-webfont.ttf',
        
        // normal: path.join(__dirname, '..', 'node_modules', 'pdfmake', 'build', 'pdfmake', 'Roboto-Regular.ttf'),
        // bold: path.join(__dirname, '..', 'node_modules', 'pdfmake', 'build', 'pdfmake', 'Roboto-Medium.ttf'),
        // italics: path.join(__dirname, '..', 'node_modules', 'pdfmake', 'build', 'pdfmake', 'Roboto-Italic.ttf'),
        // bolditalics: path.join(__dirname, '..', 'node_modules', 'pdfmake', 'build', 'pdfmake', 'Roboto-MediumItalic.ttf')
      },
    };
    pdfmake.vfs = pdfFonts.pdfMake.vfs;
    // pdfmake.fonts = fonts;
    try {
        // this.connection = await createConnection(this.dbconfig);

    const docDefinition = {
      content: [
        { text: 'PDF Generator', style: 'header' },
        { text: 'This PDF is generated using pdfmake!', style: 'subheader' },
        {
          ul: [
            'PDFs can be used to share important information',
            'pdfmake is a great tool for generating PDFs in Node.js',
          ],
        },
        {
          qr: 'https://www.npmjs.com/package/pdfmake',
          fit: 100,
          alignment: 'center',
          margin: [0, 20, 0, 20],
        },
        {
          text: 'Thank you for using pdfmake!',
          style: 'subheader',
        },
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: false,
        },
        subheader: {
          fontSize: 14,
          bold: false,
          margin: [0, 15, 0, 5],
        },
      },
    };

    const pdfDoc = pdfmake.createPdf(docDefinition);

    // Define o nome do arquivo de saída
    const filename = 'pdf-generator.pdf';

    // Define o cabeçalho do response para fazer o download do arquivo
    res.setHeader('Content-disposition', `attachment; filename=${filename}`);
    res.setHeader('Content-type', 'application/pdf');

    return new Promise((resolve, reject) => {
        pdfDoc.getBuffer((buffer: any) => {
            resolve(buffer);
        });
    }); 
    pdfDoc.end();

}catch (e) {console.log(e);
}

    // Pipe o PDF gerado para o response
    // pdfDoc.pipe(res);

    // Finaliza o response quando o PDF estiver pronto
  }
}

export{ PdfGenerator } ;