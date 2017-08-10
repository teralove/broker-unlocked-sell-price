module.exports = function BrokerUnlockedSellPrice(dispatch) {
    dispatch.hook('S_TRADE_BROKER_INPUT_PRICE', 1, (event) => { 
        dispatch.toClient('S_TRADE_BROKER_INPUT_PRICE', 1, Object.assign(event, {avgPrice: 99990000000}));
        return false;
    })
}
