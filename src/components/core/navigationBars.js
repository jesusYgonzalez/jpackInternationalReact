import React from "react";
import { NavLink } from "react-router-dom";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
  MDBSideNavItem,
  MDBSideNavCat,
  MDBSideNavNav,
  MDBSideNav,
  MDBFormInline,
  MDBCol
} from "mdbreact";

const productLinks = [
  { endpoint: "anti-static-bags", name: "Anti Static Bags" },
  { endpoint: "bubble-pouches", name: "Bubble Pouches" },
  { endpoint: "clear-poly-bags", name: "Clear Poly Bags" },
  { endpoint: "clear-reclosable-bags", name: "Clear Reclosable Bags" },
  { endpoint: "poly-bag-sealer", name: "Poly bag Sealer" },
  { endpoint: "polypropylene-bags", name: "Polypropylene Bags" },
  { endpoint: "poly-tubing", name: "Poly Tubing" },
  { endpoint: "static-shielding-bags", name: "Static Shielding Bags" },
  { endpoint: "vacuum-bags", name: "Vacuum bags" },

  { endpoint: "box-stapler-staples", name: "Box Stapler Staples" },
  { endpoint: "corrugated-boxes", name: "Corrugated Boxes" },
  {
    endpoint: "corrugated-bulk-containers",
    name: "Corrugated Bulk Containers"
  },
  { endpoint: "corrugated-mailers", name: "Corrugated Mailers" },
  { endpoint: "corrugated-pads", name: "Corrugated Pads" },
  { endpoint: "easy-fold-boxes", name: "Easy Fold Boxes" },
  { endpoint: "mailing-tubes", name: "Mailing Tubes" },
  { endpoint: "bubble-wrap", name: "Bubble Wrap" },
  {
    endpoint: "bubble-wrap-foam-dispenser",
    name: "Bubble Wrap Foam Dispenser"
  },
  { endpoint: "cushioning-foam", name: "Cushioning Foam" },
  { endpoint: "kraft-wrapping-paper", name: "Kraft Wrapping Paper" },
  { endpoint: "newsprint-wrapping-paper", name: "Newsprint Wrapping Paper" },
  { endpoint: "packing-peanuts", name: "Packing Peanuts" },
  { endpoint: "tissue-wrapping-paper", name: "Tissue Wrapping Paper" },

  { endpoint: "circle-mailing-labels", name: "Circle Mailing Labels" },
  { endpoint: "laser-labels", name: "Laser Labels" },
  { endpoint: "packing-list-envelopes", name: "Packing List Envelopes" },
  { endpoint: "shipping-handling-labels", name: "Shipping Handling Labels" },
  { endpoint: "thermal-transfer", name: "Thermal Transfer" },

  { endpoint: "kraft-bubble-mailer", name: "Kraft Bubble Mailer" },
  { endpoint: "poly-bubble-mailer", name: "Poly Bubble Mailer" },
  { endpoint: "poly-mailers", name: "Poly Mailers" },

  { endpoint: "poly-strapping-machine", name: "Poly Strapping Machine" },
  { endpoint: "poly-strapping", name: "Poly Strapping" },
  { endpoint: "poly-strapping-tools", name: "Poly Strapping Tools" },
  { endpoint: "steel-strapping", name: "Steel Strapping" },
  { endpoint: "v-board", name: "V-Boards" },

  { endpoint: "hand-stretch-wrap", name: "Hand Stretch Wrap" },
  { endpoint: "machine-stretch-wrap", name: "Machine Stretch Wrap" },
  { endpoint: "opaque-stretch-wrap", name: "Opaque Stretch Wrap" },
  { endpoint: "shrink-wrap-roll", name: "Shrink Wrap Roll" },
  { endpoint: "shrink-wrap-system", name: "Shrink Wrap System" },
  { endpoint: "stretch-wrap-machinery", name: "Stretch Wrap Machinery" },

  { endpoint: "carton-sealing-tape", name: "Carton Sealing Tape" },
  { endpoint: "colored-tape", name: "Colored Tape" },
  { endpoint: "custom-print-tape", name: "Custom Print Tape" },
  { endpoint: "filament-tape", name: "Filament Tape" },
  { endpoint: "masking-tape", name: "Masking Tape" },
  { endpoint: "office-tape-dispenser", name: "Office Tape Dispenser" },
  { endpoint: "tape-dispenser", name: "Tape Dispenser" },
  { endpoint: "vinyl-tape", name: "Vinyl Tape" },
  {
    endpoint: "water-activated-gummed-tape",
    name: "Water Activated Gummed Tape"
  },

  { endpoint: "air-pillow-machine", name: "Air Pillow Machine" },
  { endpoint: "glue-gun", name: "Glue Gun" },
  { endpoint: "utility-knife", name: "Utility Knife" },
  { endpoint: "wrapping-paper-dispenser", name: "Wrapping paper Dispenser" },

  { endpoint: "cable-ties", name: "Cable Ties" },
  { endpoint: "gloves-masks", name: "Gloves & Masks" },
  { endpoint: "metal-truck-seal", name: "Metal Truck Seals" },
  { endpoint: "shipping-scales", name: "Shipping Scales" },
  { endpoint: "twist-ties", name: "Twist Ties" }
];

