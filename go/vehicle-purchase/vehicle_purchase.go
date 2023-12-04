package purchase

import (
	"strings"
)

// NeedsLicense determines whether a license is needed to drive a type of vehicle. Only "car" and "truck" require a license.
func NeedsLicense(kind string) bool {
  return kind == "car" || kind == "truck"
}

// ChooseVehicle recommends a vehicle for selection. It always recommends the vehicle that comes first in lexicographical order.
func ChooseVehicle(option1, option2 string) string {
  const sentence = " is clearly the better choice.";

  if strings.Compare(option1, option2) == 1 {
    return option2 + sentence
  }

  return option1 + sentence
}

// CalculateResellPrice calculates how much a vehicle can resell for at a certain age.
func CalculateResellPrice(originalPrice, age float64) float64 {
  newPrice := 70.0
  if age < 3 {
    newPrice = 80.0
  }
  if age >= 10 {
    newPrice = 50.0
  }

  return originalPrice * newPrice / 100 
}
