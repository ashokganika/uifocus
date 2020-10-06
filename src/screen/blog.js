import { Button, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import React from "react";
import { productList } from "../redux/action/productAction";

class Blog extends React.Component {
  constructor() {
    super();
    this.state = {
      stateVale: 0,
    };
  }

  componentDidMount() {
    this.props.getProductList();
  }

  handleIncrement = () => {
    this.setState({ stateVale: this.state.stateVale + 1 });
  };
  render() {
    console.log(this.props.productList);
    const { data, isLoading } = this.props.productList;
    let loading = (
      <div>
        <h2>Loading the product data...</h2>
      </div>
    );
    let dataList =
      data.productList &&
      Array.isArray(data.productList) &&
      data.productList.map((item, index) => (
        <Typography key={index}>
          {item.id} {item.name} {item.brand}
        </Typography>
      ));
    if (this.state.stateVale > 2) throw new Error("error in increment ");
    return (
      <div>
        <h2>increment page blog number</h2>
        <h4>the blog page value is : {this.state.stateVale}</h4>
        <Button onClick={this.handleIncrement}>increment</Button>
        {isLoading ? loading : dataList}
      </div>
    );
  }
}

const mapPropsToState = (state) => {
  return { productList: state.product };
};

const mapDispatchToProps = {
  getProductList: productList,
};

export default connect(mapPropsToState, mapDispatchToProps)(Blog);
