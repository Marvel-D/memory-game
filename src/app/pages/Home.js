import React, { useState } from "react";
import Array from "../../database/cards.js";
import Nav from "../shared/NavBar.js";

const Home = () => {
    let [cardList, setCardList] = useState(Array);
    let [modalState, setModalState] = useState("hidden");
    let [isOpen, setOpenState] = useState("none")
    let [wonCards, setWonCards] = useState([]);

    const handleModal = () => {
        if (isOpen === "flex") {
            setOpenState("none")
        } else {
            setOpenState("flex")
        }
    }

    //* user wins scenario
    const handleUserWins = () => {
        if (wonCards.length === cardList.length - 1) {
            console.log("you win");
            setCardList(Array)
            setWonCards([])
            handleModal()
            console.log(cardList);
        }
    }

    //* user losses scenario
    const handleUserLosses = (card) => {
        if (card.count === 2) {
            cardList.forEach(ele => {
                ele.count = 0
                ele.active = false
            });
            setWonCards(
                wonCards = []
            )

            console.log("Game over,  you lose");
            handleModal()
            console.log(card.count);
        }
    }

    function handleToggleCardList(cardId) {
        setCardList(
            cardList.sort(() => 0.5 - Math.random()).map((card) => {
                if (card.id === cardId) {
                    card.count = card.count + 1;

                    if (card.active === false) {
                        setWonCards(wonCards.concat(card))
                        console.log(wonCards.length);
                    }

                    //* if player loses
                    handleUserLosses(card)
                    return { ...card, active: !card.active };
                } else {
                    return card;
                }
            }),
        );

        //* if player wins...
        handleUserWins()
    }

    return (
        <div className="relative bg-zinc-900 text-zinc-100 h-[100%]">
            <div className="p-2 text-lg font-bold">
                <p>Score: {wonCards.length}</p>
            </div>
            <div className="flex flex-col">
                <div className="bg-black absolute items-center justify-center w-[100%] h-screen opacity-70" style={{
                    display: isOpen
                }} >
                    <div className="bg-slate-400  text-lg flex flex-col justify-center items-center h-[20%] w-[70%]">
                        <p className="text-3xl text-red-600"><b>Game Over</b></p>
                        <br />
                        <button className="border-2 px-5 py-2 bg-black" onClick={() => {
                            setOpenState("none")
                        }}>close</button>
                    </div>
                </div>
                <ul className="h-screen overflow-scroll flex items-center justify-center  border-2 border-gray-100 w-full flex-wrap">
                    {cardList.map((card, index) => {
                        return (
                            <li
                                key={index}
                                id={index}
                                className="m-5 w-[250px] h-[300px] flex justify-center items-center border-2 border-gray-100"
                                style={{
                                    backgroundColor: card.color,
                                    borderRadius: '15px'
                                }}
                                onClick={() => {
                                    handleToggleCardList(card.id);
                                }}
                                value={card.id}
                            >
                                {/* <img src="src/assets/f1.jpg" alt="shuffledImage" /> */}
                                <p>{card.task}</p>
                                <p>{card.count}</p>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div >
    );
};
export default Home;
