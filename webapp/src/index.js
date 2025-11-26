const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const CV_FILENAME = 'CV_GM.png'; 


app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req, res) => {
    const cvContent = `
        <!DOCTYPE html>
        <html lang="fr">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Mon CV DevOps</title>
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
                .link { 
                    text-align: center; 
                    margin-bottom: 20px; 
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
                /* Style du conteneur de l'image pour un bel affichage */
                .cv-image-container {
                    width: 90%; 
                    max-width: 800px; /* Taille maximale pour desktop */
                    border: 1px solid #ccc;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                    border-radius: 8px;
                    overflow: hidden;
                    background-color: white;
                }
                /* Rendre l'image responsive */
                .cv-image-container img {
                    width: 100%; 
                    height: auto;
                    display: block;
                }
            </style>
        </head>
        <body>
            <h1>Mon CV DevOps</h1>
            <p class="link">
                <!-- Lien direct vers le PNG pour l'ouvrir en plein écran -->
                <a href="/${CV_FILENAME}" target="_blank" class="action-button">Ouvrir le CV en plein écran</a>
            </p>
            
            <!-- Affichage de l'image PNG du CV -->
            <div class="cv-image-container">
                <img src="/${CV_FILENAME}" alt="Curriculum Vitae de Grégoire Marchal">
            </div>

        </body>
        </html>
    `;
    res.send(cvContent);
});

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP' });
});

const server = app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

module.exports = server; 