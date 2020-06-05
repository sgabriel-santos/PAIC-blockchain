import React from 'react';

export default props => {
    return (
    //   <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
    //     <div className="containerw">
    //         <a
    //         className="navbar-brand col-sm-3 col-md-2 mr-0"
    //         href="http://www.dappuniversity.com/bootcamp"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         >
    //         Dapp University's Blockchain Marketplace
    //         </a>
    //         <ul className="navbar-nav px-3">
    //         <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
    //             <small className="text-white"><span id="account">{props.account}</span></small>
    //         </li>
    //         </ul>
    //     </div>
    //   </nav>

    <nav className="navbar navbar-expand-lg fixed-top p-0 navbar-dark bg-dark">
        <div className="container">
            <a className="navbar-brand text-white" href="#">Blockchain-test</a>
            
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/home">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/list">Dados <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Ajuda <span className="sr-only">(current)</span></a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    );
}
