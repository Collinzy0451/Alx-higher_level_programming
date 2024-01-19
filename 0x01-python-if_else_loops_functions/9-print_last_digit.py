#!/usr/bin/python3

def print_last_digit(number):

    k = abs(number) % 10
    print(f"{k}", end='')
    return k
