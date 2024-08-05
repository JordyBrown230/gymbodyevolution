import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = [
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/b9/5d/c6/enjoying-tree-tops-view.jpg?w=1200&h=-1&s=1",
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/b9/5d/c6/enjoying-tree-tops-view.jpg?w=1200&h=-1&s=1",
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/b9/5d/c6/enjoying-tree-tops-view.jpg?w=1200&h=-1&s=1",
];

function App() {
  return (
    <div className="box">
      <Carousel useKeyboardArrows={true} >
        {images.map((URL, index) => (
          <div className="slide" key={index}>
            <img alt={`sample_file_${index}`} src={URL} style={{
              borderRadius: '15px',
              width: '100%',
              height: 'auto',
              maxHeight: '400px',
              objectFit: 'cover',
            }} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default App;
