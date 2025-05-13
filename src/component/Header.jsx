// import { useState } from 'react';
// import { Navbar, Nav, Container, Form, FormControl, Dropdown, Image, Row, Col } from 'react-bootstrap';
// import { BadgeAd, BagCheck, BarChart, BoxSeam, ChatSquareQuote, ClipboardCheck, CreditCard, Gear, Gift, Headset, HouseDoor, Search } from 'react-bootstrap-icons';
// import { Link } from 'react-router-dom';

// const menuItems = [
//     { icon: <HouseDoor />, label: 'Poker' },
//     { icon: <BadgeAd />, label: 'Fantasy' },
//     { icon: <BarChart />, label: 'Quiz' },
//     { icon: <BoxSeam />, label: 'Sudoku' },
//     { icon: <BagCheck />, label: 'chess' },
//     { icon: <Gift />, label: 'Solitaire' },
//     { icon: <Headset />, label: 'Minesweeper' },
    
//     // { icon: <HouseDoor />, label: 'Dashboard' },
//     // { icon: <BadgeAd />, label: 'Brands' },
//     // { icon: <BarChart />, label: 'Manage Product' },
//     // { icon: <BoxSeam />, label: 'My Inventory' },
//     // { icon: <BagCheck />, label: 'Manage Orders' },
//     // { icon: <Gift />, label: 'Manage Offers' },
//     // { icon: <Headset />, label: 'Support' },
//     // { icon: <ChatSquareQuote />, label: 'Customer Feedback' },
//     // { icon: <ClipboardCheck />, label: 'Subscription' },
//     // { icon: <CreditCard />, label: 'Payments Detail' },
// ];

// function Header() {
//     const [active, setActive] = useState('Poker');
//     return (
//         <>
//             <Navbar expand="lg" className="dashboard-navbar" variant="dark" sticky="top">
//                 <Container fluid>
//                     {/* Logo */}
//                     <Navbar.Brand className="dashboard-logo">
//                         MyDashboard
//                     </Navbar.Brand>

//                     {/* Search Bar */}
//                     <Form className="dashboard-search">
//                         <Search className="search-icon" />
//                         <FormControl
//                             type="search"
//                             placeholder="Search..."
//                             className="search-input"
//                             aria-label="Search"
//                         />
//                     </Form>

//                     {/* Right Side */}
//                     <Nav className="dashboard-nav">
//                         {/* Settings */}
//                         <Nav.Link href="#settings" className="icon-link">
//                             <Gear size={20} />
//                         </Nav.Link>

//                         {/* Profile Dropdown */}
//                         <Dropdown align="end">
//                             <Dropdown.Toggle variant="link" className="profile-toggle">
//                                 <Image
//                                     src="https://w7.pngwing.com/pngs/306/70/png-transparent-computer-icons-management-admin-silhouette-black-and-white-neck-thumbnail.png"
//                                     roundedCircle
//                                     className="profile-pic"
//                                 />
//                                 <span className="profile-name">John Doe</span>
//                             </Dropdown.Toggle>
//                             <Dropdown.Menu>
//                                 <Dropdown.Item href="#/profile">Profile</Dropdown.Item>
//                                 <Dropdown.Item href="#/settings">Settings</Dropdown.Item>
//                                 <Dropdown.Divider />    
//                                 <Dropdown.Item href="#/logout">Logout</Dropdown.Item>
//                             </Dropdown.Menu>
//                         </Dropdown>
//                     </Nav>
//                 </Container>
//             </Navbar>

//         <Container>
//             <div className="horizontal-menu" sticky="top" style={{ top: '64px' }}>
//                 {menuItems.map((item) => (
//                     <Link to={`/home/${item.label.toLowerCase()}`} className="text-decoration-none">
//                         <div
//                         key={item.label}
//                         className={`menu-item ${active === item.label ? 'active' : ''}`}
//                         onClick={() => setActive(item.label)}
//                     >
//                         <div className="menu-icon">{item.icon}</div>
//                         <div className="menu-label">{item.label}</div>
//                     </div>
//                     </Link>
//                 ))}
//             </div>
//         </Container>
//         </>
//     )
// }

// export default Header


import { useState } from 'react';
import { Navbar, Nav, Container, Form, FormControl, Dropdown, Image } from 'react-bootstrap';
import { BadgeAd, BagCheck, BarChart, BoxSeam, Gear, Gift, Headset, HouseDoor, Search, PersonCircle } from 'react-bootstrap-icons';
import { Link, useNavigate } from 'react-router-dom'; // ✅ correct

const menuItems = [
  { icon: <HouseDoor />, label: 'poker' },
  { icon: <BadgeAd />, label: 'fantasy' },
  { icon: <BarChart />, label: 'quiz' },
  { icon: <BoxSeam />, label: 'sudoku' },
  { icon: <BagCheck />, label: 'chess' },
  { icon: <Gift />, label: 'solitaire' },
  { icon: <Headset />, label: 'minesweeper' },
];

function Header() {
  const [active, setActive] = useState('poker');

  return (
    <>
      <Navbar expand="lg" className="dashboard-navbar" variant="dark" sticky="top">
        <Container fluid>
          <Navbar.Brand className="dashboard-logo">
            MyDashboard
          </Navbar.Brand>

          <Form className="dashboard-search">
            <Search className="search-icon" />
            <FormControl
              type="search"
              placeholder="Search..."
              className="search-input"
              aria-label="Search"
            />
          </Form>

          <Nav className="dashboard-nav">
            <Nav.Link href="#settings" className="icon-link">
              <Gear size={20} />
            </Nav.Link>

            <Dropdown align="end">
              <Dropdown.Toggle variant="link" className="profile-toggle">
                <Image
                  src="https://w7.pngwing.com/pngs/306/70/png-transparent-computer-icons-management-admin-silhouette-black-and-white-neck-thumbnail.png"
                  roundedCircle
                  className="profile-pic"
                />
                <span className="profile-name">John Doe</span>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/profile">Profile</Dropdown.Item>
                <Dropdown.Item href="#/settings">Settings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="/">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>

      <Container>
        <div className="horizontal-menu" style={{ top: '64px' }}>
          {menuItems.map((item) => (
            <Link to={item.label === 'poker' ? '/home/' : `/home/${item.label}`} className="text-decoration-none" key={item.label}>
              <div
                className={`menu-item ${active === item.label ? 'active' : ''}`}
                onClick={() => setActive(item.label)}
              >
                <div className="menu-icon">{item.icon}</div>
                <div className="menu-label">{item.label}</div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </>
  );
}

export default Header;
