const generateHTML = (pageName) => {
    return `
        <div class="main">
        <style>
            h1 {text-align: center;}
        </style>
          <h1>Stop Procastinating</h1>
          
        </div>
        <body style="background-color:blue;text-align:center">
            Go and study
        </body>`;
};




switch (window.location.hostname) {
    case "www.youtube.com":
        document.body.innerHTML = generateHTML("YOUTUBE");
        alert("this is youtube");
        break;
    
}