import React, { Component, Fragment } from 'react';

class Dashboard extends Component {
   componentWillMount() {
    //    console.log(this.props.location.hash);
       if(this.props.location.hash==="#login") {
        window.location.hash = '';
        window.location.reload();
       }
   }
    render() {
        return (
            <Fragment>
                <div className="content-header row">
                </div>
                <div className="content-body">
                    {/* Stats */}
                    <div className="row">
                        <div className="col-xl-3 col-lg-6 col-12">
                            <div className="card">
                                <div className="card-content">
                                    <div className="media align-items-stretch">
                                        <div className="p-2 text-center bg-primary bg-darken-2">
                                            <i className="icon-camera font-large-2 white" />
                                        </div>
                                        <div className="p-2 bg-gradient-x-primary white media-body">
                                            <h5>Products</h5>
                                            <h5 className="text-bold-400 mb-0"><i className="ft-plus" /> 28</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-12">
                            <div className="card">
                                <div className="card-content">
                                    <div className="media align-items-stretch">
                                        <div className="p-2 text-center bg-danger bg-darken-2">
                                            <i className="icon-user font-large-2 white" />
                                        </div>
                                        <div className="p-2 bg-gradient-x-danger white media-body">
                                            <h5>New Users</h5>
                                            <h5 className="text-bold-400 mb-0"><i className="ft-arrow-up" />1,238</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-12">
                            <div className="card">
                                <div className="card-content">
                                    <div className="media align-items-stretch">
                                        <div className="p-2 text-center bg-warning bg-darken-2">
                                            <i className="icon-basket-loaded font-large-2 white" />
                                        </div>
                                        <div className="p-2 bg-gradient-x-warning white media-body">
                                            <h5>New Orders</h5>
                                            <h5 className="text-bold-400 mb-0"><i className="ft-arrow-down" /> 4,658</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-12">
                            <div className="card">
                                <div className="card-content">
                                    <div className="media align-items-stretch">
                                        <div className="p-2 text-center bg-success bg-darken-2">
                                            <i className="icon-wallet font-large-2 white" />
                                        </div>
                                        <div className="p-2 bg-gradient-x-success white media-body">
                                            <h5>Total Profit</h5>
                                            <h5 className="text-bold-400 mb-0"><i className="ft-arrow-up" /> 5.6 M</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*/ Stats */}
                    {/*Product sale & buyers */}
                    <div className="row match-height">
                        <div className="col-xl-8 col-lg-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Products Sales</h4>
                                    <a href="/" className="heading-elements-toggle"><i className="fa fa-ellipsis-v font-medium-3" /></a>
                                    <div className="heading-elements">
                                        <ul className="list-inline mb-0">
                                            <li><a href="/" data-action="reload"><i className="ft-rotate-cw" /></a></li>
                                            <li><a href="/" data-action="expand"><i className="ft-maximize" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-content">
                                    <div className="card-body">
                                        <div id="products-sales" className="height-300" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Recent Buyers</h4>
                                    <a href="/" className="heading-elements-toggle"><i className="fa fa-ellipsis-v font-medium-3" /></a>
                                    <div className="heading-elements">
                                        <ul className="list-inline mb-0">
                                            <li><a href="/" data-action="reload"><i className="ft-rotate-cw" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-content px-1">
                                    <div id="recent-buyers" className="media-list height-300 position-relative">
                                        <a href="/" className="media border-0">
                                            <div className="media-left pr-1">
                                                <span className="avatar avatar-md avatar-online">
                                                    <img className="media-object rounded-circle" src="images/portrait/small/avatar-s-7.png" alt="Generic placeholder image1" />
                                                </span>
                                            </div>
                                            <div className="media-body w-100">
                                                <h6 className="list-group-item-heading">Kristopher Candy
            <span className="font-medium-4 float-right pt-1">$1,021</span>
                                                </h6>
                                                <p className="list-group-item-text mb-0">
                                                    <span className="badge badge-primary">Electronics</span>
                                                    <span className="badge badge-warning ml-1">Decor</span>
                                                </p>
                                            </div>
                                        </a>
                                        <a href="/" className="media border-0">
                                            <div className="media-left pr-1">
                                                <span className="avatar avatar-md avatar-away">
                                                    <img className="media-object rounded-circle" src="images/portrait/small/avatar-s-8.png" alt="Generic placeholder image2" />
                                                    <i />
                                                </span>
                                            </div>
                                            <div className="media-body w-100">
                                                <h6 className="list-group-item-heading">Lawrence Fowler
            <span className="font-medium-4 float-right pt-1">$2,021</span>
                                                </h6>
                                                <p className="list-group-item-text mb-0">
                                                    <span className="badge badge-danger">Appliances</span>
                                                </p>
                                            </div>
                                        </a>
                                        <a href="/" className="media border-0">
                                            <div className="media-left pr-1">
                                                <span className="avatar avatar-md avatar-busy">
                                                    <img className="media-object rounded-circle" src="images/portrait/small/avatar-s-9.png" alt="Generic placeholder image3" />
                                                    <i />
                                                </span>
                                            </div>
                                            <div className="media-body w-100">
                                                <h6 className="list-group-item-heading">Linda Olson
            <span className="font-medium-4 float-right pt-1">$1,112</span>
                                                </h6>
                                                <p className="list-group-item-text mb-0">
                                                    <span className="badge badge-primary">Electronics</span>
                                                    <span className="badge badge-success ml-1">Office</span>
                                                </p>
                                            </div>
                                        </a>
                                        <a href="/" className="media border-0">
                                            <div className="media-left pr-1">
                                                <span className="avatar avatar-md avatar-online">
                                                    <img className="media-object rounded-circle" src="images/portrait/small/avatar-s-10.png" alt="Generic placeholder image4" />
                                                    <i />
                                                </span>
                                            </div>
                                            <div className="media-body w-100">
                                                <h6 className="list-group-item-heading">Roy Clark
            <span className="font-medium-4 float-right pt-1">$2,815</span>
                                                </h6>
                                                <p className="list-group-item-text mb-0">
                                                    <span className="badge badge-warning">Decor</span>
                                                    <span className="badge badge-danger ml-1">Appliances</span>
                                                </p>
                                            </div>
                                        </a>
                                        <a href="/" className="media border-0">
                                            <div className="media-left pr-1">
                                                <span className="avatar avatar-md avatar-online">
                                                    <img className="media-object rounded-circle" src="images/portrait/small/avatar-s-11.png" alt="Generic placeholder image5" />
                                                    <i />
                                                </span>
                                            </div>
                                            <div className="media-body w-100">
                                                <h6 className="list-group-item-heading">Kristopher Candy
            <span className="font-medium-4 float-right pt-1">$2,021</span>
                                                </h6>
                                                <p className="list-group-item-text mb-0">
                                                    <span className="badge badge-primary">Electronics</span>
                                                    <span className="badge badge-warning ml-1">Decor</span>
                                                </p>
                                            </div>
                                        </a>
                                        <a href="/" className="media border-0">
                                            <div className="media-left pr-1">
                                                <span className="avatar avatar-md avatar-away">
                                                    <img className="media-object rounded-circle" src="images/portrait/small/avatar-s-12.png" alt="Generic placeholder image6" />
                                                    <i />
                                                </span>
                                            </div>
                                            <div className="media-body w-100">
                                                <h6 className="list-group-item-heading">Lawrence Fowler
            <span className="font-medium-4 float-right pt-1">$1,321</span>
                                                </h6>
                                                <p className="list-group-item-text mb-0">
                                                    <span className="badge badge-danger">Appliances</span>
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*/ Product sale & buyers */}
                    {/*Recent Orders & Monthly Salse */}
                    <div className="row match-height">
                        <div className="col-xl-8 col-lg-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Recent Orders</h4>
                                    <a href="/" className="heading-elements-toggle"><i className="fa fa-ellipsis-v font-medium-3" /></a>
                                    <div className="heading-elements">
                                        <ul className="list-inline mb-0">
                                            <li><a href="/" data-action="reload"><i className="ft-rotate-cw" /></a></li>
                                            <li><a href="/" data-action="expand"><i className="ft-maximize" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-content">
                                    <div className="card-body">
                                        <p>Total paid invoices 240, unpaid 150.
        <span className="float-right"><a href="project-summary.html" target="_blank">Invoice Summary <i className="ft-arrow-right" /></a></span>
                                        </p>
                                    </div>
                                    <div className="table-responsive">
                                        <table id="recent-orders" className="table table-hover mb-0 ps-container ps-theme-default">
                                            <thead>
                                                <tr>
                                                    <th>SKU</th>
                                                    <th>Invoice#</th>
                                                    <th>Customer Name</th>
                                                    <th>Status</th>
                                                    <th>Amount</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="text-truncate">PO-10521</td>
                                                    <td className="text-truncate"><a href="/">INV-001001</a></td>
                                                    <td className="text-truncate">Elizabeth W.</td>
                                                    <td className="text-truncate">
                                                        <span className="badge badge-default badge-success">Paid</span>
                                                    </td>
                                                    <td className="text-truncate">$ 1200.00</td>
                                                </tr>
                                                <tr>
                                                    <td className="text-truncate">PO-532521</td>
                                                    <td className="text-truncate"><a href="/">INV-01112</a></td>
                                                    <td className="text-truncate">Doris R.</td>
                                                    <td className="text-truncate">
                                                        <span className="badge badge-default badge-warning">Overdue</span>
                                                    </td>
                                                    <td className="text-truncate">$ 5685.00</td>
                                                </tr>
                                                <tr>
                                                    <td className="text-truncate">PO-05521</td>
                                                    <td className="text-truncate"><a href="/">INV-001012</a></td>
                                                    <td className="text-truncate">Andrew D.</td>
                                                    <td className="text-truncate">
                                                        <span className="badge badge-default badge-success">Paid</span>
                                                    </td>
                                                    <td className="text-truncate">$ 152.00</td>
                                                </tr>
                                                <tr>
                                                    <td className="text-truncate">PO-15521</td>
                                                    <td className="text-truncate"><a href="/">INV-001401</a></td>
                                                    <td className="text-truncate">Megan S.</td>
                                                    <td className="text-truncate">
                                                        <span className="badge badge-default badge-success">Paid</span>
                                                    </td>
                                                    <td className="text-truncate">$ 1450.00</td>
                                                </tr>
                                                <tr>
                                                    <td className="text-truncate">PO-32521</td>
                                                    <td className="text-truncate"><a href="/">INV-008101</a></td>
                                                    <td className="text-truncate">Walter R.</td>
                                                    <td className="text-truncate">
                                                        <span className="badge badge-default badge-warning">Overdue</span>
                                                    </td>
                                                    <td className="text-truncate">$ 685.00</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-12">
                            <div className="card">
                                <div className="card-content">
                                    <div className="card-body sales-growth-chart">
                                        <div id="monthly-sales" className="height-250" />
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <div className="chart-title mb-1 text-center">
                                        <h6>Total monthly Sales.</h6>
                                    </div>
                                    <div className="chart-stats text-center">
                                        <a href="/" className="btn btn-sm btn-primary mr-1">Statistics <i className="ft-bar-chart" /></a>
                                        <span className="text-muted">for the last year.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*/Recent Orders & Monthly Salse */}
                    {/* Social & Weather */}
                    <div className="row match-height">
                        <div className="col-xl-4 col-lg-12">
                            <div className="card bg-gradient-x-danger">
                                <div className="card-content">
                                    <div className="card-body">
                                        <div className="animated-weather-icons text-center float-left">
                                            <svg version="1.1" id="cloudHailAlt2" className="climacon climacon_cloudHailAlt climacon-blue-grey climacon-darken-2 height-100" viewBox="15 15 70 70">
                                                <g className="climacon_iconWrap climacon_iconWrap-cloudHailAlt">
                                                    <g className="climacon_wrapperComponent climacon_wrapperComponent-hailAlt">
                                                        <g className="climacon_component climacon_component-stroke climacon_component-stroke_hailAlt climacon_component-stroke_hailAlt-left">
                                                            <circle cx={42} cy="65.498" r={2} />
                                                        </g>
                                                        <g className="climacon_component climacon_component-stroke climacon_component-stroke_hailAlt climacon_component-stroke_hailAlt-middle">
                                                            <circle cx="49.999" cy="65.498" r={2} />
                                                        </g>
                                                        <g className="climacon_component climacon_component-stroke climacon_component-stroke_hailAlt climacon_component-stroke_hailAlt-right">
                                                            <circle cx="57.998" cy="65.498" r={2} />
                                                        </g>
                                                        <g className="climacon_component climacon_component-stroke climacon_component-stroke_hailAlt climacon_component-stroke_hailAlt-left">
                                                            <circle cx={42} cy="65.498" r={2} />
                                                        </g>
                                                        <g className="climacon_component climacon_component-stroke climacon_component-stroke_hailAlt climacon_component-stroke_hailAlt-middle">
                                                            <circle cx="49.999" cy="65.498" r={2} />
                                                        </g>
                                                        <g className="climacon_component climacon_component-stroke climacon_component-stroke_hailAlt climacon_component-stroke_hailAlt-right">
                                                            <circle cx="57.998" cy="65.498" r={2} />
                                                        </g>
                                                    </g>
                                                    <g className="climacon_wrapperComponent climacon_wrapperComponent-cloud">
                                                        <path className="climacon_component climacon_component-stroke climacon_component-stroke_cloud" d="M63.999,64.941v-4.381c2.39-1.384,3.999-3.961,3.999-6.92c0-4.417-3.581-8-7.998-8c-1.602,0-3.084,0.48-4.334,1.291c-1.23-5.317-5.974-9.29-11.665-9.29c-6.626,0-11.998,5.372-11.998,11.998c0,3.549,1.55,6.728,3.999,8.924v4.916c-4.776-2.768-7.998-7.922-7.998-13.84c0-8.835,7.162-15.997,15.997-15.997c6.004,0,11.229,3.311,13.966,8.203c0.663-0.113,1.336-0.205,2.033-0.205c6.626,0,11.998,5.372,11.998,12C71.998,58.863,68.656,63.293,63.999,64.941z" />
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                        <div className="weather-details text-center">
                                            <span className="block white darken-1">Snow</span>
                                            <span className="font-large-2 block white darken-4">-5°</span>
                                            <span className="font-medium-4 text-bold-500 white darken-1">London, UK</span>
                                        </div>
                                    </div>
                                    <div className="card-footer bg-gradient-x-danger border-0">
                                        <div className="row">
                                            <div className="col-4 text-center display-table-cell white">
                                                <i className="me-wind font-large-1 lighten-3 align-middle" />
                                                <span className="align-middle">2MPH</span>
                                            </div>
                                            <div className="col-4 text-center display-table-cell white">
                                                <i className="me-sun2 font-large-1 lighten-3 align-middle" />
                                                <span className="align-middle">2%</span>
                                            </div>
                                            <div className="col-4 text-center display-table-cell white">
                                                <i className="me-thermometer font-large-1 lighten-3 align-middle" />
                                                <span className="align-middle">13.0°</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-12">
                            <div className="card bg-gradient-x-info white">
                                <div className="card-content">
                                    <div className="card-body text-center">
                                        <div className="mb-2">
                                            <i className="fa fa-twitter font-large-2" />
                                        </div>
                                        <div className="tweet-slider">
                                            <ul>
                                                <li>Congratulations to Rob Jones in accounting for winning our
            <span className="yellow">#NFL</span> football pool!
            <p className="text-italic pt-1">- John Doe</p>
                                                </li>
                                                <li>Contests are a great thing to partner on. Partnerships immediately
            <span className="yellow">#DOUBLE</span> the reach.
            <p className="text-italic pt-1">- John Doe</p>
                                                </li>
                                                <li>Puns, humor, and quotes are great content on
            <span className="yellow">#Twitter</span>. Find some related to your business.
            <p className="text-italic pt-1">- John Doe</p>
                                                </li>
                                                <li>Are there
            <span className="yellow">#common-sense</span> facts related to your business? Combine
                                                                                                                                                                                                                                                                                                                                                                                                                                            them with a great photo.
            <p className="text-italic pt-1">- John Doe</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-12">
                            <div className="card bg-gradient-x-primary white">
                                <div className="card-content">
                                    <div className="card-body text-center">
                                        <div className="mb-2">
                                            <i className="fa fa-facebook font-large-2" />
                                        </div>
                                        <div className="fb-post-slider">
                                            <ul>
                                                <li>Congratulations to Rob Jones in accounting for winning our
                                                  #NFL football pool!
            <p className="text-italic pt-1">- John Doe</p>
                                                </li>
                                                <li>Contests are a great thing to partner on. Partnerships immediately
                                                  #DOUBLE the reach.
            <p className="text-italic pt-1">- John Doe</p>
                                                </li>
                                                <li>Puns, humor, and quotes are great content on #Twitter. Find
                                                  some related to your business.
            <p className="text-italic pt-1">- John Doe</p>
                                                </li>
                                                <li>Are there #common-sense facts related to your business? Combine
                                                  them with a great photo.
            <p className="text-italic pt-1">- John Doe</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*/ Social & Weather */}
                    {/* Basic Horizontal Timeline */}
                    <div className="row match-height">
                        <div className="col-xl-8 col-lg-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Horizontal Timeline</h4>
                                    <a href="/" className="heading-elements-toggle"><i className="fa fa-ellipsis-v font-medium-3" /></a>
                                    <div className="heading-elements">
                                        <ul className="list-inline mb-0">
                                            <li><a href="/" data-action="reload"><i className="ft-rotate-cw" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-content">
                                    <div className="card-body">
                                        <div className="card-text">
                                            <section className="cd-horizontal-timeline">
                                                <div className="timeline">
                                                    <div className="events-wrapper">
                                                        <div className="events">
                                                            <ol>
                                                                <li><a href="#0" data-date="16/01/2015" className="selected">16 Jan</a></li>
                                                                <li><a href="#0" data-date="28/02/2015">28 Feb</a></li>
                                                                <li><a href="#0" data-date="20/04/2015">20 Mar</a></li>
                                                                <li><a href="#0" data-date="20/05/2015">20 May</a></li>
                                                                <li><a href="#0" data-date="09/07/2015">09 Jul</a></li>
                                                                <li><a href="#0" data-date="30/08/2015">30 Aug</a></li>
                                                                <li><a href="#0" data-date="15/09/2015">15 Sep</a></li>
                                                            </ol>
                                                            <span className="filling-line" aria-hidden="true" />
                                                        </div>
                                                        {/* .events */}
                                                    </div>
                                                    {/* .events-wrapper */}
                                                    <ul className="cd-timeline-navigation">
                                                        <li><a href="#0" className="prev inactive">Prev</a></li>
                                                        <li><a href="#0" className="next">Next</a></li>
                                                    </ul>
                                                    {/* .cd-timeline-navigation */}
                                                </div>
                                                {/* .timeline */}
                                                <div className="events-content">
                                                    <ol>
                                                        <li className="selected" data-date="16/01/2015">
                                                            <blockquote className="blockquote border-0">
                                                                <div className="media">
                                                                    <div className="media-left">
                                                                        <img className="media-object img-xl mr-1" src="images/portrait/small/avatar-s-5.png" alt="Generic placeholder imag8" />
                                                                    </div>
                                                                    <div className="media-body">
                                                                        Sometimes life is going to hit you in the head with a brick. Don't lose faith.
                    </div>
                                                                </div>
                                                                <footer className="blockquote-footer text-right">Steve Jobs
                    <cite title="Source Title">Entrepreneur</cite>
                                                                </footer>
                                                            </blockquote>
                                                            <p className="lead mt-2">
                                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia,
                                                                fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur
                                                                aspernatur at.
                </p>
                                                        </li>
                                                        <li data-date="28/02/2015">
                                                            <blockquote className="blockquote border-0">
                                                                <div className="media">
                                                                    <div className="media-left">
                                                                        <img className="media-object img-xl mr-1" src="images/portrait/small/avatar-s-6.png" alt="Generic placeholder image9" />
                                                                    </div>
                                                                    <div className="media-body">
                                                                        Sometimes life is going to hit you in the head with a brick. Don't lose faith.
                    </div>
                                                                </div>
                                                                <footer className="blockquote-footer text-right">Steve Jobs
                    <cite title="Source Title">Entrepreneur</cite>
                                                                </footer>
                                                            </blockquote>
                                                            <p className="lead mt-2">
                                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia,
                                                                fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur
                                                                aspernatur at.
                </p>
                                                        </li>
                                                        <li data-date="20/04/2015">
                                                            <blockquote className="blockquote border-0">
                                                                <div className="media">
                                                                    <div className="media-left">
                                                                        <img className="media-object img-xl mr-1" src="images/portrait/small/avatar-s-7.png" alt="Generic placeholder image10" />
                                                                    </div>
                                                                    <div className="media-body">
                                                                        Sometimes life is going to hit you in the head with a brick. Don't lose faith.
                    </div>
                                                                </div>
                                                                <footer className="blockquote-footer text-right">Steve Jobs
                    <cite title="Source Title">Entrepreneur</cite>
                                                                </footer>
                                                            </blockquote>
                                                            <p className="lead mt-2">
                                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia,
                                                                fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur
                                                                aspernatur at.
                </p>
                                                        </li>
                                                        <li data-date="20/05/2015">
                                                            <blockquote className="blockquote border-0">
                                                                <div className="media">
                                                                    <div className="media-left">
                                                                        <img className="media-object img-xl mr-1" src="images/portrait/small/avatar-s-8.png" alt="Generic placeholder image11" />
                                                                    </div>
                                                                    <div className="media-body">
                                                                        Sometimes life is going to hit you in the head with a brick. Don't lose faith.
                    </div>
                                                                </div>
                                                                <footer className="blockquote-footer text-right">Steve Jobs
                    <cite title="Source Title">Entrepreneur</cite>
                                                                </footer>
                                                            </blockquote>
                                                            <p className="lead mt-2">
                                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia,
                                                                fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur
                                                                aspernatur at.
                </p>
                                                        </li>
                                                        <li data-date="09/07/2015">
                                                            <blockquote className="blockquote border-0">
                                                                <div className="media">
                                                                    <div className="media-left">
                                                                        <img className="media-object img-xl mr-1" src="images/portrait/small/avatar-s-9.png" alt="Generic placeholder image12" />
                                                                    </div>
                                                                    <div className="media-body">
                                                                        Sometimes life is going to hit you in the head with a brick. Don't lose faith.
                    </div>
                                                                </div>
                                                                <footer className="blockquote-footer text-right">Steve Jobs
                    <cite title="Source Title">Entrepreneur</cite>
                                                                </footer>
                                                            </blockquote>
                                                            <p className="lead mt-2">
                                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia,
                                                                fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur
                                                                aspernatur at.
                </p>
                                                        </li>
                                                        <li data-date="30/08/2015">
                                                            <blockquote className="blockquote border-0">
                                                                <div className="media">
                                                                    <div className="media-left">
                                                                        <img className="media-object img-xl mr-1" src="images/portrait/small/avatar-s-6.png" alt="Generic placeholder image1314" />
                                                                    </div>
                                                                    <div className="media-body">
                                                                        Sometimes life is going to hit you in the head with a brick. Don't lose faith.
                    </div>
                                                                </div>
                                                                <footer className="blockquote-footer text-right">Steve Jobs
                    <cite title="Source Title">Entrepreneur</cite>
                                                                </footer>
                                                            </blockquote>
                                                            <p className="lead mt-2">
                                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia,
                                                                fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur
                                                                aspernatur at.
                </p>
                                                        </li>
                                                        <li data-date="15/09/2015">
                                                            <blockquote className="blockquote border-0">
                                                                <div className="media">
                                                                    <div className="media-left">
                                                                        <img className="media-object img-xl mr-1" src="images/portrait/small/avatar-s-7.png" alt="Generic placeholder image14" />
                                                                    </div>
                                                                    <div className="media-body">
                                                                        Sometimes life is going to hit you in the head with a brick. Don't lose faith.
                    </div>
                                                                </div>
                                                                <footer className="blockquote-footer text-right">Steve Jobs
                    <cite title="Source Title">Entrepreneur</cite>
                                                                </footer>
                                                            </blockquote>
                                                            <p className="lead mt-2">
                                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia,
                                                                fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur
                                                                aspernatur at.
                </p>
                                                        </li>
                                                    </ol>
                                                </div>
                                                {/* .events-content */}
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Basic Card</h4>
                                </div>
                                <div className="card-content">
                                    <img className="img-fluid" src="images/carousel/06.jpg" alt="234" />
                                    <div className="card-body">
                                        <p className="card-text">Some quick example text to build on the card title and make up
        the bulk of the card's content.</p>
                                        <a href="/" className="card-link">Card link</a>
                                        <a href="/" className="card-link">Another link</a>
                                    </div>
                                </div>
                                <div className="card-footer border-top-blue-grey border-top-lighten-5 text-muted">
                                    <span className="float-left">3 hours ago</span>
                                    <span className="float-right">
                                        <a href="/" className="card-link">Read More <i className="fa fa-angle-right" /></a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*/ Basic Horizontal Timeline */}
                </div>
            </Fragment>

        )
    }
}

export default Dashboard;