def to_jaden_case(string):
    results = ""
    
    for word in string.split():
        results += word.capitalize() + " "
        
    return results[:-1]