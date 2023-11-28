import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { images } from '../utils/images';

const MyGallery = () => {
  return <ImageGallery items={images} />;
};

export default MyGallery;
