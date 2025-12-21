n = input()
n_list = list(map(int, input().split()))

for n in reversed(n_list):
    if n % 2 == 0:
        print(n, end=" ")