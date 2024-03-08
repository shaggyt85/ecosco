

const CopyButtom = () => {
    const copiarInformacion = () => {
        var informacion = '';
        var etiquetas = document.getElementsByTagName('label');
        for (var i = 0; i < etiquetas.length; i++) {
          informacion += etiquetas[i].innerText + ': ' + etiquetas[i].nextElementSibling.value + '\n';
        }
        var h2Tags = document.getElementsByTagName('h2');
    for (var j = 0; j < h2Tags.length; j++) {
      informacion += h2Tags[j].innerText + '\n';
    }
        navigator.clipboard.writeText(informacion);
        alert("La información se ha copiado al portapapeles");
      };
    
      return (
        <button onClick={copiarInformacion}>
          Copiar Información
        </button>
      );
    };

export default CopyButtom