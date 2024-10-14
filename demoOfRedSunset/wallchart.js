export function setupWallChart() {
    
    document.getElementById('returnButton').addEventListener('click', handleReturnToMainScene);

    
   

}


function handleReturnToMainScene() {
    document.getElementById('wallChartScene').style.display = 'none';

    document.body.style.backgroundImage = `url("images/gamebackground.PNG")`;

    document.getElementById('mainScene').style.display = 'block';

    document.getElementById('returnButton').style.display = 'none';


}