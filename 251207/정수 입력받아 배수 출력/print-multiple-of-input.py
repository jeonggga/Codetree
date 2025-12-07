n = int(input())

result = []
for i in range(5):
    result.append((i+1) * n)

# 리스트의 숫자를 문자열로 변환하고 공백으로 연결하여 하나의 문자열 생성
a = " ".join(map(str, result))

# 공백으로 연결된 문자열 출력
print(a)