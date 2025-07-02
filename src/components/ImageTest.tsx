import React from 'react';
import pushviLogo from '../assets/pushvi-logo.png';
import founderPhoto from '../assets/founder.png';

export const ImageTest: React.FC = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: 'white' }}>
      <h1>IMAGE TEST PAGE</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <h2>Logo (Known Working):</h2>
        <img 
          src={pushviLogo} 
          alt="Logo" 
          style={{ width: '200px', height: '200px', border: '3px solid green', display: 'block' }}
          onLoad={() => console.log('✅ Logo loaded')}
          onError={() => console.log('❌ Logo failed')}
        />
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <h2>Founder Photo (Testing):</h2>
        <img 
          src={founderPhoto} 
          alt="Founder" 
          style={{ width: '200px', height: '200px', border: '3px solid red', display: 'block' }}
          onLoad={() => console.log('✅ Founder photo loaded')}
          onError={() => console.log('❌ Founder photo failed')}
        />
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <h2>Image Sources:</h2>
        <p>Logo: {pushviLogo}</p>
        <p>Founder: {founderPhoto}</p>
      </div>
    </div>
  );
};