const filterFunc = term => {
  return product => {
    return product.name.toLowerCase().includes(term.toLowerCase()) || !term;
  };
};

class NavigationBars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleStateA: false,
      breakWidth: 1300,
      windowWidth: 0,
      productLinks,
      term: ""
    };
  }
  searchHandler = e => {
    this.setState({ term: e.target.value });
  };

  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () =>
    this.setState({
      windowWidth: window.innerWidth
    });
  handleToggleClickA = () => {
    this.setState({
      toggleStateA: !this.state.toggleStateA
    });
  };

  render() {
    const { term, productLinks } = this.state;
    const navStyle = {
      paddingLeft:
        this.state.windowWidth > this.state.breakWidth ? "210px" : "16px"
    };
    const mainStyle = {
      paddingTop: "4rem",
      paddingLeft:
        this.state.windowWidth > this.state.breakWidth ? "240px" : "0"
    };
    const specialCaseNavbarStyles = {
      WebkitBoxOrient: "horizontal",
      flexDirection: "row"
    };

    return (
      <div className="fixed-sn light-blue-skin">
        <MDBSideNav
          logo="https://mdbootstrap.com/img/logo/mdb-transparent.png"
          triggerOpening={this.state.toggleStateA}
          breakWidth={this.state.breakWidth}
          bg="https://mdbootstrap.com/img/Photos/Others/sidenav4.jpg"
          mask="strong"
          fixed
        >
          <li>
            <ul className="social">
              <li>
                <a href="#!">
                  <MDBIcon fab icon="facebook-f" />
                </a>
              </li>
              <li>
                <a href="#!">
                  <MDBIcon fab icon="pinterest" />
                </a>
              </li>
              <li>
                <a href="#!">
                  <MDBIcon fab icon="google-plus-g" />
                </a>
              </li>
              <li>
                <a href="#!">
                  <MDBIcon fab icon="twitter" />
                </a>
              </li>
            </ul>
          </li>
          {/*SEARCH BAR BEGIN*/}
          <MDBCol md="12">
            <MDBFormInline className="md-form">
              <MDBIcon icon="search" />
              <input
                className="form-control
          			form-control-sm ml-3 w-75"
                type="text"
                id="search"
                value={term}
                onChange={this.searchHandler.bind(this)}
                placeholder="Search"
                aria-label="Search"
              />
            </MDBFormInline>
            {productLinks.filter(filterFunc(term)).map(link => (
              <li key={link.endpoint}>
                <NavLink to={link.endpoint}>{link.name}</NavLink>
              </li>
            ))}
          </MDBCol>
          {/*SEARCH BAR END*/}
          {/*SIDE NAV BEGIN*/}
          <MDBSideNavNav>
            {/* BAGS */}
            <MDBSideNavCat
              name="BAGS"
              id="submit-bags"
              icon="fa fa-shopping-bag"
            >
              <li>
                <NavLink to="anti-static-bags">Anti Static Bags</NavLink>
              </li>
              <li>
                <NavLink to="/bubble-pouches">Bubble Pouches</NavLink>
              </li>
              <li>
                <NavLink to="/clear-poly-bags">Clear Poly Bags</NavLink>
              </li>
              <li>
                <NavLink to="/clear-reclosable-bags">
                  Clear Reclosable Bags
                </NavLink>
              </li>
              <li>
                <NavLink to="/poly-bag-sealer">Poly bag Sealer</NavLink>
              </li>
              <li>
                <NavLink to="/polypropylene-bags">Polypropylene Bags</NavLink>
              </li>
              <li>
                <NavLink to="/poly-tubing">Poly Tubing</NavLink>
              </li>
              <li>
                <NavLink to="/static-shielding-bags">
                  Static Shielding Bags
                </NavLink>
              </li>
              <li>
                <NavLink to="/vacuum-bags">Vacuum bags</NavLink>
              </li>
            </MDBSideNavCat>

            {/* CORRUGATED BOXES */}
            <MDBSideNavCat
              iconRegular
              name="CORRUGATED BOXES"
              id="boxes-cat"
              icon="fa fa-box-open"
            >
              <li>
                <NavLink to="/box-stapler-staples">
                  Box Stapler & Staples
                </NavLink>
              </li>
              <li>
                <NavLink to="/corrugated-boxes">Corrugated Boxes</NavLink>
              </li>
              <li>
                <NavLink to="/corrugated-bulk-containers">
                  Corrugated Bulk Containers
                </NavLink>
              </li>
              <li>
                <NavLink to="/corrugated-mailers">Corrugated Pads</NavLink>
              </li>
              <li>
                <NavLink to="/corrugated-pads">Corrugated Mailers</NavLink>
              </li>
              <li>
                <NavLink to="/easy-fold-boxes">Bubble Pouches</NavLink>
              </li>
              <li>
                <NavLink to="/mailing-tubes">Mailing Tubes</NavLink>
              </li>
            </MDBSideNavCat>

            {/* CUSHIONING */}
            <MDBSideNavCat
              iconRegular
              name="CUSHIONING"
              id="cushioning-cat"
              icon="fa fa-database"
            >
              <li>
                <NavLink to="/bubble-wrap">Bubble Wrap</NavLink>
              </li>
              <li>
                <NavLink to="/bubble-wrap-foam-dispenser">
                  Bubble Wrap & Foam Dispenser
                </NavLink>
              </li>
              <li>
                <NavLink to="/cushioning-foam">Cushioning Foam</NavLink>
              </li>
              <li>
                <NavLink to="/kraft-wrapping-paper">
                  Kraft Wrapping Paper
                </NavLink>
              </li>
              <li>
                <NavLink to="/newsprint-wrapping-paper">
                  Newsprint Wrapping Paper
                </NavLink>
              </li>
              <li>
                <NavLink to="/packing-peanuts">Packing Peanuts</NavLink>
              </li>
              <li>
                <NavLink to="/tissue-wrapping-paper">
                  Tissue Wrapping Paper
                </NavLink>
              </li>
            </MDBSideNavCat>

            {/* LABELS AND ENVELOPES */}
            <MDBSideNavCat
              iconRegular
              name="LABELS & ENVELOPES"
              id="labels-cat"
              icon="fa fa-envelope"
            >
              <li>
                <NavLink to="/circle-mailing-labels">
                  Circle Mailing Labels
                </NavLink>
              </li>
              <li>
                <NavLink to="/laser-labels">Laser Labels</NavLink>
              </li>
              <li>
                <NavLink to="/packing-list-envelopes">
                  Packing List Envelopes
                </NavLink>
              </li>
              <li>
                <NavLink to="/shipping-handling-labels">
                  Shipping & Handling Labels
                </NavLink>
              </li>
              <li>
                <NavLink to="/thermal-transfer">Thermal Transfer</NavLink>
              </li>
            </MDBSideNavCat>

            {/* MAILERS */}
            <MDBSideNavCat
              iconRegular
              name="MAILERS"
              id="mailers-cat"
              icon="fa fa-mail-bulk"
            >
              <li>
                <NavLink to="/kraft-bubble-mailer">Kraft Bubble Mailer</NavLink>
              </li>
              <li>
                <NavLink to="/oly-bubble-mailer">Poly Bubble Mailer</NavLink>
              </li>
              <li>
                <NavLink to="/poly-mailers">Poly Mailer</NavLink>
              </li>
            </MDBSideNavCat>

            {/* STRAPPING */}
            <MDBSideNavCat
              iconRegular
              name="STRAPPING"
              id="strapping-cat"
              icon="fa crop-alt"
            >
              <li>
                <NavLink to="/poly-strapping-machine">Poly Mailer</NavLink>
              </li>
              <li>
                <NavLink to="/poly-strapping">Poly Strapping Machine</NavLink>
              </li>
              <li>
                <NavLink to="/poly-strapping-tools">
                  Poly Strapping Tools
                </NavLink>
              </li>
              <li>
                <NavLink to="/steel-strapping">Steel Strapping</NavLink>
              </li>
              <li>
                <NavLink to="/v-board">V-Boards</NavLink>
              </li>
            </MDBSideNavCat>

            {/* STRETCH FILM */}
            <MDBSideNavCat
              iconRegular
              name="STRETCH FILM"
              id="stretch-film-cat"
              icon="fa fa-scroll"
            >
              <li>
                <NavLink to="/hand-stretch-wrap">Hand Stretch Wrap</NavLink>
              </li>
              <li>
                <NavLink to="/machine-stretch-wrap">
                  Machine Stretch Wrap
                </NavLink>
              </li>
              <li>
                <NavLink to="/opaque-stretch-wrap">Opaque Stretch Wrap</NavLink>
              </li>
              <li>
                <NavLink to="/shrink-wrap-roll">Shrink Wrap Roll</NavLink>
              </li>
              <li>
                <NavLink to="/shrink-wrap-system">Stretch Wrap Machine</NavLink>
              </li>
              <li>
                <NavLink to="/stretch-wrap-machinery">
                  Shrink Wrap System
                </NavLink>
              </li>
            </MDBSideNavCat>

            {/* TAPE */}
            <MDBSideNavCat
              iconRegular
              name="TAPE"
              id="tape-cat"
              icon="fa fa-tape"
            >
              <li>
                <NavLink to="/carton-sealing-tape">Carton Sealing Tape</NavLink>
              </li>
              <li>
                <NavLink to="/colored-tape">Colored Tape</NavLink>
              </li>
              <li>
                <NavLink to="/custom-print-tape">Custom Print Tape</NavLink>
              </li>
              <li>
                <NavLink to="/filament-tape">Filament Tape</NavLink>
              </li>
              <li>
                <NavLink to="/masking-tape">Masking Tape</NavLink>
              </li>
              <li>
                <NavLink to="/office-tape-dispenser">
                  Office Tape & Dispenser
                </NavLink>
              </li>
              <li>
                <NavLink to="/tape-dispenser">Tape Dispenser</NavLink>
              </li>
              <li>
                <NavLink to="/vinyl-tape">Vinyl Tape</NavLink>
              </li>
              <li>
                <NavLink to="/water-activated-gummed-tape">
                  Water-Activated Gummed Tape
                </NavLink>
              </li>
            </MDBSideNavCat>

            {/* TOOLS & MACHINE */}
            <MDBSideNavCat
              iconRegular
              name="TOOLS & MACHINE"
              id="tools-machine-cat"
              icon="fa fa-tools"
            >
              <li>
                <NavLink to="/air-pillow-machine">Air Pillow Machine</NavLink>
              </li>
              <li>
                <NavLink to="/glue-gun">Glue Gun</NavLink>
              </li>
              <li>
                <NavLink to="/poly-tubing-dispenser">
                  Poly Tubing Dispenser
                </NavLink>
              </li>
              <li>
                <NavLink to="/utility-knife">Utility Knife</NavLink>
              </li>
              <li>
                <NavLink to="/wrapping-paper-dispenser">
                  Wrapping Paper Dispenser
                </NavLink>
              </li>

              <MDBSideNavItem>Air Pillow Machine</MDBSideNavItem>
              <MDBSideNavItem>Glue Gun</MDBSideNavItem>
              <MDBSideNavItem>Poly Tubing Dispenser</MDBSideNavItem>
              <MDBSideNavItem>Utility Knife</MDBSideNavItem>
              <MDBSideNavItem>Wrapping Paper Dispenser</MDBSideNavItem>
            </MDBSideNavCat>

            {/* MISCELLANEOUS */}
            <MDBSideNavCat
              iconRegular
              name="MISCELLANEOUS"
              id="miscellaneous-cat"
              icon="fa fa-address-book"
            >
              <li>
                <NavLink to="/cable-ties">Cable Ties</NavLink>
              </li>
              <li>
                <NavLink to="/gloves-masks">Gloves & Masks</NavLink>
              </li>
              <li>
                <NavLink to="/metal-truck-seal">Metal Truck Seal</NavLink>
              </li>
              <li>
                <NavLink to="/shipping-scales">Shipping Scales</NavLink>
              </li>
              <li>
                <NavLink to="/twist-ties">Twist Ties</NavLink>
              </li>
            </MDBSideNavCat>
          </MDBSideNavNav>
        </MDBSideNav>

        {/* NAVBAR */}
        <MDBNavbar style={navStyle} double expand="md" fixed="top" scrolling>
          <MDBNavbarNav left>
            <MDBNavItem>
              <div
                onClick={this.handleToggleClickA}
                key="sideNavToggleA"
                style={{
                  lineHeight: "32px",
                  marginRight: "1em",
                  verticalAlign: "middle"
                }}
              >
                <MDBIcon icon="bars" color="white" size="2x" />
              </div>
            </MDBNavItem>
            <MDBNavItem
              className="d-none d-md-inline"
              style={{ paddingTop: 5 }}
            >
              Jpack International
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right style={specialCaseNavbarStyles}>
            <MDBNavItem active>
              <MDBNavLink to="#!">
                <MDBIcon icon="envelope" className="d-inline-inline" />{" "}
                <div className="d-none d-md-inline">Contact</div>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">
                <MDBIcon far icon="comments" className="d-inline-inline" />{" "}
                <div className="d-none d-md-inline">Support</div>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">
                <MDBIcon icon="user" className="d-inline-inline" />{" "}
                <div className="d-none d-md-inline">Account</div>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className="d-none d-md-inline">Dropdown</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu right>
                  <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">
                    Something else here
                  </MDBDropdownItem>
                  <MDBDropdownItem href="#!">
                    Something else here
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBNavbar>
        <main style={mainStyle} />
      </div>
    );
  }
}

export default NavigationBars;
