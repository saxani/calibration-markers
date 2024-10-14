const Video = () => {
  return (
    <div style={{ marginBottom: '30px' }}>
      <iframe
        width='100%'
        height='295px'
        src='https://www.youtube.com/embed/sZySZbXTD6k?si=_tVPuepY-aQFKo3L'
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        referrerPolicy='strict-origin-when-cross-origin'
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;
