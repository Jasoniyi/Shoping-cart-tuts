import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "./actions/cartActions";

class Home extends Component {
  handleClick = id => {
    this.props.addToCart(id);
  };

  render() {
    let itemList = this.props.items;
    return (
      <div className="container">
        <h3 className="center">Our Items</h3>
        <div className="row">
          {itemList.map(items => (
            <div key={items.id} className="col s12 m4">
              <div className="card">
                <div className="card-image">
                  <img src={items.img} alt={items.title} />
                  <span
                    className="card-title"
                    style={{ color: "black", fontWeight: 500 }}
                  >
                    {items.title}
                  </span>
                  <span
                    to="/"
                    className="btn-floating halfway-fab waves-effect waves-light red"
                    onClick={() => {
                      this.handleClick(items.id);
                    }}
                  >
                    <i className="material-icons">add</i>
                  </span>
                </div>
                <div className="card-content">
                  <p>{items.desc}</p>
                  <p>
                    <b>Price: {items.price}$</b>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => {
      dispatch(addToCart(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
