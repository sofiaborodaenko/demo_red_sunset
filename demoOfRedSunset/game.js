import { setupWallChart } from './wallchart.js';
import { setupNewsPaper } from './newspaper.js';
import { setupGlobe } from './globe.js';
import { setupPhone } from './phone.js';
import { setupSpreadsheet } from './spreadsheet.js';
import { setupPolicyFolders } from './policyfolders.js';

function initializeGame() {
    document.getElementById('wallchart').addEventListener('click', handleWallChartClick);
    document.getElementById('newspaper').addEventListener('click', handleNewsPaperClick);
    document.getElementById('globe').addEventListener('click', handleGlobeClick);
    document.getElementById('phone').addEventListener('click', handlePhoneClick);
    document.getElementById('spreadsheet').addEventListener('click', handleSpreadsheetClick);
    document.getElementById('policyfolders').addEventListener('click', handlePolicyFoldersClick);
}

function switchScene(hideSceneId, showSceneId, newSceneBackground) {
    // hides the main scene
    document.getElementById(hideSceneId).style.display = 'none';

    //changes background
    document.body.style.backgroundImage = `url(${newSceneBackground})`;

    //shows the wallchart scene
    document.getElementById(showSceneId).style.display = 'block';

    //show return button
    document.getElementById('returnButton').style.display = 'block';
        
}

function handleWallChartClick() {
    switchScene('mainScene', 'wallChartScene', 'images/beigeBackground.avif');

    setupWallChart();

}

function handleNewsPaperClick() {
    switchScene('mainScene', 'newsPaperScene', 'images/darkBeige.jpg');

    setupNewsPaper();
}

function handleGlobeClick() {
    switchScene('mainScene', 'globeScene', 'images/green.jpg');

    setupGlobe();
}

function handlePhoneClick() {
    switchScene('mainScene', 'phoneScene', 'images/blue.jpg');

    setupPhone();
}

function handleSpreadsheetClick() {
    switchScene('mainScene', 'spreadsheetScene', 'images/pink.webp');

    setupPhone();
}

function handlePolicyFoldersClick() {
    switchScene('mainScene', 'spreadsheetScene', 'images/pink.webp');

    setupPolicyFolders();
}


document.addEventListener('DOMContentLoaded', initializeGame);