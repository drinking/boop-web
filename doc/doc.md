## Doc 

Basic usage document for Stream functions.

### PickRow
Pick the ith row from multi rows and repeat after n rows. 
params at first line: i/n

```
1/3 #param
1
2
3
4
```
output will be 1 and 4.

### PickColumn
pick the ith column from a row, each column is seperated by space
```
2 #param
a b c 
d e f g
```
Output will be b and e.

### Run

Run js script by eval()
