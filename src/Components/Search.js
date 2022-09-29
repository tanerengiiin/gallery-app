import React, { useContext, useState } from 'react'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import MainContext from '../MainContext';
import Modal from 'react-modal';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import LandscapeOutlinedIcon from '@mui/icons-material/LandscapeOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import TagOutlinedIcon from '@mui/icons-material/TagOutlined';
import EmojiPicker from 'emoji-picker-react';
import InsertLinkRoundedIcon from '@mui/icons-material/InsertLinkRounded';
const Search = () => {
    const {searchingPhotos,setSearchingPhotos, photoDivider,search, setSearch, width, allPhotos,setAllPhotos, } = useContext(MainContext);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [selectedEmoji, setSelectedEmoji] = useState("😀")
    const [openEmojiClicker, setOpenEmojiClicker] = useState(false)
    const [inputSelectedImg, setInputSelectedImg] = useState();
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [place, setPlace] = useState("");
    const [tag, setTag] = useState("görsel");
    const [link, setLink] = useState("");
    const searchHandle = (e) => {
        var searchVal=e.target.children[0].value
        if (searchVal) {
            setSearch(searchVal)
            var newArray2 = JSON.parse(localStorage.getItem('photos')).filter(function (el) {
                return el.tag.startsWith(e.target.children[0].value);
            });
            setAllPhotos(newArray2)
            photoDivider()
        } else {
            setAllPhotos(JSON.parse(localStorage.getItem('photos')))
            setSearch("")
        }
        e.preventDefault();
        window.scrollTo(0, 0);
        window.scrollTo(0, document.querySelector(".search").offsetTop);
    }
    const toggleModal = () => {
        setIsOpen(!modalIsOpen)
    }
    const onEmojiClick = (emojiData, event) => {
        setSelectedEmoji(emojiData.emoji)
    }
    const onSelectFile = (e) => {
        setInputSelectedImg(URL.createObjectURL(e.target.files[0]))
    }
    const addNewImage = () => {
        if(link || inputSelectedImg){
            const img = {
                index: allPhotos.length,
                img: link ? link:inputSelectedImg,
                title: selectedEmoji+" "+title,
                desc: desc,
                place: place,
                date: "28.09.2022",
                tag: tag,
                fav: false
            }
            
            allPhotos.unshift(img);
            setAllPhotos(allPhotos)
            localStorage.setItem('photos', JSON.stringify(allPhotos));
            setIsOpen(false)
            photoDivider()
            setInputSelectedImg()
            setTitle()
            setDesc()
            setPlace()
            setTag()
            setLink()
        }else{
            
        }
        
    }
    return (
        <div className='search'>
            <Modal
                className={"about-modal about-modal-add"}
                overlayClassName={"about-modal-overlay about-modal-add-overlay"}
                isOpen={modalIsOpen}
                onRequestClose={toggleModal}

            >
                <div className='add-modal-top' onClick={() => setOpenEmojiClicker(false)}>
                    <p>Bir fotoğraf ekle</p>
                    <div className='modal-add-btn' onClick={addNewImage}>Bitir</div>
                </div>
                <div className='add-modal-main' >
                    <label className='add-modal-img'>
                        {!inputSelectedImg && <div style={{ textAlign: "center" }}>
                            <LandscapeOutlinedIcon />
                            <div className='select-img'>Fotoğraf Seç</div></div>}
                        <input type={"file"} accept="image/png, image/jpg, image/jpeg" onChange={onSelectFile} />
                        {inputSelectedImg && <img src={inputSelectedImg} alt='no' />}
                    </label>
                    <div className='add-modal-img-info'>
                        <div className='add-title add-input'>
                            <div className='select-emoji'>
                                <p onClick={() => setOpenEmojiClicker(!openEmojiClicker)}>{selectedEmoji}</p>
                                <div className='emoji-picker' style={{ display: openEmojiClicker ? "block" : "none" }}>
                                    <EmojiPicker height={400} width={300} onEmojiClick={onEmojiClick} />
                                </div>

                            </div>
                            <input placeholder='Başlık ekle...' maxLength="20" value={title} onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <textarea rows={width <= 900 ? 4 : 8} placeholder="Açıklama ekle..." maxLength="500" value={desc} onChange={(e) => setDesc(e.target.value)}>

                        </textarea>
                        <div className='add-place add-input'>
                            <input placeholder='Konum gir...' maxLength="20" value={place} onChange={(e) => setPlace(e.target.value)} />
                            <PlaceOutlinedIcon />
                        </div>
                        <div className='add-tag add-input'>
                            <input placeholder='Etiket gir...' maxLength="20" value={tag} onChange={(e) => setTag(e.target.value)} />
                            <TagOutlinedIcon />
                        </div>
                        <div className='add-tag add-input'>
                            <input placeholder='Link gir...' value={link} onChange={(e) => setLink(e.target.value)} />
                            <InsertLinkRoundedIcon />
                        </div>
                    </div>
                </div>
            </Modal>
            <div className='search_con'>
                <SearchRoundedIcon fontSize='large' />
                <div className='search_bar'>
                    <form onSubmit={searchHandle}>
                        <input type={"text"} placeholder="Fotoğraf ara..." />
                    </form>
                </div>
                <div className='search_add_photo' onClick={toggleModal}>Ekle</div>
            </div>
        </div>
    )
}

export default Search