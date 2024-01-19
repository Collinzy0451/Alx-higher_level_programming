#!/usr/bin/python3
for ken in range(0, 10):
    for j in range(ken + 1, 10):
        if ken == 8 and j == 9:
            print('{:d}{:d}'.format(ken, j))
        else:
            print('{}{}'.format(ken, j), end=', ')
