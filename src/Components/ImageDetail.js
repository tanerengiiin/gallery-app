import React from 'react'
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
const ImageDetail = ({img,handleToggle,handleFav}) => {
    return (
        <div className='photo-box-img' onClick={(e) => {handleToggle(img, img.index);}}>
            <img src={img?.img} alt="no" />
            <div className='photo-box-hover'>
                <div className='photo-hover-detail'>
                    <h3>{img?.title}</h3>
                    <div className='fav-btn' onClick={(e) =>{e.stopPropagation();  handleFav(img?.index);}}>
                        {img.fav ? <FavoriteRoundedIcon /> : <FavoriteBorderRoundedIcon />}
        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageDetail