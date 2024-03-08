const CopyToClipboardButton = ({ textToCopy }) => {
    const handleCopy = () => {
      navigator.clipboard.writeText(textToCopy)
    };
  
    return (
      <button onClick={handleCopy}>Copiar URL</button>
    );
  };
  
  export default CopyToClipboardButton;