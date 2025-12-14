# 사용자 입력을 받고 공백 기준으로 분리하여 리스트로 저장
s = input().split()  
# 예: 입력 "L E B R O S C O D E" → ['L', 'E', 'B', 'R', 'O', 'S', 'C', 'O', 'D', 'E']

# 리스트 s를 역순으로 돌려서 새로운 리스트 a_list에 저장
# reversed(s)는 s를 뒤집은 반복자를 반환
# [a for a in reversed(s)] → 반복자를 리스트로 변환
a_list = [a for a in reversed(s)]  
# 결과: ['E', 'D', 'O', 'C', 'S', 'O', 'R', 'B', 'E', 'L']

# 리스트 a_list의 모든 요소를 하나의 문자열로 합침
# join()은 리스트의 각 요소를 이어붙여 문자열로 만듦
a_list = "".join(a_list)  
# 결과: 'EDOCSORBEL'

# 아래 방법도 동일한 결과 가능
# s.reverse()             # 리스트 s 자체를 뒤집음
# a_list = [a for a in s] # 뒤집힌 s를 리스트로 저장
# a_list = "".join(a_list) # 리스트를 문자열로 합침

# 최종 결과 출력
print(a_list)  # 'EDOCSORBEL'