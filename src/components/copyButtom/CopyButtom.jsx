
const CopyButton = () => {
  const copiarInformacion = () => {
    let informacion = '';

    const h3Tags = document.getElementsByTagName('h3');
    for (let i = 0; i < h3Tags.length; i++) {
      informacion += h3Tags[i].innerText + '\n';
    }

    const labels = document.getElementsByTagName('label');
    for (let k = 0; k < labels.length; k++) {
      informacion += labels[k].innerText + ': ' + labels[k].nextElementSibling.value + '\n';
    }

    const h2Tags = document.getElementsByTagName('h2');
    for (let j = 0; j < h2Tags.length; j++) {
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

export default CopyButton;