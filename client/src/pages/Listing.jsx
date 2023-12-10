import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css/bundle";

SwiperCore.use([Navigation]);

const Listing = () => {
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const params = useParams();

  useEffect(() => {
    const fetchListing = async () => {
      try {
        const response = await fetch(`/api/listing/get/${params.listingId}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setListing(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(true);
        setLoading(false);
      }
    };
    fetchListing();
  }, [params.listingId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading listing</div>;
  }

  if (!listing) {
    return <div>Listing not found</div>;
  }

  return (
    <main>
      <Swiper navigation>
        {listing.imageUrls.map((url) => (
          <SwiperSlide key={url}>
            <div
              style={{
                height: "400px",
                background: `url(${url}) center no-repeat`,
                backgroundSize: "cover",
              }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
};

export default Listing;
