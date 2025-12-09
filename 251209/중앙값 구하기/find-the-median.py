a, b, c = map(int, input().split())

# a가  가장 클 경우
if a > b and a > c :
    if b > c :
        print(b)
    else :
        print(c)
# b가 가장 클 경우
if a < b and b > c :
    if a > c :
        print(a)
    else :
        print(c)
# c가 가장 클 경우
if a < c and c > b :
    if a < b :
        print(b)
    else :
        print(a)
