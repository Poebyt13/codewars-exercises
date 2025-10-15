
'''
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
'''

def xo(s):
    o = 0
    x = 0
    
    for i in s:
        if i == 'x' or i == 'X':
            x+=1
        elif i == 'o' or i == 'O':
            o+=1
    return x == o

print(xo("ooxx"),
      xo("xooxx"),
      xo("ooxXm"),
      xo("zpzpzpp"),
      xo("zzoo"))