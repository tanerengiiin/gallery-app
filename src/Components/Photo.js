import React, { useContext, useEffect, useState } from 'react'
import useWindowDimensions from '../useWindowDimensions';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import MainContext from '../MainContext';
import Modal from 'react-modal';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import TagRoundedIcon from '@mui/icons-material/TagRounded';
import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import DateRangeRoundedIcon from '@mui/icons-material/DateRangeRounded';
import ImageDetail from './ImageDetail';

const Photo = () => {

    const { searchingPhotos, setSearchingPhotos, photoDivider, search, setSearch, allPhotos, setAllPhotos, favs, setFavs, photoBox1, setPhotoBox1, photoBox2, setPhotoBox2, photoBox3, setPhotoBox3, showedIndex, setShowedIndex, height, width } = useContext(MainContext)

    const [modalIsOpen, setIsOpen] = useState(false);
    const [currentViewImage, setCurrentViewImage] = useState();
    const [viewIndex, setViewIndex] = useState(0);

    useEffect(() => {
        photoDivider()
    }, [width, showedIndex, allPhotos])

    const toggleModal = () => {
        setIsOpen(!modalIsOpen)
    }
    const handleToggle = (img, index) => {
        setIsOpen(true);
        setCurrentViewImage(img)
        setViewIndex(index);
    }
    const viewLeft = () => {
        if (viewIndex === 0) {
            setViewIndex(allPhotos.length - 1);
        } else {
            setViewIndex(viewIndex - 1)
        }
        setCurrentViewImage(allPhotos[viewIndex])
    }
    const viewRight = () => {
        if (viewIndex === allPhotos.length - 1) {
            setViewIndex(0);
        } else {
            setViewIndex(viewIndex + 1)
        }
        setCurrentViewImage(allPhotos[viewIndex])
    }
    const handleFav = (img_index) => {
        console.log(img_index)

        var newArray = allPhotos.filter(function (el) {
            return el.index === img_index;
        });
        newArray[0].fav = !newArray[0].fav;
        photoDivider()
        var newArray2 = allPhotos.filter(function (el) {
            return el.fav;
        });
        console.log(newArray2)
        setFavs(newArray2)
        localStorage.setItem('favs', JSON.stringify(newArray2));
        localStorage.setItem('photos', JSON.stringify(allPhotos));
    }
    const deleteImg = (img_index) => {
        if (window.confirm("Silmek istiyor musunuz?")) {
            const newArray = allPhotos.filter(function (el) {
                return el.index !== img_index
            })
            setAllPhotos(newArray)
            localStorage.setItem('photos', JSON.stringify(newArray));
            setIsOpen(false)
        }
        

    }
    Modal.setAppElement('#root');
    return (
        <div className='photo'>

            <Modal
                className={"about-modal about-modal-view"}
                overlayClassName={"about-modal-overlay"}
                isOpen={modalIsOpen}
                onRequestClose={toggleModal}
            >

                <div className='view-modal-top'>
                    <div className='view-modal-top-left'>
                        <div className='view-modal-btn' onClick={() => handleFav(currentViewImage.index)}>{currentViewImage?.fav ? <FavoriteRoundedIcon /> : <FavoriteBorderRoundedIcon />}<span>&nbsp;Favori</span></div>
                        <div className='view-modal-btn'><a href={currentViewImage?.img} target="_blank" download><FileDownloadOutlinedIcon /><span>&nbsp;İndir</span></a></div>
                        <div className='view-modal-btn' onClick={() => deleteImg(currentViewImage?.index)}><DeleteOutlineRoundedIcon /></div>
                    </div>
                    <div className='view-modal-top-right'>
                        <div><ArrowBackRoundedIcon onClick={viewLeft} /></div>
                        <div><ArrowForwardRoundedIcon onClick={viewRight} /></div>
                    </div>
                </div>
                <div className='view-modal-mid'>
                    <img src={currentViewImage?.img} alt='no' />
                </div>
                <div className='view-modal-bottom'>
                    <h2>{currentViewImage?.title}</h2>
                    <p>{currentViewImage?.desc}</p>
                    <div className='fav_img_detail'>
                        {currentViewImage?.tag && <div className='img_dt fav_img_tag'>
                            <TagRoundedIcon />
                            <span>{currentViewImage?.tag}</span>
                        </div>}

                        {currentViewImage?.place && <div className='img_dt fav_img_place'>
                            <PlaceOutlinedIcon />
                            <span>{currentViewImage?.place}</span>
                        </div>}

                        {currentViewImage?.date && <div className='img_dt fav_img_date'>
                            <DateRangeRoundedIcon />
                            <span>{currentViewImage?.date}</span>
                        </div>}

                    </div>
                </div>
            </Modal>

            <div className='search_result'>
                
                <h2>{search ? "#" + search + " için arama sonuçları" : "Tüm Fotoğraflar"}</h2>
                <p>{allPhotos.length === 0 ? "Sonuç bulunamadı" : allPhotos.length + " tane sonuç bulundu"} </p>
            </div>
            <div className='photo-con'>
                <div className='photo-box'>
                    {photoBox1.map((img, index) => (
                        <ImageDetail key={index} img={img} handleFav={handleFav} handleToggle={handleToggle} />
                    ))}

                </div>
                <div className='photo-box'>
                    {photoBox2.map((img, index) => (
                        <ImageDetail key={index} img={img} handleFav={handleFav} handleToggle={handleToggle} />
                    ))}
                </div>
                {width >= 900 && <div className='photo-box'>
                    {photoBox3.map((img, index) => (
                        <ImageDetail key={index} img={img} handleFav={handleFav} handleToggle={handleToggle} />
                    ))}
                </div>}

            </div>
            {showedIndex < allPhotos.length && <div className='add-more-photo' onClick={() => setShowedIndex(showedIndex + 10)}>Daha fazla yükle</div>}

        </div>
    )
}

export default Photo