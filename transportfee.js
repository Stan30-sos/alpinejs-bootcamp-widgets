function transportFee(shift) {
  if (shift.startsWith('m')){
    return 'You will be charged R20';
  } else if (shift.startsWith('a')){
    return 'You will be charged R10';
  } else if ('shift.length<0'){
    return 'Please enter shift';
  }
  else {
    return 'Ride is free';
  }
};
