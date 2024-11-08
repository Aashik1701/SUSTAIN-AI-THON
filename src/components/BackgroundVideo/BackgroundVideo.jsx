// src/BackgroundVideo.jsx


const BackgroundVideo = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-[-1]">
      <video autoPlay loop muted className="min-w-full min-h-full object-cover">
        <source src="../../assets/SpaceBG.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;