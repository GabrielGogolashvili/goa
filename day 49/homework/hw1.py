def disemvowel(string_):
    vowels = "aeiouAEIOU"
    result = ""

    for letter in string_:
        if letter not in vowels:
            result = result + letter

    return result