const RegisterButton = () => {
  const gformLink = "https://docs.google.com/forms/d/e/1FAIpQLSdl-S3aRY5QkRyO1Mr5ulZ4feQY6OR--x9dMRybCh6NDbUc5w/viewform?usp=sf_link"; // Replace with your actual Google Form link

  const handleRegisterClick = () => {
    window.open(gformLink, "_blank"); // Open the Google Form in a new tab
  };

  return (
    <button 
      onClick={handleRegisterClick} 
      className="mt-4 bg-transparent border-2 border-white hover:bg-white hover:text-black hover:border-green-500 transition duration-300 ease-in-out text-white font-bold py-2 px-4 rounded"
    >
      Register Now
    </button>
  );
};

export default RegisterButton;