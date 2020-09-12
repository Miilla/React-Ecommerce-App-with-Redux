import React from 'react';
import { connect } from 'react-redux';
import { formatMoney } from "../../pipes/priceFormatter";
import CartItem from "../../components/CartItem/CartItem";

const Contact = (props) => {
    return (
        <>
            <div className="container" style={{ paddingTop: '6rem' }}>
                <div className="card shopping-cart">
                    <div className="card-header bg-dark text-light">
                        <i className="fa fa-shopping-cart pr-2" aria-hidden="true"></i>
                            Shipping cart
                            <div className="clearfix"></div>
                    </div>
                    <div className="card-body">
                        Body
                    </div>
                    <div className="card-footer">
                        <div className="pull-right" style={{ margin: '10px' }}>
                            <div className="pull-right" style={{ margin: '5px' }}>
                                Footer
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


const mapStateToProps = state => {

    console.log(state, 'state has changed');

    return {
    }
}

export default connect(mapStateToProps, null)(Contact);
