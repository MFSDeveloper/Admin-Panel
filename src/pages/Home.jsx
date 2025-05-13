// import { BagFill, BarChartFill, CheckCircleFill, ClipboardData, CurrencyDollar, Joystick, PeopleFill, PersonLinesFill } from "react-bootstrap-icons";

// function Home() {

//     const cardData = [
//         {
//             title: 'Total Users',
//             value: '1,245',
//             icon: <PeopleFill />,
//             color: '#054FA3',
//         },
//         {
//             title: 'Sales',
//             value: '$82,400',
//             icon: <CurrencyDollar />,
//             color: '#28a745',
//         },
//         {
//             title: 'Orders',
//             value: '3,210',
//             icon: <BagFill />,
//             color: '#ffc107',
//         },
//         {
//             title: 'Performance',
//             value: '89%',
//             icon: <BarChartFill />,
//             color: '#17a2b8',
//         },
//         {
//             title: 'Tasks Completed',
//             value: '76',
//             icon: <CheckCircleFill />,
//             color: '#6f42c1',
//         },
//         {
//             title: 'Reports',
//             value: '24',
//             icon: <ClipboardData />,
//             color: '#fd7e14',
//         },
//     ];

//     const extraCardData = [
//         {
//             title: 'Recent Games',
//             value: '12 New',
//             icon: <Joystick />,
//             color: '#20c997',
//         },
//         {
//             title: 'Recent Players',
//             value: '48 Joined',
//             icon: <PersonLinesFill />,
//             color: '#e83e8c',
//         },
//     ];

//     return (
//         <>
//             <div className="dashboard-container">
//                 <div className="dashboard-grid">
//                     {cardData.map((card, index) => (
//                         <div key={index} className="dashboard-card">
//                             <div className="card-icon" style={{ color: card.color }}>
//                                 {card.icon}
//                             </div>
//                             <div className="card-info">
//                                 <h4>{card.title}</h4>
//                                 <p>{card.value}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 <h5 style={{ marginTop: '40px', marginBottom: '10px', color: '#2C2C2C' }}>Recent Activity</h5>
//                 <div className="dashboard-grid">
//                     {extraCardData.map((card, index) => (
//                         <div key={index} className="dashboard-card">
//                             <div className="card-icon" style={{ color: card.color }}>
//                                 {card.icon}
//                             </div>
//                             <div className="card-info">
//                                 <h4>{card.title}</h4>
//                                 <p>{card.value}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* Extra Card Section */}

//         </>
//     )
// }

// export default Home

import { Routes, Route } from "react-router-dom";

import Poker from "./Poker";
import Minesweeper from "./Minesweeper";
import Solitaire from "./Solitaire";
import Chess from "./Chess";
import Sudoku from "./Sudoku";
import Quiz from "./Quiz";
import Fantasy from "./Fantasy";

function Home() {
    return (
        <>
            <div className="dashboard-container">
                {/* Route-based Game Component Section */}
                <div style={{ marginTop: "40px" }}>
                    <Routes>
                        <Route path="/" element={<Poker />} />
                        <Route path="minesweeper" element={<Minesweeper />} />
                        <Route path="solitaire" element={<Solitaire />} />
                        <Route path="chess" element={<Chess />} />
                        <Route path="sudoku" element={<Sudoku />} />
                        <Route path="quiz" element={<Quiz />} />
                        <Route path="fantasy" element={<Fantasy />} />
                    </Routes>
                </div>
            </div>
        </>
    );
}

export default Home;
