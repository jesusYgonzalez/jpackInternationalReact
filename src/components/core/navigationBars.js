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
	MDBSideNavCat,
	MDBSideNavNav,
	MDBSideNav,
	MDBFormInline,
	MDBCol,
	MDBListGroup,
	MDBListGroupItem
} from "mdbreact";
import jpackLogo from "../../assets/img/jpack-logo.jpg";
import classes from "./navigation.css";
import Layout from "../../hoc/Layout/Layout";

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
  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleToggleClickA = () => {
    this.setState({
      toggleStateA: !this.state.toggleStateA,
      term: ""
    });
  };

  resetForm = e => {
    e.preventDefault();
  };

  handleResize = () => this.setState({ windowWidth: window.innerWidth });

  searchHandler = event => {
    this.setState({ term: event.target.value });
  };

  render() {
    const { term, productLinks } = this.state;
    const navStyle = {
      paddingLeft:
        this.state.windowWidth > this.state.breakWidth ? "210px" : "16px"
    };
		const mainStyle = {
			margin: "0 6%",
			paddingTop: "5rem",
			paddingLeft:
				this.state.windowWidth > this.state.breakWidth ? "240px" : "0"
		};
    const specialCaseNavbarStyles = {
      WebkitBoxOrient: "horizontal",
      flexDirection: "row"
    };

    let products = null;
    if (this.state.term) {
      products = (
        <MDBListGroup>
          {productLinks.filter(filterFunc(term)).map(link => (
            <MDBListGroupItem key={link.endpoint}>
              <NavLink
                onClick={this.handleToggleClickA.bind(this)}
                to={link.endpoint}
              >
                {link.name}
              </NavLink>
            </MDBListGroupItem>
          ))}
        </MDBListGroup>
      );
    }

    return (
      <div className="fixed-sn pink-skin">
        <MDBSideNav
          logo={jpackLogo}
          triggerOpening={this.state.toggleStateA}
          breakWidth={this.state.breakWidth}
          // bg={jpackLogo}
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
            <MDBFormInline
              onSubmit={this.resetForm.bind(this)}
              className="md-form"
            >
              <MDBIcon icon="search" />
              <input
                autoComplete="off"
                className="form-control
                light-blue-text
          			form-control-sm ml-3 w-75"
                type="text"
                value={term}
                onChange={this.searchHandler.bind(this)}
                placeholder="Search"
                aria-label="Search"
              />
            </MDBFormInline>
            {products}
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
              <MDBListGroup>
                {productLinks
                  .map(link => (
                    <MDBListGroupItem key={link.endpoint}>
                      <NavLink
                        onClick={this.handleToggleClickA.bind(this)}
                        to={link.endpoint}
                      >
                        {link.name}
                      </NavLink>
                    </MDBListGroupItem>
                  ))
                  .slice(0, 9)}
              </MDBListGroup>
            </MDBSideNavCat>

            {/* CORRUGATED BOXES */}
            <MDBSideNavCat
              iconRegular
              name="CORRUGATED BOXES"
              id="boxes-cat"
              icon="fa fa-box-open"
            >
              <MDBListGroup>
                {productLinks
                  .map(link => (
                    <MDBListGroupItem key={link.endpoint}>
                      <NavLink
                        onClick={this.handleToggleClickA.bind(this)}
                        to={link.endpoint}
                      >
                        {link.name}
                      </NavLink>
                    </MDBListGroupItem>
                  ))
                  .slice(10, 16)}
              </MDBListGroup>
            </MDBSideNavCat>

            {/* CUSHIONING */}
            <MDBSideNavCat
              iconRegular
              name="CUSHIONING"
              id="cushioning-cat"
              icon="fa fa-database"
            >
              <MDBListGroup>
                {productLinks
                  .map(link => (
                    <MDBListGroupItem key={link.endpoint}>
                      <NavLink
                        onClick={this.handleToggleClickA.bind(this)}
                        to={link.endpoint}
                      >
                        {link.name}
                      </NavLink>
                    </MDBListGroupItem>
                  ))
                  .slice(17, 23)}
              </MDBListGroup>
            </MDBSideNavCat>

            {/* LABELS AND ENVELOPES */}
            <MDBSideNavCat
              iconRegular
              name="LABELS & ENVELOPES"
              id="labels-cat"
              icon="fa fa-envelope"
            >
              <MDBListGroup>
                {productLinks
                  .map(link => (
                    <MDBListGroupItem key={link.endpoint}>
                      <NavLink
                        onClick={this.handleToggleClickA.bind(this)}
                        to={link.endpoint}
                      >
                        {link.name}
                      </NavLink>
                    </MDBListGroupItem>
                  ))
                  .slice(23, 28)}
              </MDBListGroup>
            </MDBSideNavCat>

            {/* MAILERS */}
            <MDBSideNavCat
              iconRegular
              name="MAILERS"
              id="mailers-cat"
              icon="fa fa-mail-bulk"
            >
              <MDBListGroup>
                {productLinks
                  .map(link => (
                    <MDBListGroupItem key={link.endpoint}>
                      <NavLink
                        onClick={this.handleToggleClickA.bind(this)}
                        to={link.endpoint}
                      >
                        {link.name}
                      </NavLink>
                    </MDBListGroupItem>
                  ))
                  .slice(28, 31)}
              </MDBListGroup>
            </MDBSideNavCat>

            {/* STRAPPING */}
            <MDBSideNavCat
              iconRegular
              name="STRAPPING"
              id="strapping-cat"
              icon="fa crop-alt"
            >
              <MDBListGroup>
                {productLinks
                  .map(link => (
                    <MDBListGroupItem key={link.endpoint}>
                      <NavLink
                        onClick={this.handleToggleClickA.bind(this)}
                        to={link.endpoint}
                      >
                        {link.name}
                      </NavLink>
                    </MDBListGroupItem>
                  ))
                  .slice(31, 36)}
              </MDBListGroup>
            </MDBSideNavCat>

            {/* STRETCH FILM */}
            <MDBSideNavCat
              iconRegular
              name="STRETCH FILM"
              id="stretch-film-cat"
              icon="fa fa-scroll"
            >
              <MDBListGroup>
                {productLinks
                  .map(link => (
                    <MDBListGroupItem key={link.endpoint}>
                      <NavLink
                        onClick={this.handleToggleClickA.bind(this)}
                        to={link.endpoint}
                      >
                        {link.name}
                      </NavLink>
                    </MDBListGroupItem>
                  ))
                  .slice(36, 42)}
              </MDBListGroup>
            </MDBSideNavCat>

            {/* TAPE */}
            <MDBSideNavCat
              iconRegular
              name="TAPE"
              id="tape-cat"
              icon="fa fa-tape"
            >
              <MDBListGroup>
                {productLinks
                  .map(link => (
                    <MDBListGroupItem key={link.endpoint}>
                      <NavLink
                        onClick={this.handleToggleClickA.bind(this)}
                        to={link.endpoint}
                      >
                        {link.name}
                      </NavLink>
                    </MDBListGroupItem>
                  ))
                  .slice(42, 51)}
              </MDBListGroup>
            </MDBSideNavCat>

            {/* TOOLS & MACHINE */}
            <MDBSideNavCat
              iconRegular
              name="TOOLS & MACHINE"
              id="tools-machine-cat"
              icon="fa fa-tools"
            >
              <MDBListGroup>
                {productLinks
                  .map(link => (
                    <MDBListGroupItem key={link.endpoint}>
                      <NavLink
                        onClick={this.handleToggleClickA.bind(this)}
                        to={link.endpoint}
                      >
                        {link.name}
                      </NavLink>
                    </MDBListGroupItem>
                  ))
                  .slice(51, 55)}
              </MDBListGroup>
            </MDBSideNavCat>

            {/* MISCELLANEOUS */}
            <MDBSideNavCat
              iconRegular
              name="MISCELLANEOUS"
              id="miscellaneous-cat"
              icon="fa fa-address-book"
            >
              <MDBListGroup>
                {productLinks
                  .map(link => (
                    <MDBListGroupItem key={link.endpoint}>
                      <NavLink
                        onClick={this.handleToggleClickA.bind(this)}
                        to={link.endpoint}
                      >
                        {link.name}
                      </NavLink>
                    </MDBListGroupItem>
                  ))
                  .slice(55, 60)}
              </MDBListGroup>
            </MDBSideNavCat>
          </MDBSideNavNav>
        </MDBSideNav>
        {/*END SIDE NAV*/}

        {/* NAVBAR */}
        <MDBNavbar style={navStyle} double expand="md" fixed="top" scrolling>
          <MDBNavbarNav left>
            <MDBNavItem>
              <div
                onClick={this.handleToggleClickA}
                key="sideNavToggleA"
                className={classes.navItem}
              >
                <MDBIcon icon="bars" color="white" size="2x" />
              </div>
            </MDBNavItem>
            <MDBNavItem
              className="d-none d-md-inline"
              style={{ paddingTop: 5, marginLeft: "1rem" }}
            >
              Jpack International 
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right style={specialCaseNavbarStyles}>
            <MDBNavItem active>
              <MDBNavLink to="#!">
                <MDBIcon icon="envelope" className="d-inline-inline" />{" "}
                <div className="d-none d-md-inline">About Us</div>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">
                <MDBIcon far icon="comments" className="d-inline-inline" />{" "}
                <div className="d-none d-md-inline">Contact US</div>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">
                <MDBIcon icon="user" className="d-inline-inline" />{" "}
                <div className="d-none d-md-inline">Order Online</div>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className="d-none d-md-inline">More</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu right>
                  <MDBDropdownItem href="#!">Success Stories</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Request Quotation</MDBDropdownItem>
                  <MDBDropdownItem href="#!">FAQ</MDBDropdownItem>
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
