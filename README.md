# Haskell autocompletion for Atom

This Atom package suggests standard library function names as you are typing.  
![example with s and Data.List](https://github.com/justinas2314/atom-haskell-plugin/blob/a42eca83463a499370c37e240b5ba41ba5fae2cf/readme%20images/s.png)  
![example with so and Data.List](https://github.com/justinas2314/atom-haskell-plugin/blob/a42eca83463a499370c37e240b5ba41ba5fae2cf/readme%20images/so.png)
### Additional commands  
* `Register Every Module` -  (`Ctrl + Shift + H`) by default  
starts suggesting function names from all standard library modules. This is toggle-able so turning it on twice will turn it off.
### Why?
I couldn't find an atom package that did this so I made one. 
### How?
This uses the [autocomplete-plus](https://atom.io/packages/autocomplete-plus) package (it's built in there's no need to install it) to suggest function names that you might use.  
The data that this uses has been scraped off of [Hackage](https://hackage.haskell.org/package/base-4.15.0.0) and formatted with python. If a function had signatures like `Bool -> Bool -> Bool` and `Int -> Int -> Int` it was converted to `a -> a -> a` because this plug-in is too simple to tell which one you would need. This also means that not every signature is 100% accurate. 
