function basicTeenager(age) {
  if(age >= 13 && age <= 19) {
    return("You are a teenager!")
  }
}

function teenager(age) {
  if(age >= 13 && age <= 19) {
  }  else{
    return('You are not a teenager')
}
    return("You are a teenager!")
}

function ageChecker(age) {
  if(age >= 13 && age <= 19) {
  } else if(age < 13) {
    return('You are a kid')
  } else{
    return('You are a grownup')
  }
  return('You are a teenager!')
}

function ternaryTeenager(age) {
  return(age >= 13 && age <= 19) ?
  ('You are a teenager'):
  ('You are not a teenager')

}

function switchAge(age) {
  switch(age) {
    case "13-19":
      console.log('You are a teenager');
    default:
      return('You have an age');
  }
}
