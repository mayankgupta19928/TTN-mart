
const initialState = {
    addedIds: [],
    quantityById: {},
    priceById:{},
    stockById:{},
    totalValue:0
}

const addedIds = (state = initialState.addedIds, action) => {
    switch (action.type) {
        case 'AdToCart':
            if (state.indexOf(action.payload) !== -1) {
                return state
            }
            return [ ...state, action.payload ]
        default:
            return state
    }
}

const quantityById = (state = initialState.quantityById, action) => {
    switch (action.type) {
        case 'AdToCart':
            const { payload,stock } = action;
            // const stateQty = state.payload.name;
            const stateQty = ((state || {}).payload || {}).name;
            // const val = state.getNestedValue('qty');
            console.log(`get All qty = ${ stateQty}`);
            console.log('state condition + = ', state);
            if(state[payload] < stock) {
                return {
                    ...state,
                    [payload]: (state[payload] || 1) + 1
                }
            }
            else{
                return {
                    ...state,
                    [payload]: (state[payload] || 1)
                }
            }
            // return { ...state, [payload] :{'name':payload,'price': price  ,'qty': (state[payload] || 0) + 1 }      }

        default:
            return state
    }
}
const priceId = (state = initialState.priceById, action) => {
    switch (action.type) {
        case 'AdToCart':
            const { price,payload } = action;
            // const getPr = {[payload]: price};
            return { ...state, [payload] : price  }
        default:
            return state
    }
}

const stockId = (state = initialState.stockById, action) => {
    switch (action.type) {
        case 'AdToCart':
            const { stock,payload } = action;
            // const getPr = {[payload]: price};
            return { ...state, [payload] : stock  }
        default:
            return state
    }
}

    const totalVal = (state = initialState, action) => {
        switch (action.type) {
            case 'AdToCart':
                    const { price,payload } = action;
                    // const getPr = {[payload]: price};
                    const Idqty = state.totalValue;
                const data = { ...state.totalValue };
                const getData = parseInt([data.total]);
                var qtyprice = 0;

                state.addedIds.map((id)=>{

                    qtyprice +=   (state.quantityById[id] +1) * state.priceById[id];
                    console.log('qty = '+state.quantityById[id]+' price= '+ state.priceById[id] +' qtyprice= '+qtyprice);


                });
                    return { ...state.totalValue, 'total' : qtyprice }
            default:
                return state
        }
    }

const removeQtyById = (state, action,stateQty = state.quantityById) => {
    switch (action.type) {
        case 'removeToCart':
            const { payload } = action;
            // debugger;
            const decreseQty = (parseInt(state.quantityById[payload]) - 1);
            // console.log('Descrease Qty  = '+ decreseQty );
            // console.log('removeToCart = '+ JSON.stringify(state) );
            // console.log('State Check  = '+ state.quantityById[payload] );
            // console.log('state condition - = ', state);
            let newState = { ...state };
            const get_Price = newState.priceById[payload];
            const Total = newState.totalValue['total'];
            newState.quantityById[payload] = decreseQty;
            // newState.totalValue['total'] = Total - get_Price;
            // console.log('newState = '+ JSON.stringify(newState));
            // console.log('get_Price = '+ get_Price);
            var qtyprice = 0;

            state.addedIds.map((id)=>{

                  qtyprice +=   state.quantityById[id] *state.priceById[id];
                // console.log('qty = '+qty+' price= '+price+' qtyprice= '+qtyprice);


            });
            console.log(' qtyprice= '+qtyprice);
            newState.totalValue['total'] = qtyprice;



            return newState;
        default:
            return state

    }
}


const Item = (state=initialState , action) =>
{


    switch(action.type)
    {
        case 'AdToCart' :
            // console.log('addqty')
            return {
                addedIds: addedIds(state.addedIds, action),
                quantityById: quantityById(state.quantityById, action),
                priceById: priceId(state.priceById, action),
                stockById: stockId(state.stockById, action),
                totalValue: totalVal(state, action)
            };


        case 'removeToCart' :


                    // console.log('remove');
                    // console.log('Before removeToCart = ' + JSON.stringify(state));
                    // removeQtyById(state.quantityById, action)
                    // addedIds: addedIds(state.addedIds, action),
                    // RemoveById(state.addedIds, action);
                    return  removeQtyById(state, action,state.quantityById);
                    // return removeQtyById(state, action);
                    // priceById: priceId(state.priceById, action),
                    // stockById: stockId(state.stockById, action),
                    // totalValue: totalVal(state, action)



        case  'CreateItem' :
        {
             // state.name.push(action.payload);
        }
        default:
        {
            return state;
        }

    }
}

export default Item;