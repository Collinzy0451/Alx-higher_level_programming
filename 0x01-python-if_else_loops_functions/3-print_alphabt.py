#!/usr/bin/python3
for k in range(97, 123):
    if chr(k) == 'e' or chr(k) == 'q':
        continue
    print(chr(k).format(k), end='')
