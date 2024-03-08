import { useState } from 'react';

const useShortUrl = () => {
  const [url, setUrl] = useState('');
  const [shortURL, setShortURL] = useState('');
  const [showShortUrl, setShowShortUrl] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!url || url.length < 5) {
      setErrorMessage('La URL debe tener al menos 5 caracteres.');
      return;
    } else {
      setErrorMessage('');
    }

    try {
      const response = await fetch('/api/shortUrl', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url })
      });
      const data = await response.json();
      const fullShortUrl = `http://localhost:3000/${data.shortUrl}`;
      setShortURL(fullShortUrl);
      setShowShortUrl(true);
    } catch (error) {
      setErrorMessage('Hubo un error al procesar tu solicitud.');
    }
  };

  const handleReset = () => {
    setUrl('');
    setShortURL('');
    setShowShortUrl(false);
    setErrorMessage('');
  };

  return {
    url,
    setUrl,
    shortURL,
    showShortUrl,
    errorMessage,
    handleSubmit,
    handleReset,
  };
};

export default useShortUrl;