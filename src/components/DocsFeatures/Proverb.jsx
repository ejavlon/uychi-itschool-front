import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';

export default function Proverb() {
    const [proverbs, setProverbs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [index, setIndex] = useState(0);
    const [screenSize, setScreenSize] = useState(786);

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    useEffect(() => {
        setProverbs([
            { text: "Oz-oz o'rganib dono bulur", author: "Alisher Navoiy" },
            { text: "Ilmning avvali sukut, so’ng eshitish, so’ng yod olish, so’ng amal qilish, so’ng uni tarqatish", author: "Imom G'azzoliy " },
            { text: "Yo asling kabi ko`rin yo ko`ringaning kabi bo`l", author: "Jaloliddin Rumiy" },
            { text: "Odob – beodobni har bir odobsizligiga sabr-toqat qilishdir", author: "Jaloliddin Rumiy" },
            { text: "Hayotda muvaffaqiyatga erishish uchun uch narsa kerak: diqqat, intizom va harakat", author: "Jaloliddin Rumiy" },
            { text: "O‘ylaring so‘zlaringga, so‘zlaring fe’lingga, fe’ling taqdiringga nuqs etadi.Go‘zal o‘yla, go‘zal yasha. ", author: "Jaloliddin Rumiy" },
            { text: "Sabr – insonni maqsadiga eng tez olib boradigan yo‘l ko‘rsatuvchidir", author: "Jaloliddin Rumiy" },
            { text: "Aql qo‘ydir, nafs bo‘ri, iymon esa cho‘pon. Agar iymon kuchli bo‘lmasa, nafs aqlni yeydi", author: "Jaloliddin Rumiy" },
            { text: "So‘z — libos. Ma’no shu libos ostiga yashiringan sir", author: "Jaloliddin Rumiy" },
            { text: "Nodonlardek yuzlab so'zni qilmagil qator, Dono ersang, bir so'z degil, lekin ma'nodor", author: "Shayx Sa'diy" },
            { text: "Modomiki, donolarcha javob berishlarini xohlar ekansan – donolarcha savol ber", author: "Gyote" },            
            { text: "Gapirishni o'rganibdimi - demak katta bo'libdi, Jim turishni o'rganibdimi - demak dono bo'libdi", author: "Bernard Shou" },            
            { text: "O‘qitish ikki barobar o‘qish demakdir", author: "J.Juber " },
            { text: "-Устоз инсон қандай ишни қилса чарчамайди?\n-Ўзгаларга ва ўзига манфаати кўп ишни қилган инсон чарчамайди.", author: "Savdogarlar ustozi kitobidan" },
        ]);
    }, []);

    useEffect(() => {
        // console.log(window.innerWidth);
        if (proverbs.length > 0) {
            setIndex(getRandomInt(0, proverbs.length - 1));
            setScreenSize(window.innerWidth);
            setLoading(false);

        }
    }, [proverbs]);

    return (
        <Box component="div" sx={{ display: 'flex', justifyContent: "end" }}>
            <Box component="div" sx={{flexBasis: screenSize >= 780 ? "40%" : "100%"}}>
                {loading ? (
                    ""
                ) : (
                    <>
                        <Box component="p" sx={{textAlign:"end", whiteSpace: "pre-line"}}>{proverbs[index].text}</Box>
                        <Box component="p" sx={{textAlign:"end"}}> <b>{proverbs[index].author}</b> </Box>
                    </>
                )}
            </Box>
        </Box>
    );
}
