function enoughAirtime(items,airtime){
    var cost = 0
    var balance = items.split(',')
    for (var i=0;i<balance.length;i++){
      var newBalance = balance[i]
    if (newBalance.startsWith('s')){
    cost += 0.75
    }else if(newBalance.startsWith('d')){
      cost += 12
        
    }else{
      cost += 1.88
    }
    }
    var results = airtime-cost
    var sum = (cost > airtime) ? 'R0.00': 'R' + results.toFixed(2)
    return sum;
    }
    