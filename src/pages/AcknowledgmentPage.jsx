import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AcknowledgmentPage = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(3);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(count - 1);
    }, 1000)

    const formData = JSON.parse(localStorage.getItem("FormData"));
    if (formData) {
      const { name, email, phoneNumber } = formData;
      const message = `Hello, I am ${name}. My email is ${email} and my phone number is ${phoneNumber}.`;
      const encodedURLMessage = encodeURIComponent(message);
      console.log("encodedURLMessage", encodedURLMessage)
      const whatsappAPIUrl = `https://wa.me/${phoneNumber}?text=${encodedURLMessage}`
      if (count <= 0) {
        // window.location.href = whatsappAPIUrl;
        window.open(whatsappAPIUrl, '_blank');
        clearInterval(intervalId);
        localStorage.removeItem("FormData");
      }
    } else {
      navigate('/');
      setCount(3);
    }
  }, [navigate, count ])
  return (
    <div className="text-center p-4">
      <h1 className="text-2xl font-bold mb-2">Thank You!</h1>
      <p>Your submission has been received. You are now being redirected to WhatsApp.</p>
      <p>{count}</p>
    </div>
  );
};

export default AcknowledgmentPage;
