import { useState } from 'react';
import { FaFileDownload } from 'react-icons/fa'
import React from 'react';
import QRCode from 'react-qr-code';
import QRCodeLink from 'qrcode';
import './App.css';

function App() {
  const [url, setUrl] = useState('');
  const [qrcodeLink, setQrcodeLink] = useState('');

  const handleGenerate = (link) => {
    QRCodeLink.toDataURL(link, {
      width: 600,
      margin: 3
    }, (err, url) => {
      setQrcodeLink(url);
    })
  }

  const handleQRcode = (e) => {
    setUrl(e.target.value);
    handleGenerate(e.target.value);
  }

  return (
    <div className="app">
      <h1>:: QRCODE GEN ::</h1>
      <QRCode value={url}></QRCode>
      <input className="input form-control" placeholder='https://www.youtube.com/watch?v=' onChange={event => handleQRcode(event)}></input>
      {url === '' ? <span className='span'>Aguardando link...</span> : <a href={qrcodeLink} download={'qrcode.png'}> <FaFileDownload></FaFileDownload> </a>}

    </div>
  );
}

export default App;
