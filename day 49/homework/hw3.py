def is_isogram(string):
    string = string.lower()
    seen = ""

    for letter in string:
        if letter in seen:
            return False
        seen = seen + letter

    return True 