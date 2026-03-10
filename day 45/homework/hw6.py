def solution(string, ending):
    if ending == "":
        return True
    if len(ending) > len(string):
        return False

    for i in range(1, len(ending)+1):
        if string[-i] != ending[-i]:
            return False
    return True