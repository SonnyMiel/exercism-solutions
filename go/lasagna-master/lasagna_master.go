package lasagna


const DefaultPreparationTime = 2

// TODO: define the 'PreparationTime()' function
func PreparationTime(layers []string, count int) int {
  if count == 0 {
    count = DefaultPreparationTime
  }

  return len(layers) * count
}
// TODO: define the 'Quantities()' function
func Quantities(ingredients []string) (noodles int, sauce float64){
  for _, value := range ingredients {
    if value == "sauce" {
      sauce += 0.2
    }
    if value == "noodles" {
      noodles += 50
    }
  }
  return
}

// TODO: define the 'AddSecretIngredient()' function
func AddSecretIngredient(friendList []string, myList []string) {
  myList[len(myList) - 1] = friendList[len(friendList) - 1]
}

// TODO: define the 'ScaleRecipe()' function
func ScaleRecipe(quantities []float64, mult int) []float64 {
  result := []float64{}
  for i := range quantities {
    result = append(result, (quantities[i] / 2.0 ) * float64(mult))
  }

  return result
}

// Your first steps could be to read through the tasks, and create
// these functions with their correct parameter lists and return types.
// The function body only needs to contain `panic("")`.
// 
// This will make the tests compile, but they will fail.
// You can then implement the function logic one by one and see
// an increasing number of tests passing as you implement more 
// functionality.
