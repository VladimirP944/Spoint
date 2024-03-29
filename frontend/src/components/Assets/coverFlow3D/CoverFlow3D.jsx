import { useReducer, useEffect, useRef } from 'react';
import "./coverFlow3DStyle.scss"

//TODO getFromDatabase ->
const slides = [
    {
        message: "Really fun and interesting, love the community and the game in general. country streak mode is super fun and the learning world map is great too :)",
        user: "Terra",
        date: "10/29/2021",
        image:
            "https://source.unsplash.com/rEn-AdBr3Ig"
    },
    {
        message: "The app is rapidly getting new features and improvements! It's on its way to become amazing! Love it!",
        user: "Douglas",
        date: "11/30/2021",
        image:
            "https://source.unsplash.com/SWgr-gqPyBA"
    },
    {
        message: "Great fun game that is also educational.",
        user: "D Klinger",
        date: "10/25/2021",
        image:
            // "https://source.unsplash.com/random/?nature,map,night"
            "https://source.unsplash.com/iDzKdNI7Qgc"
    },
    // {
    //     title: "Four",
    //     subtitle: "Australia",
    //     description: "A piece of heaven",
    //     image:
    //         "https://images.unsplash.com/flagged/photo-1564918031455-72f4e35ba7a6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    // },
    // {
    //     title: "Five",
    //     subtitle: "Australia",
    //     description: "A piece of heaven",
    //     image:
    //         "https://images.unsplash.com/photo-1579130781921-76e18892b57b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    // }
];

function useTilt(active) {
    const ref = useRef(null);

    useEffect(() => {
        if (!ref.current || !active) {
            return;
        }

        const state = {
            rect: undefined,
            mouseX: undefined,
            mouseY: undefined
        };

        let el = ref.current;

        const handleMouseMove = (e) => {
            if (!el) {
                return;
            }

            state.rect = el.getBoundingClientRect();

            state.mouseX = e.clientX;
            state.mouseY = e.clientY;
            const px = (state.mouseX - state.rect.left) / state.rect.width;
            const py = (state.mouseY - state.rect.top) / state.rect.height;

            el.style.setProperty("--px", px);
            el.style.setProperty("--py", py);
        };

        el.addEventListener("mousemove", handleMouseMove);

        return () => {
            el.removeEventListener("mousemove", handleMouseMove);
        };
    }, [active]);

    return ref;
}

const initialState = {
    slideIndex: 0
};

const slidesReducer = (state, event) => {
    if (event.type === "PREV") {
        return {
            ...state,
            slideIndex: (state.slideIndex + 1) % slides.length
        };
    }
    if (event.type === "NEXT") {
        return {
            ...state,
            slideIndex:
                state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1
        };
    }
};

function Slide({ slide, offset }) {
    const active = offset === 0 ? true : null;
    const ref = useTilt(active);

    return (
        <div
            ref={ref}
            className="slide"
            data-active={active}
            style={{
                "--offset": offset,
                "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
            }}
        >
            {/*<div*/}
            {/*    className="slideBackground"*/}
            {/*    style={{*/}
            {/*        backgroundImage: `url('${slide.image}')`*/}
            {/*    }}*/}
            {/*/>*/}
            <div
                className="slideContent"
                style={{
                    backgroundImage: `url('${slide.image}')`
                    // backgroundImage: `url('https://source.unsplash.com/wQLAGv4_OYs')`
                    // background: "#363537"
                }}
            >
                <div className="slideContentInner">
                    <h2 className="slideMessage">{slide.message}</h2><br/>
                    <h3 className="slideUser">{slide.user}</h3>
                    <div style={{ display: "inline-block" }}>
                        <img width="16" height="16" src="https://www.geoguessr.com/_next/static/images/icon-star-filled-06e928803ac716976ff46db61232c179.svg" alt="Star"/>
                        <img width="16" height="16" src="https://www.geoguessr.com/_next/static/images/icon-star-filled-06e928803ac716976ff46db61232c179.svg" alt="Star"/>
                        <img width="16" height="16" src="https://www.geoguessr.com/_next/static/images/icon-star-filled-06e928803ac716976ff46db61232c179.svg" alt="Star"/>
                        <img width="16" height="16" src="https://www.geoguessr.com/_next/static/images/icon-star-filled-06e928803ac716976ff46db61232c179.svg" alt="Star"/>
                        <img width="16" height="16" src="https://www.geoguessr.com/_next/static/images/icon-star-filled-06e928803ac716976ff46db61232c179.svg" alt="Star"/>
                    </div>
                    <p className="slideDate">{slide.date}</p>
                </div>
            </div>
        </div>
    );
}

export default function CoverFlow3D() {
    const [state, dispatch] = useReducer(slidesReducer, initialState);

    return (
        <div className="coverFlow">
        <div className="slides">
            <button onClick={() => dispatch({ type: "PREV" })}>‹</button>

            {[...slides, ...slides, ...slides].map((slide, i) => {
                let offset = slides.length + (state.slideIndex - i);
                return <Slide slide={slide} offset={offset} key={i} />;
            })}
            <button onClick={() => dispatch({ type: "NEXT" })}>›</button>
        </div>
        </div>
    );
}
