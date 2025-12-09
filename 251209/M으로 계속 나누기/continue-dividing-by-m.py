N, M = map(int, input().split())

# Please write your code here.


while N != 0:
    print(N)
    N = int(N / M)
    # N을 M으로 나눈 값을 정수로 바꿔서 다시 N에 저장함
