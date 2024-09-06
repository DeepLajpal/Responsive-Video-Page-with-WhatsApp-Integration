import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import partyPopper from "../assets/party-popper.gif";

const AcknowledgmentPage = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(5);

  useEffect(() => {
    const formData = JSON.parse(localStorage.getItem("FormData"));
    
    if (!formData) {
      navigate('/');
      return;
    }

    const { name, email, phoneNumber, query } = formData;
    
    // Structuring the message with bold labels and new lines for each field
    const message = `*Name:* ${name}\n*Email:* ${email}\n*Phone Number:* ${phoneNumber}\n*Query:* ${query}`;
    const encodedURLMessage = encodeURIComponent(message);
    const whatsappAPIUrl = `https://wa.me/917065114127?text=${encodedURLMessage}`;

    const intervalId = setInterval(() => {
      setCount(prevCount => {
        if (prevCount <= 1) {
          clearInterval(intervalId);
          window.open(whatsappAPIUrl, '_blank');
          localStorage.removeItem("FormData");
          navigate('/');
          return 0; 
        }
        return prevCount - 1;
      });
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <img 
        src={partyPopper} 
        alt="Party Popper" 
        className="w-16 h-16 sm:w-24 sm:h-24 md:w-34 md:h-34 lg:w-38 lg:h-38 mb-4"
      />
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">Thank You!</h1>
      <p className="text-center text-base sm:text-lg md:text-xl text-gray-700 mb-4">
        Your submission has been received. You are now being redirected to WhatsApp.
      </p>
      <p className="text-lg sm:text-xl md:text-2xl font-semibold">{count > 0 ? count : 0}</p>
    </div>
  );
};

export default AcknowledgmentPage;
