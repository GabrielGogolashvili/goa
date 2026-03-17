def create_phone_number(n):
    n = [str(num) for num in n]
    
    phone_number = "(" + n[0] + n[1] + n[2] + ") " \
                   + n[3] + n[4] + n[5] + "-" \
                   + n[6] + n[7] + n[8] + n[9]
    
    return phone_number

