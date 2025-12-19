# 두 개의 정수를 입력받아 각각 a, b에 저장
a, b = map(int, input().split())

# 처음 두 숫자 a, b를 리스트에 넣어 둠
tmp = [a, b]

# 이미 2개의 숫자가 있으므로,
# 총 10개를 만들기 위해 나머지 8번 반복
for t in range(8):
    # 리스트의 마지막 두 숫자의 합을 10으로 나눈 나머지(1의 자리)를 새로운 값으로 추가
    tmp.append((tmp[-1] + tmp[-2]) % 10)

# 숫자 리스트를 문자열 리스트로 변환
tmp_list = list(map(str, tmp))

# 문자열 리스트를 공백으로 연결
tmp_list = " ".join(tmp_list)

# 최종 결과 출력
print(tmp_list)
