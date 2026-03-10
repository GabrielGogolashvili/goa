def accum(st):
    result = []
    
    for i in range(len(st)):
        letter = st[i]
        part = letter.upper()
        
        for j in range(i):
            part = part + letter.lower()
        
        result.append(part)
    
    finalstring = "-".join(result)
    return finalstring