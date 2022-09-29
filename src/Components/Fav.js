import React, { useContext, useEffect, useState } from 'react'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import TagRoundedIcon from '@mui/icons-material/TagRounded';
import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import DateRangeRoundedIcon from '@mui/icons-material/DateRangeRounded';
import useWindowDimensions from '../useWindowDimensions';
import MainContext from '../MainContext';


const Fav = () => {
    // const favsArr = [
    //     {
    //         index: 1,
    //         img: "https://images.unsplash.com/photo-1664237941200-0c9279ccd3a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80",
    //         title: "😃 Pariste çektiğim fotoğraf",
    //         desc: "Paris sokaklarından gözüken eyfel kulesi, gezerken çok keyif aldım",
    //         place: "Paris",
    //         date: "27.09.2022",
    //         tag: "gezi",
    //         fav: true
    //     },
    //     {
    //         index: 2,
    //         img: "https://images.unsplash.com/photo-1664230388413-5e90d32b8d68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    //         title: "😃 Çok mutluyum",
    //         desc: "Evlilk yıl dönümü",
    //         place: "Türkiye",
    //         date: "27.09.2022",
    //         tag: "aşk",
    //         fav: true
    //     },
    //     {
    //         index: 3,
    //         img: "https://images.unsplash.com/photo-1664199152427-942aabc8b56d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=491&q=80",
    //         title: "😃 Almanya",
    //         desc: "Hergün yağışlı",
    //         place: "Almanya",
    //         date: "27.09.2022",
    //         tag: "gezi",
    //         fav: true
    //     },
    //     {
    //         index:17,
    //         img: "https://images.unsplash.com/photo-1664223900999-c9db196863f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
    //         title: "😃 Almanya",
    //         desc: "Hergün yağışlı",
    //         place: "Almanya",
    //         date: "27.09.2022",
    //         tag: "gezi",
    //         fav: false
    //     },
    //     {
    //         index:18,
    //         img: "https://images.unsplash.com/photo-1662697793998-fd3a95fc1dd4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
    //         title: "😃 Almanya",
    //         desc: "Hergün yağışlı",
    //         place: "Almanya",
    //         date: "27.09.2022",
    //         tag: "gezi",
    //         fav: false
    //     },
    //     {
    //         index:19,
    //         img: "https://images.unsplash.com/photo-1664262283606-d4e198491656?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
    //         title: "😃 Almanya",
    //         desc: "Hergün yağışlı",
    //         place: "Almanya",
    //         date: "27.09.2022",
    //         tag: "gezi",
    //         fav: false
    //     },
    //     {
    //         index:20,
    //         img: "https://images.unsplash.com/photo-1664276353817-c0a46d67be42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
    //         title: "😃 Almanya",
    //         desc: "Hergün yağışlı",
    //         place: "Almanya",
    //         date: "27.09.2022",
    //         tag: "gezi",
    //         fav: false
    //     }
    // ]
    const {favs, setFavs}=useContext(MainContext);
    const { height, width } = useWindowDimensions();
    const [index, setIndex] = useState(0);
    const [currentFav, setCurrentFav] = useState(favs[index]);
    const [littlePicArr, setLittlePicArr] = useState([]);
    const [middleLittle,setMiddleLittle]=useState(2);
    const increaseCurrent = (num) => {

        if (index === favs.length - num) {
            setIndex(0);
        } else {
            setIndex(index + num)
        }
    }
    const decreaseCurrent = (num) => {
        if (index === 0) {
            setIndex(favs.length - num);
        } else {
            setIndex(index - num)
        }
    }
    useEffect(() => {
        setCurrentFav(favs[index])
        littlePic()

    }, [index,favs])

    const littlePic = () => {
        var arr = []
        
        if (favs.length >= 5 && width>1100) {
            setMiddleLittle(2);
            if (index === 0) {
                arr.push(favs[favs.length - 2])
                arr.push(favs[favs.length - 1])
            } else {
                arr.push(favs[index - 2])
                arr.push(favs[index - 1])
            }
            arr.push(favs[index])
            if (index === favs.length - 1) {
                arr.push(favs[0])
                arr.push(favs[1])
            } else {
                arr.push(favs[index + 1])
                arr.push(favs[index + 2])
            }
            setLittlePicArr(arr)
        } else if (favs.length >= 3) {
            setMiddleLittle(1);

            if (index === 0) {
                arr.push(favs[favs.length - 1])
            } else {
                arr.push(favs[index - 1])
            }
            arr.push(favs[index])
            if (index === favs.length - 1) {
                arr.push(favs[0])
            } else {
                arr.push(favs[index + 1])
            }
            setLittlePicArr(arr)
        }
    }
    const littlePicClick=(pop_index)=>{
        if(middleLittle===2){
            if(pop_index===0){
            decreaseCurrent(2)
        }else if(pop_index===1){
            decreaseCurrent(1)
        }else if(pop_index===3){
            increaseCurrent(1)
        }else if(pop_index===4){
            increaseCurrent(2)
        }
        }else{
            if(pop_index===0){
                decreaseCurrent(1)
            }else if(pop_index===2){
                increaseCurrent(1)
            }
        }
        
    }
    useEffect(()=>{
        littlePic()
    },[width])
    return (
        
        <div className='fav'>
            <div className='fav_arr' onClick={()=>decreaseCurrent(1)}><ArrowBackRoundedIcon fontSize='large' /></div>
            <div className='fav_main'>
                <div className='fav_main_back'>
                    <img src={currentFav?.img} alt='no' />
                    <div className='fav_main_back_opc'></div>
                </div>
                <div className='fav_img'>
                    <img src={currentFav?.img} alt='no-fav-img' />
                </div>
                <div className='fav_img_info'>
                    <h3>Favoriler</h3>
                    <h2>{currentFav?.title}</h2>
                    <p>{currentFav?.desc}</p>
                    <div className='fav_img_detail'>
                        {currentFav?.tag && <div className='img_dt fav_img_tag'>
                            <TagRoundedIcon />
                            <span>{currentFav?.tag}</span>
                        </div>}
                        {currentFav?.place && <div className='img_dt fav_img_place'>
                            <PlaceOutlinedIcon />
                            <span>{currentFav?.place}</span>
                        </div>}
                        {currentFav?.date && <div className='img_dt fav_img_date'>
                            <DateRangeRoundedIcon />
                            <span>{currentFav?.date}</span>
                        </div>}
                        
                    </div>
                    {littlePicArr &&
                        <div className='fav_img_info_bottom' >
                            {littlePicArr.map((fav_img,pop_index) => (
                                
                                <div key={fav_img?.index} className='fav_little_pic' onClick={()=>littlePicClick(pop_index)}>
                                    {middleLittle ===pop_index ?
                                    <img src={fav_img?.img} style={{opacity: 1, transform:"scale(1.2)"}}  alt='no' />:
                                    <img src={fav_img?.img}  alt='no' />
                                    }
                                    
                                </div>
                            ))}
                        </div>
                    }
                    {/* <div className='fav_progress'>
                        <div className='fav_progress_bar'> </div>
                    </div> */}


                </div>
            </div>
            <div className='fav_arr' onClick={()=>increaseCurrent(1)}><ArrowForwardRoundedIcon fontSize='large' /></div>
        </div>
    )
}

export default Fav