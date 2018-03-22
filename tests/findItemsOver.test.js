describe('The findItemsOver function', function(){
  it('it should return items/products that are higher in Quantity than threshold', function(){
    assert.deepEqual(findItemsOver([{name:"apples", "qty":40} , {name: "bananas", qty: 23},],20), [{"name":"apples", "qty": 40}, {"name":"bananas","qty":23},], true)
  });
  it('it should return items/products that are lower in Quantity than threshold', function(){
    assert.deepEqual(findItemsOver([{name:"apples", "qty":15} , {name: "bananas", qty:19 },],20), [])
  });
});
