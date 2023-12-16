import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Contact({ listing }) {
  const [landlord, setLandlord] = useState(null);
  const [message, setMessage] = useState("");
  const onChange = (e) => setMessage(e.target.value);

  useEffect(() => {
    const fetchLandlord = async () => {
      try {
        const response = await fetch(`/api/user/${listing.userRef}`);
        const data = await response.json();
        setLandlord(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchLandlord();
  }, [listing.userRef]);

  return (
    <>
      {landlord && (
        <div className="flex flex-col gap-2">
          <p>
            Contact <span className="font-semibold">{landlord.username}</span>{" "}
            for{" "}
            <span className="font-semibold">{listing.title.toLowerCase()}</span>
          </p>
          <textarea
            name="message"
            id="message"
            rows="2"
            value={message}
            onChange={onChange}
            placeholder="Message..."
            className="border border-gray-300 rounded-md p-2"
          ></textarea>
          <Link
            to={`mailto:${landlord.email}?subject=Regarding ${listing.title}&body=${message}`}
            className="bg-slate-700 text-white uppercase hover:opacity-95 rounded-lg p-2 text-center"
          >
            Send Message
          </Link>
        </div>
      )}
    </>
  );
}
