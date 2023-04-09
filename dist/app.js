"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { PdfGenerator } = require("./pdf-generator.ts");
const cors = require('cors');
const $express = require('express');
const user = require('./models/User.model');
const db = require('./db/db.config');
const app = $express();
app.use(cors());
app.get('/', (req, res) => {
});
app.get('/generate-pdf', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const buffer = yield PdfGenerator.generatePdf(req, res);
    const filename = 'pdf-generator.pdf';
    // Envia o arquivo PDF para download
    res.set('Content-disposition', `attachment; filename=${filename}`);
    res.set('Content-type', 'application/pdf');
    res.send(buffer);
}));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
