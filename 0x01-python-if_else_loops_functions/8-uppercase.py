#!/usr/bin/python3

def uppercase(str):
    for upper in str:
        if ord(upper) >= 97 and ord(upper) <= 122:
            upper = chr(ord(upper) - 32)
        print("{:s}".format(upper), end='')

    print('\n', end="")
