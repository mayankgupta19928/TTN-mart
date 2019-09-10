import React from 'react';
import {connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Additem ,createItem , removeItem } from '../actions';

const Header = {
    fontWeight:700
};
const martBody = {
    border:'1px solid',
    // padding : '20px',
    width:'25%'
};
const getItem = {
    border:'0px',
    // padding : '5px',
    backgroundColor:'#8080808c'
};

const leftSidebar =
{

    width:'60%'
}
const RightSidebar =
    {

        // width:'39%',
        // float:'right'
    }


class Item extends React.Component {

    render()
    {
        var qtyprice = 0 ;

        this.props.AddtoCart.addedIds.map((id)=>{

            qtyprice +=   (this.props.AddtoCart.quantityById[id] ) * this.props.AddtoCart.priceById[id];


            // console.log('qty = '+this.props.AddtoCart.quantityById[id]+' price= '+ this.props.AddtoCart.priceById[id] +' qtyprice= '+qtyprice);

        });
        // console.log('jjjj',qtyprice);

        var ValueDe =0;
        const getItemArray = [{'name':'Tomato','price':'12','stock':13},{'name':'Potato','price':'15','stock':19},{'name':'Onion','price':'10','stock':22} ,{'name':'Honey','price':'30','stock':24}];


        return (
            <React.Fragment>
                <h2 style={Header}>  TTN Mart </h2>
                <div style={{width:'100%'}}>
                <React.Fragment style={leftSidebar}>
                    <table>
                        <tr>
                        <tbody>
                        { getItemArray.map((item , i)=> {
                            // console.log('quantityById+ '+this.props.AddtoCart.quantityById[item.name]);
                            // console.log(('MinusData = '+ parseInt((this.props.AddtoCart.stockById[item.name]) || 0 ) +'-'+ parseInt((this.props.AddtoCart.quantityById[item.name]) || 0 ) ));

                            return (

                            <td key={i} style={martBody}>
                        <text style={getItem}>
                            <p> {item['name']} </p>
                            <p>${item['price']} {}  </p>
                            <p id={item['name']}> In Stock ( {

                                // (  (  ( parseInt((this.props.AddtoCart.stockById[item.name]) ) - parseInt((this.props.AddtoCart.quantityById[item.name])  ) )   != '' ) ? (( parseInt(this.props.AddtoCart.stockById[item.name]) || 0 )- parseInt(( this.props.AddtoCart.quantityById[item.name]) || item['stock'] ) )    :            item['stock']  )
                                (  (  (this.props.AddtoCart.stockById[item.name]) || item['stock']  ) - parseInt((this.props.AddtoCart.quantityById[item.name]) || 0 ) )

                            } ) </p>
                            <button onClick={() => this.props.AddItem(item['name'] , item['price'], item['stock'])}> Add To Cart</button>
                        </text>
                        </td>  ); } )                }
                        </tbody>
                        </tr>
                    </table>
                </React.Fragment>

                <text style={RightSidebar}>
                    {
                        this.props.AddtoCart.addedIds.map((id)=>{
                        var qty = this.props.AddtoCart.quantityById[id];
                        var price = this.props.AddtoCart.priceById[id];
                        var stock = this.props.AddtoCart.stockById[id];
                        // var stock =  { ...getItemArray} ;
                        //     console.log('Stock check = '+ JSON.stringify(stock) + stock);
                        var ValueDe =+ (qty*price);
                        return (
                            <text >
                                <p> Name:     {id}  ,  <button   onClick={() => this.props.remItem(id)}> - </button> Qty : {qty}  <button  onClick={() => this.props.AddItem(id , price,stock)}> + </button> , Total value : {qty*price}  </p>
                            </text>

                        )

                        })

                    }

                </text>
                    <div> Total Value {
                        qtyprice
                        // this.props.AddtoCart.totalValue['total'];



                         }
                    </div>
                </div>
                {/*{*/}
                {/*        this.props.AddtoCart.map(*/}
                {/*        (elem)=>(*/}
                {/*        <div>*/}
                {/*        {elem}*/}
                {/*        </div>*/}
                {/*        )*/}
                {/*        )*/}

                {/*}*/}
            </React.Fragment>
        );
    }
}

function mapStateToProps (state)
{
    console.log('Sate', state.Item)

    return  {
        AddtoCart : state.Item
    }

}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        AddItem:Additem,
        remItem:removeItem,
        CreateItem: createItem
    } , dispatch)

}

const ConItem = connect(mapStateToProps,mapDispatchToProps)(Item);
export  default ConItem;