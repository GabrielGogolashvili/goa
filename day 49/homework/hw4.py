def longest(s1, s2):
    combined = s1 + s2 
    result = ""

    for letter in combined:
        if letter not in result:
            result = result + letter

    sorted_result = ""

    while len(result) > 0:
        smallest = result[0]

        for letter in result:
            if letter < smallest:
                smallest = letter

        sorted_result = sorted_result + smallest

        new_result = ""
        removed = False

        for letter in result:
            if letter == smallest and removed == False:
                removed = True
            else:
                new_result = new_result + letter

        result = new_result

    return sorted_result