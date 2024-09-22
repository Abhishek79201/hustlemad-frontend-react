import React, { useState, useEffect } from 'react'
import styles from './DiwaliPacks.module.css';
import diya from '../../images/Diwali/Diya.svg';
import mandpat from '../../images/Diwali/Mandpat.svg';
import mandpatmobile from '../../images/Diwali/MandpatMobile.svg';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import { useParams, useNavigate, useLocation } from "react-router-dom";
import querySearch from "stringquery";

function DiwaliPacks() {
    let moodpack = ['https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/ae0c1c5a-9e6e-4003-8dbf-c665fb35a400/public', 'https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/b0ba663b-dee0-4170-bbd2-3de8385fc000/public', 'https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/9b50f33c-e80a-4511-653f-144384797800/public', 'https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/ba636d14-cfb6-429b-d24f-e2c933ab2a00/public', 'https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/3dc22409-290c-4dfc-7671-cf5197477700/public', 'https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/773d8489-6f87-413a-116e-b8c2bc175200/public', 'https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/88f56485-6a5b-4521-36e5-d00d771c1900/public', 'https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/05a16aa9-d955-47a3-6b2d-63f8ff638f00/public', 'https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/58e1829a-cf4b-455b-dddd-03958ea6ff00/public'];

    let twistpack = ['https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/1f4ae166-3f1f-4559-bb78-6550ab6c8d00/public', 'https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/fed9bed6-995d-4286-711c-c1df44044a00/public', 'https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/a087823c-d159-44f1-f0e9-1224fd644400/public', 'https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/b9718260-88de-436f-fa12-429bdacfc800/public', 'https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/86ca895e-45d3-4238-c715-78bef4a5f100/public', 'https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/7c6ad821-f24b-44de-3b3e-594a76c83c00/public', 'https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/58e1829a-cf4b-455b-dddd-03958ea6ff00/public']

    let lightuppack = ['https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/1280fc4c-01e5-44b4-4933-9051c5b1ac00/public', 'https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/8185960b-8d4b-4d55-7503-4791dadfae00/public', 'https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/5ec10388-fea3-494c-fbf8-d4159af8fc00/public', 'https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/1483d89a-fe4c-411a-61a1-4ba10efa4f00/public', 'https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/9c0fc334-5af9-44ac-cfaa-aea78e3d5a00/public', 'https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/3aacfe74-6924-4e20-c503-4c4e2a8d2e00/public', 'https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/58e1829a-cf4b-455b-dddd-03958ea6ff00/public'];

    let treatpack = ['https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/49ebbdc8-382b-42c0-f678-2e7f7f20ad00/public', 'https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/9c73e1f7-2a25-4b56-717b-e69658483b00/public', 'https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/8712e442-d57c-4c01-9872-0d8b45978e00/public', 'https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/295846a0-ee41-4de5-8791-4980edbf9300/public', 'https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/d83bad73-f728-4759-7b81-44f07d24be00/public', 'https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/cf1f5f82-a50b-4c3c-010e-46891f9b5600/public', 'https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/58e1829a-cf4b-455b-dddd-03958ea6ff00/public'];

    const params = useParams();
    const location = useLocation();
    // console.log(params);
    // console.log(location);
    var query = querySearch(location.search);
    // console.log(query);

    const [items, setItems] = useState(query);

    var item = JSON.parse(localStorage.getItem('items'));

    // console.log(items)
    useEffect(() => {
        item = JSON.parse(localStorage.getItem('items'));
        // console.log(item);
        if(items.utm_source && !item){
            localStorage.setItem('items', JSON.stringify(items));
        }
        if(item){
            if(items.utm_source && (item.utm_source != items.utm_source || item.utm_term != items.utm_term || item.utm_campaign != items.utm_campaign || item.utm_content != items.utm_content || item.utm_medium != items.utm_medium)) {
                localStorage.setItem('items', JSON.stringify(items));
            }
        }
        item = JSON.parse(localStorage.getItem('items'));
        // console.log(item)
    }, []);

    // console.log(item);

    window.onunload = () => {
        // Clear the local storage
        localStorage.clear()
    }

    return (
        <div className={styles.diwalipacks}>
            <div className={styles.topimage}>
                <img src={mandpatmobile} alt="Bg-Image"></img>
            </div>
            <div className={styles.leftimage}>
                <img src={mandpat} alt="Bg-Image"></img>
            </div>
            <div className={styles.rightimage}>
                <img src={diya} alt="Bg-Image"></img>
            </div>
            <div className={styles.content}>
                <div className={styles.heading}>
                    Diwali Packs
                </div>
                <div className={styles.subheading}>
                    This Diwali show your team how much you love and appreciate them !!!
                </div>
                <div className={styles.box}>
                    <div className={styles.leftcolumn}>
                        <div className={styles.leftcolumnimage}>
                            <Carousel showArrows={false} autoFocus={true} autoPlay={true} stopOnHover={true} swipeable={true} showThumbs={false} showStatus={false} className={styles.carousel} infiniteLoop={true} renderIndicator={(onClickHandler, isSelected, index, label) => {
                                const defStyle = { color: "#E2EEFF", cursor: "pointer", fontSize: "6px", justifyContent: "center" };
                                const style = isSelected
                                    ? { ...defStyle, color: "darkblue", background: "darkblue" }
                                    : { ...defStyle };
                                return (
                                    <span
                                        style={style}
                                        onClick={onClickHandler}
                                        onKeyDown={onClickHandler}
                                        value={index}
                                        key={index}
                                        role="button"
                                        tabIndex={0}
                                        className={styles.circle}
                                        aria-label={`${label} ${index + 1}`}
                                    >
                                        1
                                    </span>
                                );
                            }}>
                                {
                                    moodpack.map((i, index) => {
                                        return (
                                            <div className={styles.image} >
                                                <img src={i} />
                                            </div>
                                        )
                                    })
                                }
                            </Carousel>
                        </div>
                    </div>
                    <div className={styles.rightcolumn}>
                        <div className={styles.packheading}>
                            Mood Pack
                        </div>
                        <div className={styles.packsubheading}>
                            Delight your team with our carefully curated assortment of joyful goodies that bring their loved ones together for the most awaited festival of the year. Packed in a specially designed festive mailer box, this hamper is bound to get your team in the mood for fun and joy.
                        </div>
                        <div className={styles.estimate}>
                            Estimate Price : <span className={styles.price}>&#8377; 2899</span>
                            <span className={styles.disclaimer}>(Prices may vary based on order size)</span>
                        </div>
                        <Link to='/diwalipacks/moodpack'>
                            <div className={styles.view}>
                                <button className={styles.btn}>View Pack &#8594;</button>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.leftcolumn}>
                        <div className={styles.leftcolumnimage}>
                            <Carousel showArrows={false} autoFocus={true} autoPlay={true} stopOnHover={true} swipeable={true} showThumbs={false} showStatus={false} className={styles.carousel} infiniteLoop={true} renderIndicator={(onClickHandler, isSelected, index, label) => {
                                const defStyle = { color: "#E2EEFF", cursor: "pointer", fontSize: "6px", justifyContent: "center" };
                                const style = isSelected
                                    ? { ...defStyle, color: "darkblue", background: "darkblue" }
                                    : { ...defStyle };
                                return (
                                    <span
                                        style={style}
                                        onClick={onClickHandler}
                                        onKeyDown={onClickHandler}
                                        value={index}
                                        key={index}
                                        role="button"
                                        tabIndex={0}
                                        className={styles.circle}
                                        aria-label={`${label} ${index + 1}`}
                                    >
                                        1
                                    </span>
                                );
                            }}>
                                {
                                    twistpack.map((i, index) => {
                                        return (
                                            <div className={styles.image} >
                                                <img src={i} />
                                            </div>
                                        )
                                    })
                                }
                            </Carousel>
                        </div>
                    </div>
                    <div className={styles.rightcolumn}>
                        <div className={styles.packheading}>
                            Twist Pack
                        </div>
                        <div className={styles.packsubheading}>
                            Gone are the days of the boring Diwali gifts. Surprise your team with a unique, yet delightful assortment of products that captures the festive spirit with a twist. Packed in a specially designed mailer box, this hamper will make your company stand out from the clutter.
                        </div>
                        <div className={styles.estimate}>
                            Estimate Price : <span className={styles.price}>&#8377; 2499</span>
                            <span className={styles.disclaimer}>(Prices may vary based on order size)</span>
                        </div>
                        <Link to='/diwalipacks/twistpack'>
                            <div className={styles.view}>
                                <button className={styles.btn}>View Pack &#8594;</button>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.leftcolumn}>
                        <div className={styles.leftcolumnimage}>
                            <Carousel showArrows={false} autoFocus={true} autoPlay={true} stopOnHover={true} swipeable={true} showThumbs={false} showStatus={false} className={styles.carousel} infiniteLoop={true} renderIndicator={(onClickHandler, isSelected, index, label) => {
                                const defStyle = { color: "#E2EEFF", cursor: "pointer", fontSize: "6px", justifyContent: "center" };
                                const style = isSelected
                                    ? { ...defStyle, color: "darkblue", background: "darkblue" }
                                    : { ...defStyle };
                                return (
                                    <span
                                        style={style}
                                        onClick={onClickHandler}
                                        onKeyDown={onClickHandler}
                                        value={index}
                                        key={index}
                                        role="button"
                                        tabIndex={0}
                                        className={styles.circle}
                                        aria-label={`${label} ${index + 1}`}
                                    >
                                        1
                                    </span>
                                );
                            }}>
                                {
                                    treatpack.map((i, index) => {
                                        return (
                                            <div className={styles.image} >
                                                <img src={i} />
                                            </div>
                                        )
                                    })
                                }
                            </Carousel>
                        </div>
                    </div>
                    <div className={styles.rightcolumn}>
                        <div className={styles.packheading}>
                            Treat Pack
                        </div>
                        <div className={styles.packsubheading}>
                            What is Diwali if you are not surrounded by food and your loved ones. Treat your team with our handpicked assortment of sweet and savoury munchies that they can share with their friends and family. Packed in a festive box, this hamper looks as delightful as the products inside.
                        </div>
                        <div className={styles.estimate}>
                            Estimate Price : <span className={styles.price}>&#8377; 1999</span>
                            <span className={styles.disclaimer}>(Prices may vary based on order size)</span>
                        </div>
                        <Link to='/diwalipacks/treatpack'>
                            <div className={styles.view}>
                                <button className={styles.btn}>View Pack &#8594;</button>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.leftcolumn}>
                        <div className={styles.leftcolumnimage}>
                            <Carousel showArrows={false} autoFocus={true} autoPlay={true} stopOnHover={true} swipeable={true} showThumbs={false} showStatus={false} className={styles.carousel} infiniteLoop={true} renderIndicator={(onClickHandler, isSelected, index, label) => {
                                const defStyle = { color: "#E2EEFF", cursor: "pointer", fontSize: "6px", justifyContent: "center" };
                                const style = isSelected
                                    ? { ...defStyle, color: "darkblue", background: "darkblue" }
                                    : { ...defStyle };
                                return (
                                    <span
                                        style={style}
                                        onClick={onClickHandler}
                                        onKeyDown={onClickHandler}
                                        value={index}
                                        key={index}
                                        role="button"
                                        tabIndex={0}
                                        className={styles.circle}
                                        aria-label={`${label} ${index + 1}`}
                                    >
                                        1
                                    </span>
                                );
                            }}>
                                {
                                    lightuppack.map((i, index) => {
                                        return (
                                            <div className={styles.image} >
                                                <img src={i} />
                                            </div>
                                        )
                                    })
                                }
                            </Carousel>
                        </div>
                    </div>
                    <div className={styles.rightcolumn}>
                        <div className={styles.packheading}>
                            Light Up Pack
                        </div>
                        <div className={styles.packsubheading}>
                            Gift your team the essentials to brighten up both their homes and spirits for the festival of lights. Comes with a personalised card add-on for you to convey your special greetings and packed in a festive box, this hamper carries all the goodness you are looking for.
                        </div>
                        <div className={styles.estimate}>
                            Estimate Price : <span className={styles.price}>&#8377; 999</span>
                            <span className={styles.disclaimer}>(Prices may vary based on order size)</span>
                        </div>
                        <Link to='/diwalipacks/lightuppack'>
                            <div className={styles.view}>
                                <button className={styles.btn}>View Pack &#8594;</button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DiwaliPacks