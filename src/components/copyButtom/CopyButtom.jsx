

const CopyButtom = () => {
    const copiarInformacion = () => {
        var informacion = '';
        var etiquetas = document.getElementsByTagName('label');
        for (var i = 0; i < etiquetas.length; i++) {
          informacion += etiquetas[i].innerText + ': ' + etiquetas[i].nextElementSibling.value + '\n';
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