import { User } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Send } from 'lucide-react';
import axios from 'axios';
import { useState } from 'react';

export function Contacts() {
  // form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // submit event
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      Name: name,
      Email: email,
      Message: message,
    };

    axios.post('https://api.sheetbest.com/sheets/101c2a96-608b-488d-b7a2-e04d2a99832c', data).then((response) => {
      console.log(response);
      // clearing form fields
      setName('');
      setEmail('');
      setMessage('');
      setIsSubmitted(true); // Update submission status to true

      // Hide message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false); // Set isSubmitted to false after 5 seconds
      }, 3000);
    });
  };

  return (
    <address style={{ margin: 0, padding: 0 }}>
      <div id="contactid" className="h-full w-full flex flex-col items-center justify-center">
        <div className="bg-sky-600 text-white w-full flex justify-center items-center py-10 px-4 md:px-20">
          <div className="w-full max-w-md md:max-w-lg lg:max-w-xl">
            <form autoComplete="off" className="form-group w-full flex flex-col gap-3" onSubmit={handleSubmit}>
              <h1 className="text-2xl md:text-4xl text-center">Contact Form</h1>

              <div className="flex items-center gap-2 bg-white rounded p-2">
                <User className="h-8 w-6 opacity-70 stroke-black" />
                <input
                  type="text"
                  name="your-name"
                  className="w-full text-black bg-transparent outline-none"
                  placeholder="Your Name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>

              <div className="flex items-center gap-2 bg-white rounded p-2">
                <Mail className="h-8 w-6 opacity-70 stroke-black" />
                <input
                  type="email"
                  name="your-mail"
                  className="w-full text-black bg-transparent outline-none"
                  placeholder="Your Email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>

              <div className="flex items-start gap-2 bg-white rounded p-2">
                <Send className="h-8 w-6 opacity-70 stroke-black" />
                <textarea
                  name="your-message"
                  className="h-20 w-full text-black bg-transparent outline-none"
                  placeholder="Your Message"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                />
              </div>

              <div className="flex justify-center">
                <button type="submit" className="bg-[#ff9e1e] py-2 px-8 rounded w-full">
                  Send
                </button>
              </div>

              {/* Conditionally render success message */}
              {isSubmitted && <p className="text-white mt-5 text-center font-bold text-xl">Your form is submitted!</p>}
            </form>
          </div>
        </div>

        <div className="w-full px-4 sm:px-10 md:px-20 lg:px-40 pb-20 bg-sky-600">
          <iframe
            className="w-full h-[200px] sm:h-[260px] md:h-[300px] rounded-box border-[2px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30776078.063939493!2d60.9180044792702!3d19.676597196316774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1720445878069!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </address>
  );
}
