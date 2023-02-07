import './styles/photo.style.css';
import ImageUploading from 'react-images-uploading';
import { useDispatch, useSelector } from 'react-redux';
import { selectPhoto } from '../../store/personalInfo/personalInfo.select';
import { setImage } from '../../store/personalInfo/personalInfo.actions';
import { ValidationIcons } from '../alerts/validationIcons';
import { useState } from 'react';

export const Photo = ({validate}) => {
  const image = useSelector(selectPhoto);
  const maxMbFileSize = 5 * 1024 * 1024;
  const dispatch = useDispatch();
  const [valPhoto, setValPhoto] = useState(false)


  const uploadImage = (value) => {
    dispatch(setImage({image: value[0]['data_url'], name: value[0]['file']['name']}));
    // dispatch(setImage(null))
    setValPhoto(true)
  }

  return (
    <div className="flex justify-items-start space-x-5">
      <div className="flex justify-center items-center">
        <h1 id="photo-label">პირადი ფოტოს ატვირთვა</h1>
      </div>
      <ImageUploading
        onChange={uploadImage}
        dataURLKey="data_url"
        acceptType={["jpg", "png"]}
        maxFileSize={maxMbFileSize}
        >
        
        {({image, onImageUpload}) => <button 
              id='photo-button'
              className='primary'
              onClick={onImageUpload}
            >
              <span id="photo-text">ატვირტვა</span>
            </button>}
        </ImageUploading>
        
        <span>{image ? image.name : <ValidationIcons validate={valPhoto || validate} val="" />  }</span>
        
    </div>
  )
}