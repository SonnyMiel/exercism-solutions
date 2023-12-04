// Package weather ...
package weather

// CurrentCondition is a string.
var CurrentCondition string
// CurrentLocation is a string.
var CurrentLocation string

// Forecast return a string based on two parameters.
func Forecast(city, condition string) string {
	CurrentLocation, CurrentCondition = city, condition
	return CurrentLocation + " - current weather condition: " + CurrentCondition
}
