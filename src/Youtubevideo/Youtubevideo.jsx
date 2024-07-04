import "./Youtubevideo.css";

function Youtubevideo() {
  return (
    <div className="main-container">
      <div className="video-section">
        <iframe
          width="640"
          height="350"
          src="https://www.youtube.com/embed/IZLp-TZyDkQ?si=-kOCZBhM-B7i0C5Y&start=2"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="list-section">
        <div className="list-header">
          <span className="buyer">Buyer</span>
          <span className="supplier">Supplier</span>
        </div>
        <ul className="list-items">
          <li>Post your requirements.</li>
          <li>Sit back for multiple suppliers to contact you.</li>
          <li>Choose among the suppliers based on the ratings and reviews.</li>
        </ul>
      </div>
    </div>
  );
}

export default Youtubevideo;
