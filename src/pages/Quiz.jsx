import { BagFill, BarChartFill, CheckCircleFill, ClipboardData, CurrencyDollar, Joystick, PeopleFill, PersonLinesFill } from "react-bootstrap-icons";

function Quiz() {

    const cardData = [
        {
            title: 'Total Users',
            value: '980',
            icon: <PeopleFill />,
            color: '#054FA3',
        },
        {
            title: 'Sales',
            value: '$32,400',
            icon: <CurrencyDollar />,
            color: '#28a745',
        },
        {
            title: 'Orders',
            value: '1,210',
            icon: <BagFill />,
            color: '#ffc107',
        },
        {
            title: 'Performance',
            value: '49%',
            icon: <BarChartFill />,
            color: '#17a2b8',
        },
        {
            title: 'Tasks Completed',
            value: '26',
            icon: <CheckCircleFill />,
            color: '#6f42c1',
        },
        {
            title: 'Reports',
            value: '33',
            icon: <ClipboardData />,
            color: '#fd7e14',
        },
    ];

    const extraCardData = [
        {
            title: 'Recent Games',
            value: '8 New',
            icon: <Joystick />,
            color: '#20c997',
        },
        {
            title: 'Recent Players',
            value: '33 Joined',
            icon: <PersonLinesFill />,
            color: '#e83e8c',
        },
    ];

    return (
        <>
        <h2 className="text-center text-uppercase text-muted" style={{backgroundColor:"#ffff"}}>Quiz Game</h2>
            <div className="dashboard-container">
                <div className="dashboard-grid">
                    {cardData.map((card, index) => (
                        <div key={index} className="dashboard-card">
                            <div className="card-icon" style={{ color: card.color }}>
                                {card.icon}
                            </div>
                            <div className="card-info">
                                <h4>{card.title}</h4>
                                <p>{card.value}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <h5 style={{ marginTop: '40px', marginBottom: '10px', color: '#2C2C2C' }}>Recent Activity</h5>
                <div className="dashboard-grid">
                    {extraCardData.map((card, index) => (
                        <div key={index} className="dashboard-card">
                            <div className="card-icon" style={{ color: card.color }}>
                                {card.icon}
                            </div>
                            <div className="card-info">
                                <h4>{card.title}</h4>
                                <p>{card.value}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Quiz
