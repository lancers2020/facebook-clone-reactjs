import React from 'react';

function Avatar({ image, alt, size, type = 'default', radius }) {
  const renderType = () => {
    switch (type) {
      case 'default':
        return renderDefault();
      case 'notification':
        return renderNotif();
      case 'online':
        return renderOnline();
      default:
        renderDefault();
    }
  };

  const renderDefault = () => {
    return null;
  };
  const renderOnline = () => {
    return <div className='greenDot' />;
  };
  const renderNotif = () => {
    return <div className='redDot' />;
  };
  return (
    <div>
      {type && renderType()}
      <img
        src={image}
        alt={alt}
        style={{ height: size, width: size, borderRadius: radius }}
      />
    </div>
  );
}

export default Avatar;
