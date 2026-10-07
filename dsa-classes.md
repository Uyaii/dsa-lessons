# DSA COURSE

## BIG O NOTATION

Big O notation helps us understand how long (**Time complexity**) an algorithm will take to run or how much (**Space complexity**) memory it will need as the amount of data it handles grows

### O(n)

It shows that the execution time of the algorithm grows proportionally to the size of the input data (n). Meaning `time-taken = size-of-n`

n + n = 2n which should be `O(2n)` but it's not. You have to drop the constant which is `2` in this situation making it `O(n)` once again

### O(1)

This signifies that the execution time of an algorithm is constant no matter the size of the of the input

### O(n^2)

This indicates that the execution time of an algorithm grows **quadratically** with the size of the input data(n). This just means `normal-execution-time x 2`

If in your code you have `O(n^2) and O(n)`, `O(n)` is negligible because its the non-dominant term


### O(log n)
This signifies that the algorthm's runtime increases **logarithmically** as the size of input (n) increases. That is as the size of the input increases the algorithm's runtime increases **slowly**

log2(8) = 3 i.e 2 to what power gives you 8?
123456789 