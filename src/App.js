import { useContext, useEffect, useState } from 'react';
import './App.css';
import Fav from './Components/Fav';
import Photo from './Components/Photo';
import Search from './Components/Search';
import MainContext from './MainContext';
import useWindowDimensions from './useWindowDimensions';

function App() {
    const allPhotos2 = [
        {
            date: "28.09.2022",
            fav: true,
            img: "https://images.unsplash.com/photo-1616595286596-f0b561c76bc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWV0cm98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            , index: 22,
            place: "Japonya",
            tag: "gezi",
            title: "🚃 METRO"
        },
        {
            date: "28.09.2022",
            desc: "İstanbul bir başka güzel, muhteşem tramvay",
            fav: true,
            img: "https://images.unsplash.com/photo-1554041430-50938af8938d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGlzdGFuYnVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            , index: 21,
            place: "İstanbul",
            tag: "gezi",
            title: "😀 İstanbul"
        },
        {
            date: "28.09.2022",
            fav: false,
            img: "https://images.unsplash.com/photo-1605558162119-2de4d9ff8130?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGhvcml6b250YWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            , index: 20,
            tag: "gezi",
            title: "😻 undefined"
        },
        {
            date: "28.09.2022",
            desc: "",
            fav: true,
            img: "https://images.unsplash.com/photo-1568402028652-297e5f6fd07d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGljb25pY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            , index: 19,
            place: "Paris",
            tag: "gezi",
            title: "😀 Eyfel"
        },
        {
            date: "28.09.2022",
            desc: "",
            fav: true,
            img: "https://images.unsplash.com/photo-1653108835062-4e8f9b3332b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pdGthYmlyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            , index: 18,
            place: "Ankara",
            tag: "ata",
            title: "❤️ ANITKABİR"
        },
        {
            date: "28.09.2022",
            desc: "Golden gate'in inanılmaz görüntüsü",
            fav: true,
            img: "https://images.unsplash.com/photo-1616912059100-05fe643ee63d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGFtZXJpY2F8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            , index: 17,
            place: "USA",
            tag: "gezi",
            title: "🌉 Golden GAte"
        },
        {
            date: "28.09.2022",
            fav: true,
            img: "https://images.unsplash.com/photo-1604108415419-6d4bd73a1c2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zm9yZCUyMHRydWNrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            , index: 16,
            place: "Amerika",
            tag: "araba",
            title: "🚙 Ford Truck"
        },
        {
            date: "28.09.2022",
            desc: "Porsche'nin ürettiği yeni elektrkli araba TAYCAN çok güzel duruyor",
            fav: true,
            img: "https://images.unsplash.com/photo-1615839338936-169c8cdc9564?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dGF5Y2FufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            , index: 15,
            place: "Almanya",
            tag: "araba",
            title: "🚙 Yeni Porsche"
        },
        {
            date: "28.09.2022",
            desc: "İsveçte bir göl",
            fav: true,
            img: "https://images.unsplash.com/photo-1664392171684-c4ebf0a2e1a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            , index: 14,
            place: "İsveç",
            tag: "gezi",
            title: "❄️ LAKEEE"
        },
        {
            date: "28.09.2022",
            desc: "",
            fav: true,
            img: "https://images.unsplash.com/photo-1664399048400-a63c40b2f951?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            , index: 13,
            place: "İsveç",
            tag: "gezi",
            title: "🗻 Kar Yağıyor"
        },
        {
            date: "28.09.2022",
            desc: "Edit yapmayı öğreniyorum ve görsel efekt uyguladığım bir fotoğraf, neon efekti çok hoş",
            fav: true,
            img: "https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmVvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            , index: 12,
            place: "Japonya",
            tag: "gezi",
            title: "🌃 Edit yapmayı öğrendi"
        },
        {
            date: "28.09.2022",
            desc: "Bu kuşlar çok tatlı oluyorr",
            fav: true,
            img: "https://images.unsplash.com/photo-1648398476212-6a5a77353e32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNvY2thdGllbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            , index: 11,
            tag: "hayvan",
            title: "🦜 Çok tatttlııı"
        },
        {
            date: "28.09.2022",
            desc: "Kiviler çok güzel duruyorr.....",
            fav: true,
            img: "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGZydWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            , index: 10,
            tag: "meyve",
            title: "🥝 Kivilerrrr"
        },
        {
            date: "28.09.2022",
            desc: "Cevizler çok güzel duruyor bir an önce yemek istiyorum",
            fav: true,
            img: "https://images.unsplash.com/photo-1663230846484-a357e5df4c14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
            , index: 9,
            tag: "meyve",
            title: "🥥 Cevizler oluyor"
        },
        {
            date: "28.09.2022",
            desc: "",
            fav: false,
            img: "https://images.unsplash.com/photo-1663657471161-30b3d75d82cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
            , index: 14,
            place: "Afrika",
            tag: "gezi",
            title: "🐘 AAAA Fil"
        },
        {
            date: "28.09.2022",
            desc: "İsveç'te karşılaştığımız bir ev, adeta orman ile ev birleşmiş",
            fav: true,
            img: "https://images.unsplash.com/photo-1664096555683-3bd2d1ce9352?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNzR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
            , index: 13,
            place: "İsveç",
            tag: "gezi",
            title: "⛰️ Gizli Ev"
        },
        {
            date: "28.09.2022",
            desc: "Tayvan'a geziye gittiğimizde sokakta bu tarz satıcılar vardı",
            fav: false,
            img: "https://images.unsplash.com/photo-1664155942208-a4792a4be4a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
            , index: 12,
            place: "Tayvan",
            tag: "gezi",
            title: "🌈 Sokak satıcısı"
        },
        {
            date: "28.09.2022",
            desc: "İtalya'daki kafenin ışıkları gerçekten çok göz alıcı, buraya mutlaka uğrayın ve birasını tadın",
            fav: true,
            img: "https://images.unsplash.com/photo-1664236731665-b0d6b176d45d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
            , index: 5,
            place: "İtalya",
            tag: "gezi",
            title: "🌻 İtalya kafe"
        },
        {
            date: "28.09.2022",
            desc: "Kazakistan'da gezerken birkaç tane midililiye rastladık gerçekten çok tatlılar",
            fav: true,
            img: "https://images.unsplash.com/photo-1664261934197-c71d92027f5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4OHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
            , index: 4,
            place: "Kazakistan",
            tag: "gezi",
            title: "🌻 Step Midillileri"
        },
        {
            date: "28.09.2022",
            desc: "İsveçte gezi turunda karşılaştığımız masmavi göl ve ona eşlik eden orman",
            fav: false,
            img: "https://images.unsplash.com/photo-1664154026818-b49c159c91d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
            , index: 4,
            place: "İsveç",
            tag: "gezi",
            title: "😀 İsveç Masmavi Göl"
        },
        {
            date: "28.09.2022",
            desc: "Dubai'deki gökdelenlerin muhteşem görüntüleri",
            fav: false,
            img: "https://images.unsplash.com/photo-1664353655151-9d94a9170eb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
            , index: 3,
            place: "Dubai",
            tag: "gezi",
            title: "🌏 Dubai Gökdelenleri"
        },
        {
            date: "28.09.2022",
            desc: "İtalya'da ulaşımı rahatlatan metrolar var biraz kalabalık",
            fav: true,
            img: "https://images.unsplash.com/photo-1664308241307-2991c4feff37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
            , index: 2,
            place: "İtalya",
            tag: "gezi",
            title: "👍 İtalya'daki Metro"
        },
        {
            date: "28.09.2022",
            desc: "Viyanadaki geiz turlarından birisi ",
            fav: true,
            img: "https://images.unsplash.com/photo-1664306735166-b74791913a40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
            , index: 1,
            place: "Viyana",
            tag: "gezi",
            title: "👍 Viyana Kano Turu"
        },
    ]
    const [search, setSearch] = useState("");
    const [allPhotos, setAllPhotos] = useState([]);
    const [allPhotosYedek,setAllPhotosYedek]=useState(allPhotos2)
    const [favs, setFavs] = useState([])
    const [photoBox1, setPhotoBox1] = useState([]);
    const [photoBox2, setPhotoBox2] = useState([]);
    const [photoBox3, setPhotoBox3] = useState([]);
    const [showedIndex, setShowedIndex] = useState(10);
    const [searchingPhotos, setSearchingPhotos] = useState([])
    const { height, width } = useWindowDimensions();
    const photoDivider = () => {
        if (width > 900) {
            var arr1 = [];
            var arr2 = [];
            var arr3 = [];
            for (let i = 0; i < allPhotos.length && i < showedIndex; i += 3) {
                arr1.push(allPhotos[i])
                if (allPhotos.length >= (i + 1) && allPhotos[i + 1]) {
                    arr2.push(allPhotos[i + 1])
                }
                if (allPhotos.length >= (i + 2) && allPhotos[i + 2]) {
                    arr3.push(allPhotos[i + 2])
                }
            }
            setPhotoBox1(arr1)
            setPhotoBox2(arr2)
            setPhotoBox3(arr3)
        } else {
            var arr1 = [];
            var arr2 = [];
            for (let i = 0; i < allPhotos.length && i < showedIndex; i += 2) {
                arr1.push(allPhotos[i])
                if (allPhotos.length >= (i + 1) && allPhotos[i + 1]) {
                    arr2.push(allPhotos[i + 1])
                }
            }
            setPhotoBox1(arr1)
            setPhotoBox2(arr2)
        }
    }
    const data = {
        search,
        setSearch,
        allPhotos,
        setAllPhotos,
        favs,
        photoDivider,
        searchingPhotos, setSearchingPhotos,
        setFavs, photoBox1, setPhotoBox1, photoBox2, setPhotoBox2, photoBox3, setPhotoBox3, showedIndex, setShowedIndex, height, width
    }
    useEffect(() => {
        setSearchingPhotos(allPhotos);
    }, [allPhotos])
    
    useEffect(()=>{
        if(!JSON.parse(localStorage.getItem('photos'))){
            localStorage.setItem('photos', JSON.stringify(allPhotos2));
        }
        
        setAllPhotos(JSON.parse(localStorage.getItem('photos')))
        
        if(!JSON.parse(localStorage.getItem('favs'))){
            localStorage.setItem('favs', JSON.stringify(favs));
        }
        
        setFavs(JSON.parse(localStorage.getItem('favs')))
    },[])
    return (
        <MainContext.Provider value={data}>
            <div className="App">
                {favs.length > 0 && <Fav />}

                <Search />
                <Photo />
            </div>
        </MainContext.Provider>
    );
}

export default App;
