
const CopyButtom = () => {
    const copiarContenido = () => {
        const contenido = document.documentElement.innerHTML;
        navigator.clipboard.writeText(contenido);
        alert("El contenido se ha copiado al portapapeles");
      };
    
      return (
        <button onClick={copiarContenido}>
          Copiar Contenido
        </button>
      );
    };

export default CopyButtom