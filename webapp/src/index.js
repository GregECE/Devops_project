const express = require('express'); 
const path = require('path');
const app = express();
const port = 3000;

// Dossier public
app.use(express.static(path.join(__dirname, '..', 'public')));

// Route principale
app.get('/', (req, res) => {

    // Récupérer le CV choisi (GM par défaut)
    const selectedCV = req.query.cv === 'MA' ? 'CV_MA.png' : 'CV_GM.png';

    const title = selectedCV === 'CV_GM.png'
        ? "CV – Grégoire Marchal"
        : "CV – Michael Adda";

    const altText = selectedCV === 'CV_GM.png'
        ? "Curriculum Vitae de Grégoire Marchal"
        : "Curriculum Vitae de Michael Adda";

    const cvContent = `
        <!DOCTYPE html>
        <html lang="fr">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${title}</title>
            <style>
                body { 
                    margin: 0; 
                    padding: 20px; 
                    font-family: sans-serif; 
                    background-color: #f4f4f9; 
                    display: flex; 
                    flex-direction: column; 
                    align-items: center; 
                }
                h1 { 
                    color: #2c3e50; 
                    text-align: center; 
                    margin-bottom: 20px; 
                }
                /* Barre en haut */
                .top-bar {
                    width: 100%;
                    padding: 15px;
                    background-color: #2c3e50;
                    display: flex;
                    justify-content: center;
                    gap: 20px;
                    position: sticky;
                    top: 0;
                }
                .top-bar a {
                    color: white;
                    text-decoration: none;
                    font-weight: bold;
                }
                .top-bar a:hover {
                    text-decoration: underline;
                }
                .action-button {
                    display: inline-block;
                    padding: 10px 20px;
                    background-color: #3498db;
                    color: white;
                    text-decoration: none;
                    border-radius: 5px;
                    font-weight: bold;
                    transition: background-color 0.3s ease;
                }
                .action-button:hover {
                    background-color: #2980b9;
                }
                .cv-image-container {
                    width: 90%; 
                    max-width: 800px;
                    border: 1px solid #ccc;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                    border-radius: 8px;
                    overflow: hidden;
                    background-color: white;
                }
                .cv-image-container img {
                    width: 100%; 
                    height: auto;
                    display: block;
                }
            </style>
        </head>
        <body>

            <div class="top-bar">
                <a href="/?cv=GM">CV Grégoire Marchal</a>
                <a href="/?cv=MA">CV Michael Adda</a>
            </div>

            <h1>${title}</h1>

            <p>
                <a href="/${selectedCV}" target="_blank" class="action-button">
                    Ouvrir le CV en plein écran
                </a>
            </p>

            <div class="cv-image-container">
                <img src="/${selectedCV}" alt="${altText}">
            </div>

        </body>
        </html>
    `;

    res.send(cvContent);
});

// Healthcheck
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP' });
});

// Lancement serveur
const server = app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

module.exports = server;
