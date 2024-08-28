const print = function (scriptName, text){
    const logs = document.getElementById('logs');
    const textNode = document.createTextNode('[' + scriptName + ']: ' + text);
    const br = document.createElement('br');

    logs.appendChild(textNode);
    logs.appendChild(br);
}
