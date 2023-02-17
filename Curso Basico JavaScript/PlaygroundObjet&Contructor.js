function solution(car) {
    
    var car = car;
    
    if (car.licensePlate == undefined) {
      car.drivingLicense = false;
    }

    else {
      car.drivingLicense = true;
    }
    return car;
}